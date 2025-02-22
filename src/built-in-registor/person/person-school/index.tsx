import { createVNode } from "vue"
import { VisualEditorComponent } from "../../../types/index"
import render from "../../utils/base-input-render.vue"
import control from "./control.vue"
export default {
  group: "个人信息",
  name: "personSchool",
  value: "",
  sort: 5,
  formItemField: "school_id",
  addOnly: true,
  icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17262318368565036172623183685718112_school.png",
  activeIcon:
    "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17262318368565036172623183685718112_school.png",
  render: (block) => {
    let props = block.props
    return createVNode(render, {
      style: {},
      title: props.title.defaultValue,
      // value: props.value.defaultValue,
      placeholder: props.placeholder.defaultValue,
      tip: props?.tip?.defaultValue ? props.tip.defaultValue : "",
      isRequire: props.isRequire.defaultValue == "1" ? true : false,
      min: props.min.defaultValue * 1,
      max: props.max.defaultValue * 1,
    })
  },
  // priview: () => <textarea placeholder="请输入内容"></textarea>,
  label: "学校",
  props: {
    title: {
      label: "标题",
      type: "input",
      defaultValue: "所在中学",
    },
    // value: {
    //   label: "默认文本",
    //   type: "input",
    //   defaultValue: "",
    // },
    placeholder: {
      label: "默认提示文字",
      type: "input",
      defaultValue: "请输入所在中学",
    },
    tip: {
      label: "描述",
      type: "input",
      defaultValue: "",
    },
    isRequire: {
      label: "设为必填",
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
