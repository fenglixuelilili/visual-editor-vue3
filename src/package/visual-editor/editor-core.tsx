import { computed, defineComponent, PropType, reactive, ref, watch } from "vue"
import "../scss/index.scss"
import {
  visualEditorModelValue,
  block,
  VisualEditorComponent,
  createBlockData,
  // markline,
  config,
  builtIn,
} from "../../types/editor.d"
import useModel from "../../utils/useModel"
import editorBlock from "./editor-block"
import { useVisualCommand } from "../utils/visual.command"
import { dragStart, dragEnd } from "../utils/event"
import { controlView } from "./control-view" // 控制台渲染器
import editorInstance from "./visuaEditorComponents" // 编辑器组件注册机
import renderIconComponents from "./help-coms/render-icon-components"
import { deepClone, getBtns } from "../utils/index"
import { registorBuiltIn } from "../../built-in-registor/index"
// import VueGridLayout from "vue-grid-layout"
import { Message } from "@arco-design/web-vue"
// 编辑器
export const visualEditor = defineComponent({
  components: {
    editorBlock,
    // GridLayout: VueGridLayout.GridLayout,
    renderIconComponents,
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
        shortcutKeys: true, // 是否开启快捷键操作
      }),
    },
    fileUploadHandler: {
      // 文件上传的函数
      type: Function,
      default: () => () => {},
    },
    builtInComs: {
      type: Array as PropType<builtIn[]>,
      default: () => [
        "baseImg",
        "baseSubmit",
        "baseText",
        "baseTitle",
        "checkPhone",
        "personName",
        "personOther",
        "personPhone",
        "personProvince",
        "personSchool",
        "personUpload",
        "personYear",
        "commenMultiple",
        "commenRadio",
      ],
    },
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    if (!props.modelValue?.container) {
      throw new Error("请检查传入的container！")
    }
    if (props?.builtInComs?.length) {
      registorBuiltIn(editorInstance, props.builtInComs)
    }
    // markLine = false,
    const { shiftMove = false, shortcutKeys = false } = props.config
    let model = useModel(
      () => props.modelValue,
      (val) => emit("update:modelValue", val)
    )
    let state = reactive({
      // 当前选中的元素
      selectedBlock: null as null | block,
    })
    let containerStyle = computed(() => ({
      width: model.value.container.width + "px",
      minHeight: model.value.container.height + "px",
      backgroundColor: model.value.container.backgroundColor,
      transform: `scale(${model.value.container.scale / 100})`,
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
      controlMethods.cacheView = null
      model.value = {
        ...model.value,
        blocks: deepClone(blocks),
      }
    }
    // 更新一个block
    function updateBlock(block: any) {
      model.value.blocks.forEach((oldblock: any) => {
        if (block.id == oldblock.id) {
          for (let key in oldblock) {
            controlMethods.cacheView = null
            oldblock[key] = deepClone(block[key])
          }
        }
      })
    }
    function updateDragBlock(target?: HTMLElement) {
      let editorBloacks: any = document.querySelectorAll(".editor-bloack")
      if (editorBloacks) {
        editorBloacks = Array.from(editorBloacks)
      }
      editorBloacks.forEach((item: HTMLElement) => {
        item.classList.remove("editor-bloack-drag-active")
      })
      if (target) {
        target.classList.add("editor-bloack-drag-active")
      }
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
          // visual-editor-area-content
          // console.log(e.target.classList)
          if (
            Array.from((e.target as HTMLElement).classList).includes(
              "editor-bloack"
            )
          ) {
            // 说明是拖拽到块上了
            console.log("拖拽到块上了")
            updateDragBlock(e.target as HTMLElement)
          } else {
            // console.log("拖拽到画布上了")
            updateDragBlock()
          }
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
          updateDragBlock()
        },
        dragover(e: DragEvent) {
          // 固定  阻止默认事件
          e.preventDefault()
        },
        drop(e: DragEvent) {
          // Message.warning("自由模式暂未开启，请选择点选方式！")
          let component = current.component as VisualEditorComponent
          let dragMode = component?.dragMode as string
          let block = createBlockData({
            dragMode: dragMode ? dragMode : "",
            widthAdaption100: component.widthAdaption100
              ? component.widthAdaption100
              : false,
            top: 0,
            left: 0,
            componentKey: component.name as string,
            props: component.props ?? {},
            x: 1,
            y: 1,
            w: 1,
            h: 1,
          })

          let currenthtml = (e.target as HTMLElement).dataset
          if ("index" in currenthtml) {
            // 说明是插入
            commder.add(block, currenthtml.index)
          } else {
            // commder.add(block)
          }
          return
          // 拖拽到目标节点上了 -- 新添加的
          // let dragMode = current.component?.dragMode as string
          // let block = createBlockData({
          //   dragMode: dragMode ? dragMode : "free",
          //   widthAdaption100: current.component?.widthAdaption100
          //     ? current.component?.widthAdaption100
          //     : false,
          //   top: e.offsetY,
          //   left: e.offsetX,
          //   componentKey: current.component?.name as string,
          //   props: current.component?.props ?? {},
          //   x: 1,
          //   y: 1,
          //   w: 1,
          //   h: 1,
          // })
          // props.modelValue?.blocks.push(block)
        },
        click(e: Event, component: VisualEditorComponent) {
          console.log(component)
          // 新添加一个元素块
          let dragMode = component?.dragMode as string
          let block = createBlockData({
            dragMode: dragMode ? dragMode : "",
            widthAdaption100: component.widthAdaption100
              ? component.widthAdaption100
              : false,
            top: 0,
            left: 0,
            componentKey: component.name as string,
            props: component.props ?? {},
            x: 1,
            y: 1,
            w: 1,
            h: 1,
          })
          commder.add(block)
        },
      }
      return menuDrag
    })()

    // 计算block选中的与没选中的信息
    const currentBlockInfo = computed(() => {
      // props.modelValue?.blocks
      return {
        blurBlock: props.modelValue?.blocks.filter((block) => !block.focus), // 当前失去焦点的模块
        focusBlock: props.modelValue?.blocks.filter((block) => block.focus), // 当前获得焦点的模块
        cBlock: props.modelValue?.blocks.find((block) => block.focus), // 当前获得焦点的模块
      }
    })
    // 画布区域中的内容点击相关事件
    let canvas = {
      block: {
        // 点击元素的时候处理的事情
        onMousedown(e: MouseEvent, block: block) {
          e.stopPropagation()
          e.preventDefault()
          // // 当点击某一个快的时候
          // if (e.ctrlKey || e.shiftKey) {
          //   // 按住shift 或者 ctrl
          //   block.focus = !block.focus
          // } else {
          //   // 需要先把其他的给取消选择
          //   if (!block.focus) {
          //     // 没选中 就选中
          //     clearFocus()
          //     block.focus = !block.focus
          //   }
          // }
          clearFocus()
          block.focus = !block.focus
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
      // let mark = reactive({
      //   x: null as null | number,
      //   y: null as null | number,
      // })
      // 当鼠标按下的时候存储的信息
      const info = {
        startX: 0,
        startY: 0,
        // block元素的初始位置 - 所有的计算都是基于当前值计算的
        startPositon: [] as { left: number; top: number }[],
        draging: false, // 是否在拖拽
        // marks: { x: [], y: [] } as markline,
        startLeft: 0,
        startTop: 0,
      }
      function mousedown(e: MouseEvent) {
        info.startX = e.clientX
        info.startY = e.clientY
        info.startPositon = (currentBlockInfo.value.focusBlock || [])?.map(
          (block) => {
            return { left: block.left, top: block.top }
          }
        )
        info.draging = false
        // if (markLine) {
        //   info.marks = (function () {
        //     let lines = {
        //       x: [],
        //       y: [],
        //     } as markline

        //     const { width, height, left, top } = state.selectedBlock!
        //     let _blurBlock = focusBlock.value.blurBlock
        //     /**
        //      * @收集未聚焦的元素的位置信息用于后面计算线的位置
        //      */
        //     _blurBlock?.forEach((block) => {
        //       const { width: w, height: h, top: t, left: l } = block
        //       /**
        //        *@top 是应该对比的位置
        //        *@showTop 是线条的位置
        //        */
        //       //第一种情况 是顶部对齐顶部
        //       lines.y.push({
        //         top: t,
        //         showTop: t,
        //       })
        //       // 第二种情况 是顶部对齐底部
        //       lines.y.push({
        //         top: t + h,
        //         showTop: t + h,
        //       })
        //       // 第三种情况 中间对中间
        //       lines.y.push({
        //         top: t + h / 2 - height / 2,
        //         showTop: t + h / 2,
        //       })
        //       // 第四种情况  底部对齐顶部
        //       lines.y.push({
        //         top: t - height,
        //         showTop: t,
        //       })
        //       // 第五种情况  底部对底部
        //       lines.y.push({
        //         top: t - h + height,
        //         showTop: t - h + height,
        //       })
        //       // x轴同理

        //       lines.x.push({
        //         left: l,
        //         showLeft: l,
        //       })
        //       lines.x.push({
        //         left: l,
        //         showLeft: l + w,
        //       })
        //       lines.x.push({
        //         left: l + w / 2 - width / 2,
        //         showLeft: l + w / 2,
        //       })
        //       lines.x.push({
        //         left: l - width,
        //         showLeft: l,
        //       })
        //       lines.x.push({
        //         left: l - w + width,
        //         showLeft: l - w + width,
        //       })
        //     })
        //     // 收集完成之后我们去
        //     return lines
        //   })()
        // }
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
        // if (markLine) {
        //   let currentLeft: number = info.startLeft + moveX - startX
        //   let currentTop: number = info.startTop + moveY - startY
        //   // 进行比对
        //   let flag_y = false
        //   let flag_x = false
        //   for (let i = 0; i < info.marks.y.length; i++) {
        //     /**
        //      * @top 是目标对齐的top值
        //      * @showTop 是标准的位置
        //      */
        //     const { top, showTop } = info.marks.y[i]
        //     if (Math.abs(top - currentTop) < 5) {
        //       // 满足一种情况后就立即跳出循环
        //       flag_y = true
        //       moveY = top + startY - info.startTop // 吸过来
        //       mark.y = showTop
        //       break
        //     }
        //   }
        //   for (let i = 0; i < info.marks.x.length; i++) {
        //     /**
        //      * @top 是目标对齐的top值
        //      * @showTop 是标准的位置
        //      */
        //     const { left, showLeft } = info.marks.x[i]
        //     if (Math.abs(left - currentLeft) < 5) {
        //       // 满足一种情况后就立即跳出循环
        //       moveX = left + startX - info.startLeft // 吸过来
        //       mark.x = showLeft
        //       flag_x = true
        //       break
        //     }
        //   }
        //   if (!flag_x) {
        //     mark.x = null
        //   }
        //   if (!flag_y) {
        //     mark.y = null
        //   }
        // } else {
        //   console.warn("元素移动标线功能已关闭！")
        // }
        // 只移动聚焦的元素
        currentBlockInfo.value.focusBlock?.forEach((block, index) => {
          block.left = info.startPositon[index].left + (moveX - startX)
          block.top = info.startPositon[index].top + (moveY - startY)
        })
      }
      function mouseup(e: MouseEvent) {
        document.removeEventListener("mousemove", mousemove)
        document.removeEventListener("mouseup", mouseup)
        // mark.x = null
        // mark.y = null
        dragEnd.emit()
      }
      // mark
      return { mousedown }
    })()
    const commder = useVisualCommand({
      currentBlockInfo: currentBlockInfo as any,
      updateBlocks: updateBlocks,
      dataModel: model as any,
      shortcutKeys,
    })
    // 所有的顶部按钮
    const buttons = getBtns(commder, currentBlockInfo)
    function delBlock(block: block) {
      commder.delete(block)
    }
    // function getNewBlock() {
    //   return currentBlockInfo.value.cBlock as block
    // }
    // 控制器中的信息
    const controlMethods = {
      // 操作的原数据
      originData: null as null | block,
      // 视图缓存
      cacheView: null as null | JSX.Element,
      // 控制层渲染函数
      controlRender() {
        // if (this.originData?.id === state.selectedBlock?.id && this.cacheView) {
        //   return this.cacheView
        // }
        // let componentKey = state.selectedBlock?.componentKey
        // let componentMap = editorInstance?.componentMap
        // if (componentKey && componentMap && state.selectedBlock) {
        //   this.originData = deepClone(state.selectedBlock)
        //   // 获取组件的渲染视图
        //   this.cacheView = componentMap[componentKey].controlView(
        //     state.selectedBlock,
        //     updateBlock,
        //     getNewBlock
        //   )
        //   return this.cacheView
        // } else {
        //   return null
        // }
        if (
          this.originData?.id === currentBlockInfo.value.cBlock?.id &&
          this.cacheView
        ) {
          return this.cacheView
        }
        let componentKey = currentBlockInfo.value.cBlock?.componentKey
        let componentMap = editorInstance?.componentMap
        if (componentKey && componentMap && currentBlockInfo.value.cBlock) {
          this.originData = deepClone(currentBlockInfo.value.cBlock)
          // 获取组件的渲染视图
          this.cacheView = componentMap[componentKey].controlView(
            currentBlockInfo.value.cBlock,
            updateBlock
          )
          return this.cacheView
        } else {
          return null
        }
      },
      sure() {
        // this.cancleEffect()
        state.selectedBlock = null
      },
      cancle() {
        updateBlock(this.originData)
        // this.cancleEffect()
        state.selectedBlock = null
      },
      cancleEffect() {
        this.originData = null
        this.cacheView = null
        console.log("取消副作用")
      },
    }
    // 监听选中取消， 说明需要取消副作用
    watch(
      () => state.selectedBlock,
      (val: any) => {
        if (!val) {
          // 说明是清空
          controlMethods.cancleEffect()
        }
      }
    )
    // 标线渲染函数
    // function renderMakrLine() {
    //   if (!markLine) {
    //     return null
    //   } else {
    //     return (
    //       <>
    //         {/* y标线 */}
    //         {canvasDrag.mark.y != null && (
    //           <div
    //             class="visual-editor-mark-y"
    //             style={{ top: `${canvasDrag.mark.y}px` }}
    //           ></div>
    //         )}
    //         {/* x标线 */}
    //         {canvasDrag.mark.x != null && (
    //           <div
    //             class="visual-editor-mark-x"
    //             style={{ left: `${canvasDrag.mark.x}px` }}
    //           ></div>
    //         )}
    //       </>
    //     )
    //   }
    // }
    return () => (
      <div class="visual-editor-container">
        <div class="visual-editor-header">
          <button>发布</button>
          <button>退出</button>
        </div>
        <div class="visual-editor-core visual-editor">
          <div class="visual-editor-leftComponentsMenu">
            <div class="visual-tab-type">
              <div class="visual-tab-type-com">
                <span>组件</span>
              </div>
              <div class="visual-tab-type-com">
                <span>模版</span>
              </div>
            </div>
            <div class="visual-com-group">
              {/* 左侧所有在服役的组件 */}
              <renderIconComponents
                componentLists={editorInstance?.componentLists}
                menuDragInfo={menuDragInfo}
              ></renderIconComponents>
            </div>
          </div>
          <div class="visual-editor-area-body">
            <div
              class="visual-editor-area-container"
              onMousedown={() => clearFocus()}
            >
              {/* 渲染画布信息 */}
              <div
                class="visual-editor-area-content"
                style={containerStyle.value}
                ref={containerInstance}
                onMousedown={(e: Event) => canvas.container.onMousedown(e)}
              >
                {/* <grid-layout
                  layout={model.value.blocks}
                  col-num={12}
                  row-height={30}
                  is-draggable={true}
                  is-resizable={true}
                  is-mirrored={false}
                  vertical-compact={true}
                  margin={[10, 10]}
                  use-css-transforms={true}
                  onUpdate:layout={(val: any) => {
                    console.log(val, "这是？？")
                  }}
                > */}
                {/* 渲染各个注册的核心组件 */}
                {model.value.blocks.map((block: block, index: number) => {
                  return (
                    <div>
                      <editorBlock
                        index={index}
                        block={block}
                        container={props.modelValue?.container}
                        onMousedown={(e: MouseEvent) =>
                          canvas.block.onMousedown(e, block)
                        }
                        onDelBlock={() => delBlock(block)}
                        onUpBlock={commder.up}
                        onDownBlock={commder.down}
                        key={block.id}
                      ></editorBlock>
                    </div>
                  )
                })}
                {/* 渲染标线信息 */}
                {/* {renderMakrLine()} */}
                {/* </grid-layout> */}
              </div>
            </div>
          </div>
          {/* 操作按钮 */}
          <div class="visual-editor-topMenu">
            <div class="buttons">
              {buttons.map((btn) => (
                <div class="button">
                  <button onClick={btn.handler}>{btn.label}</button>
                </div>
              ))}
            </div>
          </div>
          <div class="visual-editor-right-seting">
            {/* 右侧操作 */}
            {controlView(
              controlMethods.controlRender.bind(controlMethods),
              currentBlockInfo,
              props.modelValue as any,
              updateBlock
              // controlMethods.sure.bind(controlMethods),
              // controlMethods.cancle.bind(controlMethods)
            )}
          </div>
        </div>
      </div>
    )
  },
})
