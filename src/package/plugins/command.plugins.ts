import { reactive } from "vue"

export interface declarationPeriod { 
  undo?: () => void
  redo?: () => void
}
// 命令
export interface Command {
  // 注册命令的名称
  name: string
  // 快捷键 命令注册
  keyboard?: string | string[]
  // 执行此方法后返回undo和redo 用户回退和前进
  excute: (...args: any[]) => declarationPeriod
  followQueue?: boolean
}

// 注册管理命令
export function createCommanderManger() {
  const state = reactive({
    // 当前索引
    current: -1,
    // 缓冲队列
    queue: [] as declarationPeriod[],
    commands: {

    } as Record<string, (...args: any[]) => void>
  })
  // 增加命令步骤
  function registor(command: Command) {
    // 将命令缓存到上面
    state.commands[command.name] = (...args) => {
      const { undo, redo } = command.excute(...args)
      redo && redo() // 也就是点击按钮会立即执行的函数  是重做，所以是重做
      if (command.followQueue == false) {
        return
      }
      // 往队列中增加
      if (state.queue.length > 0) {
        state.queue.slice( 0, state.current )
      }
      state.queue.push({ undo, redo })
      state.current++
    }
  }
  // 默认注册两个 一个是撤回  一个是重做
  // 撤销按钮
  registor({
    name: 'undo',
    // 撤销
    keyboard: 'ctrl + z',
    followQueue: false,
    excute() {
      // 命令被执行的时候注册的命令
      return {
        redo() {
          // 撤销命令执行的事情
          let { current } = state
          if( current ==  -1 ) return
          const { undo } = state.queue[current]
          if (undo) {
            undo()
            state.current -= 1
          }
        }
      }
     }
  })

  // 重做按钮
  registor({
    name: 'redo',
    // 重做
    keyboard: 'ctrl + y',
    followQueue: false,
    excute() {
      // 命令被执行的时候注册的命令
      return {
        redo() {
          // 重做的时候做的事情
          // let { current } = state
          // if ((current + 1) <= -1) {
          //   return
          // }
          // if (state.queue[current + 1]) { 
          //   const { redo } = state.queue[ current + 1 ]
          //   redo && redo()
          //   state.current += 1
          // }
          const queueItem = state.queue[state.current + 1]
          if (queueItem) { 
            queueItem.redo && queueItem.redo()
            state.current++
          }
        }
      }
     }
  })
  return {
    state,
    registor
  }
}