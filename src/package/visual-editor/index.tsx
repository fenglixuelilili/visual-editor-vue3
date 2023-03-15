import { VisualEditorComponent } from "../../types/editor.d"
import editorInstance from "./visuaEditorComponents" // 编辑器组件注册机
import { visualEditor as visualEditor2 } from "./editor-core"
import { priviewVisualEditor as priviewVisualEditor2 } from "./editor-priview"
export const _registry = editorInstance.registry
// 导出编辑器
export const visualEditor = visualEditor2
// 导出预览器
export const priviewVisualEditor = priviewVisualEditor2
// 单个注册
export const registry = function (com: VisualEditorComponent) {
  _registry(com.name, com)
}
// 批量注册
export const batchRegistry = function (
  arrs: VisualEditorComponent[] & Record<string, VisualEditorComponent>
) {
  visualEditor.batchRegistry(arrs)
}
// 查看所有注册组件
export const logConfig = function () {
  return editorInstance?.componentLists
}
