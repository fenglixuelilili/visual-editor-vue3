import { VisualEditorComponent } from "../../../types/index"
import render from "./render.vue"
import control from "./control.vue"
import { computed, createVNode } from "vue"
export default {
  group: "基础组件",
  name: "baseSubmit",
  label: "提交按钮",
  icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/1726021435873459c17260214358742832_t.png",
  activeIcon:
    "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/1726021435873459c17260214358742832_t.png",
  render: (block) => {
    let props = block.props
    let style = computed(() => {
      return {
        backgroundColor: props.backgroundColor.defaultValue,
        color: props.color.defaultValue,
        borderRadius: props.borderRadius.defaultValue + "px",
        width: props.width.defaultValue + "%",
        marginTop: props.marginTop.defaultValue + "px",
        marginBottom: props.marginBottom.defaultValue + "px",
      }
    })
    return createVNode(render, {
      text: props.text.defaultValue,
      style: style.value,
      fixedBottom: props.fixedBottom.defaultValue == "1",
      visibleSubmitNum: props.visibleSubmitNum.defaultValue == "1",
      submitNum: props.submitNum.defaultValue,
      submitTip: props.submitTip.defaultValue,
    })
  },
  // priview: () => <textarea placeholder="请输入内容"></textarea>,
  props: {
    text: {
      label: "按钮名称",
      type: "input",
      defaultValue: "提交",
    },
    link: {
      label: "超链接",
      type: "input",
      defaultValue: "",
    },
    backgroundColor: {
      label: "按钮颜色",
      type: "color",
      defaultValue: "#1161FF",
    },
    color: {
      label: "文字颜色",
      type: "color",
      defaultValue: "#fff",
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
      defaultValue: 0,
      min: 0,
      max: 100,
    },
    borderRadius: {
      label: "圆角",
      type: "slider",
      defaultValue: 4,
      min: 0,
      max: 30,
    },
    width: {
      label: "宽度",
      type: "number",
      defaultValue: 94,
      unit: "%",
    },
    fixedBottom: {
      label: "是否吸底",
      defaultValue: "2",
    },
    visibleSubmitNum: {
      label: "显示提交次数",
      defaultValue: "2",
    },
    submitNum: {
      label: "提交次数",
      defaultValue: 10,
    },
    submitTip: {
      label: "提示语内容",
      defaultValue: "目前已有$num人提交表单",
    },
  },
  controlView: (block, updateBlock) => {
    return createVNode(control, {
      block,
    })
  },
} as VisualEditorComponent
