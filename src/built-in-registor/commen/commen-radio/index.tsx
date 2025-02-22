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
      showType: props?.showType?.defaultValue
        ? props.showType.defaultValue
        : "1",
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
      label: "默认提示文字",
      type: "input",
      defaultValue: "请选择内容",
    },
    tip: {
      label: "描述",
      type: "input",
      defaultValue: "",
    },
    showType: {
      label: "交互形式",
      type: "select",
      defaultValue: "1", //new Date().getFullYear()
      options: [
        {
          name: "下拉选择",
          value: "1",
        },
        {
          name: "平铺选择",
          value: "2",
        },
      ],
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
