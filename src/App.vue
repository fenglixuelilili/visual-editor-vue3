<template>
  <div style="width: 100%; height: 100%">
    <visualEditor v-model="data" :config="config" debug dragMove />
    <!-- <priviewVisualEditor v-model="data" /> -->
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue"
import {
  visualEditor,
  logConfig,
  priviewVisualEditor,
} from "./package/visual-editor/index"
export default defineComponent({
  components: {
    visualEditor,
    priviewVisualEditor,
  },
  data() {
    return {
      data: {
        container: {
          width: 350,
          height: 600,
          backgroundColor: "#BA2C2C",
          scale: 100,
          backgroundImage: "",
          // wrapper: 600,
        },
        blocks: [
          // {
          //   adjustmentPosition: true,
          //   focus: false,
          //   zIndex: 0,
          //   hasResize: false,
          //   width: 0,
          //   height: 0,
          //   id: 47563894,
          //   dragMode: "",
          //   widthAdaption100: false,
          //   top: 0,
          //   left: 0,
          //   componentKey: "baseSuccess",
          //   props: {
          //     successSrc: {
          //       defaultValue:
          //         "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17262956483528fb5172629564835229384_succ.png",
          //       label: "成功图标",
          //       type: "imgUpload",
          //       key: "successSrc",
          //     },
          //     successText: {
          //       defaultValue: "提交成功",
          //       label: "成功标题",
          //       type: "input",
          //       key: "successText",
          //     },
          //     successColor: {
          //       defaultValue: "#fff",
          //       label: "成功标题文字颜色",
          //       type: "color",
          //       key: "successColor",
          //     },
          //     successDesc: {
          //       defaultValue: "您的信息已经提交成功，感谢您的参与！",
          //       label: "成功提示",
          //       type: "input",
          //       key: "successDesc",
          //     },
          //     successDescColor: {
          //       defaultValue: "#fff",
          //       label: "成功提示文字颜色",
          //       type: "color",
          //       key: "successDescColor",
          //     },
          //     successQR: {
          //       defaultValue:
          //         "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17262959890995db4172629598909914996_1.jpg",
          //       label: "联系二维码",
          //       type: "imgUpload",
          //       key: "successQR",
          //     },
          //     successBottomText: {
          //       defaultValue: "关注公众号，了解更多",
          //       label: "相关提示信息",
          //       type: "input",
          //       key: "successBottomText",
          //     },
          //     successBottomColor: {
          //       defaultValue: "#fff",
          //       label: "相关提示信息文字颜色",
          //       type: "color",
          //       key: "successBottomColor",
          //     },
          //   },
          //   x: 1,
          //   y: 1,
          //   w: 1,
          //   h: 1,
          // },
          // {
          //   id: 1,
          //   i: 1,
          //   adjustmentPosition: false,
          //   focus: false,
          //   zIndex: 0,
          //   hasResize: false,
          //   width: 64,
          //   height: 21,
          //   top: 184.5,
          //   left: 206,
          //   componentKey: "text",
          //   props: {
          //     fontSize: 18,
          //     color: "green",
          //     text: "你好请教",
          //   },
          //   dragMode: "updown",
          //   w: 1,
          //   h: 1,
          //   x: 1,
          //   y: 1,
          // },
          // {
          //   id: 2,
          //   i: 2,
          //   adjustmentPosition: false,
          //   focus: false,
          //   zIndex: 0,
          //   hasResize: false,
          //   width: 43,
          //   height: 23,
          //   top: 118.5,
          //   left: 312.5,
          //   componentKey: "button",
          //   props: {},
          //   dragMode: "updown",
          //   w: 1,
          //   h: 1,
          //   x: 1,
          //   y: 1,
          // },
          // {
          //   id: 3,
          //   i: 3,
          //   adjustmentPosition: false,
          //   focus: false,
          //   zIndex: 0,
          //   hasResize: false,
          //   width: 177,
          //   height: 23,
          //   top: 305.5,
          //   left: 259.5,
          //   componentKey: "input",
          //   props: {},
          //   dragMode: "updown",
          //   w: 1,
          //   h: 1,
          //   x: 1,
          //   y: 1,
          // },
        ],
      },
      config: {
        shortcutKeys: true,
        markLine: true,
        shiftMove: false,
      },
    }
  },
  mounted() {
    console.log(logConfig())
  },
})
</script>
<style lang="scss">
@import url("./static/css/reset.scss");
#app {
  width: 100%;
  height: 100%;
}
body {
  height: 100vh;
}
</style>
