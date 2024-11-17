import { builtIn, VisualEditorComponent } from "@/types/editor"
import { defineComponent, PropType } from "vue"
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
    let map: { [key: string]: VisualEditorComponent[] } = {}
    props.componentLists
      .filter((component) => {
        return component.disabled == undefined ? true : !component.disabled
      })
      .forEach((item) => {
        if (!map[item.group]) {
          map[item.group] = []
        }
        map[item.group].push(item)
      })
    for (let key in map) {
      map[key] = map[key].filter((item, i) => {
        if (!props.builtInComsControlView) {
          return true
        }
        return props.builtInComs?.includes(item.name as builtIn)
      })
      if (!map[key] || !map[key].length) {
        delete map[key]
      }
    }
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
        {Object.keys(map).map((key) => {
          return (
            <div class="group-container">
              <div class="title">{key}</div>
              <div class="group-container-content">
                {map[key].map((component) => {
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
