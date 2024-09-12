<template>
  <div class="editor-built-in-control-base-submit">
    <div class="h-line"></div>
    <div class="flex mt24 options">
      <span class="option-label">是否吸底</span>
      <div>
        <a-switch
          :default-checked="block.props.fixedBottom.defaultValue == '1'"
          @change="switchChange($event, 'fixedBottom')"
        />
      </div>
    </div>
    <div class="flex mt24 options">
      <span class="option-label">显示提交次数</span>
      <div>
        <a-switch
          :default-checked="block.props.visibleSubmitNum.defaultValue == '1'"
          @change="switchChange($event, 'visibleSubmitNum')"
        />
      </div>
    </div>
    <div
      class="flex mt24 options"
      v-if="block.props.visibleSubmitNum.defaultValue == '1'"
    >
      <span class="option-label">初始次数</span>
      <div class="pl24">
        <a-input
          placeholder="请输入初始次数"
          v-model="block.props.submitNum.defaultValue"
        />
      </div>
    </div>
    <div
      class="flex mt24 options"
      v-if="block.props.visibleSubmitNum.defaultValue == '1'"
    >
      <span class="option-label">提示语内容</span>
    </div>
    <!-- <div class="mt24" v-if="block.props.visibleSubmitNum.defaultValue == '1'">
      <a-input
        placeholder="提示语"
        v-model="block.props.submitTip.defaultValue"
      >
        <template #prepend>
          目前已有{{ block.props.submitNum.defaultValue }}人
        </template>
      </a-input>
    </div> -->
    <div class="mt24" v-if="block.props.visibleSubmitNum.defaultValue == '1'">
      <a-input
        placeholder="提示语"
        v-model="block.props.submitTip.defaultValue"
      >
      </a-input>
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
.editor-built-in-control-base-submit {
  .options {
    justify-content: space-between;
    span {
      flex-shrink: 0;
    }
  }
}
</style>
