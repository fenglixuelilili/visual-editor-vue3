import { createVNode } from "vue"
import { VisualEditorComponent } from "../../../types/index"
import render from "./render.vue"
import control from "./control.vue"
export default {
  group: "个人信息（自定义）",
  name: "commenRadio",
  value: "",
  icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/172623195284521e2172623195284525206_r.png",
  activeIcon:
    "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/172623195284521e2172623195284525206_r.png",
  render: (block) => {
    let props = block.props
    return createVNode(render, {
      style: {},
      title: props.title.defaultValue,
      isRequire: props.isRequire.defaultValue == "1" ? true : false,
      options: props.options.defaultValue,
      placeholder: props.placeholder.defaultValue,
      tip: props?.tip?.defaultValue ? props.tip.defaultValue : "",
    })
  },
  label: "单选",
  props: {
    title: {
      label: "标题",
      type: "input",
      defaultValue: "单选",
    },
    placeholder: {
      label: "默认文案",
      type: "input",
      defaultValue: "请选择内容",
    },
    tip: {
      label: "提示",
      type: "input",
      defaultValue: "",
    },
    options: {
      label: "选项",
      defaultValue: [
        {
          name: "",
          id: "",
          key: Math.random() * 10000 + "",
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
