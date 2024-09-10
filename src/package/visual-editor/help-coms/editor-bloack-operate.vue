<template>
  <div class="editor-bloack-operate" @click="">
    <div class="editor-bloack-wrapper delBlock" @click="operate('delBlock')">
      <a-tooltip
        content="删除"
        position="right"
        background-color="#fff"
        :content-style="{ color: '#03203D' }"
      >
        <span>
          <img
            src="https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17259411491835e51172594114918334048_del.png"
            alt=""
            class="normal"
          />
          <img
            src="https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/1725941164448431a172594116444889284_delactive.png"
            alt=""
            class="active"
          />
        </span>
      </a-tooltip>
    </div>
    <div class="editor-bloack-wrapper upBlock" @click="operate('upBlock')">
      <a-tooltip
        content="上移"
        position="right"
        background-color="#fff"
        :content-style="{ color: '#03203D' }"
      >
        <span>
          <img
            src="https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17259360388553014172593603885564004_up.png"
            alt=""
            class="normal"
          />
          <img
            src="https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/1725941183069596d172594118306988961_down.png"
            alt=""
            style="transform: rotateZ(180deg)"
            class="active"
          />
        </span>
      </a-tooltip>
    </div>
    <div class="editor-bloack-wrapper downBlock" @click="operate('downBlock')">
      <a-tooltip
        content="下移"
        position="right"
        background-color="#fff"
        :content-style="{ color: '#03203D' }"
      >
        <span>
          <img
            src="https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17259360388553014172593603885564004_up.png"
            alt=""
            class="normal"
          />
          <img
            src="https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/1725941183069596d172594118306988961_down.png"
            alt=""
            style="transform: rotateZ(180deg)"
            class="active"
          />
        </span>
      </a-tooltip>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { defineEmits } from "vue"
const emit = defineEmits(["operate"])
function operate(type: string) {
  emit("operate", type)
}
</script>
<style lang="scss">
@import "../../scss/editor.block.scss";
</style>
