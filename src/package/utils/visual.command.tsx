import { createCommanderManger } from "../plugins/command.plugins"
import { block, visualEditorModelValue } from "../../types/editor.d"
import { dragStart, dragEnd } from "../utils/event"
// undo 撤销 redo 重做
export function useVisualCommand({
  // 需要传入一些响应式的数据
  fouceData, //  获得焦点的数据
  updateBlocks, // 更新组件模块数据
  dataModel, // 双向绑定的数据
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
    excute(delblock?: block) {
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
          if (delblock) {
            // 说明是删除的某一个组件
            data.after = (dataModel as any).value.blocks
            data.before = data.after.filter((block) => {
              return block != delblock
            })
            updateBlocks(data.before)
            return
          }
          // 立马做的事情
          const { blurBlock, focusBlock } = fouceData.value
          if (!focusBlock.length) {
            console.warn("暂无需要删除的组件")
            return
          }
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
          /**
           * 记录刚开始时的数据
           * 拖拽刚开始前做的事情
           * 深拷贝初始化前的数据
           */
          this.data.before = JSON.parse(
            JSON.stringify((dataModel as any).value.blocks || [])
          )
        },
        dragend: () => {
          // 拖拽结束 - 去重新执行drag的excute方法 记录数据  生成回退记录
          // 利用闭包保存当前数据
          conmmander.state.commandMap.drag()
        },
      }
      dragStart.on(handler.dragstart)
      dragEnd.on(handler.dragend)
      return () => {
        // 这里是执行销毁的地方
        dragStart.off(handler.dragstart)
        dragEnd.off(handler.dragend)
      }
    },
    excute() {
      let before = JSON.parse(JSON.stringify(this.data.before))
      let after = JSON.parse(
        JSON.stringify((dataModel as any).value.blocks || [])
      ) // 这个是已经更新过后的数据模型了
      return {
        undo() {
          // 撤回
          updateBlocks(before)
        },
        redo() {
          // 重做
          updateBlocks(after)
        },
      }
    },
  })
  conmmander.registor({
    name: "clear",
    keyboard: ["ctrl + alt + d"],
    excute() {
      // 保存数据
      let data = {
        before: [] as block[], // 保存之前
        after: [] as block[], // 之后
      }
      return {
        undo() {
          // 撤销
          updateBlocks(data.before)
        },
        redo() {
          // 重做
          data.before = JSON.parse(
            JSON.stringify((dataModel as any).value.blocks || [])
          )
          data.after = []
          updateBlocks(data.after)
        },
      }
    },
  })
  conmmander.init()
  return {
    // 可以弄一些默认导出
    undo: () => conmmander.state.commandMap["undo"](), // 撤销
    redo: () => conmmander.state.commandMap["redo"](), // 重做
    delete: (...arg: any) => conmmander.state.commandMap["delete"](...arg), // 删除
    drag: () => conmmander.state.commandMap["drag"](), // 删除
    clear: () => conmmander.state.commandMap["clear"](), // 清空
  }
}
