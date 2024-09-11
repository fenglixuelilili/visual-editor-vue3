<template>
  <div class="editor-built-in-registor-base-title" :style="style">
    {{ text }}
  </div>
</template>
<script lang="ts" setup>
const props = defineProps({
  style: {
    type: Object,
    default: () => ({}),
  },
  text: {
    type: String,
    default: "",
  },
})
</script>
<style lang="scss" scoped>
.editor-built-in-registor-base-title {
  height: 48px;
  line-height: 48px;
  text-align: center;
  font-weight: 800;
}
</style>
