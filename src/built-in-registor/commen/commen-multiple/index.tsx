import { createVNode } from "vue"
import { VisualEditorComponent } from "../../../types/index"
import render from "./render.vue"
import control from "./control.vue"
export default {
  group: "个人信息（自定义）",
  name: "commenMultiple",
  // formItemField: "1",
  value: [],
  icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17262319235156e36172623192351612382_m.png",
  activeIcon:
    "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17262319235156e36172623192351612382_m.png",
  render: (block) => {
    let props = block.props
    return createVNode(render, {
      style: {},
      title: props.title.defaultValue,
      tip: props?.tip?.defaultValue ? props.tip.defaultValue : "",
      isRequire: props.isRequire.defaultValue == "1" ? true : false,
      options: props.options.defaultValue,
    })
  },
  // priview: () => <textarea placeholder="请输入内容"></textarea>,
  label: "多选",
  props: {
    title: {
      label: "标题",
      type: "input",
      defaultValue: "多选",
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
    selectMin: {
      label: "最少选择项",
      defaultValue: "",
    },
    selectMax: {
      label: "最多选择项",
      defaultValue: "",
    },
  },
  controlView: (block, updateBlock) => {
    return createVNode(control, {
      block,
    })
  },
} as VisualEditorComponent
