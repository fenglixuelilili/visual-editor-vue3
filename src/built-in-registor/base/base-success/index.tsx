import { createVNode } from "vue"
import { VisualEditorComponent } from "../../../types/editor"
import render from "./render.vue"
export default {
  group: "基础组件",
  name: "baseSuccess",
  icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/1726294902723b41a17262949027235096_ss.png",
  activeIcon:
    "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/1726294902723b41a17262949027235096_ss.png",
  render: (block) => {
    let props = block.props
    return createVNode(render, {
      successSrc: props.successSrc.defaultValue,
      successText: props.successText.defaultValue,
      successDesc: props.successDesc.defaultValue,
      successQR: props.successQR.defaultValue,
      successBottomText: props.successBottomText.defaultValue,
      successColor: props.successColor.defaultValue,
      successDescColor: props.successDescColor.defaultValue,
      successBottomColor: props.successBottomColor.defaultValue,
    })
  },
  // priview: () => <textarea placeholder="请输入内容"></textarea>,
  label: "成功页",
  props: {
    successSrc: {
      defaultValue:
        "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17262956483528fb5172629564835229384_succ.png",
      label: "成功图标",
      type: "imgUpload",
    },
    successText: {
      defaultValue: "提交成功",
      label: "成功标题",
      type: "input",
    },
    successColor: {
      defaultValue: "#fff",
      label: "成功标题文字颜色",
      type: "color",
    },
    successDesc: {
      defaultValue: "您的信息已经提交成功，感谢您的参与！",
      label: "成功提示",
      type: "input",
    },
    successDescColor: {
      defaultValue: "#fff",
      label: "成功提示文字颜色",
      type: "color",
    },
    successQR: {
      defaultValue:
        "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17262959890995db4172629598909914996_1.jpg",
      label: "联系二维码",
      type: "imgUpload",
    },
    successBottomText: {
      defaultValue: "关注公众号，了解更多",
      label: "相关提示信息",
      type: "input",
    },
    successBottomColor: {
      defaultValue: "#fff",
      label: "相关提示信息文字颜色",
      type: "color",
    },
  },
  controlView: (block, updateBlock) => {
    return <div></div>
  },
} as VisualEditorComponent
