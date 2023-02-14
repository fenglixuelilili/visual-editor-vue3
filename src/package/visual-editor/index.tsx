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
    const containerInstance = ref<HTMLElement | null>(null)
    // 拖拽相关的事件
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
          // console.log(e)
          if (e.ctrlKey || e.shiftKey) {
            // 按住shift 或者 ctrl
            block.focus = !block.focus
          } else {
            // 需要先把其他的给取消选择
            ;(props.modelValue?.blocks || []).map((block: block) => {
              block.focus = false
              return block
            })
            block.focus = !block.focus
          }
        },
      },
      container: {
        onMousedown(e: Event) {
          e.preventDefault()
          e.stopPropagation()
          // 点击空白区域  将所有的块取消选择
          ;(props.modelValue?.blocks || []).map((block: block) => {
            block.focus = false
            return block
          })
        },
      },
    }
    return () => (
      <div class="visual-editor">
        <div class="visual-editor-topMenu">顶部菜单</div>
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
