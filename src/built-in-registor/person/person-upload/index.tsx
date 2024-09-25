import { VisualEditorComponent } from "../../../types/editor"
import render from "./render.vue"
import control from "./control.vue"
import { createVNode } from "vue"
export default {
  group: "个人信息",
  label: "上传文件",
  name: "personUpload",
  value: [],
  formItemField: "file_url",
  addOnly: true,
  icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17260213405494db1172602134054932870_8.png",
  activeIcon:
    "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17260213405494db1172602134054932870_8.png",
  render: (block) => {
    let props = block.props
    return createVNode(render, {
      style: {},
      title: props.title.defaultValue,
      max: props.max.defaultValue,
      isRequire: props.isRequire.defaultValue == "1" ? true : false,
      tip: props.tip.defaultValue,
    })
  },
  // priview: () => <textarea placeholder="请输入内容"></textarea>,
  props: {
    title: {
      label: "标题",
      type: "input",
      defaultValue: "上传文件",
    },
    fileType: {
      label: "文件类型",
      type: "select",
      options: [
        {
          name: "不限",
          value: "none",
        },
        {
          name: "图片",
          value: "image",
        },
        {
          name: "视频",
          value: "video",
        },
        {
          name: "文档",
          value: "excel",
        },
        {
          name: "压缩包",
          value: "zip",
        },
      ],
      defaultValue: "none",
    },
    max: {
      label: "最大上传数量",
      type: "number",
      defaultValue: 1,
      unit: "个",
      min: 1,
    },
    MB: {
      label: "单文件最大",
      type: "number",
      defaultValue: 1,
      unit: "MB",
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
  },
  controlView: (block, updateBlock) => {
    return createVNode(control, {
      block,
    })
  },
} as VisualEditorComponent
