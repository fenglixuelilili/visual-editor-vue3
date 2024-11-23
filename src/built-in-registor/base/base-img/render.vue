<template>
  <div class="editor-built-in-registor-base-img" :style="style">
    <img class="render-img" :src="src" alt="" v-if="src" />
    <div class="empty" v-else>请在控制器中上传图片+</div>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps({
  src: {
    type: String,
    default: "",
  },
  style: {
    type: Object,
    default: () => ({}),
  },
})
</script>
<style lang="scss" scoped>
.editor-built-in-registor-base-img {
  width: 100%;
  .render-img {
    width: 100%;
  }
  .empty {
    width: 100%;
    height: 100px;
    border: 1px dashed #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    color: #ccc;
  }
}
</style>
