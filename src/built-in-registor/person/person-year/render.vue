<template>
  <div class="editor-built-in-person-year" :style="style">
    <div class="title-tip mb8">
      <span class="red" v-if="isRequire">*</span>
      <span>{{ title }}</span>
    </div>
    <div class="base-tip" style="margin-top: 6px" v-if="tip.trim().length > 0">
      {{ tip }}
    </div>
    <div class="form-item">
      <a-select
        style="height: 40px; line-height: 40px; width: 100%"
        :placeholder="placeholder"
        :model-value="value"
      >
        <a-option :value="item.id + ''" v-for="item in options">
          {{ item.name }}
        </a-option>
      </a-select>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { PropType } from "vue"

const props = defineProps({
  style: {
    type: Object,
    default: () => ({}),
  },
  options: {
    type: Array as PropType<{ id: string; name: string }[]>,
    default: () => [],
  },
  title: {
    type: String,
    default: "",
  },
  value: {
    type: String,
    default: "",
  },
  tip: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "",
  },
  isRequire: {
    type: Boolean,
    default: false,
  },
})
</script>
<style lang="scss" scoped>
@import "../../commen.scss";
.editor-built-in-person-year {
  // height: 48px;
  // line-height: 48px;
  // text-align: center;
  // font-weight: 800;
  min-height: 94px;
  padding: 10px 24px;
}
</style>
