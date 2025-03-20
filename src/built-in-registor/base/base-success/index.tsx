import { createVNode } from "vue"
import { VisualEditorComponent } from "../../../types/index"
import render from "./render.vue"
import control from "./control.vue"
export default {
  group: "基础组件",
  name: "baseSuccess",
  icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/1726294902723b41a17262949027235096_ss.png",
  activeIcon:
    "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/1726294902723b41a17262949027235096_ss.png",
  hide: false,
  render: (block) => {
    let props = block.props
    return createVNode(render, {
      successSrc: props.successSrc.defaultValue,
      successText: props.successText.defaultValue,
      successDesc: props.successDesc.defaultValue,
      successQR: props.successQR.defaultValue,
      successBottomText: props.successBottomText.defaultValue,
      successColor: props.successColor.defaultValue,
      successDescColor: props.successDescColor.defaultValue,
      successBottomColor: props.successBottomColor.defaultValue,
      successLink: props?.successLink ? props.successLink.defaultValue : "",
    })
  },
  // priview: () => <textarea placeholder="请输入内容"></textarea>,
  label: "成功页",
  props: {
    successSrc: {
      defaultValue:
        "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17262956483528fb5172629564835229384_succ.png",
      label: "成功图标",
      type: "imgUpload",
    },
    successText: {
      defaultValue: "提交成功",
      label: "成功标题",
      type: "input",
    },
    successColor: {
      defaultValue: "#fff",
      label: "成功标题文字颜色",
      type: "color",
    },
    successDesc: {
      defaultValue: "您的信息已经提交成功，感谢您的参与！",
      label: "成功提示",
      type: "textarea",
    },
    successDescColor: {
      defaultValue: "#fff",
      label: "成功提示文字颜色",
      type: "color",
    },
    successQR: {
      defaultValue:
        "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17262959890995db4172629598909914996_1.jpg",
      label: "联系二维码",
      type: "imgUpload",
    },
    successBottomText: {
      defaultValue: "关注公众号，了解更多",
      label: "相关提示信息",
      type: "textarea",
    },
    successLinkType: {
      defaultValue: "1",
      label: "跳转类型",
      type: "radio",
      options: [
        {
          name: "链接跳转",
          value: "1",
        },
        {
          name: "文件跳转",
          value: "2",
        },
      ],
    },
    successFileLink: {
      defaultValue: "",
      label: "跳转文件",
      type: "fileUpload",
      isShowFunc(config: any) {
        console.log(config)
        try {
          if (config.successLinkType && config.successLinkType.defaultValue) {
            return config.successLinkType.defaultValue == "2"
          }
        } catch (error) {
          console.log(error)
        }
        return true
      },
    },
    successLink: {
      defaultValue: "",
      label: "跳转链接",
      type: "input",
      isShowFunc(config: any) {
        console.log(config)
        try {
          if (config.successLinkType && config.successLinkType.defaultValue) {
            return config.successLinkType.defaultValue == "1"
          }
        } catch (error) {
          console.log(error)
        }
        return true
      },
    },
    successBottomColor: {
      defaultValue: "#fff",
      label: "相关提示信息文字颜色",
      type: "color",
    },
  },
  controlView: (block, updateBlock) => {
    return <div></div>
  },
} as VisualEditorComponent
