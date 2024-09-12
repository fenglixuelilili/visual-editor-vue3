import { visualEditorModelValue } from "@/types/editor"
import { Message } from "@arco-design/web-vue"
import { defineComponent, ref, createVNode } from "vue"
import builtInControl from "./help-coms/built-in-control.vue"
import { controlViewConfigtype } from "@/types/editor"
export function controlView(
  controlView: () => JSX.Element | string | null,
  currentBlockInfo: any,
  modelValue: visualEditorModelValue,
  updateBlock: (block: any) => void
) {
  let cacheView = controlView()
  function colorChange(val: string) {
    modelValue.container.backgroundColor = val
  }
  function scalChange(val: number) {
    if (!val || val * 1 < 40) {
      Message.warning("设置不合理！")
      return
    }
    modelValue.container.scale = val
  }
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
  return (
    <div style="height: 100%">
      {!currentBlockInfo.value.focusBlock.length ? (
        <div class="control-container">
          <a-tabs type="line" size="large" style="height: 100%">
            <a-tab-pane key="0" title="页面基础设置">
              <div class="control-form-comtainer">
                <a-form
                  style={{ width: "100%" }}
                  label-align="left"
                  auto-label-width={true}
                  model={{}}
                  layout="vertical"
                >
                  <a-form-item tooltip="设置表单的背景色" label="背景色">
                    <a-color-picker
                      defaultValue={modelValue.container.backgroundColor}
                      onChange={colorChange}
                      showText
                      disabledAlpha
                    />
                  </a-form-item>
                  <a-form-item
                    tooltip="设置页面缩放大小，不会影响h5端"
                    label="页面缩放"
                  >
                    <a-input-number
                      placeholder="请输入正整数"
                      default-value={modelValue.container.scale}
                      mode="button"
                      style="width: 140px;text-align: center;"
                      onChange={scalChange}
                      min={40}
                      max={200}
                    />
                    <span style="margin-left: 6px">%</span>
                  </a-form-item>
                </a-form>
              </div>
            </a-tab-pane>
          </a-tabs>
        </div>
      ) : (
        <div class="control-container">
          <a-tabs type="line" size="large">
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
            <a-tab-pane key="2" title="动画">
              <span>暂不支持</span>
            </a-tab-pane>
            <a-tab-pane key="3" title="规则">
              <span>暂不支持</span>
            </a-tab-pane>
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
