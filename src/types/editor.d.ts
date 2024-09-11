type v<T extends any> = {
  [x in keyof k]: T[x]
}
export type container = {
  width: number
  height: number
  backgroundColor: string
  scale: number
  wrapper?: number
}
export interface block {
  left: number // 定位的left值
  top: number // 定位的top值
  zIndex: number // 定位时候的层级
  adjustmentPosition?: boolean // 是否需要自动调整位置
  componentKey: string // 标识
  focus?: boolean // 是否点住了
  width: number // 组件的宽度
  widthAdaption100?: boolean // dragMode 在值为updown的情况下好使，宽度是否自适应： 如果为true的话 宽度和屏幕一样，如果为false则和设置的wrapper宽度一致
  height: number // 组件的高度
  hasResize: boolean // 是否调整过宽高
  id: number // 每个组件的id
  props: v[VisualEditorComponent.props] // 组件的属性
  dragMode?: string // 拖拽模式 'free' | 'updown'('') 只有两种

  x: number
  y: number
  w: number
  h: number
}
export const createBlockData = function (data: {
  top: number
  left: number
  componentKey: string
  props: any
  [key: string]: any
  dragMode: string // 拖拽模式
  widthAdaption100?: boolean // 宽度调整方式
}): block {
  return {
    adjustmentPosition: true,
    focus: false,
    zIndex: 0,
    hasResize: false,
    width: 0,
    height: 0,
    id: Math.floor(Math.random() * 100000000),
    ...data,
  }
}

export interface markline {
  x: { left: number; showLeft: number }[]
  y: { top: number; showTop: number }[]
}

// 组件配置
export interface config {
  markLine?: boolean // 是否开启标线对齐功能
  shiftMove?: boolean // 是否开启按住shift键移动
  shortcutKeys?: boolean // 是否开启快捷键操作
}

export type visualCommand = {
  currentBlockInfo: {
    value: {
      blurBlock: block[]
      focusBlock: block[]
    }
  }
  updateBlocks: (blocks: block[]) => void
  dataModel: visualEditorModelValue
  shortcutKeys: boolean
}

// 这是容器的绑定信息
export interface visualEditorModelValue {
  // 容器的宽高信息 等等
  container: container
  // 容器内的元素信息 包含 位置 元素 大小等信息
  blocks: block[]
}
// 内置控制器组件类型
type builtInContrlComType = "color" | "input" | "number" | 'slider' | 'imgUpload'
// 这是具体的组件类型
export interface VisualEditorComponent {
  name: string
  label: string
  disabled?: boolean
  props: {
    [key: string]: {
      defaultValue: number | string
      type?: builtInContrlComType
      label?: string
      disabled?: boolean
    }
  }
  dragMode?: string // 拖拽模式
  widthAdaption100?: boolean // 宽度调整方式
  group: string // 所属分组
  icon: string // 默认icon
  activeIcon: string // 激活icon
  priview: () => JSX.Element | string
  render: (...args) => JSX.Element | string
  controlView: (
    block: block & { props: v<VisualEditorComponent.props> },
    updateBlock: (block: block) => void
  ) => JSX.Element | string
}
export interface controlViewConfigtype {
  key?: string
  label?: string
  type?: builtInContrlComType
  defaultValue: string | number
}
// 每次调用这个函数  就是创建一个组件
export function createVisuaEditorComponents() {
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
    registry(name: string, component: Omit<VisualEditorComponent, "name">) {
      let comp = {
        ...component,
        name,
      }
      componentMap[name] = comp
      componentLists.push(comp)
    },
    componentLists,
    componentMap,
  }
}
export type VisuaEditorComponents = ReturnType<
  typeof createVisuaEditorComponents
>
// 内置组件
export type builtIn =
  | "baseImg"
  | "baseSubmit"
  | "baseText"
  | "baseTitle"
  | "commenMultiple"
  | "commenRadio"
  | "checkPhone"
  | "personName"
  | "personOther"
  | "personPhone"
  | "personProvince"
  | "personSchool"
  | "personUpload"
  | "personYear"
