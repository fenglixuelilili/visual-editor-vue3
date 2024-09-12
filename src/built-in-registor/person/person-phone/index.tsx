import { createVNode } from "vue"
import { VisualEditorComponent } from "../../../types/editor"
import render from "./render.vue"
import control from "./control.vue"
export default {
  group: "个人信息",
  name: "personPhone",
  icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/1726020993661913c172602099366229853_1.png",
  activeIcon:
    "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/1726020993661913c172602099366229853_1.png",
  render: (block) => {
    let props = block.props
    return createVNode(render, {
      style: {},
      title: props.title.defaultValue,
      value: props.value.defaultValue,
      placeholder: props.placeholder.defaultValue,
      isRequire: props.isRequire.defaultValue == "1" ? true : false,
      only: props.only.defaultValue == "1" ? true : false,
    })
  },
  priview: () => <textarea placeholder="请输入内容"></textarea>,
  label: "电话",
  props: {
    title: {
      label: "标题",
      type: "input",
      defaultValue: "电话",
    },
    value: {
      label: "默认文本",
      type: "input",
      defaultValue: "",
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
