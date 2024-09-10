<template>
  <a-form
    style="width: '100%'"
    label-align="left"
    auto-label-width
    layout="vertical"
  >
    <a-form-item
      :label="config.label"
      v-for="(config, i) in editorControlView"
      :key="i"
    >
      <div
        v-if="
          config.type == 'color' &&
          'defaultValue' in currentBlock.props[config.key]
        "
      >
        <a-color-picker
          v-model="currentBlock.props[config.key].defaultValue"
          show-history
          show-preset
          showText
          disabledAlpha
        />
      </div>
      <div
        v-if="
          config.type == 'input' &&
          'defaultValue' in currentBlock.props[config.key]
        "
      >
        <a-input
          :style="{ width: '250px' }"
          :placeholder="`请输入${config.label}`"
          v-model="currentBlock.props[config.key].defaultValue"
        />
      </div>
      <div
        v-if="
          config.type == 'number' &&
          'defaultValue' in currentBlock.props[config.key]
        "
      >
        <!-- <a-input
          :style="{ width: '250px' }"
          :placeholder="`请输入${config.label}`"
          v-model="currentBlock.props[config.key].defaultValue"
        /> -->
        <a-input-number
          v-model="currentBlock.props[config.key].defaultValue"
          :style="{ width: '250px' }"
          :placeholder="`请输入${config.label}`"
          :min="0"
          mode="button"
          size="large"
        />
      </div>
    </a-form-item>
  </a-form>
</template>
<script setup lang="ts">
import { defineProps, PropType } from "vue"
import type { block, controlViewConfigtype } from "@/types/editor"
type requireTyep<T> = {
  [key in keyof T]: T[key]
}
const props = defineProps({
  editorControlView: {
    type: Array as PropType<requireTyep<controlViewConfigtype>[]>,
    default: () => [],
  },
  currentBlock: {
    type: Object as PropType<block>,
    default: () => {},
  },
})
console.log(props.currentBlock, props.editorControlView, "内部属性")
</script>
<style lang="scss" scoped></style>
