import { createVNode } from "vue"
import { VisualEditorComponent } from "../../../types/editor"
import render from "./render.vue"
export default {
  group: "基础组件",
  name: "textarea",
  icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17260208888133402172602088881394742_3.png",
  activeIcon:
    "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17260208888133402172602088881394742_3.png",
  render: (block) => {
    return createVNode(render, { src: block.props.src.defaultValue })
  },
  priview: () => <textarea placeholder="请输入内容"></textarea>,
  label: "图片",
  props: {
    src: {
      defaultValue: "",
      label: "图片设置",
      type: "imgUpload",
    },
  },
  controlView: (block, updateBlock) => {
    // let props = block.props
    // function onChange(e: any) {
    //   block.props.fontSize = e.target.value
    //   updateBlock(block)
    // }
    return <div></div>
  },
} as VisualEditorComponent
