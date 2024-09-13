<template>
  <div class="editor-built-in-control-person-other">
    <div class="h-line"></div>
    <div class="group-title">校验</div>
    <div class="flex mt24 options">
      <span class="option-label">设为必填</span>
      <div>
        <a-switch
          :default-checked="block.props.isRequire.defaultValue == '1'"
          @change="switchChange($event, 'isRequire')"
        />
      </div>
    </div>
    <div class="group-title mt24">填写限制</div>
    <div class="flex mt24 options">
      <span class="option-label">最少填</span>
      <div class="pl24">
        <a-input-number
          v-model="block.props.min.defaultValue"
          placeholder="请输入正整数"
          :min="1"
          :max="100"
        >
          <template #append> 字 </template>
        </a-input-number>
      </div>
    </div>
    <div class="flex mt24 options">
      <span class="option-label">最多填</span>
      <div class="pl24 flex">
        <a-input-number
          v-model="block.props.max.defaultValue"
          placeholder="请输入正整数"
          :min="1"
          :max="100"
        >
          <template #append> 字 </template>
        </a-input-number>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import type { block } from "@/types/editor"
import { PropType } from "vue"
const props = defineProps({
  block: {
    type: Object as PropType<block>,
    default: () => ({}),
  },
})
function switchChange(bol: boolean, type: string) {
  props.block.props[type].defaultValue = bol ? "1" : "2"
}
</script>
<style lang="scss" scoped>
@import "../../commen.scss";
.editor-built-in-control-person-other {
  .options {
    justify-content: space-between;
    span {
      flex-shrink: 0;
    }
  }
}
</style>
