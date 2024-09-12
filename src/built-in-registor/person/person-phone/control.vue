<template>
  <div class="editor-built-in-control-person-name">
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
    <div class="flex mt24 options">
      <span class="option-label">提交时校验数据唯一性</span>
      <div>
        <a-switch
          :default-checked="block.props.only.defaultValue == '1'"
          @change="switchChange($event, 'only')"
        />
      </div>
    </div>
    <div class="flex mt24 options" v-if="block.props.only.defaultValue == '1'">
      <span class="option-label">校验周期（h）</span>
      <div class="pl24">
        <a-input-number
          v-model="block.props.cycle.defaultValue"
          placeholder="正整数"
          :min="1"
          :max="100"
        >
          <template #append> h </template>
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
.editor-built-in-control-person-name {
  .options {
    justify-content: space-between;
    span {
      flex-shrink: 0;
    }
  }
}
</style>
