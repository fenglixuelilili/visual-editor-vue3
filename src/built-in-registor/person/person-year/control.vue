<template>
  <div>
    <div class="editor-built-in-control-person-year">
      <div class="form-item">
        <div class="title">默认值</div>
        <div class="opts">
          <a-select
            placeholder="请选择默认值"
            :model-value="
              block.props.value ? block.props.value.defaultValue : ''
            "
            @change="defaultChange"
          >
            <a-option :value="item.id" v-for="(item, i) in getOptions()">
              {{ item.name }}
            </a-option>
          </a-select>
        </div>
      </div>
      <div class="form-item">
        <div class="title">设置年级选项</div>
        <div class="opts">
          <a-checkbox-group :default-value="getDefaultValue()" @change="change">
            <a-checkbox
              :value="item.id"
              class="opt"
              v-for="(item, i) in options"
            >
              {{ item.name }}
            </a-checkbox>
          </a-checkbox-group>
        </div>
      </div>
      <div class="h-line"></div>
      <div class="group-title">校验</div>
      <div class="flex mt24 options">
        <span class="option-label">设为必填</span>
        <div>
          <a-switch
            :default-checked="block.props.isRequire.defaultValue == '1'"
            @change="switchChange($event, 'isRequire')"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import type { block } from "@/types/editor"
import { PropType, ref } from "vue"
const props = defineProps({
  block: {
    type: Object as PropType<block>,
    default: () => ({}),
  },
})
function switchChange(bol: any, type: string) {
  props.block.props[type].defaultValue = bol ? "1" : "2"
}
let options = ref<{ name: string; id: string }[]>([])
function getAsyncApi() {
  setTimeout(() => {
    options.value = [
      {
        name: "六年级（小学2031）",
        id: "1",
      },
      {
        name: "五年级（小学2031）",
        id: "2",
      },
      {
        name: "四年级（小学2031）",
        id: "3",
      },
      {
        name: "三年级（小学2031）",
        id: "4",
      },
      {
        name: "二年级（小学2031）",
        id: "5",
      },
    ]
  }, 100)
}
getAsyncApi()
function getDefaultValue() {
  let opts = props?.block?.props?.options
    ? props.block.props.options.defaultValue
    : []
  return opts.map((item: any) => item.id)
}
function getOptions(): { id: string; name: string }[] {
  return props.block?.props?.options?.defaultValue
    ? props.block.props.options.defaultValue
    : []
}
function change(val: any[]) {
  console.log(val)
  let result = [] as any[]
  val.forEach((id) => {
    let res: any
    if ((res = options.value.find((item) => item.id == id))) {
      result.push(res)
    }
  })
  props.block.props.options.defaultValue = result
}
function defaultChange(val: any) {
  console.log(val)
  props.block.props.value.defaultValue = val
}
</script>
<style lang="scss" scoped>
@import "../../commen.scss";
.editor-built-in-control-person-year {
  .options {
    justify-content: space-between;
    span {
      flex-shrink: 0;
    }
  }
  .form-item {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
    .title {
      max-width: 100%;
      color: var(--color-text-2);
      font-size: 14px;
      margin-bottom: 12px;
    }
    .opts {
      margin-bottom: 6px;
    }
    .opt {
      margin-bottom: 8px;
    }
  }
}
</style>
