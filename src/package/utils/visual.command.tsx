import { createCommanderManger } from "../plugins/command.plugins"
import { block, visualEditorModelValue } from "../../types/editor.d"

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
    name: "add",
    init() {
      return () => {
        // 这里是执行销毁的地方
      }
    },
    excute() {
      return {
        undo() {
          // 撤销回原来的信息
        },
        redo() {
          // 立马做的事情
        },
      }
    },
  })
  conmmander.init()
  return {
    undo: () => conmmander.state.commands["undo"](), // 撤销
    redo: () => conmmander.state.commands["redo"](), // 重做
    delete: () => conmmander.state.commands["delete"](), // 删除
  }
}
