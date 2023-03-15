import { computed, defineComponent, onMounted, PropType, ref } from "vue"
import { block } from "../../types/editor.d"
import editorInstance from "./visuaEditorComponents" // 编辑器组件注册机
export default defineComponent({
  props: {
    // 外壳 定位 放大缩小用的
    block: {
      type: Object as PropType<block>,
      default: {
        left: 0,
        top: 0,
      },
    },
    priview: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const style = computed(() => ({
      left: props.block.left + "px",
      top: props.block.top + "px",
      zIndex: props.block.zIndex,
    }))
    const blockInstance = ref({} as HTMLElement)
    let componentRenderInfo =
      editorInstance?.componentMap[props.block!.componentKey]
    onMounted(() => {
      if (props.block.adjustmentPosition) {
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
    function delBlock() {
      emit("delBlock")
    }
    return () => (
      <div class={classes.value} style={style.value} ref={blockInstance}>
        {/* 组件核心 */}
        {componentRenderInfo?.render(props.block)}
        {/* 操作 */}
        {props.block.focus && !props.priview ? (
          <div class="editor-bloack-delete" onClick={delBlock}>
            删除
          </div>
        ) : null}
      </div>
    )
  },
})
