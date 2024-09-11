import { computed, createVNode } from "vue"
import { VisualEditorComponent } from "../../../types/editor"
import render from "./render.vue"
export default {
  group: "基础组件",
  label: "表单标题",
  name: "baseTitle",
  icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17260208210133537172602082101375623_1.png",
  activeIcon:
    "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17260208210133537172602082101375623_1.png",
  render: (block) => {
    let style = computed(() => {
      return {
        color: block.props.color.defaultValue,
        fontSize: block.props.fontSize.defaultValue + "px",
        lineHeight: block.props.lineHeight.defaultValue + "px",
        height: block.props.lineHeight.defaultValue + "px",
        marginBottom: block.props.marginBottom.defaultValue + "px",
        marginTop: block.props.marginTop.defaultValue + "px",
      }
    })
    return createVNode(render, {
      style: style.value,
      text: block.props.text.defaultValue,
    })
  },
  priview: () => <textarea placeholder="请输入内容"></textarea>,
  props: {
    text: {
      defaultValue: "报名表单",
      type: "input",
      label: "文字内容",
    },
    color: {
      defaultValue: "#333333",
      type: "color",
      label: "文字颜色",
    },
    fontSize: {
      defaultValue: 16,
      type: "number",
      label: "字体大小",
    },
    lineHeight: {
      defaultValue: 48,
      type: "number",
      label: "行高",
    },
    marginTop: {
      defaultValue: 0,
      type: "slider",
      label: "上边距",
    },
    marginBottom: {
      defaultValue: 0,
      type: "slider",
      label: "下边距",
    },
  },
  controlView: (block, updateBlock) => {
    let props = block.props
    function onChange(e: any) {
      block.props.fontSize = e.target.value
      updateBlock(block)
    }
    return <div></div>
  },
} as VisualEditorComponent
