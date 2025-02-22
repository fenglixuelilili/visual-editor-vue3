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
    <div class="form-item" v-if="showType == '1'">
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
    <div class="form-item-pu" v-if="showType == '2'">
      <div class="item" v-for="(item, i) in options" :key="i">
        <div class="control-input"></div>
        <div class="text">{{ item.name ? item.name : "请填写内容" }}</div>
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
  showType: {
    type: String,
    default: "1",
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
  .form-item-pu {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-top: -8px;
    .item {
      min-width: 50%;
      display: flex;
      align-items: center;
      margin-top: 16px;
      .control-input {
        width: 14px;
        height: 14px;
        background: #ffffff;
        border-radius: 2px;
        border: 1px solid rgba(3, 32, 61, 0.35);
        margin-right: 10px;
        border-radius: 50%;
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
