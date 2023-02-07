export interface block  {
  left: number
  top: number
}
// 这是容器的绑定信息
export interface visualEditorModelValue  {
  // 容器的宽高信息 等等
  container: {
    width: number
    height: number
  }
  // 容器内的元素信息 包含 位置 元素 大小等信息
  blocks: block[]
}
// 这是具体的组件的属性
export interface VisualEditorComponent { 
  priview: () => JSX.Element
}
// 每次调用这个函数  就是创建一个组件
export function createVisuaEditorComConfig() { 
  return {}
}
// 左侧菜单组件的数据
export type VisuaEditorComConfig = ReturnType<typeof createVisuaEditorComConfig>