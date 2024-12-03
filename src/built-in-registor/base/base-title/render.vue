<template>
  <div
    class="editor-built-in-registor-base-title"
    :style="{
      ...style,
    }"
  >
    <!-- <div>
      {{ text ? text : "默认标题" }}
    </div> -->
    <div v-for="text in texts">
      {{ text }}
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed } from "vue"

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
let texts = computed(() => {
  return props.text.split("\n")
})
function getLineHeight() {
  if (texts.value.length == 1) {
    return "28px"
  } else {
    return "28px"
  }
}
</script>
<style lang="scss" scoped>
.editor-built-in-registor-base-title {
  // min-height: 48px;
  // line-height: 48px;
  text-align: center;
  font-weight: 800;
  padding: 10px 0;
}
</style>
