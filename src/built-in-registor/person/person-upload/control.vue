<template>
  <div class="editor-built-in-control-person-upload">
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
function switchChange(bol: any, type: string) {
  props.block.props[type].defaultValue = bol ? "1" : "2"
}
</script>
<style lang="scss" scoped>
@import "../../commen.scss";
.editor-built-in-control-person-upload {
  .options {
    justify-content: space-between;
    span {
      flex-shrink: 0;
    }
  }
}
</style>
