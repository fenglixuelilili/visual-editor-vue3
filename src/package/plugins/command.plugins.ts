import { onUnmounted, reactive } from "vue"

export interface declarationPeriod {
  // 撤销
  undo?: () => void
  // 重做
  redo?: () => void
}
// 命令
export interface Command {
  disabled?: boolean
  // 注册命令的名称
  name: string
  // 快捷键 命令注册
  keyboard?: string | string[]
  // 执行此方法后返回undo和redo 用户回退和前进
  excute: (...args: any[]) => declarationPeriod
  // 是否往队列中添加命令
  followQueue?: boolean
  // 执行命令前的初始化钩子 - 可选的
  init?: () => ( () => void ) | any
}

// 注册管理命令总线
export function createCommanderManger() {
  const state = reactive({
    // 当前索引
    current: -1,
    // 是撤销和回退的队列
    queue: [] as declarationPeriod[],
    // 通过key往外暴露执行comman的执行和收集过程
    commandMap: {} as Record<string, (...args: any[]) => void>,
    commandArray: [] as Command[], // 存放command命令对象
    destoryList: [] as (( () => void ) | undefined)[] // 存放销毁回调的
  })
  let codeMap: Record<number, string> = {
    89: 'y',
    65: 'a',
    67: 'c',
    86: 'v',
    90: 'z',
    83: 's',
    68: 'd',
    46: 'delete',
    84: 't',
    66: 'b',
    79: 'o',
    80: 'p'
  }
  // 快捷键处理
  const keyboardEvent = () => { 
    const onKeyDown = (e: KeyboardEvent) => {
      // e.preventDefault() TODO: 会影响页面上的操作
      if (document.activeElement !== document.body) {
        // 说明焦点在某个组件或者元素上
        return
      }
      const { keyCode, shiftKey, altKey, ctrlKey } = e
      // console.log(keyCode)
      let keystring: string[] = [] 
      if (ctrlKey) { 
        keystring.push('ctrl')
      }
      if (shiftKey) {
        keystring.push('shift')
      }
      if (altKey) { 
        keystring.push('alt')
      }
      keystring.push(codeMap[keyCode])
      // console.log('当前快捷键', keystring.join('+'))
      let makeup = keystring.join('+')
      // console.log(state.commandArray)
      state.commandArray.forEach(command => {
        let { keyboard, name } = command
        if (!keyboard) {
          return
        }
        if (typeof keyboard == 'string') {
          keyboard = [ keyboard ]
        }
        // console.log(keyboard, makeup, keyboard?.includes(makeup), 'xxxxx')
        keyboard = keyboard.map(str => {
          return str.replace(/\s+/g, '')
        })
        // console.log(keyboard, makeup)
        if (keyboard?.includes(makeup)) {
          state.commandMap[name]()
          e.stopPropagation()
        }
      })
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }
  /**
   * @命令注册完成之后执行的回调
  */
  const init = () => {
    // state.commandArray.forEach(command => { 
    //   if (!!command.init) {
    //     state.destoryList.push(command.init())
    //   }
    // })
    state.destoryList.push(keyboardEvent())
  }
  onUnmounted(() => {
    // 声明周期卸载的时候
    state.destoryList.forEach(fn => fn && fn())
  })
  // 增加命令步骤
  function registor(command: Command) {
    // 收集需要执行init函数的命令
    state.commandArray.push(command)
    if (command.init) {
      let destory = command.init() // 得到一个销毁函数
      if (destory && typeof destory == 'function') {
        state.commandArray.push(destory)
      } else {
        console.error(`为了性能优化，请在${command.name}这个命令中加入销毁函数！`)
      }
    }
    // 将命令通过表结构进行缓存
    state.commandMap[command.name] = (...args) => {
      if (command.disabled) { 
        alert('该快捷命令已禁用！')
        return
      }
      const { undo, redo } = command.excute(...args)
      redo && redo() // 也就是点击按钮会立即执行的函数  是重做，所以是重做
      if (command.followQueue == false) {
        return
      }
      // 往队列中增加
      if (state.queue.length > 0) {
        // 这块是走到哪一步了  将后面的都干掉 要不然的话操作就乱了
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
          if( current <=  -1 ) return
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
            state.current += 1
          }
        }
      }
    }
  })
  return {
    state,
    registor,
    init
  }
}