import { computed, defineComponent, PropType, reactive, ref } from "vue"
import "../scss/index.scss"
import "../scss/index.priview.scss"
import {
  visualEditorModelValue,
  block,
  VisualEditorComponent,
  createBlockData,
  markline,
  config,
} from "../../types/editor.d"
import useModel from "../../utils/useModel"
import editorBlock from "./editor-block"
import { useVisualCommand } from "../utils/visual.command"
import { dragStart, dragEnd } from "../utils/event"
import { controlView } from "./control-view" // 控制台渲染器
import editorInstance from "./visuaEditorComponents" // 编辑器组件注册机
// 编辑器
export const visualEditor = defineComponent({
  components: {
    editorBlock,
  },
  props: {
    modelValue: {
      type: Object as PropType<visualEditorModelValue>,
    },
    config: {
      type: Object as PropType<config>,
      default: () => ({
        markLine: false, // 是否开启标线对齐功能
        shiftMove: false, // 是否开启按住shift键移动
        shortcutKeys: false, // 是否开启快捷键操作
      }),
    },
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const {
      markLine = false,
      shiftMove = false,
      shortcutKeys = false,
    } = props.config
    let model = useModel(
      () => props.modelValue,
      (val) => emit("update:modelValue", val)
    )
    let state = reactive({
      selectedBlock: null as null | block,
    })
    let containerStyle = computed(() => ({
      width: model.value.container.width + "px",
      height: model.value.container.height + "px",
    }))
    // 清除选中状态
    function clearFocus() {
      ;(props.modelValue?.blocks || []).map((block: block) => {
        block.focus = false
        return block
      })
    }
    // 更新所有block数据
    function updateBlocks(blocks: block[]) {
      model.value = {
        ...model.value,
        blocks: JSON.parse(JSON.stringify(blocks)),
      }
    }
    // 更新一个block
    function updateBlock(block: any) {
      model.value.blocks.forEach((oldblock: any) => {
        if (block.id == oldblock.id) {
          for (let key in oldblock) {
            oldblock[key] = block[key]
          }
        }
      })
    }
    const containerInstance = ref<HTMLElement | null>(null)
    // 组件拖拽添加到画布上的相关的事件
    const menuDragInfo = (function () {
      let current = {
        component: null as null | VisualEditorComponent,
      }
      let menuDrag = {
        dragstart(e: DragEvent, component: VisualEditorComponent) {
          // 左侧的菜单鼠标按下的时候  让画布监听拖拽事件
          containerInstance.value?.addEventListener(
            "dragenter",
            menuDrag.dragenter
          )
          containerInstance.value?.addEventListener(
            "dragover",
            menuDrag.dragover
          )
          containerInstance.value?.addEventListener(
            "dragleave",
            menuDrag.dragleave
          )
          containerInstance.value?.addEventListener("drop", menuDrag.drop)
          current.component = component
          dragStart.emit()
        },
        dragenter(e: DragEvent) {
          // 拖拽进入渲染器画布事件
          e.dataTransfer!.dropEffect = "move"
        },
        dragleave(e: DragEvent) {
          // 拖拽离开渲染器画布事件
          e.dataTransfer!.dropEffect = "none"
        },
        dragend(e: DragEvent) {
          // 拖住结束
          containerInstance.value?.removeEventListener(
            "dragenter",
            menuDrag.dragenter
          )
          containerInstance.value?.removeEventListener(
            "dragover",
            menuDrag.dragover
          )
          containerInstance.value?.removeEventListener(
            "dragleave",
            menuDrag.dragleave
          )
          containerInstance.value?.removeEventListener("drop", menuDrag.drop)
          current.component = null
          dragEnd.emit()
        },
        dragover(e: DragEvent) {
          // 固定  阻止默认事件
          e.preventDefault()
        },
        drop(e: DragEvent) {
          // 拖拽到目标节点上了 -- 新添加的
          props.modelValue?.blocks.push(
            createBlockData({
              top: e.offsetY,
              left: e.offsetX,
              componentKey: current.component?.name as string,
              props: current.component?.props ?? {},
            })
          )
        },
      }
      return menuDrag
    })()

    // 计算block选中的与没选中的信息
    const focusBlock = computed(() => {
      props.modelValue?.blocks
      return {
        blurBlock: props.modelValue?.blocks.filter((block) => !block.focus),
        focusBlock: props.modelValue?.blocks.filter((block) => block.focus),
      }
    })
    // 画布区域中的内容点击相关事件
    let canvas = {
      block: {
        // 点击元素的时候处理的事情
        onMousedown(e: MouseEvent, block: block) {
          e.stopPropagation()
          e.preventDefault()
          // 当点击某一个快的时候
          if (e.ctrlKey || e.shiftKey) {
            // 按住shift 或者 ctrl
            block.focus = !block.focus
          } else {
            // 需要先把其他的给取消选择
            if (!block.focus) {
              // 没选中 就选中
              clearFocus()
              block.focus = !block.focus
            }
          }
          state.selectedBlock = block
          canvasDrag.mousedown(e)
        },
      },
      container: {
        // 点击画布区域的处理的事情
        onMousedown(e: Event) {
          e.preventDefault()
          e.stopPropagation()
          // 点击空白区域  将所有的块取消选择
          clearFocus()
          state.selectedBlock = null // 选中内容清空
        },
      },
    }
    // 拖拽画布元素相关事件
    const canvasDrag = (function () {
      // 标线位置
      let mark = reactive({
        x: null as null | number,
        y: null as null | number,
      })
      // 当鼠标按下的时候存储的信息
      const info = {
        startX: 0,
        startY: 0,
        // block元素的初始位置 - 所有的计算都是基于当前值计算的
        startPositon: [] as { left: number; top: number }[],
        draging: false, // 是否在拖拽
        marks: { x: [], y: [] } as markline,
        startLeft: 0,
        startTop: 0,
      }
      function mousedown(e: MouseEvent) {
        info.startX = e.clientX
        info.startY = e.clientY
        info.startPositon = (focusBlock.value.focusBlock || [])?.map(
          (block) => {
            return { left: block.left, top: block.top }
          }
        )
        info.draging = false
        if (markLine) {
          info.marks = (function () {
            let lines = {
              x: [],
              y: [],
            } as markline

            const { width, height, left, top } = state.selectedBlock!
            let _blurBlock = focusBlock.value.blurBlock
            /**
             * @收集未聚焦的元素的位置信息用于后面计算线的位置
             */
            _blurBlock?.forEach((block) => {
              const { width: w, height: h, top: t, left: l } = block
              /**
               *@top 是应该对比的位置
               *@showTop 是线条的位置
               */
              //第一种情况 是顶部对齐顶部
              lines.y.push({
                top: t,
                showTop: t,
              })
              // 第二种情况 是顶部对齐底部
              lines.y.push({
                top: t + h,
                showTop: t + h,
              })
              // 第三种情况 中间对中间
              lines.y.push({
                top: t + h / 2 - height / 2,
                showTop: t + h / 2,
              })
              // 第四种情况  底部对齐顶部
              lines.y.push({
                top: t - height,
                showTop: t,
              })
              // 第五种情况  底部对底部
              lines.y.push({
                top: t - h + height,
                showTop: t - h + height,
              })
              // x轴同理

              lines.x.push({
                left: l,
                showLeft: l,
              })
              lines.x.push({
                left: l,
                showLeft: l + w,
              })
              lines.x.push({
                left: l + w / 2 - width / 2,
                showLeft: l + w / 2,
              })
              lines.x.push({
                left: l - width,
                showLeft: l,
              })
              lines.x.push({
                left: l - w + width,
                showLeft: l - w + width,
              })
            })
            // 收集完成之后我们去
            return lines
          })()
        }

        info.startLeft = state.selectedBlock?.left as number
        info.startTop = state.selectedBlock?.top as number
        document.addEventListener("mousemove", mousemove)
        document.addEventListener("mouseup", mouseup)
      }
      function mousemove(e: MouseEvent) {
        if (!info.draging) {
          info.draging = true
          dragStart.emit()
        }
        // 鼠标移动逻辑
        let { clientX: moveX, clientY: moveY } = e
        let { startX, startY } = info
        // 按住shift键的时候处理的逻辑
        if (e.shiftKey && shiftMove) {
          if (Math.abs(moveX - startX) > Math.abs(moveY - startY)) {
            moveY = startY
          } else {
            moveX = startX
          }
        } else if (e.shiftKey && !shiftMove) {
          console.warn(
            "您没有开启按住shift键移动元素功能！请将配置项中的shiftMove置为true"
          )
        }
        if (markLine) {
          let currentLeft: number = info.startLeft + moveX - startX
          let currentTop: number = info.startTop + moveY - startY
          // 进行比对
          let flag_y = false
          let flag_x = false
          for (let i = 0; i < info.marks.y.length; i++) {
            /**
             * @top 是目标对齐的top值
             * @showTop 是标准的位置
             */
            const { top, showTop } = info.marks.y[i]
            if (Math.abs(top - currentTop) < 5) {
              // 满足一种情况后就立即跳出循环
              flag_y = true
              moveY = top + startY - info.startTop // 吸过来
              mark.y = showTop
              break
            }
          }
          for (let i = 0; i < info.marks.x.length; i++) {
            /**
             * @top 是目标对齐的top值
             * @showTop 是标准的位置
             */
            const { left, showLeft } = info.marks.x[i]
            if (Math.abs(left - currentLeft) < 5) {
              // 满足一种情况后就立即跳出循环
              moveX = left + startX - info.startLeft // 吸过来
              mark.x = showLeft
              flag_x = true
              break
            }
          }
          if (!flag_x) {
            mark.x = null
          }
          if (!flag_y) {
            mark.y = null
          }
        } else {
          console.warn("元素移动标线功能已关闭！")
        }
        // 只移动聚焦的元素
        focusBlock.value.focusBlock?.forEach((block, index) => {
          block.left = info.startPositon[index].left + (moveX - startX)
          block.top = info.startPositon[index].top + (moveY - startY)
        })
      }
      function mouseup(e: MouseEvent) {
        document.removeEventListener("mousemove", mousemove)
        document.removeEventListener("mouseup", mouseup)
        mark.x = null
        mark.y = null
        dragEnd.emit()
      }
      return { mousedown, mark }
    })()
    const commder = useVisualCommand({
      fouceData: focusBlock as any,
      updateBlocks: updateBlocks,
      dataModel: model as any,
      shortcutKeys,
    })
    // 所有的顶部按钮
    const buttons = [
      {
        label: "删除",
        icon: "",
        handler: () => {
          if (!focusBlock.value.focusBlock?.length) {
            return
          }
          commder.delete()
        },
        tip: "delete",
      },
      {
        label: "清空",
        icon: "",
        handler: () => {
          if (!focusBlock.value.focusBlock?.length) {
            return
          }
          commder.clear()
        },
        tip: "ctrl + alt + d",
      },
      {
        label: "撤销",
        icon: "",
        handler: commder.undo,
        tip: "ctrl + z",
      },
      {
        label: "重做",
        icon: "",
        handler: commder.redo,
        tip: "ctrl + y",
      },
    ]
    function delBlock(block: block) {
      commder.delete(block)
    }
    return () => (
      <div class="visual-editor">
        <div class="visual-editor-topMenu">
          <div class="buttons">
            {buttons.map((btn) => (
              <div class="button">
                <button onClick={btn.handler}>{btn.label}</button>
              </div>
            ))}
          </div>
        </div>
        <div class="visual-editor-leftComponentsMenu">
          {/* 左侧所有在服役的组件 */}
          {editorInstance?.componentLists
            .filter((component) => {
              return component.disabled == undefined
                ? true
                : !component.disabled
            })
            .map((component) => {
              return (
                <div
                  class="editer-menu-content-block"
                  draggable
                  onDragstart={(e) => menuDragInfo.dragstart(e, component)}
                  onDragend={menuDragInfo.dragend.bind(menuDragInfo)}
                >
                  <span class="editor-priview-label">{component.label}</span>
                  {component.priview()}
                </div>
              )
            })}
        </div>
        <div class="visual-editor-area-body">
          <div class="visual-editor-area-container">
            {/* 渲染画布信息 */}
            <div
              class="visual-editor-area-content"
              style={containerStyle.value}
              ref={containerInstance}
              onMousedown={(e: Event) => canvas.container.onMousedown(e)}
            >
              {model.value.blocks.map((block: block) => {
                return (
                  <editorBlock
                    block={block}
                    onMousedown={(e: MouseEvent) =>
                      canvas.block.onMousedown(e, block)
                    }
                    onDelBlock={() => delBlock(block)}
                  ></editorBlock>
                )
              })}
              {/* 渲染标线信息 */}
              {(function () {
                if (!markLine) {
                  return null
                } else {
                  return (
                    <>
                      {/* y标线 */}
                      {canvasDrag.mark.y != null && (
                        <div
                          class="visual-editor-mark-y"
                          style={{ top: `${canvasDrag.mark.y}px` }}
                        ></div>
                      )}
                      {/* x标线 */}
                      {canvasDrag.mark.x != null && (
                        <div
                          class="visual-editor-mark-x"
                          style={{ left: `${canvasDrag.mark.x}px` }}
                        ></div>
                      )}
                    </>
                  )
                }
              })()}
            </div>
          </div>
        </div>
        <div class="visual-editor-right-seting">
          {/* 右侧操作 */}
          {controlView(() =>
            state.selectedBlock?.componentKey && editorInstance
              ? editorInstance.componentMap[
                  state.selectedBlock.componentKey
                ].controlView(state.selectedBlock, updateBlock)
              : null
          )}
        </div>
      </div>
    )
  },
})
// 预览
export const priviewVisualEditor = defineComponent({
  components: {
    editorBlock,
  },
  props: {
    modelValue: {
      type: Object as PropType<visualEditorModelValue>,
    },
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    let model = useModel(
      () => props.modelValue,
      (val) => emit("update:modelValue", val)
    )
    let containerStyle = computed(() => ({
      width: model.value.container.width + "px",
      height: model.value.container.height + "px",
    }))
    // 更新一个block
    function updateBlock(block: any) {
      model.value.blocks.forEach((oldblock: any) => {
        if (block.id == oldblock.id) {
          for (let key in oldblock) {
            oldblock[key] = block[key]
          }
        }
      })
    }
    const containerInstance = ref<HTMLElement | null>(null)
    return () => (
      <div class="priview-visual-editor">
        <div class="priview-visual-editor-area-body">
          <div class="visual-editor-area-container">
            {/* 渲染画布信息 */}
            <div
              class="visual-editor-area-content"
              style={containerStyle.value}
              ref={containerInstance}
            >
              {model.value.blocks.map((block: block) => {
                return <editorBlock block={block}></editorBlock>
              })}
            </div>
          </div>
        </div>
      </div>
    )
  },
})
// 单个注册
visualEditor.registry = function (com: VisualEditorComponent) {
  // 注册前需要验重
  let allComLists = logConfig()
  let nams = allComLists.map((item) => item.name)
  if (nams.includes("com.name")) {
    console.warn("组件命名重复，如果不修改将覆盖内置组件！")
  }
  editorInstance.registry(com.name, com)
}
// 批量注册
visualEditor.batchRegistry = function (
  arrs: VisualEditorComponent[] & Record<string, VisualEditorComponent>
) {
  // 验重
  let allComLists = logConfig()
  let nams = allComLists.map((item) => item.name)
  if (Object.prototype.toString.call(arrs) == "[object Array]") {
    arrs.forEach((com) => {
      if (nams.includes(com.name)) {
        console.warn("组件命名重复，如果不修改将覆盖内置组件！")
      }
      editorInstance.registry(com.name, com)
    })
  } else if (Object.prototype.toString.call(arrs) == "[object Object]") {
    for (let key in arrs) {
      if (nams.includes(key)) {
        console.warn("组件命名重复，如果不修改将覆盖内置组件！")
      }
      editorInstance.registry(key, arrs[key])
    }
  } else {
    throw new Error("出入类型错误！")
  }
}
// 单个注册
export const registry = function (com: VisualEditorComponent) {
  visualEditor.registry(com)
}
export const _registry = editorInstance.registry
// 批量注册
export const batchRegistry = function (
  arrs: VisualEditorComponent[] & Record<string, VisualEditorComponent>
) {
  visualEditor.batchRegistry(arrs)
}
// 查看所有注册组件
export const logConfig = function () {
  return editorInstance?.componentLists
}
