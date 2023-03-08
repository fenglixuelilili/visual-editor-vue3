<template>
  <div>
    <visualEditor v-model="data" :config="renderConfig" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue"
import { visualEditor } from "./package/visual-editor/index"
import renderConfig from "./package/visual-editor/visuaEditorComConfig"
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
            left: 200,
            top: 40,
            zIndex: 0,
            // 渲染哪个组件的属性
            componentKey: "text",
            // focus: true,
          },
          {
            left: 100,
            top: 90,
            // 渲染哪个组件的属性
            componentKey: "button",
            zIndex: 0,
            focus: true,
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
