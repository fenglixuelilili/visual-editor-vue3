
// TODO: 打包入口文件
// import {
//   visualEditor,
//   logConfig,
//   priviewVisualEditor,
//   registry,
//   _registry,
//   batchRegistry
// } from "./package/visual-editor/index"
// 下面是要导出的组件和所有需要的方法：
// export type { VisualEditorComponent } from './types/editor'
import * as all from "./package/visual-editor/index"
export { visualEditor, priviewVisualEditor, registry, batchRegistry, logConfig } from "./package/visual-editor/index"
// export default {
//   visualEditor,
//   logConfig,
//   priviewVisualEditor,
//   batchRegistry,
//   registry,
//   _registry
// }
export default all
export * as all from "./package/visual-editor/index"