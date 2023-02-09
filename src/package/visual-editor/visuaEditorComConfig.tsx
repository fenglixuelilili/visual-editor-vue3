import { createVisuaEditorComConfig } from "../../types/editor.d"
let config = createVisuaEditorComConfig()

config.registry("text", {
  render: () => "渲染文本",
  priview: () => "预览文本",
  label: "文本",
})
config.registry("button", {
  render: () => <button>按钮</button>,
  priview: () => <button>按钮</button>,
  label: "按钮",
})
config.registry("input", {
  render: () => <input type="text" />,
  priview: () => <input type="text" />,
  label: "输入框",
})
export default config
