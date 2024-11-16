<template>
  <div class="editor-built-in-check-phone" :style="style">
    <div class="title-tip mb8">
      <span class="red" v-if="isRequire">*</span>
      <span>{{ title }}</span>
    </div>
    <div class="base-tip" v-if="tip.trim().length > 0">{{ tip }}</div>
    <div class="form-item">
      <div class="item">
        <a-input
          style="height: 40px; line-height: 40px; width: 100%"
          :placeholder="placeholder"
        />
      </div>
      <div class="item flex">
        <div class="input">
          <a-input
            style="height: 40px; line-height: 40px; flex: 1"
            placeholder="验证码"
          />
          <div class="success">
            <img
              src="https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/1726134731750817f172613473175020802_dui.png"
              alt=""
            />
          </div>
        </div>
        <div class="button">发送验证码</div>
      </div>
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
</script>
<style lang="scss" scoped>
@import "../../commen.scss";
.editor-built-in-check-phone {
  padding: 10px 24px;
  padding-bottom: 1px;
  .form-item {
    .item {
      margin-bottom: 12px;
      justify-content: space-between;
      .button {
        width: 102px;
        height: 40px;
        background: #00a680;
        border-radius: 6px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 400;
        font-size: 14px;
        color: #ffffff;
        line-height: 20px;
        font-style: normal;
      }
      .input {
        position: relative;
        .success {
          width: 18px;
          height: 18px;
          background-color: #00a680;
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          right: 10px;
          top: 0;
          bottom: 0;
          margin: auto 0;
          border-radius: 50%;
          img {
            width: 80%;
            height: 80%;
          }
        }
      }
    }
  }
}
</style>
