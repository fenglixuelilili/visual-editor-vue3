import { computed, defineComponent, PropType, ref } from "vue"
import "./index.scss"
import {
  visualEditorModelValue,
  block,
  VisuaEditorComConfig,
  VisualEditorComponent,
  createBlockData,
} from "../../types/editor.d"
import useModel from "../../utils/useModel"
import editorBlock from "./editor-block"
import { useVisualCommand } from "../utils/visual.command"
import { dragStart, dragEnd } from "../utils/event"
export const visualEditor = defineComponent({
  components: {
    editorBlock,
  },
  props: {
    modelValue: {
      type: Object as PropType<visualEditorModelValue>,
    },
    config: {
      type: Object as PropType<VisuaEditorComConfig>,
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
    // 清除选中状态
    function clearFocus() {
      ;(props.modelValue?.blocks || []).map((block: block) => {
        block.focus = false
        return block
      })
    }
    // 更新block数据
    function updateBlocks(blocks: block[]) {
      model.value = {
        ...model.value,
        blocks: JSON.parse(JSON.stringify(blocks)),
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
          // 拖拽到目标节点上了
          props.modelValue?.blocks.push(
            createBlockData({
              top: e.offsetY,
              left: e.offsetX,
              componentKey: current.component?.name as string,
            })
          )
        },
      }
      return menuDrag
    })()
    // 点击状态相关的状态
    let mehtods = {
      block: {
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
          blockDrag.mousedown(e)
        },
      },
      container: {
        onMousedown(e: Event) {
          e.preventDefault()
          e.stopPropagation()
          // 点击空白区域  将所有的块取消选择
          clearFocus()
        },
      },
    }
    // 计算block选中的与没选中的信息
    const focusBlock = computed(() => {
      props.modelValue?.blocks
      return {
        blurBlock: props.modelValue?.blocks.filter((block) => !block.focus),
        focusBlock: props.modelValue?.blocks.filter((block) => block.focus),
      }
    })
    // 拖拽画布元素相关事件
    const blockDrag = (function () {
      // 当鼠标按下的时候存储的信息
      const info = {
        startX: 0,
        startY: 0,
        // block元素的初始位置 - 所有的计算都是基于当前值计算的
        startPositon: [] as { left: number; top: number }[],
        draging: false, // 是否在拖拽
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
        // 鼠标移动
        document.addEventListener("mousemove", mousemove)
        document.addEventListener("mouseup", mouseup)
      }
      function mousemove(e: MouseEvent) {
        if (!info.draging) {
          info.draging = true
          dragStart.emit()
        }
        // 鼠标移动逻辑
        const x = e.clientX - info.startX
        const y = e.clientY - info.startY
        // 只移动聚焦的元素
        focusBlock.value.focusBlock?.forEach((block, index) => {
          block.left = info.startPositon[index].left + x
          block.top = info.startPositon[index].top + y
        })
      }
      function mouseup(e: MouseEvent) {
        document.removeEventListener("mousemove", mousemove)
        document.removeEventListener("mouseup", mouseup)
        dragEnd.emit()
      }
      return { mousedown }
    })()
    const commder = useVisualCommand({
      fouceData: focusBlock as any,
      updateBlocks: updateBlocks,
      dataModel: model as any,
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
          {props.config?.componentLists
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
              onMousedown={(e: Event) => mehtods.container.onMousedown(e)}
            >
              {model.value.blocks.map((block: block) => {
                return (
                  <editorBlock
                    block={block}
                    config={props.config}
                    onMousedown={(e: MouseEvent) =>
                      mehtods.block.onMousedown(e, block)
                    }
                    onDelBlock={() => delBlock(block)}
                  ></editorBlock>
                )
              })}
            </div>
          </div>
        </div>
        <div class="visual-editor-right-seting">右侧操作</div>
      </div>
    )
  },
})
