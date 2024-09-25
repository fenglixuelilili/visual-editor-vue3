import { createVNode } from "vue"
import { VisualEditorComponent } from "../../../types/editor"
import render from "./render.vue"
import control from "./control.vue"
export default {
  group: "个人信息",
  name: "checkPhone",
  addOnly: true,
  value: ["", ""],
  formItemField: "phone",
  icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17262316229585fdd172623162295874627_sj.png",
  activeIcon:
    "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17262316229585fdd172623162295874627_sj.png",
  render: (block) => {
    let props = block.props
    return createVNode(render, {
      style: {},
      title: props.title.defaultValue,
      placeholder: props.placeholder.defaultValue,
      isRequire: props.isRequire.defaultValue == "1" ? true : false,
      only: props.only.defaultValue == "1" ? true : false,
    })
  },
  // priview: () => <textarea placeholder="请输入内容"></textarea>,
  label: "手机验证",
  props: {
    title: {
      label: "标题",
      type: "input",
      defaultValue: "电话",
    },
    placeholder: {
      label: "提示",
      type: "input",
      defaultValue: "请输入电话",
    },
    isRequire: {
      label: "设为必填",
      defaultValue: "2",
    },
    only: {
      label: "唯一性",
      defaultValue: "2",
    },
    cycle: {
      label: "校验周期",
      defaultValue: 0,
    },
  },
  controlView: (block, updateBlock) => {
    return createVNode(control, {
      block,
    })
  },
} as VisualEditorComponent
