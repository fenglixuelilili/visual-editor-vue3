import { computed, defineComponent, onMounted, PropType, ref } from "vue"
import { block, container } from "../../types/editor.d"
import editorInstance from "./visuaEditorComponents" // 编辑器组件注册机
import "../scss/editor.block.scss"
// import VueGridLayout from "vue-grid-layout"
// 每个组件上的外壳 + block组件
export default defineComponent({
  props: {
    // 外壳 定位 放大缩小用的
    block: {
      type: Object as PropType<block>,
      default: () => ({
        left: 0,
        top: 0,
      }),
    },
    priview: {
      type: Boolean,
      default: false,
    },
    container: {
      type: Object as PropType<container>,
      default: () => ({
        width: 0,
        height: 0,
        wrapper: 0,
      }),
    },
  },
  // components: {
  //   GridItem: VueGridLayout.GridItem,
  // },
  setup(props, { emit }) {
    const style = computed(() => {
      if (props.block.dragMode == "free") {
        // 自由模式
        return {
          left: props.block.left + "px",
          top: props.block.top + "px",
          zIndex: props.block.zIndex,
          width: props.block.widthAdaption100 ? "100%" : "auto",
        }
      } else if (
        props.block.dragMode == "updown" ||
        props.block.dragMode == ""
      ) {
        // 上下模式
        return {
          margin: "0 auto",
          width: props.block.widthAdaption100
            ? "100%"
            : props.container.width + "px",
          position: "relative",
        }
      }
      return {}
    })
    const blockInstance = ref({} as HTMLElement)
    let componentRenderInfo =
      editorInstance?.componentMap[props.block!.componentKey]
    onMounted(() => {
      if (props.block.adjustmentPosition && props.block.dragMode == "free") {
        /**
         * @需要调整位置
         */
        props.block.left =
          props.block.left - blockInstance.value.offsetWidth / 2
        props.block.top = props.block.top - blockInstance.value.offsetHeight / 2
        props.block.adjustmentPosition = false
        /**
         * @调整完位置之后再把宽高信息调整
         */
        props.block.width = blockInstance.value.offsetWidth
        props.block.height = blockInstance.value.offsetHeight
      }
    })
    let classes = computed(() => [
      "editor-bloack",
      props.block.focus ? "editor-bloack-focus" : "",
    ])
    function operate(type: string) {
      emit(type)
    }
    return () => {
      if (props.block.dragMode == "free") {
        // 自由拖拽模式
        return (
          <div
            class={classes.value}
            style={style.value as any}
            ref={blockInstance}
          >
            {/* 组件核心 */}
            {componentRenderInfo?.render(props.block)}
            {/* 操作 */}
            {props.block.focus && !props.priview ? (
              <div
                class="editor-bloack-delete"
                onClick={() => operate("delBlock")}
              >
                删除
              </div>
            ) : null}
          </div>
        )
      } else if (
        props.block.dragMode == "default" ||
        props.block.dragMode == ""
      ) {
        // 正常的上下排列
        return (
          <div
            class={classes.value}
            style={style.value as any}
            ref={blockInstance}
          >
            {/* 组件核心 */}
            {componentRenderInfo?.render(props.block)}
            {/* 操作: 元素获得焦点 并且不是预览模式下 */}
            {props.block.focus && !props.priview ? (
              <div class="editor-bloack-operate">
                <div
                  class="editor-bloack-delete"
                  onClick={() => operate("delBlock")}
                >
                  删除
                </div>
                <div
                  class="editor-bloack-delete"
                  onClick={() => operate("upBlock")}
                >
                  上移
                </div>
                <div
                  class="editor-bloack-delete"
                  onClick={() => operate("downBlock")}
                >
                  下移
                </div>
              </div>
            ) : null}
          </div>
        )
      } else {
        // 布局模式
        return (
          <div style={{ backgroundColor: "gray" }}>
            <grid-item
              x={props.block.x}
              y={props.block.y}
              w={props.block.w}
              h={props.block.h}
              i={1}
              key={props.block.id}
            >
              {componentRenderInfo?.render(props.block)}
            </grid-item>
          </div>
        )
      }
    }
  },
})
