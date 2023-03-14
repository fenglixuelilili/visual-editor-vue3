import { createVisuaEditorComponents } from "../../types/editor.d"
import { block } from "../../types/editor"
import { computed } from "vue"
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
})
editor.registry("button", {
  render: () => <button>按钮</button>,
  priview: () => <button>按钮预览</button>,
  props: {},
  label: "按钮",
  controlView: () => "按钮",
})
editor.registry("input", {
  render: () => <input type="text" />,
  priview: () => <input type="text" />,
  props: {},
  label: "输入框",
  controlView: () => "我是控制器区域",
})
export default editor
