<template>
  <div class="img-upload-container w100">
    <div class="real-img w100" v-if="modelValue">
      <img :src="modelValue" alt="" />
      <div class="real-close" @click="methods.del">
        <img
          src="https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17260265913733099172602659137455379_del.png"
          alt=""
        />
      </div>
    </div>
    <a-button style="width: 100%" class="file-btn">
      {{ modelValue ? "替换图片" : "上传图片" }}
      <input
        type="file"
        class="file-input"
        accept="image/*"
        @change="methods.fileChange"
      />
    </a-button>
  </div>
</template>
<script lang="ts" setup>
import { convertBase64 } from "../../../../utils/index"
import { defineProps, defineEmits } from "vue"
const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
})
const emit = defineEmits(["update:modelValue"])
// console.log(props.currentBlock, props.editorControlView, "内部属性")
const methods = {
  fileChange(e: any) {
    console.log(e.target.files[0])
    let file: File = e.target.files[0]
    convertBase64(file).then((res) => {
      emit("update:modelValue", res)
    })
  },
  del() {
    emit("update:modelValue", "")
  },
}
</script>
<style lang="scss" scoped>
.w100 {
  width: 100%;
}
// 图片设置
.img-upload-container {
  .real-img {
    margin-bottom: 10px;
    position: relative;
    img {
      width: 100%;
    }
    .real-close {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgba(0, 0, 0, 0.4);
      cursor: pointer;
      img {
        width: 20px;
        height: 20px;
      }
    }
  }
  .file-btn {
    position: relative;
    .file-input {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      cursor: pointer;
      opacity: 0;
    }
  }
}
</style>
