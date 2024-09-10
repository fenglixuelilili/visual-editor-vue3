import { createVisuaEditorComponents } from "../../types/editor.d"
import { block } from "../../types/editor"
import { computed } from "vue"
// 内置组件
let editor = createVisuaEditorComponents()
editor.registry("testText", {
  render: (block: block) => {
    const { fontSize, text, color } = block.props
    let style = computed(() => ({
      fontSize: fontSize.defaultValue + "px",
      color: color.defaultValue,
    }))
    console.log("执行了吗？？？？", block)
    return (
      <span style={style.value}>
        {text.defaultValue ? text.defaultValue : "暂无"}
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
    // fontSize: 20,
    // color: "red",
    // text: "默认文本",
    fontSize: {
      defaultValue: 20, // 默认值
      type: "input", // 类型是啥 控制器用哪个组件渲染
      label: "字体大小",
    },
    text: {
      defaultValue: "默认文本", // 默认值
      type: "input", // 类型是啥 控制器用哪个组件渲染
      label: "文本内容",
    },
    color: {
      defaultValue: "green", // 默认值
      type: "color", // 类型是啥 控制器用哪个组件渲染
      label: "字体颜色",
    },
    lineHeight: {
      defaultValue: 27, // 默认值
    },
  },
  controlView: (block, updateBlock) => {
    console.log(block, "blockblockblockblockblock")
    let props = block.props
    function onChange(e: any) {
      block.props.fontSize = e.target.value
      updateBlock(block)
    }
    return (
      <div>
        自定义控制器
        {/* <div>
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
        </div> */}
      </div>
    )
  },
  group: "基础组件",
})
export default editor
