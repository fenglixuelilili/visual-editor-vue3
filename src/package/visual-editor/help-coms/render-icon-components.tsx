import { builtIn, VisualEditorComponent } from "@/types/editor"
import { defineComponent, PropType, ref } from "vue"
import { registryEventer } from "../../utils/event"
export default defineComponent({
  props: {
    componentLists: {
      type: Array as PropType<VisualEditorComponent[]>,
      default: [],
    },
    menuDragInfo: {
      type: Object as PropType<{
        dragstart: Function
        dragend: Function
        click: Function
      }>,
      default: () => ({
        dragstart: () => {},
        dragend: () => {},
        click: () => {},
      }),
    },
    builtInComsControlView: {
      type: Boolean,
      default: false,
    },
    builtInComs: {
      type: Array as PropType<builtIn[]>,
    },
  },
  setup(props) {
    let componentTable = ref<{ [key: string]: VisualEditorComponent[] }>({})
    function getMenu() {
      props.componentLists
        .filter((component) => {
          return component.disabled == undefined ? true : !component.disabled
        })
        .forEach((item) => {
          if (!componentTable.value[item.group]) {
            componentTable.value[item.group] = []
          }
          if (
            componentTable.value[item.group].find(
              (res) => item.name == res.name
            )
          ) {
            // 如果数据已经往里面注册过了，则不执行push了
            return
          }
          componentTable.value[item.group].push(item)
        })
      for (let key in componentTable.value) {
        componentTable.value[key] = componentTable.value[key].filter(
          (item, i) => {
            if (!props.builtInComsControlView) {
              return true
            }
            return props.builtInComs?.includes(item.name as builtIn)
          }
        )
        if (!componentTable.value[key] || !componentTable.value[key].length) {
          delete componentTable.value[key]
        }
      }
    }
    getMenu()
    registryEventer.on(() => {
      getMenu()
    })
    // .filter((key) => {
    //   if (!props.builtInComsControlView) {
    //     return true
    //   } else {
    //     if (props.builtInComs && props.builtInComs.length) {
    //       return props.builtInComs?.includes(map[key].name)
    //     } else {
    //       return false
    //     }
    //   }
    // })
    return () => (
      <>
        {/* 左侧所有在服役的组件 */}
        {Object.keys(componentTable.value).map((key) => {
          return (
            <div class="group-container">
              <div class="title">{key}</div>
              <div class="group-container-content">
                {componentTable.value[key].map((component) => {
                  if (component?.hide) {
                    return null
                  }
                  return (
                    <div
                      class="editer-menu-content-block"
                      draggable
                      onDragstart={(e) =>
                        props.menuDragInfo.dragstart(e, component)
                      }
                      onDragend={props.menuDragInfo.dragend.bind(
                        props.menuDragInfo
                      )}
                      onClick={(e) => props.menuDragInfo.click(e, component)}
                    >
                      <div class="icon-box">
                        <img class="icon" src={component.icon} alt="" />
                        <img
                          class="activeIcon"
                          src={component.activeIcon}
                          alt=""
                        />
                      </div>
                      <span class="editor-priview-label">
                        {component.label}
                      </span>
                      {/* {component.priview()} */}
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </>
    )
  },
})
