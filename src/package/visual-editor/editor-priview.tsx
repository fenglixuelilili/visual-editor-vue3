import { computed, defineComponent, PropType, ref } from "vue"
import "../scss/index.priview.scss"
import { visualEditorModelValue, block } from "../../types/editor.d"
import useModel from "../../utils/useModel"
import editorBlock from "./editor-block"
// 预览组件
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
