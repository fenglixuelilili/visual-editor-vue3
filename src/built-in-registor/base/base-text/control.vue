<template>
  <div class="editor-built-in-control-base-title">
    <div class="line"></div>
    <div class="font">
      <a-tooltip content="居中" position="top">
        <svg
          t="1726044272489"
          class="icon"
          :class="{ active: textAlign == '1' }"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="6371"
          width="200"
          height="200"
          @click="fontChange('textAlign', textAlign == '1' ? '2' : '1')"
        >
          <path
            d="M128 191.488q-26.624 0-45.056-18.944t-18.432-45.568 18.432-45.056 45.056-18.432l768 0q26.624 0 45.056 18.432t18.432 45.056-18.432 45.568-45.056 18.944l-768 0zM768 319.488q26.624 0 45.056 18.432t18.432 45.056-18.432 45.568-45.056 18.944l-512 0q-26.624 0-45.056-18.944t-18.432-45.568 18.432-45.056 45.056-18.432l512 0zM896 574.464q26.624 0 45.056 18.944t18.432 45.568-18.432 45.056-45.056 18.432l-768 0q-26.624 0-45.056-18.432t-18.432-45.056 18.432-45.568 45.056-18.944l768 0zM768 830.464q26.624 0 45.056 18.944t18.432 45.568-18.432 45.056-45.056 18.432l-512 0q-26.624 0-45.056-18.432t-18.432-45.056 18.432-45.568 45.056-18.944l512 0z"
            p-id="6372"
          ></path>
        </svg>
      </a-tooltip>
      <div class="vline"></div>
      <a-tooltip content="加粗" position="top">
        <svg
          t="1726043535219"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="1270"
          width="200"
          height="200"
          :class="{ active: fontWeight == '1' }"
          @click="fontChange('fontWeight', fontWeight == '1' ? '2' : '1')"
        >
          <path
            d="M318.621538 499.003077v383.842461h156.278154c76.721231 0 131.387077-13.390769 164.076308-40.172307 32.689231-26.860308 49.073231-70.971077 49.073231-132.489846 0-81.053538-17.250462-136.507077-51.672616-166.360616-34.422154-29.932308-88.221538-44.819692-161.476923-44.819692H318.621538z m0-375.256615v268.051692h153.6c63.645538 0 109.804308-12.209231 138.31877-36.627692 28.593231-24.418462 42.850462-55.138462 42.850461-92.16 0-49.309538-14.099692-84.834462-42.220307-106.57477-28.120615-21.819077-74.436923-32.689231-138.948924-32.68923h-153.6zM185.895385 15.202462h289.004307c99.800615 0 176.758154 21.582769 230.793846 64.669538 54.035692 43.165538 81.132308 104.211692 81.132308 183.138462 0 42.299077-14.336 80.580923-42.929231 115.003076-28.514462 34.500923-71.364923 56.083692-128.393846 64.748308 64.039385 9.609846 114.215385 37.021538 150.685539 82.077539 36.391385 45.134769 54.587077 111.300923 54.587077 198.498461 0 88.457846-28.987077 155.175385-86.961231 200.388923-57.974154 45.056-144.305231 67.662769-258.914462 67.662769H185.816615V15.202462z"
            fill="#333333"
            p-id="1271"
          ></path>
        </svg>
      </a-tooltip>
      <div class="vline"></div>
      <a-tooltip content="倾斜" position="top">
        <svg
          t="1726044177092"
          class="icon"
          :class="{ active: fontStyle == '1' }"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2714"
          width="200"
          height="200"
          @click="fontChange('fontStyle', fontStyle == '1' ? '2' : '1')"
        >
          <path
            d="M782.885107 0H411.697897l-28.349145 169.793922h81.857403L351.207684 854.085699H269.35028l-28.349144 169.914301h371.187209l28.288956-169.914301h-83.061189L671.414584 169.793922h83.121378z"
            fill="#484D55"
            p-id="2715"
          ></path>
        </svg>
      </a-tooltip>
      <div class="vline"></div>
      <a-tooltip content="下划线" position="top">
        <svg
          t="1726044215994"
          class="icon"
          :class="{ active: textDecoration == '1' }"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="3696"
          width="200"
          height="200"
          @click="
            fontChange('textDecoration', textDecoration == '1' ? '2' : '1')
          "
        >
          <path
            d="M842.925793 0L662.304908 0.481656v481.655691c0 133.057385-44.432738 208.195673-149.072436 208.195673C406.846771 690.33302 361.270101 620.19191 361.270101 482.137347V0.481656L180.649217 0V482.137347q0 361.241769 325.418627 361.241769 337.158984 0 337.158984-370.874883V0zM60.235294 1023.21731V963.793039h903.104422v59.24365H60.235294z"
            fill="#484D55"
            p-id="3697"
          ></path>
        </svg>
      </a-tooltip>
    </div>
    <div class="letterSpacing flex">
      <span>字间距</span>
      <div class="flex: 1">
        <a-slider
          :style="{ width: '180px' }"
          show-input
          v-model="block.props.letterSpacing.defaultValue"
        />
      </div>
    </div>
    <div class="letterSpacing flex mt24">
      <span>行间距</span>
      <div class="flex: 1">
        <a-slider
          :style="{ width: '180px' }"
          show-input
          v-model="block.props.lineHeight.defaultValue"
        />
      </div>
    </div>
    <div class="letterSpacing flex mt24">
      <span>左右间距</span>
      <div class="flex: 1">
        <a-slider
          :style="{ width: '180px' }"
          show-input
          v-model="block.props.leftRightPadding.defaultValue"
        />
      </div>
    </div>
    <div class="letterSpacing flex mt24">
      <span>上间距</span>
      <div class="flex: 1">
        <a-slider
          :style="{ width: '180px' }"
          show-input
          v-model="block.props.marginTop.defaultValue"
        />
      </div>
    </div>
    <div class="letterSpacing flex mt24">
      <span>下间距</span>
      <div class="flex: 1">
        <a-slider
          :style="{ width: '180px' }"
          show-input
          v-model="block.props.marginBottom.defaultValue"
        />
      </div>
    </div>
    <div class="letterSpacing flex mt24">
      <span>背景色</span>
      <div class="flex: 1">
        <a-color-picker
          show-history
          show-preset
          showText
          disabledAlpha
          v-model="block.props.backgroundColor.defaultValue"
        />
      </div>
    </div>
    <div class="mt24 mb48">
      <div class="img-title">背景图</div>
      <upload-img
        v-model="block.props.backgroundImage.defaultValue"
      ></upload-img>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { defineProps, onMounted, defineEmits, PropType } from "vue"
