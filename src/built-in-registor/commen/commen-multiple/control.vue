<template>
  <div class="editor-built-in-control-commen-multiple">
    <div class="h-line"></div>
    <div class="group-title">选项</div>
    <div class="flex mt24 options">
      <ul class="select-group">
        <li
          v-for="(item, i) in block.props.options.defaultValue"
          :key="item.id"
          class="useDrag"
        >
          <div class="drag">
            <div class="line"></div>
            <div class="line"></div>
          </div>
          <a-input
            placeholder="请输入选项内容"
            style="width: 198px"
            v-model="item.name"
            @input="inputChange(item)"
          ></a-input>
          <div class="del" @click="del(i)"></div>
        </li>
        <div class="add-btn">
          <a-button style="width: 254px" @click="add">
            <img
              style="width: 16px"
              src="https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17261384607181c8a172613846071854799_add.png"
              alt=""
            />
            <span>添加选项</span>
          </a-button>
        </div>
      </ul>
    </div>
    <div class="group-title mt24">校验</div>
    <div class="flex mt24 options">
      <span class="option-label">设为必填</span>
      <div>
        <a-switch
          :default-checked="block.props.isRequire.defaultValue == '1'"
          @change="switchChange($event, 'isRequire')"
        />
      </div>
    </div>
    <div class="flex mt24 options">
      <span class="option-label">最少选择数</span>
      <div class="pl24">
        <a-input
          v-model="block.props.selectMin.defaultValue"
          placeholder="不限制"
          :min="1"
          :max="100"
        >
          <template #append> 项 </template>
        </a-input>
      </div>
    </div>
    <div class="flex mt24 options">
      <span class="option-label">最多选择数</span>
      <div class="pl24">
        <a-input
          v-model="block.props.selectMax.defaultValue"
          placeholder="不限制"
          :min="1"
          :max="100"
        >
          <template #append> 项 </template>
        </a-input>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import type { block } from "@/types/editor"
import { Message } from "@arco-design/web-vue"
import { onMounted, PropType } from "vue"
import Sortable from "sortablejs"
const props = defineProps({
  block: {
    type: Object as PropType<block>,
    default: () => ({}),
  },
})
function switchChange(bol: any, type: string) {
  props.block.props[type].defaultValue = bol ? "1" : "2"
}
function inputChange(item: any) {
  item.id = item.name
}
function del(index: number) {
  if (props.block.props["options"].defaultValue.length == 1) {
    Message.warning("至少保留一项哦！")
    return
  }
  props.block.props["options"].defaultValue.splice(index, 1)
}
function add() {
  let obj = {
    name: "",
    id: "",
  }
  props.block.props["options"].defaultValue.push(obj)
}

