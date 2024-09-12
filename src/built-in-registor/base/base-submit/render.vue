<template>
  <div class="editor-built-in-registor-base-submit" ref="baseSubmit">
    <div class="submit" :style="style">
      {{ text }}
    </div>
    <div class="tip" v-if="visibleSubmitNum">
      ——{{ getSubmitTip(submitTip) }}——
    </div>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, onUpdated, ref, watch } from "vue"
let baseSubmit = ref<any>(null)
const props = defineProps({
  style: {
    type: Object,
    default: () => ({}),
  },
  text: {
    type: String,
    default: "",
  },
  fixedBottom: {
    type: Boolean,
    default: false,
  },
  visibleSubmitNum: {
    type: Boolean,
    default: false,
  },
  submitNum: {
    type: Number,
    default: 0,
  },
  submitTip: {
    type: String,
    default: "",
  },
})
function setBottom(isSet: boolean) {
  if (baseSubmit.value?.parentNode && isSet) {
    ;(baseSubmit.value?.parentNode as any).style.position = "absolute"
    ;(baseSubmit.value?.parentNode as any).style.zIndex = 10
    ;(baseSubmit.value?.parentNode as any).style.bottom = props.visibleSubmitNum
      ? "0px"
      : "20px"
    ;(baseSubmit.value?.parentNode as any).style.top = "auto"
  } else {
    ;(baseSubmit.value?.parentNode as any).style.position = "relative"
    ;(baseSubmit.value?.parentNode as any).style.top = 0
    ;(baseSubmit.value?.parentNode as any).style.bottom = "auto"
  }
}
function getSubmitTip(str: string) {
  return str.replace("$num", props.submitNum + "")
}
onMounted(() => {
  setBottom(props.fixedBottom)
})
onUpdated(() => {
  setBottom(props.fixedBottom)
})
watch(
  () => props.fixedBottom,
  () => {
    setBottom(props.fixedBottom)
  }
)
</script>
<style lang="scss" scoped>
.editor-built-in-registor-base-submit {
  // height: 48px;
  // line-height: 48px;
  // text-align: center;
  // font-weight: 800;
  width: 100%;
  .submit {
    width: 92%;
    height: 45px;
    line-height: 45px;
    margin: 0 auto;
    text-align: center;
    border-radius: 4px;
  }

  .tip {
    text-align: center;
    line-height: 30px;
    font-size: 12px;
    color: rgba(3, 32, 61, 0.65);
    line-height: 32px;
    margin-top: 6px;
  }
  // &.fixedBottom {
  //   position: absolute;
  //   bottom: 20px;
  //   left: 0;
  //   right: 0;
  //   width: 100%;
  // }
}
</style>
