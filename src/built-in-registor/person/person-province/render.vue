<template>
  <div class="editor-built-in-commen-radio" :style="style">
    <div class="title-tip">
      <span class="red" v-if="isRequire">*</span>
      <span>{{ title }}</span>
    </div>
    <div class="base-tip" style="margin-top: 6px" v-if="tip.trim().length > 0">
      {{ tip }}
    </div>
    <div class="form-item" @click="tipMessage">
      <div class="item">
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
    margin-top: 8px;
    background: #f5f7fa;
    height: 40px;
    border-radius: 4px;
    cursor: pointer;
    .item {
      height: 100%;
      display: flex;
      align-items: center;
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
