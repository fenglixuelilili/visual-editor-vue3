import { createVNode, computed } from "vue"
import { VisualEditorComponent } from "../../../types/index"
import render from "./render.vue"
export default {
  group: "基础组件",
  name: "baseImg",
  sort: 3,
  icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17260208888133402172602088881394742_3.png",
  activeIcon:
    "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17260208888133402172602088881394742_3.png",
  render: (block) => {
    let props = block.props
    let style = computed(() => {
      return {
        marginTop: (props?.marginTop ? props.marginTop.defaultValue : 0) + "px",
        marginBottom:
          (props?.marginBottom ? props.marginBottom.defaultValue : 0) + "px",
      }
    })
    return createVNode(render, {
      src: props.src.defaultValue,
      style: style.value,
    })
  },
  label: "图片",
  props: {
    src: {
      defaultValue: "",
      label: "图片设置",
      type: "imgUpload",
    },
    marginTop: {
      label: "上边距",
      type: "slider",
      defaultValue: 0,
      min: 0,
      max: 100,
    },
    marginBottom: {
      label: "下边距",
      type: "slider",
      defaultValue: 12,
      min: 0,
      max: 100,
    },
  },
  controlView: (block, updateBlock) => {
    return <div></div>
  },
} as VisualEditorComponent
