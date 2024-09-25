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
    <div class="successBottomText">
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
</script>
<style lang="scss" scoped>
.editor-built-in-registor-base-success {
  width: 100%;
  height: 100%;
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
    span {
      font-weight: 800;
      font-size: 34px;
    }
  }
  .successDesc {
    margin-bottom: 40px;
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
}
</style>
