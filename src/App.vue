<template>
  <div style="width: 100%; height: 100%">
    <visualEditor v-model="data" :config="config" />
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
// import "./built-in-registor/textarea"
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
          backgroundColor: "#fff",
          scale: 100,
          // wrapper: 600,
        },
        blocks: [
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
