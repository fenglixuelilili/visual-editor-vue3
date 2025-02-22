import { computed, createVNode, ref } from "vue"
import { VisualEditorComponent } from "../../../types/index"
import control from "./control.vue"
import render from "./render.vue"
export default {
  group: "基础组件",
  name: "baseText",
  sort: 2,
  icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/172602085635655aa172602085635629144_2.png",
  activeIcon:
    "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/172602085635655aa172602085635629144_2.png",
  render: (block) => {
    // block.props.src.defaultValue
    let style = computed(() => {
      return {
        fontFamily: block.props.fontFamily.defaultValue,
        fontSize: block.props.fontSize.defaultValue + "px",
        color: block.props.color.defaultValue,
        textAlign:
          block.props.textAlign.defaultValue &&
          block.props.textAlign.defaultValue == "1"
            ? "center"
            : "left",
        fontWeight:
          block.props.fontWeight.defaultValue &&
          block.props.fontWeight.defaultValue == "1"
            ? 800
            : 400,
        fontStyle:
          block.props.fontStyle.defaultValue &&
          block.props.fontStyle.defaultValue == "1"
            ? "italic"
            : "normal",
        textDecoration:
          block.props.textDecoration.defaultValue &&
          block.props.textDecoration.defaultValue == "1"
            ? "underline"
            : "none",
        letterSpacing: block.props.letterSpacing.defaultValue + "px",
        lineHeight: block.props.lineHeight.defaultValue + "px",
        backgroundColor: block.props.backgroundColor.defaultValue,
        backgroundImage: `url(${block.props.backgroundImage.defaultValue})`,
        "background-size": `cover`,
        paddingLeft: block.props.leftRightPadding.defaultValue + "px",
        paddingRight: block.props.leftRightPadding.defaultValue + "px",
        marginTop: block.props.marginTop.defaultValue + "px",
        marginBottom: block.props.marginBottom.defaultValue + "px",
      }
    })
    return createVNode(render, {
      text: block.props.text.defaultValue,
      style: style.value,
    })
  },
  // priview: () => <textarea placeholder="请输入内容"></textarea>,
  label: "文本",
  props: {
    text: {
      label: "内容",
      defaultValue: "",
      type: "textarea",
    },
    fontFamily: {
      label: "字体",
      defaultValue: '"SF Pro Display"',
      type: "select",
      options: [
        // "SF Pro Display",无衬线体 Roboto,Noto,Arial,"PingFang SC","Hiragino Sans GB","Microsoft YaHei",sans-serif
        {
          name: "跟随系统",
          value: '"SF Pro Display"',
        },
        {
          name: "微软雅黑",
          value: '"Microsoft YaHei"',
        },
        {
          name: "平方",
          value: '"PingFang SC"',
        },
        {
          name: "无衬线",
          value: '"sans-serif"',
        },
      ],
    },
    fontSize: {
      label: "字号",
      defaultValue: 14,
      type: "number",
    },
    color: {
      label: "字体颜色",
      defaultValue: "#333",
      type: "color",
    },
    textAlign: {
      label: "居中",
      defaultValue: "2",
    },
    fontWeight: {
      label: "加粗",
      defaultValue: "2",
    },
    fontStyle: {
      label: "倾斜",
      defaultValue: "2",
    },
    textDecoration: {
      // underline
      label: "下划线",
      defaultValue: "2",
    },
    letterSpacing: {
      label: "字间距",
      defaultValue: 0,
    },
    lineHeight: {
      label: "行间距",
      defaultValue: 24,
    },
    leftRightPadding: {
      label: "左右间距",
      defaultValue: 0,
    },
    marginTop: {
      label: "上间距",
      defaultValue: 0,
    },
    marginBottom: {
      label: "下间距",
      defaultValue: 0,
    },
    backgroundColor: {
      label: "背景颜色",
      defaultValue: "rgba(255,255,255,0)",
    },
    backgroundImage: {
      label: "背景图",
      defaultValue: "",
    },
  },
  controlView: (block, updateBlock) => {
    let props = block.props
    function onChange(obj: any) {
      try {
        if (obj.type) {
          block.props[obj.type].defaultValue = obj.value
          updateBlock(block)
        }
      } catch (error) {}
    }
    let render = createVNode(control, {
      block: block,
      textAlign: props.textAlign.defaultValue,
      fontWeight: props.fontWeight.defaultValue,
      fontStyle: props.fontStyle.defaultValue,
      textDecoration: props.textDecoration.defaultValue,
      onChange,
    })
    return render
  },
} as VisualEditorComponent
