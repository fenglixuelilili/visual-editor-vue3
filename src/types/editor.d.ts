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