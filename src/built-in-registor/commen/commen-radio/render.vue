<template>
  <div class="editor-built-in-commen-radio" :style="style">
    <div class="title-tip">
      <span class="red" v-if="isRequire">*</span>
      <span>{{ title }}</span>
    </div>
    <div
      class="base-tip"
      v-if="tip.trim().length > 0"
      style="margin-top: 8px; margin-bottom: 12px"
    >
      {{ tip }}
    </div>
    <div class="form-item">
      <!-- <div class="item" v-for="(item, i) in options" :key="i">
        <div class="control-input"></div>
        <div class="text">{{ item.name ? item.name : "请填写内容" }}</div>
      </div> -->
      <div class="item" @click="tipMessage">
        <span>{{ placeholder }}</span>
        <div class="right">
          <img
            src="https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17262332381814dfe172623323818180331_right%20(1).png"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { Message } from "@arco-design/web-vue"
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
  placeholder: {
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
function tipMessage() {
  Message.warning("请在移动端预览真机效果！")
}
</script>
<style lang="scss" scoped>
@import "../../commen.scss";
.editor-built-in-commen-radio {
  padding: 10px 24px;
  .form-item {
    // display: flex;
    // align-items: center;
    // flex-wrap: wrap;
    margin-top: 8px;
    background: #f5f7fa;
    height: 40px;
    border-radius: 4px;
    cursor: pointer;
    .item {
      height: 100%;

      display: flex;
      align-items: center;
      // margin-top: 16px;
      justify-content: space-between;
      padding: 0 12px;
      span {
        color: #c0c7ce;
      }
      .right {
        img {
          width: 16px;
        }
      }
    }
  }
}
</style>
