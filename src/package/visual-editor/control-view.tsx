import { visualEditorModelValue } from "@/types/editor"
import { Message } from "@arco-design/web-vue"
import { defineComponent, ref, createVNode } from "vue"
import builtInControl from "./help-coms/built-in-control.vue"
import { controlViewConfigtype } from "@/types/editor"
import uploadImg from "./help-coms/control-views/upload-img.vue"
export function controlView(
  controlView: () => JSX.Element | string | null,
  currentBlockInfo: any,
  modelValue: visualEditorModelValue,
  updateBlock: (block: any) => void
) {
  let cacheView = controlView()
  // 当前正在操作的
  let currentBlock = currentBlockInfo.value.cBlock || {}
  let editorPros = currentBlock.props ? currentBlock.props : {}
  let editorControlView = ref<controlViewConfigtype[]>([])
  Object.keys(editorPros).forEach((key) => {
    if (editorPros[key].type) {
      editorPros[key].key = key
      editorControlView.value.push(editorPros[key])
    }
  })
  let builtInControlCom = createVNode(builtInControl)
  let uploadImgCom = createVNode(uploadImg)
  return (
    <div style="height: 100%">
      {!currentBlockInfo.value.focusBlock.length ? (
        <div class="control-container">
          <a-tabs type="line" size="large" style="height: 100%" key={1}>
            <a-tab-pane key="0" title="页面基础设置">
              <div class="control-form-comtainer">
                <a-form
                  style={{ width: "100%" }}
                  label-align="left"
                  auto-label-width={true}
                  model={{}}
                  layout="vertical"
                >
                  <a-form-item
                    tooltip="设置页面缩放大小，不会影响h5端"
                    label="页面缩放"
                  >
                    <a-input-number
                      placeholder="请输入正整数"
                      mode="button"
                      style="width: 140px;text-align: center;"
                      v-model={modelValue.container.scale}
                      min={40}
                      max={200}
                    />
                    <span style="margin-left: 6px">%</span>
                  </a-form-item>
                  <a-form-item label="背景色">
                    <a-color-picker
                      v-model={modelValue.container.backgroundColor}
                      showText
                      disabledAlpha
                    />
                  </a-form-item>
                  <a-form-item label="背景图">
                    {/* <a-color-picker
                      defaultValue={modelValue.container.backgroundColor}
                      onChange={colorChange}
                      showText
                      disabledAlpha
                    /> */}
                    <uploadImgCom
                      v-model={modelValue.container.backgroundImage}
                    ></uploadImgCom>
                  </a-form-item>
                </a-form>
              </div>
            </a-tab-pane>
          </a-tabs>
        </div>
      ) : (
        <div class="control-container">
          <a-tabs type="line" size="large" key={2}>
            <a-tab-pane key="1" title="组件设置">
              <div class="control-form-comtainer">
                {/* 这里是内置属性 */}
                <builtInControlCom
                  editorControlView={editorControlView.value}
                  currentBlock={currentBlock}
                ></builtInControlCom>
                <div>{cacheView}</div>
              </div>
            </a-tab-pane>
            {/* <a-tab-pane key="2" title="动画">
              <span>暂不支持</span>
            </a-tab-pane>
            <a-tab-pane key="3" title="规则">
              <span>暂不支持</span>
            </a-tab-pane> */}
          </a-tabs>
        </div>
      )}
      {/* <div>
        <button onClick={sure}>确定按钮</button>
        <button onClick={cancle}>取消按钮</button>
      </div> */}
    </div>
  )
}
