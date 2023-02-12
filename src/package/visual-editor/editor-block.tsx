import { computed, defineComponent, PropType } from "vue"
import { block, VisuaEditorComConfig } from "../../types/editor"
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
    config: {
      type: Object as PropType<VisuaEditorComConfig>,
    },
  },
  setup(props) {
    const style = computed(() => ({
      left: props.block.left + "px",
      top: props.block.top + "px",
    }))
    let componentRenderIinfo =
      props.config?.componentMap[props.block!.componentKey]

    return () => (
      <div class="editor-bloack" style={style.value}>
        {componentRenderIinfo?.render()}
      </div>
    )
  },
})
