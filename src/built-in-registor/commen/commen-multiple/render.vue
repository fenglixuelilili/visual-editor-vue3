<template>
  <div class="editor-built-in-commen-multiple" :style="style">
    <div class="title-tip">
      <span class="red" v-if="isRequire">*</span>
      <span>{{ title }}</span>
    </div>
    <div
      class="base-tip"
      v-if="tip.trim().length > 0"
      style="margin-top: 8px; margin-bottom: 2px"
    >
      {{ tip }}
    </div>
    <div class="form-item">
      <div class="item" v-for="(item, i) in options" :key="i">
        <div class="control-input"></div>
        <div class="text">{{ item.name ? item.name : "请填写内容" }}</div>
      </div>
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
  title: {
    type: String,
    default: "",
  },
  isRequire: {
    type: Boolean,
    default: false,
  },
  options: {
    type: Array as PropType<{ id: string; name: string }[]>,
    default: () => [],
  },
  tip: {
    type: String,
    default: "",
  },
})
</script>
<style lang="scss" scoped>
@import "../../commen.scss";
.editor-built-in-commen-multiple {
  padding: 10px 24px;
  .form-item {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-top: -8px;
    .item {
      // width: 50%;
      min-width: 50%;
      display: flex;
      align-items: center;
      margin-top: 16px;
      .control-input {
        width: 16px;
        height: 16px;
        background: #ffffff;
        border-radius: 2px;
        border: 1px solid rgba(3, 32, 61, 0.35);
        margin-right: 10px;
      }
      .text {
        flex: 1;
        font-family: PingFangSC, PingFang SC;
        font-weight: 400;
        font-size: 16px;
        color: #03203d;
        line-height: 22px;
        text-align: left;
        font-style: normal;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1; /* 显示三行，超出部分使用省略号 */
        overflow: hidden;
      }
    }
  }
}
</style>
