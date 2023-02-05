import { defineComponent } from "vue"
import "./index.scss"
export const visualEditor = defineComponent({
  props: {},
  setup(props) {
    return () => (
      <div class="visual-editor">
        <div class="visual-editor-topMenu">顶部菜单</div>
        <div class="visual-editor-leftComponentsMenu">左侧菜单</div>
        <div class="visual-editor-area-body">
          <div class="visual-editor-area-container">中间区域</div>
        </div>
        <div class="visual-editor-right-seting">右侧操作</div>
      </div>
    )
  },
})
