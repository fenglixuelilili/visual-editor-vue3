<template>
  <div class="editor-built-in-registor-base-title" :style="style">
    <div class="text" :class="{ minHeight: !text }">
      {{ text ? text : "请在右侧控制器中输入内容" }}
    </div>
  </div>
</template>
<script lang="ts" setup>
import { defineProps } from "vue"
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
  .text {
    text-indent: 20px;
    &.minHeight {
      min-height: 150px;
      text-align: center;
      line-height: 150px;
      border: 1px dashed #ccc;
      color: #ccc;
    }
  }
}
</style>
