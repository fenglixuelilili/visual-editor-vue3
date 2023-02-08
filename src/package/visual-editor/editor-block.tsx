import { computed, defineComponent, PropType } from "vue"
import { block } from "../../types/editor"
export default defineComponent({
  props: {
    block: {
      type: Object as PropType<block>,
      default: {
        left: 0,
        top: 0,
      },
    },
  },
  setup(props) {
    const style = computed(() => ({
      left: props.block.left + "px",
      top: props.block.top + "px",
    }))
    return () => (
      <div class="editor-bloack" style={style.value}>
        block
      </div>
    )
  },
})
