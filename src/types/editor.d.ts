export interface block  {
  left: number
  top: number
  zIndex: number
  adjustmentPosition?: boolean // 是否需要自动调整位置
  componentKey: string
  focus?: boolean
  width: number
  height: number
  hasResize: boolean // 是否调整过宽高
  id: number
  props: {
    [key: string]: any
  }
}
export const createBlockData = function (data: {
  top: number
  left: number
  componentKey: string
  props: any
  [key: string]: any
}) {
  return {
    adjustmentPosition: true,
    focus: false,
    zIndex: 0,
    hasResize: false,
    width: 0,
    height: 0,
    id: Math.floor((Math.random() * 100000000)),
    ...data
  }
}

export interface markline {
  x: { left: number; showLeft: number }[]
  y: { top: number; showTop: number }[]
}

// 这是容器的绑定信息
export interface visualEditorModelValue {
  // 容器的宽高信息 等等
  container: {
    width: number
    height: number
  }
  // 容器内的元素信息 包含 位置 元素 大小等信息
  blocks: block[]
}
// 这是具体的组件类型
export interface VisualEditorComponent {
  name: string
  label: string
  disabled?: boolean
  props: {
    [key: string]: any
  }
  priview: () => JSX.Element | string
  render: (...args) => JSX.Element | string
  controlView: (block: block, updateBlock: ( block: block ) => void) => JSX.Element | string
}
// 每次调用这个函数  就是创建一个组件
export function createVisuaEditorComConfig() {
  // 所有组件队列
  const componentLists: VisualEditorComponent[] = []
  // 缓存组件
  const componentMap: Record<string, VisualEditorComponent> = {}
  return {
    /**
     * @name 组件名称
     * @component 组件
     * Omit类型是排除属性
    */
    registry(name: string, component: Omit<VisualEditorComponent, 'name'>) {
      let comp = {
        ...component,
        name
      }
      componentMap[name] = comp
      componentLists.push(comp)
    },
    componentLists,
    componentMap
  }
}
// 左侧菜单组件的数据
export type VisuaEditorComConfig = ReturnType<typeof createVisuaEditorComConfig>

