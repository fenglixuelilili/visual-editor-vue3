import { createVisuaEditorComponents } from "../../types/editor.d"
import { block } from "../../types/editor"
import { computed } from "vue"
// 内置组件
let editor = createVisuaEditorComponents()
editor.registry("text", {
  render: (block: block) => {
    let style = computed(() => ({
      fontSize: block.props.fontSize + "px",
      color: block.props.color,
    }))
    return (
      <span style={style.value}>
        {block.props.text ? block.props.text : "暂无"}
      </span>
    )
  },
  priview: () => "预览文本",
  label: "文本",
  icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17256065550116851172560655501118550_1.png",
  activeIcon:
    "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/1725606726670cb0d172560672667050664_2.png",
  props: {
    // 声明默认值
    fontSize: 20,
    color: "red",
    text: "默认文本",
  },
  controlView: (block, updateBlock) => {
    let props = block.props
    function onChange(e: any) {
      block.props.fontSize = e.target.value
      updateBlock(block)
    }
    return (
      <div>
        <div>
          <span>字體大小</span>
          <input type="number" value={props.fontSize} onChange={onChange} />
        </div>
        <div>
          <span>文本内容</span>
          <input
            type="text"
            v-model={props.text}
            onChange={(e: any) => {
              block.props.text = e.target.value
              updateBlock(block)
            }}
          />
        </div>
        <div>
          <span>文本颜色</span>
          <input
            type="text"
            v-model={props.color}
            onChange={(e: any) => {
              block.props.color = e.target.value
              updateBlock(block)
            }}
          />
        </div>
      </div>
    )
  },
  group: "基础组件",
})
editor.registry("button", {
  icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17256065550116851172560655501118550_1.png",
  activeIcon:
    "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/1725606726670cb0d172560672667050664_2.png",
  render: () => <button>按钮</button>,
  priview: () => <button>按钮预览</button>,
  props: {},
  label: "按钮",
  controlView: () => "按钮",
  group: "基础组件",
})
editor.registry("input", {
  icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17256065550116851172560655501118550_1.png",
  activeIcon:
    "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/1725606726670cb0d172560672667050664_2.png",
  render: () => <input type="text" />,
  priview: () => <input type="text" />,
  props: {},
  label: "输入框",
  controlView: () => "我是控制器区域",
  group: "基础组件",
})
export default editor
