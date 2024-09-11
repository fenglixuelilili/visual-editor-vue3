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
          :disabled="!!currentBlock.props[config.key]?.disabled"
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
          :disabled="!!currentBlock.props[config.key]?.disabled"
        />
      </div>
      <div
        v-if="
          config.type == 'textarea' &&
          'defaultValue' in currentBlock.props[config.key]
        "
      >
        <a-textarea
          :auto-size="{
            minRows: 2,
            maxRows: 6,
          }"
          v-model="currentBlock.props[config.key].defaultValue"
          :style="{ width: '250px' }"
          :placeholder="`请输入${config.label}`"
          allow-clear
          :disabled="!!currentBlock.props[config.key]?.disabled"
        />
      </div>
      <div
        v-if="
          config.type == 'number' &&
          'defaultValue' in currentBlock.props[config.key]
        "
      >
        <a-input-number
          v-model="currentBlock.props[config.key].defaultValue"
          :style="{ width: '150px' }"
          :placeholder="`请输入${config.label}`"
          :disabled="!!currentBlock.props[config.key]?.disabled"
          :min="0"
          mode="button"
          size="large"
        />
      </div>
      <div
        class="w100"
        v-if="
          config.type == 'slider' &&
          'defaultValue' in currentBlock.props[config.key]
        "
      >
        <a-space size="large">
          <a-slider
            :min="0"
            :max="200"
            :disabled="!!currentBlock.props[config.key]?.disabled"
            v-model="currentBlock.props[config.key].defaultValue"
            style="width: 250px; display: flex"
            show-input
          />
        </a-space>
      </div>
      <div
        v-if="
          config.type == 'imgUpload' &&
          'defaultValue' in currentBlock.props[config.key]
        "
        class="w100"
      >
        <upload-img
          v-model="currentBlock.props[config.key].defaultValue"
        ></upload-img>
      </div>
      <div
        class="w100"
        v-if="
          config.type == 'select' &&
          'defaultValue' in currentBlock.props[config.key]
        "
      >
        <a-select
          :style="{ width: '250px' }"
          :placeholder="`请输入${config.label}`"
          v-model="currentBlock.props[config.key].defaultValue"
        >
          <a-option
            v-for="(item, i) in currentBlock.props[config.key].options"
            :key="i"
            :value="item.value"
          >
            {{ item.name }}
          </a-option>
        </a-select>
      </div>
    </a-form-item>
  </a-form>
</template>
<script setup lang="ts">
import { defineProps, PropType } from "vue"
import type { block, controlViewConfigtype } from "@/types/editor"
import uploadImg from "./control-views/upload-img.vue"
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
</script>
<style lang="scss" scoped>
.w100 {
  width: 100%;
}
</style>
