<template>
  <div>
    <visualEditor v-model="data" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue"
import { visualEditor } from "./package/visual-editor/index"
export default defineComponent({
  components: {
    visualEditor,
  },
  data() { 
    return {
      data: {
        container: {
          width: 600,
          height: 500
        },
        blocks: [
          {
            left: 200,
            top: 40
          },
          {
            left: 100,
            top: 90
          },
        ]
      }
    }
  }
})
</script>
<style lang="scss">
@import url("./static/css/reset.scss");
</style>
