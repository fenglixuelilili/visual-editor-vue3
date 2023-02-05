<template>
  <div>
    <visualEditor />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue"
import { visualEditor } from "./package/visual-editor/index"
export default defineComponent({
  components: {
    visualEditor,
  },
})
</script>
<style lang="scss">
@import url("./static/css/reset.scss");
</style>
