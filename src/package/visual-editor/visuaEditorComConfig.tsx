import { createVisuaEditorComConfig } from "../../types/editor"
let config = createVisuaEditorComConfig()
config.registry("text", {
  render: () => <div>渲染文本</div>,
  priview: () => <div>预览文本</div>,
  label: "测试小文本",
})
export default config
