import { computed, defineComponent, onMounted, PropType, ref } from "vue"
import { block, container } from "../../types/editor.d"
import editorInstance from "./visuaEditorComponents" // 编辑器组件注册机
import editorBloackOperate from "./help-coms/editor-bloack-operate.vue"
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
    index: {
      type: Number,
      default: 0,
    },
    dragMove: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    // GridItem: VueGridLayout.GridItem,
    editorBloackOperate,
  },
  setup(props, { emit }) {
    let componentRenderInfo =
      editorInstance?.componentMap[props.block!.componentKey]
    const style = computed(() => {
      if (props.block.dragMode == "free") {
        // 自由模式
        let baseStyle = {
          position: "absolute",
          left: props.block.left + "px",
          top: props.block.top + "px",
          zIndex: props.block.zIndex,
          width: props.block.widthAdaption100 ? "100%" : "auto",
        }
        return componentRenderInfo?.editorBlockShellStyle
          ? componentRenderInfo.editorBlockShellStyle(props.block, baseStyle)
          : baseStyle
      } else if (
        props.block.dragMode == "updown" ||
        props.block.dragMode == "default" ||
        props.block.dragMode == ""
      ) {
        // 上下模式
        let baseStyle = {
          margin: "0 auto",
          width: "100%",
          // width: props.block.widthAdaption100
          //   ? "100%"
          //   : props.container.width + "px",
          position: "relative",
        }
        return componentRenderInfo?.editorBlockShellStyle
          ? componentRenderInfo.editorBlockShellStyle(props.block, baseStyle)
          : baseStyle
      }
      return {}
    })
    const blockInstance = ref({} as HTMLElement)
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
      props.priview ? "editor-bloack-priview" : "editor-bloack",
      props.block.focus && !props.priview ? "editor-bloack-focus" : "",
      props.dragMove ? "editor-bloack-dragmove" : "",
    ])
    function operate(type: string) {
      emit(type)
    }
    let id = ""
    if (props?.block?.id) {
      id = "block" + (props.block.id as string).replace("$", "")
    }
    return () => {
      if (props.block.dragMode == "free") {
        // 自由拖拽模式
        return (
          <div
            class={classes.value}
            style={style.value as any}
            ref={blockInstance}
            data-index={props.index}
          >
            {/* 组件核心 */}
            {componentRenderInfo?.render(props.block)}
            {/* 操作 */}
            {props.block.focus && !props.priview ? (
              <editor-bloack-operate
                onOperate={operate}
              ></editor-bloack-operate>
            ) : null}
          </div>
        )
      } else if (
        props.block.dragMode == "default" ||
        props.block.dragMode == "updown" ||
        props.block.dragMode == ""
      ) {
        // 正常的上下排列
        return (
          <div
            class={classes.value}
            style={style.value as any}
            ref={blockInstance}
            data-index={props.index}
            id={id}
          >
            {/* 组件核心 */}
            {componentRenderInfo?.render(props.block)}
            {/* 操作: 元素获得焦点 并且不是预览模式下 */}
            {props.block.focus && !props.priview ? (
              <editor-bloack-operate
                onOperate={operate}
              ></editor-bloack-operate>
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
