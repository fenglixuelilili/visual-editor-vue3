<template>
  <div
    class="editor-built-in-registor-base-success"
    :style="{ height: height + 'px' }"
  >
    <div class="successImg">
      <img :src="successSrc" alt="" />
    </div>
    <div class="successText">
      <span :style="{ color: successColor }">{{ successText }}</span>
    </div>
    <div class="successDesc">
      <span :style="{ color: successDescColor }">{{ successDesc }}</span>
    </div>
    <div class="successQR">
      <img :src="successQR" alt="" />
    </div>
    <div class="successBottomText" @click="goLink">
      <span :style="{ color: successBottomColor }">
        {{ successBottomText }}
      </span>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref } from "vue"
let height = ref(0)
const props = defineProps({
  successSrc: {
    type: String,
    default: "",
  },
  successText: {
    type: String,
    default: "",
  },
  successDesc: {
    type: String,
    default: "",
  },
  successQR: {
    type: String,
    default: "",
  },
  successBottomText: {
    type: String,
    default: "",
  },
  successColor: {
    type: String,
    default: "",
  },
  successDescColor: {
    type: String,
    default: "",
  },
  successBottomColor: {
    type: String,
    default: "",
  },
  successLink: {
    type: String,
    default: "",
  },
})
onMounted(() => {
  let visualEditorAreaContent = document.querySelector(
    ".visual-editor-area-content"
  ) as HTMLElement
  console.log(visualEditorAreaContent.offsetHeight)
  height.value = visualEditorAreaContent?.offsetHeight
    ? visualEditorAreaContent?.offsetHeight
    : 600
})
function goLink() {
  const inputString: string = props.successLink
  // 正则表达式模式，用于匹配 URL
  const urlPattern = /https?:\/\/[^\s]+/
  // 使用正则表达式匹配 URL
  const firstUrl = inputString.match(urlPattern)
    ? (inputString.match(urlPattern) as string[])[0]
    : null
  if (firstUrl) {
    window.open(firstUrl)
  }
}
</script>
<style lang="scss" scoped>
.editor-built-in-registor-base-success {
  width: 100%;
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .successImg {
    margin-bottom: 30px;
    img {
      width: 40px;
    }
  }
  .successText {
    margin-bottom: 20px;
    width: 80%;
    text-align: center;
    span {
      font-weight: 800;
      font-size: 34px;
    }
  }
  .successDesc {
    width: 80%;
    text-align: center;
    margin-bottom: 40px;
    line-height: 20px;
    span {
      font-size: 12px;
      margin-bottom: 50px;
    }
  }
  .successQR {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;
    width: 120px;
    height: 120px;
    background-color: #fff;
    border-radius: 10px;
    padding: 10px;
    img {
      width: 110px;
    }
  }
  .successBottomText {
    width: 80%;
    text-align: center;
    line-height: 20px;
  }
}
</style>
