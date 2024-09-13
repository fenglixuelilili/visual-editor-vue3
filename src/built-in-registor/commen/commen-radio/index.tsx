import { createVNode } from "vue"
import { VisualEditorComponent } from "../../../types/editor"
import render from "./render.vue"
import control from "./control.vue"
export default {
  group: "个人信息（自定义）",
  name: "commenRadio",
  icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/1726020993661913c172602099366229853_1.png",
  activeIcon:
    "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/1726020993661913c172602099366229853_1.png",
  render: (block) => {
    let props = block.props
    return createVNode(render, {
      style: {},
      title: props.title.defaultValue,
      isRequire: props.isRequire.defaultValue == "1" ? true : false,
      options: props.options.defaultValue,
      placeholder: props.placeholder.defaultValue,
    })
  },
  priview: () => <textarea placeholder="请输入内容"></textarea>,
  label: "单选",
  props: {
    title: {
      label: "标题",
      type: "input",
      defaultValue: "单选",
    },
    placeholder: {
      label: "提示",
      type: "input",
      defaultValue: "请选择内容",
    },
    options: {
      label: "选项",
      defaultValue: [
        {
          name: "",
          id: "",
        },
      ],
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
