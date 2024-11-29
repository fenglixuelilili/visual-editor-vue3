type v<T extends any> = {
  [x in keyof k]: T[x]
}
// 这是具体的组件类型
export type { VisualEditorComponentProps, VisualEditorComponent, block, container, markline, config, visualCommand, visualEditorModelValue, controlViewConfigtype } from './index.d.ts'
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
    id: '$i'+Math.floor(Math.random() * 100000000000000000) + '',
    ...data,
  }
}

// 内置控制器组件类型
type builtInContrlComType = "color" | "input" | "number" | 'slider' | 'imgUpload' | 'textarea' | 'select'
export type pushType =  'push' | 'unshift' 

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
    registry(name: string, component: Omit<VisualEditorComponent, "name">, pushType: pushType = 'push') {
      let comp = {
        ...component,
        name,
      }
      let isHave = componentLists.find(item => { 
        return item.name == name
      })
      if (isHave) {
        // 有了就不要注册了
        return
      }
      componentMap[name] = comp
      if (pushType == 'unshift') {
        componentLists.unshift(comp)
      } else { 
        componentLists.push(comp)
      }
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
  | 'baseSuccess'