import uploadImg from "../../../package/visual-editor/help-coms/control-views/upload-img.vue"
import type { block } from "@/types/editor"
const props = defineProps({
  block: {
    type: Object as PropType<block>,
    default: () => ({}),
  },
  textAlign: {
    type: String,
    default: "",
  },
  fontWeight: {
    type: String,
    default: "",
  },
  fontStyle: {
    type: String,
    default: "",
  },
  textDecoration: {
    type: String,
    default: "",
  },
})
const emit = defineEmits(["change"])
function fontChange(type: string, value: any) {
  emit("change", {
    type,
    value,
  })
}
</script>
<style lang="scss" scoped>
.flex {
  display: flex;
  align-items: center;
  span {
    flex-shrink: 0;
    width: 55px;
    margin-right: 10px;
    font-weight: 400;
    font-size: 14px;
    color: rgba(3, 32, 61, 0.65);
    line-height: 22px;
  }
}
.img-title {
  color: rgba(3, 32, 61, 0.65);
  line-height: 22px;
  text-align: left;
  font-style: normal;
  margin-bottom: 8px;
}
.mt24 {
  margin-top: 24px;
}
.mb24 {
  margin-bottom: 24px;
}
.mb48 {
  margin-bottom: 58px;
}
.editor-built-in-control-base-title {
  .line {
    width: 100%;
    height: 1px;
    background-color: #e5e8eb;
    margin-bottom: 24px;
  }
  .font {
    width: 200px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #f7f8f9;
    padding: 0 8px;
    border-radius: 4px;
    margin-bottom: 24px;
    .vline {
      height: 16px;
      width: 1px;
      background-color: #e5e8eb;
    }
    .icon {
      width: 15px;
      height: 15px;
      stroke-width: 10;
      outline: none;
      cursor: pointer;
      padding: 6px;
      path {
        fill: #666;
      }
      &:hover {
        background-color: #e5e8eb;
        path {
          fill: #000;
        }
      }
      &.active {
        background-color: #e5e8eb;

        path {
          fill: #000;
        }
      }
    }
  }
  .letterSpacing {
    width: 100%;
  }
}
</style>
