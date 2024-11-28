import type { VisualEditorComponent } from "../../types/editor.d"
import editorInstance from "./visuaEditorComponents" // 编辑器组件注册机
import { visualEditor as visualEditorInstance } from "./editor-core"
import { priviewVisualEditor as priviewVisualEditorInstance } from "./editor-priview"
export const _registry = editorInstance.registry
// 导出编辑器
export const visualEditor = visualEditorInstance
// 导出预览器
export const priviewVisualEditor = priviewVisualEditorInstance
// 单个注册
export const registry = function (
  com: VisualEditorComponent,
  pushType: "push" | "unshift" = "push"
) {
  _registry(com.name, com, pushType)
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
