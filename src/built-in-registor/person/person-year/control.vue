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
            <a-option :value="item.value" v-for="(item, i) in getOptions()">
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
              :value="item.value"
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
let options = ref<{ name: string; value: string }[]>([])
function getAsyncApi() {
  options.value = [
    {
      name: "大四（2021届）",
      value: "2021",
    },
    {
      name: "大三（2022届）",
      value: "2022",
    },
    {
      name: "大二（2023届）",
      value: "2023",
    },
    {
      name: "大一（2024届）",
      value: "2024",
    },
    {
      name: "高三（2025届）",
      value: "2025",
    },
    {
      name: "高二（2026届）",
      value: "2026",
    },
    {
      name: "高一（2027届）",
      value: "2027",
    },
    {
      name: "初三（2028届）",
      value: "2028",
    },
    {
      name: "初二（2029届）",
      value: "2029",
    },
    {
      name: "初一（2030届）",
      value: "2030",
    },
    {
      name: "六年级（2031届）",
      value: "2031",
    },
    {
      name: "五年级（2032届）",
      value: "2032",
    },
    {
      name: "四年级（2033届）",
      value: "2033",
    },
    {
      name: "三年级（2034届）",
      value: "2034",
    },
    {
      name: "二年级（2035届）",
      value: "2035",
    },
    {
      name: "一年级（2036届）",
      value: "2036",
    },
  ]
}
getAsyncApi()
function getDefaultValue() {
  let opts = props?.block?.props?.options
    ? props.block.props.options.defaultValue
    : []
  return opts.map((item: any) => item.value)
}
function getOptions(): { value: string; name: string }[] {
  return props.block?.props?.options?.defaultValue
    ? props.block.props.options.defaultValue
    : []
}
function change(val: any[]) {
  let result = [] as any[]
  val.forEach((value) => {
    let res: any
    if ((res = options.value.find((item) => item.value == value))) {
      result.push(res)
    }
  })
  props.block.props.options.defaultValue = result
}
function defaultChange(val: any) {
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
