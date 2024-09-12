<template>
  <div class="editor-built-in-person-upload" :style="style">
    <div class="title-tip mb8">
      <span class="red" v-if="isRequire">*</span>
      <span>{{ title }}</span>
    </div>
    <div class="form-item">
      <!-- <div class="lists">
        <div class="list">
        </div>
      </div> -->
      <div class="btn">
        <span>上传文件</span>
        <input type="file" class="file" />
      </div>
      <div class="tip title-tip" v-if="tip">{{ tip }}</div>
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
  max: {
    type: Number,
    default: 0,
  },
  tip: {
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
.editor-built-in-person-upload {
  // height: 94px;
  padding: 10px 24px;
  .btn {
    width: 100%;
    height: 40px;
    border-radius: 6px;
    border: 1px dashed #00906d;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    font-size: 14px;
    color: #00a680;
    line-height: 20px;
    text-align: center;
    font-style: normal;
    cursor: pointer;
    position: relative;
    .file {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
    }
  }
  .tip {
    margin-top: 10px;
    color: rgba(3, 32, 61, 0.65);
    text-align: center;
    font-size: 12px;
  }
}
</style>
