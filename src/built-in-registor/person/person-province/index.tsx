import { createVNode } from "vue"
import { VisualEditorComponent } from "../../../types/editor"
import render from "../../utils/base-input-render.vue"
import control from "./control.vue"
export default {
  group: "个人信息",
  name: "personProvince",
  value: "",
  formItemField: "person_province",
  addOnly: true,
  icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/1726021191023168617260211910248143_4.png",
  activeIcon:
    "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/1726021191023168617260211910248143_4.png",
  render: (block) => {
    let props = block.props
    return createVNode(render, {
      style: {},
      title: props.title.defaultValue,
      value: props.value.defaultValue,
      placeholder: props.placeholder.defaultValue,
      isRequire: props.isRequire.defaultValue == "1" ? true : false,
    })
  },
  priview: () => <textarea placeholder="请输入内容"></textarea>,
  label: "省份",
  props: {
    title: {
      label: "标题",
      type: "input",
      defaultValue: "所在省份",
    },
    value: {
      label: "默认文本",
      type: "input",
      defaultValue: "",
    },
    placeholder: {
      label: "提示",
      type: "input",
      defaultValue: "请输入所在省份",
    },
    isRequire: {
      label: "设为必填",
      defaultValue: "2",
    },
  },
  controlView: (block, updateBlock) => {
    return createVNode(control, {
      block,
    })
  },
} as VisualEditorComponent
