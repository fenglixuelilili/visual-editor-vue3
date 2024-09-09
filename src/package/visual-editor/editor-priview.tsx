import { computed, defineComponent, PropType } from "vue"
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
    return () => (
      <div class="priview-visual-editor">
        <div class="priview-visual-editor-area-body">
          <div class="visual-editor-area-container">
            {/* 渲染画布信息 */}
            <div
              class="visual-editor-area-content"
              style={containerStyle.value}
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
