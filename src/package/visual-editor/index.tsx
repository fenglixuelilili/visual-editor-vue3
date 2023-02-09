import { computed, defineComponent, PropType } from "vue"
import "./index.scss"
import {
  visualEditorModelValue,
  block,
  VisuaEditorComConfig,
} from "../../types/editor"
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
    return () => (
      <div class="visual-editor">
        <div class="visual-editor-topMenu">顶部菜单</div>
        <div class="visual-editor-leftComponentsMenu">
          {props.config?.componentLists.map((config) => {
            return (
              <div class="editer-menu-content-block">
                <span class="editor-priview-label">{config.label}</span>
                {config.priview()}
              </div>
            )
          })}
        </div>
        <div class="visual-editor-area-body">
          <div class="visual-editor-area-container">
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
        <div class="visual-editor-right-seting">右侧操作</div>
      </div>
    )
  },
})
