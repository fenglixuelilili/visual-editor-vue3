import { createVNode } from "vue"
import { VisualEditorComponent } from "../../../types/editor"
import render from "../../utils/base-input-render.vue"
import control from "./control.vue"
export default {
  group: "个人信息",
  name: "personName",
  value: "",
  addOnly: true,
  formItemField: "name",
  icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/1726020993661913c172602099366229853_1.png",
  activeIcon:
    "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/1726020993661913c172602099366229853_1.png",
  render: (block) => {
    let props = block.props
    return createVNode(render, {
      style: {},
      title: props.title.defaultValue,
      // value: props.value.defaultValue,
      placeholder: props.placeholder.defaultValue,
      tip: props?.tip?.defaultValue ? props.tip.defaultValue : "",
      isRequire: props.isRequire.defaultValue == "1" ? true : false,
      only: props.only.defaultValue == "1" ? true : false,
      min: props.min.defaultValue * 1,
      max: props.max.defaultValue * 1,
    })
  },
  // priview: () => <textarea placeholder="请输入内容"></textarea>,
  label: "姓名",
  props: {
    title: {
      label: "标题",
      type: "input",
      defaultValue: "姓名",
    },
    // value: {
    //   label: "默认文本",
    //   type: "input",
    //   defaultValue: "",
    // },
    placeholder: {
      label: "默认文案",
      type: "input",
      defaultValue: "请输入姓名",
    },
    tip: {
      label: "提示",
      type: "input",
      defaultValue: "",
    },
    isRequire: {
      label: "设为必填",
      defaultValue: "2",
    },
    only: {
      label: "唯一性",
      defaultValue: "2",
    },
    min: {
      label: "最少填写",
      defaultValue: 2,
    },
    max: {
      label: "最多填写",
      defaultValue: 100,
    },
  },
  controlView: (block, updateBlock) => {
    return createVNode(control, {
      block,
    })
  },
} as VisualEditorComponent
