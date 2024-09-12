<template>
  <div class="editor-built-in-person-year" :style="style">
    <div class="title-tip mb8">
      <span class="red" v-if="isRequire">*</span>
      <span>{{ title }}</span>
    </div>
    <div class="form-item">
      <a-select
        style="height: 40px; line-height: 40px; width: 100%"
        :placeholder="placeholder"
        :model-value="value"
      >
        <a-option :value="2020">2020</a-option>
        <a-option :value="2021">2021</a-option>
        <a-option :value="2022">2022</a-option>
        <a-option :value="2023">2023</a-option>
        <a-option :value="2024">2024</a-option>
        <a-option :value="2025">2025</a-option>
        <a-option :value="2026">2026</a-option>
        <a-option :value="2027">2027</a-option>
        <a-option :value="2028">2028</a-option>
        <a-option :value="2029">2029</a-option>
        <a-option :value="2030">2030</a-option>
      </a-select>
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
})
</script>
<style lang="scss" scoped>
@import "../../commen.scss";
.editor-built-in-person-year {
  // height: 48px;
  // line-height: 48px;
  // text-align: center;
  // font-weight: 800;
  height: 94px;
  padding: 10px 24px;
}
</style>