onMounted(() => {
  let el = document.querySelector(
    ".editor-built-in-control-commen-multiple .select-group"
  )
  const sortable = new Sortable(el, {
    // or { name: "...", pull: [true, false, 'clone', array], put: [true, false, array] }
    // group: "name",
    // boolean 定义是否列表单元是否可以在列表容器内进行拖拽排序
    sort: true,
    // number 定义鼠标选中列表单元可以开始拖动的延迟时间；
    delay: 0,
    // px，在取消延迟拖动事件之前，点应该移动多少像素
    touchStartThreshold: 0,
    // boolean 定义是否此sortable对象是否可用，为true时sortable对象不能拖放排序等功能，为false时为可以进行排序，相当于一个开关；
    disabled: false,
    // @see Store
    store: null,
    // ms, number 单位：ms，定义排序动画的时间
    animation: 150,
    // 制作动画。默认为null，https://easings.net/。
    easing: "cubic-bezier(1, 0, 0, 1)",
    // 格式为简单css选择器的字符串，使列表单元中符合选择器的元素成为拖动的手柄，只有按住拖动手柄才能使列表单元进行拖动
    handle: ".drag",
    // 过滤器，不需要进行拖动的元素
    // filter: ".ignore-elements",
    //  在触发过滤器`filter`的时候调用`event.preventDefault()`
    preventOnFilter: true,
    // 允许拖拽的项目类名
    draggable: ".useDrag",
    // drop placeholder的css类名
    // ghostClass: "sortable-ghost",
    // 被选中项的css 类名
    // chosenClass: "sortable-chosen",
    // 正在被拖拽中的css类名
    // dragClass: "sortable-drag",
    // dataIdAttr: "data-id",
    // 交换区的阈值
    swapThreshold: 1,
    // 如果设置为 true，将始终使用反向交换区
    invertSwap: false,
    // 反向交换阈值，默认情况下将设置为swapThreshold 值
    invertedSwapThreshold: 1,
    // 拖拽方向 (默认情况下会自动判断方向)
    direction: "horizontal",
    // 忽略 HTML5拖拽行为，强制回调进行
    forceFallback: false,
    // 当使用forceFallback的时候，被复制的dom的css类名
    fallbackClass: "sortable-fallback",
    // 将cloned DOM 元素挂到body元素上。
    fallbackOnBody: false,
    // 以像素为单位指定鼠标在被视为拖动之前应移动的距离。
    fallbackTolerance: 0,
    // 是否启用滚动，值为true或者HTMLElement
    scroll: true,
    // 自定义滚动
    // scrollFn: function(offsetX, offsetY, originalEvent, touchEvt, hoverTargetEl) { ... },
    // // 鼠标必须离边缘多近才能开始滚动，单位 px
    // scrollSensitivity: 30,
    //  // 滚动速度，px
    // scrollSpeed: 10,
    // // 将自动滚动应用于所有父元素，以便更轻松地移动
    // bubbleScroll: true,
    // dragoverBubble: false,
    // // 删除不显示的克隆元素，而不是仅仅隐藏它
    // removeCloneOnHide: true,
    // // 拖动时鼠标必须与空可排序项的距离（以像素为单位）,以便将拖动元素插入到该可排序项中, 设置为0禁用此功能。
    // emptyInsertThreshold: 5,
    // setData: function (/** DataTransfer */dataTransfer, /** HTMLElement*/dragEl) {
    //     dataTransfer.setData('Text', dragEl.textContent); // `dataTransfer` object of HTML5 DragEvent
    // },
    // // 元素被选中
    // onChoose: function (/**Event*/evt) {
    //     evt.oldIndex;  // element index within parent
    // },
    // // 元素未被选中的时候（从选中到未选中）
    // onUnchoose: function(/**Event*/evt) {
    //     // same properties as onEnd
    // },
    // // 开始拖拽的时候
    // onStart: function (/**Event*/evt) {
    //     evt.oldIndex;  // element index within parent
    // },
    // // 结束拖拽
    onEnd: function (/**Event*/ evt: any) {
      // console.log(evt)
      // var itemEl = evt.item;  // dragged HTMLElement
      // evt.to;    // target list
      // evt.from;  // previous list
      // evt.oldIndex;  // element's old index within old parent
      // evt.newIndex;  // element's new index within new parent
      // evt.clone // the clone element
      // evt.pullMode;  // when item is in another sortable: `"clone"` if cloning, `true` if moving
      let newIndex = evt.newIndex
      let oldIndex = evt.oldIndex
      // 试图已经交换 现在交换数据
      let newBlock = props.block.props.options.defaultValue[newIndex]
      let oldBlock = props.block.props.options.defaultValue[oldIndex]
      props.block.props.options.defaultValue[newIndex] = oldBlock
      props.block.props.options.defaultValue[oldIndex] = newBlock
    },
    // // 元素从一个列表拖拽到另一个列表
    // onAdd: function (/**Event*/evt) {
    //     // same properties as onEnd
    // },
    // // 列表内元素顺序更新的时候触发
    // onUpdate: function (/**Event*/ evt: any) {
    //   console.log(evt, "evt")
    //   // same properties as onEnd
    // },
    // // 列表的任何更改都会触发
    // onSort: function (/**Event*/evt) {
    //     // same properties as onEnd
    // },
    // // 元素从列表中移除进入另一个列表
    // onRemove: function (/**Event*/evt) {
    //     // same properties as onEnd
    // },
    // // 试图拖拽一个filtered的元素
    // onFilter: function (/**Event*/evt) {
    //     var itemEl = evt.item;  // HTMLElement receiving the `mousedown|tapstart` event.
    // },
    // // 拖拽移动的时候
    // onMove: function (/**Event*/evt, /**Event*/originalEvent) {
    //     // Example: https://jsbin.com/nawahef/edit?js,output
    //     evt.dragged; // dragged HTMLElement
    //     evt.draggedRect; // DOMRect {left, top, right, bottom}
    //     evt.related; // HTMLElement on which have guided
    //     evt.relatedRect; // DOMRect
    //     evt.willInsertAfter; // Boolean that is true if Sortable will insert drag element after target by default
    //     originalEvent.clientY; // mouse position
    //     // return false; — for cancel
    //     // return -1; — insert before target
    //     // return 1; — insert after target
    // },
    // // clone一个元素的时候触发
    // onClone: function (/**Event*/evt) {
    //     var origEl = evt.item;
    //     var cloneEl = evt.clone;
    // },
    // // 拖拽元素改变位置的时候
    // onChange: function (/**Event*/ evt: any) {
    // evt.newIndex // most likely why this event is used is to get the dragging element's current index
    // same properties as onEnd
    // console.log(evt, "anyyyyyyyy")
    // let newIndex = evt.newIndex
    // let oldIndex = evt.oldIndex
    // // 试图已经交换 现在交换数据
    // let newBlock = props.block.props.options.defaultValue[newIndex]
    // let oldBlock = props.block.props.options.defaultValue[oldIndex]
    // props.block.props.options.defaultValue[newIndex] = newBlock
    // props.block.props.options.defaultValue[oldIndex] = oldBlock
    // console.log(
    //   props.block.props.options.defaultValue,
    //   "props.block.props.options.defaultValueprops.block.props.options.defaultValue"
    // )
    // },
  })
})
</script>
<style lang="scss" scoped>
@import "../../commen.scss";
.editor-built-in-control-commen-multiple {
  .options {
    justify-content: space-between;
    span {
      flex-shrink: 0;
    }
  }
  ul {
    li {
      display: flex;
      align-items: center;
      margin-bottom: 16px;
      padding-right: 20px;
      justify-content: space-between;
      .drag {
        width: 16px;
        height: 16px;
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin-right: 12px;
        cursor: pointer;
        .line {
          width: 1px;
          height: 100%;
          border-right: 1px dashed #ccc;
        }
      }
      .del {
        width: 20px;
        height: 20px;
        background: url("https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/172613790594938ab172613790594976178_dell.png")
          no-repeat;
        background-size: cover;
        flex-shrink: 0;
        margin-left: 10px;
        cursor: pointer;
        &:hover {
          background: url("https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/1726137547352536d172613754735282894_del2.png")
            no-repeat;
          background-size: cover;
        }
      }
    }
  }
}
</style>
