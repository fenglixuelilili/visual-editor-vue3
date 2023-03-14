<template>
  <div>
    <visualEditor v-model="data" :config="renderConfig" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue"
import { visualEditor } from "./package/visual-editor/index"
import renderConfig from "./package/visual-editor/visuaEditorComponents"
export default defineComponent({
  components: {
    visualEditor,
  },
  data() {
    return {
      data: {
        container: {
          width: 600,
          height: 500,
        },
        blocks: [
          {
            id: 1,
            adjustmentPosition: false,
            focus: false,
            zIndex: 0,
            hasResize: false,
            width: 64,
            height: 21,
            top: 184.5,
            left: 206,
            componentKey: "text",
            props: {
              fontSize: 18,
              color: "green",
              text: "你好请教",
            },
          },
          {
            id: 2,
            adjustmentPosition: false,
            focus: false,
            zIndex: 0,
            hasResize: false,
            width: 43,
            height: 23,
            top: 118.5,
            left: 312.5,
            componentKey: "button",
            props: {},
          },
          {
            id: 3,
            adjustmentPosition: false,
            focus: false,
            zIndex: 0,
            hasResize: false,
            width: 177,
            height: 23,
            top: 305.5,
            left: 259.5,
            componentKey: "input",
            props: {},
          },
        ],
      },
      renderConfig,
    }
  },
})
</script>
<style lang="scss">
@import url("./static/css/reset.scss");
</style>
