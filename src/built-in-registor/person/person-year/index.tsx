import { createVNode } from "vue"
import { VisualEditorComponent } from "../../../types/index"
import control from "./control.vue"
import render from "./render.vue"
export default {
  group: "个人信息",
  name: "personYear",
  value: "",
  formItemField: "year",
  addOnly: true,
  icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17260212731331ddc172602127313340233_6.png",
  activeIcon:
    "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17260212731331ddc172602127313340233_6.png",
  render: (block) => {
    let props = block.props
    return createVNode(render, {
      title: props.title.defaultValue,
      value: props.value.defaultValue,
      placeholder: props.placeholder.defaultValue,
      tip: props?.tip?.defaultValue ? props.tip.defaultValue : "",
      isRequire: props.isRequire.defaultValue == "1" ? true : false,
    })
  },
  // priview: () => <textarea placeholder="请输入内容"></textarea>,
  label: "考试年份",
  props: {
    title: {
      label: "标题",
      type: "input",
      defaultValue: "参加高考年份",
    },
    value: {
      label: "默认值",
      type: "select",
      defaultValue: "", //new Date().getFullYear()
      options: [
        {
          name: "2020",
          value: "2020",
        },
        {
          name: "2021",
          value: "2021",
        },
        {
          name: "2022",
          value: "2022",
        },
        {
          name: "2023",
          value: "2023",
        },
        {
          name: "2024",
          value: "2024",
        },
        {
          name: "2025",
          value: "2025",
        },
        {
          name: "2026",
          value: "2026",
        },
        {
          name: "2027",
          value: "2027",
        },
        {
          name: "2028",
          value: "2028",
        },
        {
          name: "2029",
          value: "2029",
        },
        {
          name: "2030",
          value: "2030",
        },
      ],
    },
    placeholder: {
      label: "默认提示文字",
      type: "input",
      defaultValue: "请选择参加高考年份",
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
  },
  controlView: (block, updateBlock) => {
    return createVNode(control, {
      block,
    })
  },
} as VisualEditorComponent
