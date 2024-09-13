import { createCommanderManger } from "../plugins/command.plugins"
import { visualCommand, block } from "../../types/editor.d"
import { dragStart, dragEnd } from "../utils/event"
import { deepClone } from "../utils/index"
import { Message } from "@arco-design/web-vue"
// undo 撤销 redo 重做
export function useVisualCommand({
  // 需要传入一些响应式的数据
  currentBlockInfo, //  获得焦点的数据
  updateBlocks, // 更新组件模块数据
  dataModel, // 双向绑定的数据
  shortcutKeys, // 是否开启快捷键操作
}: visualCommand) {
  let conmmander = createCommanderManger(shortcutKeys)
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
          const { blurBlock, focusBlock } = currentBlockInfo.value
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
          this.data.before = deepClone((dataModel as any).value.blocks || [])
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
      let before = deepClone(this.data.before)
      let after = deepClone((dataModel as any).value.blocks || []) // 这个是已经更新过后的数据模型了
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
          data.before = deepClone((dataModel as any).value.blocks || [])
          data.after = []
          updateBlocks(data.after)
        },
      }
    },
  })
  conmmander.registor({
    name: "top",
    keyboard: ["ctrl + o"],
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
          // 立马做的事情
          const { focusBlock } = currentBlockInfo.value
          if (!focusBlock.length) {
            console.warn("暂无需要置顶的组件")
            return
          }
          // 数据存储
          data.before = deepClone((dataModel as any).value.blocks)
          let max =
            (dataModel as any).value.blocks.reduce(
              (pre: number, block: block) => {
                return Math.max(block.zIndex, pre)
              },
              -Infinity
            ) + 1
          focusBlock.forEach((block) => {
            block.zIndex = max
          })
          // 置顶寻找最大的 然后
          data.after = (dataModel as any).value.blocks
          updateBlocks((dataModel as any).value.blocks) // 只拿失去焦点的信息
        },
      }
    },
  })
  conmmander.registor({
    name: "bottom",
    keyboard: ["ctrl + b"],
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
          // 立马做的事情
          const { focusBlock } = currentBlockInfo.value
          if (!focusBlock.length) {
            console.warn("暂无需要置顶的组件")
            return
          }
          // 数据存储
          data.before = deepClone((dataModel as any).value.blocks)
          let min =
            (dataModel as any).value.blocks.reduce(
              (pre: number, block: block) => {
                if (block.zIndex <= 0) {
                  block.zIndex += Math.abs(block.zIndex)
                }
                block.zIndex += 1
                return Math.min(block.zIndex, pre)
              },
              Infinity
            ) - 1
          focusBlock.forEach((block) => {
            block.zIndex = min
          })
          // 置底寻找最小的
          data.after = (dataModel as any).value.blocks
          updateBlocks((dataModel as any).value.blocks) // 只拿失去焦点的信息
        },
      }
    },
  })
  conmmander.registor({
    name: "add",
    excute(block, index: any) {
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
          if (index === undefined) {
            // 重做
            let blocks = (dataModel as any).value.blocks
            data.before = deepClone(blocks)
            blocks.push(block) // 之后的数据
            data.after = blocks
            updateBlocks(data.after)
          } else {
            // console.log("插入数据", index, block)
            // 插入数据
            let blocks = (dataModel as any).value.blocks
            data.before = deepClone(blocks)
            // blocks.push(block) // 之后的数据
            blocks.splice(index, 0, block)
            data.after = blocks
            updateBlocks(data.after)
          }
        },
      }
    },
  })
  conmmander.registor({
    name: "up", // 向上移动
    keyboard: ["ctrl + up", "alt + up"],
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
          let blocks: block[] = (dataModel as any).value.blocks
          if (blocks.length <= 1) {
            Message.warning("元素不需要移动！")
            return
          }
          // block.focus 是选中状态， 如果没有选中状态 则不需要移动
          let fouceIndex = blocks.findIndex((block) => block.focus)
          if (fouceIndex < 0) {
            Message.warning("当前没有要移动的元素！")
            return
          }
          if (fouceIndex == 0) {
            Message.warning("移动无效！")
            return
          }
          data.before = deepClone(blocks)
          // 当前元素向上移动
          let prelock = blocks[fouceIndex - 1]
          let currentBlock = blocks[fouceIndex]
          blocks[fouceIndex] = prelock
          blocks[fouceIndex - 1] = currentBlock
          data.after = blocks
          updateBlocks(data.after)
        },
      }
    },
  })
  conmmander.registor({
    name: "down", // 向下移动
    keyboard: ["ctrl + down", "alt + down"],
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
          let blocks: block[] = (dataModel as any).value.blocks
          if (blocks.length <= 1) {
            Message.warning("移动无效！")
            return
          }
          // block.focus 是选中状态， 如果没有选中状态 则不需要移动
          let fouceIndex = blocks.findIndex((block) => block.focus)
          if (fouceIndex < 0) {
            Message.warning("当前没有要移动的元素！")
            return
          }
          if (fouceIndex == blocks.length - 1) {
            Message.warning("移动的无效！")
            return
          }
          data.before = deepClone(blocks)
          // 当前元素向下移动
          let nextlock = blocks[fouceIndex + 1]
          let currentBlock = blocks[fouceIndex]
          blocks[fouceIndex] = nextlock
          blocks[fouceIndex + 1] = currentBlock
          data.after = blocks
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
    drag: () => conmmander.state.commandMap["drag"](), // 拖拽
    clear: () => conmmander.state.commandMap["clear"](), // 清空
    add: (...arg: any) => conmmander.state.commandMap["add"](...arg), // 添加一个新元素
    up: (...arg: any) => conmmander.state.commandMap["up"](...arg), // 元素向上移动
    down: (...arg: any) => conmmander.state.commandMap["down"](...arg), // 元素向下移动
  }
}
