import { pushType } from "./editor"

type  VisualEditorComponentProps = {
  [key: string]: {
    defaultValue: number | string |  any[]
    type?: builtInContrlComType
    label?: string
    disabled?: boolean
    unit?: string
    min?: number
    max?: number
    options?: {
      name: string
      value: string | number
    }[]
  }
}
export interface VisualEditorComponent {
  name: string
  value?: any
  label: string
  disabled?: boolean
  props: VisualEditorComponentProps
  formItemField?: string // 是否是需要提交表单的, 说明是一个表单项 需要字段收集的
  dragMode?: string // 拖拽模式
  widthAdaption100?: boolean // 宽度调整方式
  group: string // 所属分组
  icon: string // 默认icon
  hide?: boolean // 隐藏该组件
  activeIcon: string // 激活icon
  addOnly?: boolean // 在画布中只能有一条数据
  editorBlockShellStyle?: (block: block, style: T) => T // 每个组件的外壳的样式
  // priview: () => JSX.Element | string
  render: (...args) => JSX.Element | string
  controlView: (
    block: block & { props: v<VisualEditorComponent.props> },
    updateBlock: (block: block) => void,
  ) => JSX.Element | string
  pushType?: pushType
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
export type container = {
  width: number
  height: number
  backgroundColor: string
  backgroundImage: string
  scale: number
  wrapper?: number
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
export interface controlViewConfigtype {
  key?: string
  label?: string
  type?: builtInContrlComType
  defaultValue: string | number | any[]
}