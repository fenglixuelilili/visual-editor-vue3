<template>
  <a-form
    style="width: '100%'"
    label-align="left"
    auto-label-width
    layout="vertical"
    :model="{}"
  >
    <template v-for="config in editorControlView">
      <a-form-item
        :label="config.label"
        :key="config.label"
        v-if="
          currentBlock.props[config.key]?.isShowFunc
            ? currentBlock.props[config.key].isShowFunc(currentBlock.props)
            : true
        "
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
          <span class="ml12" v-if="currentBlock.props[config.key]?.unit">
            {{ currentBlock.props[config.key]?.unit }}
          </span>
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
            :min="
              currentBlock.props[config.key]?.min
                ? currentBlock.props[config.key]?.min * 1
                : 0
            "
            :max="
              currentBlock.props[config.key]?.max
                ? currentBlock.props[config.key]?.max * 1
                : 100
            "
            mode="button"
            size="large"
          />
          <span class="ml12" v-if="currentBlock.props[config.key]?.unit">
            {{ currentBlock.props[config.key]?.unit }}
          </span>
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
              :min="
                currentBlock.props[config.key]?.min
                  ? currentBlock.props[config.key]?.min * 1
                  : 0
              "
              :max="
                currentBlock.props[config.key]?.max
                  ? currentBlock.props[config.key]?.max * 1
                  : 100
              "
              :disabled="!!currentBlock.props[config.key]?.disabled"
              v-model="currentBlock.props[config.key].defaultValue"
              style="width: 250px; display: flex"
              show-input
            />
          </a-space>
          <span class="ml12" v-if="currentBlock.props[config.key]?.unit">
            {{ currentBlock.props[config.key]?.unit }}
          </span>
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
          v-if="
            config.type == 'fileUpload' &&
            'defaultValue' in currentBlock.props[config.key]
          "
          class="w100"
        >
          <upload-file
            v-model="currentBlock.props[config.key].defaultValue"
          ></upload-file>
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
            :placeholder="`请选择${config.label}`"
            v-model="currentBlock.props[config.key].defaultValue"
            allow-clear
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
        <div
          class="w100"
          v-if="
            config.type == 'radio' &&
            'defaultValue' in currentBlock.props[config.key]
          "
        >
          <a-radio-group
            v-model="currentBlock.props[config.key].defaultValue"
            allow-clear
          >
            <a-radio
              v-for="(item, i) in currentBlock.props[config.key].options"
              :key="i"
              :value="item.value"
            >
              {{ item.name }}
            </a-radio>
          </a-radio-group>
        </div>
      </a-form-item>
    </template>
  </a-form>
</template>
<script setup lang="ts">
import { defineProps, PropType } from "vue"
import type { block, controlViewConfigtype } from "@/types/editor"
import uploadImg from "./control-views/upload-img.vue"
import uploadFile from "./control-views/upload-file.vue"
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
.ml12 {
  margin-left: 12px;
}
</style>
