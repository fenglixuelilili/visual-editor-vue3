import { VisualEditorComponent } from "../../../types/editor"
export default {
  group: "个人信息",
  name: "textarea",
  icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17260213405494db1172602134054932870_8.png",
  activeIcon:
    "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17260213405494db1172602134054932870_8.png",
  render: (block) => {
    return <textarea name="" id="" cols="30" rows="10"></textarea>
  },
  priview: () => <textarea placeholder="请输入内容"></textarea>,
  label: "上传文件",
  props: {},
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
} as VisualEditorComponent
