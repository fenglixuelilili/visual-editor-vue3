<template>
  <div class="buttons">
    <div
      class="button"
      v-for="(btn, i) in buttons"
      :key="i"
      @click="btn.handler"
    >
      <a-tooltip :content="getContent(btn)" position="right" :key="i">
        <img :src="btn.icon" alt="" />
      </a-tooltip>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { defineProps, PropType } from "vue"
import { getBtns } from "../../utils/index"
let props = defineProps({
  buttons: {
    type: Array as PropType<ReturnType<typeof getBtns>>,
    default: () => [],
  },
})
function getContent(btn: any) {
  if (!btn.tip) {
    return `${btn.label}`
  }
  return `${btn.label}(${btn.tip})`
}
</script>
<style lang="scss" scoped>
.buttons {
  display: flex;
  align-items: center;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  .button {
    // margin-bottom: 20px;
    padding: 10px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    img {
      width: 50%;
      user-select: none;
      // pointer-events: none;
    }
  }
}
</style>
