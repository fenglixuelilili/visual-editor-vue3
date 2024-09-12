<template>
  <div class="editor-built-in-registor-person-name" :style="style">
    <div class="title-tip mb8">
      <span class="red" v-if="isRequire">*</span>
      <span>{{ title }}</span>
    </div>
    <div class="form-item">
      <a-input
        style="height: 40px; line-height: 40px; width: 100%"
        :placeholder="placeholder"
        :model-value="value"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps({
  style: {
    type: Object,
    default: () => ({}),
  },
  title: {
    type: String,
    default: "",
  },
  value: {
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
  only: {
    type: Boolean,
    default: false,
  },
  min: {
    type: Number,
    default: 0,
  },
  max: {
    type: Number,
    default: 100,
  },
})
</script>
<style lang="scss" scoped>
@import "../commen.scss";
.editor-built-in-registor-person-name {
  // height: 48px;
  // line-height: 48px;
  // text-align: center;
  // font-weight: 800;
  height: 94px;
  padding: 10px 24px;
}
</style>
