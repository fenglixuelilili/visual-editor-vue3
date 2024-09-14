<template>
  <div class="visual-tab-type">
    <div
      class="visual-tab-type-com"
      :class="{ active: modelValue == '1' }"
      @click="change('1')"
    >
      <div class="bg-com">
        <div class="bg-img"></div>
      </div>
      <span>组件</span>
    </div>
    <div
      class="visual-tab-type-com visual-tab-type-template"
      :class="{ active: modelValue == '2' }"
      @click="change('2')"
    >
      <div class="bg-com">
        <div class="bg-img"></div>
      </div>
      <span>模版</span>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { defineProps, defineEmits } from "vue"
let props = defineProps({
  modelValue: {
    type: String,
    default: "1",
  },
})
let emit = defineEmits(["update:modelValue", "change"])
function change(val: string) {
  emit("update:modelValue", val)
  emit("change", val)
}
</script>
<style lang="scss" scoped>
.visual-tab-type {
  width: 68px;
  height: 100%;
  background-color: #fff;
  border-right: 1px solid #eee;
  padding-top: 16px;
  .visual-tab-type-com {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;
    cursor: pointer;
    .bg-com {
      width: 36px;
      height: 36px;
      transition: all 0.25s;
      display: flex;
      align-items: center;
      justify-content: center;
      .bg-img {
        width: 24px;
        height: 24px;
        background: url("https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17262810267891896172628102678989214_china.png")
          no-repeat;
        background-size: cover;
      }
    }
    span {
      font-weight: 400;
      font-size: 12px;
      color: rgba(3, 32, 61, 0.85);
      line-height: 17px;
      text-align: center;
      font-style: normal;
      margin-top: 6px;
    }
    &:hover,
    &.active {
      span {
        color: #00a680;
      }
      .bg-com {
        background-color: #f2f4f5;
        border-radius: 4px;
        .bg-img {
          background: url("https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17262812088371a8c172628120883790153_ca.png")
            no-repeat;
          background-size: cover;
        }
      }
    }
    &.visual-tab-type-template {
      .bg-com {
        .bg-img {
          background: url("https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17262811630407c41172628116304039957_list.png")
            no-repeat;
          background-size: cover;
          width: 24px;
          height: 24px;
        }
      }
      &:hover,
      &.active {
        .bg-com {
          .bg-img {
            background: url("https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/172628130093824cf172628130093895598_l-a.png")
              no-repeat;
            background-size: cover;
            background-color: #f2f4f5;
            border-radius: 4px;
          }
        }
      }
    }
  }
}
</style>
