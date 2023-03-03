import { createCommanderManger } from "../plugins/command.plugins"
import { block, visualEditorModelValue } from "../../types/editor.d"
import { dragStart } from "../utils/event"
// undo 撤销 redo 重做
export function useVisualCommand({
  // 需要传入一些响应式的数据
  fouceData,
  updateBlocks,
  dataModel,
}: {
  fouceData: {
    value: {
      blurBlock: block[]
      focusBlock: block[]
    }
  }
  updateBlocks: (blocks: block[]) => void
  dataModel: visualEditorModelValue
}) {
  let conmmander = createCommanderManger()
  conmmander.registor({
    name: "delete",
    keyboard: ["delete", "ctrl + d"],
    excute() {
      let data = {
        before: [] as block[], // 保存之前
        after: [] as block[], // 之后
      }
      return {
        undo() {
          // 撤销回原来的信息
          updateBlocks(data.after)
        },
        redo() {
          // 立马做的事情
          const { blurBlock, focusBlock } = fouceData.value
          data.after = (dataModel as any).value.blocks
          data.before = blurBlock
          updateBlocks(blurBlock) // 只拿失去焦点的信息
        },
      }
    },
  })
  conmmander.registor({
    name: "drag",
    init() {
      this.data = {
        before: null as null | block[], // 之前的数据
        after: null as null | block[], // 之后的数据 - 也就是当前的数据
      }
      const handler = {
        dragstart: () => {
          // 拖拽刚开始前做的事情
          // 深拷贝初始化前的数据
          this.data.before = JSON.parse(
            JSON.stringify((dataModel as any).value.blocks || [])
          )
        },
        dragend: () => {
          // 拖拽结束 - 去重新执行drag
          conmmander.state.commands.drag()
        },
      }
      dragStart.on(handler.dragstart)
      return () => {
        // 这里是执行销毁的地方
        dragStart.on(handler.dragstart)
      }
    },
    excute() {
      this.data.after = JSON.stringify((dataModel as any).value.blocks || [])
      return {
        undo() {
          // 撤回
          updateBlocks(this.data.before)
        },
        redo() {
          // 立马做的事情
          updateBlocks(this.data.after)
        },
      }
    },
  })
  conmmander.init()
  return {
    undo: () => conmmander.state.commands["undo"](), // 撤销
    redo: () => conmmander.state.commands["redo"](), // 重做
    delete: () => conmmander.state.commands["delete"](), // 删除
    drag: () => conmmander.state.commands["drag"](), // 删除
  }
}
