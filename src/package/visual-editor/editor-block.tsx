import { computed, defineComponent, onMounted, PropType, ref } from "vue"
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
    const blockInstance = ref({} as HTMLElement)
    let componentRenderIinfo =
      props.config?.componentMap[props.block!.componentKey]
    onMounted(() => {
      if (props.block.adjustmentPosition) {
        // 需要调整位置
        props.block.left =
          props.block.left - blockInstance.value.offsetWidth / 2
        props.block.top = props.block.top - blockInstance.value.offsetHeight / 2
        console.log(props.block.left, blockInstance.value.offsetWidth)
        props.block.adjustmentPosition = false
      }
    })
    return () => (
      <div class="editor-bloack" style={style.value} ref={blockInstance}>
        {componentRenderIinfo?.render()}
      </div>
    )
  },
})
