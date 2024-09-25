import { computed, defineComponent, PropType } from "vue"
import "../scss/index.priview.scss"
import { visualEditorModelValue, block } from "../../types/editor.d"
import useModel from "../../utils/useModel"
import editorInstance from "./visuaEditorComponents" // 编辑器组件注册机
import editorBlock from "./editor-block"
import { registorBuiltIn } from "../../built-in-registor/index"
import { builtInArrComs } from "../utils/registorBuiltInComUtils"
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
    // 注册内置组件
    registorBuiltIn(editorInstance, builtInArrComs as any[])
    let model = useModel(
      () => props.modelValue,
      (val) => emit("update:modelValue", val)
    )
    let containerStyle = computed(() => ({
      width: model.value.container.width + "px",
      // height: model.value.container.height + "px",
      background: `url(${model.value.container.backgroundImage}) no-repeat top center`,
      backgroundColor: model.value.container.backgroundColor,
      backgroundSize: "cover",
    }))
    let componentMap = editorInstance?.componentMap
      ? editorInstance?.componentMap
      : {}
    return () => (
      <div class="priview-visual-editor">
        <div class="priview-visual-editor-area-body">
          <div class="visual-editor-area-container">
            {/* 渲染画布信息 */}
            <div
              class="visual-editor-area-content"
              style={containerStyle.value}
            >
              {/* {model.value.blocks.map((block: block) => {
                return componentMap[block.componentKey]?.render(block)
              })} */}
              {model.value.blocks.map((block: block, index: number) => {
                return (
                  <div>
                    <editorBlock
                      index={index}
                      block={block}
                      priview={true}
                      container={props.modelValue?.container}
                      key={block.id}
                    ></editorBlock>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    )
  },
})
