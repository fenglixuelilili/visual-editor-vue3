type cb = (...arg: any) => unknown | void
export class Listener {
  Listener: {
    [key: string]: cb[]
  }
  constructor() {
    // 存储事件的序列表
    this.Listener = {}
  }
  // 监听事件
  on(key: string, cb: cb) {
    if (!this.Listener[key]) { 
      this.Listener[key] = []
    }
    this.Listener[key].push(cb)
  }
  // 只绑定一次
  once(key: string, cb: cb) {
    function onceCb(...args: any) {
      cb.call(this, ...args)
      this.off(key, onceCb)
    }
    if (!this.Listener[key]) { 
      this.Listener[key] = []
    }
    this.Listener[key].push(onceCb)
  }
  // 移除事件
  off(key: string, cb: cb) {
    if (this.Listener[key]) { 
      this.Listener[key] = this.Listener[key].filter(lcb => {
        return lcb !== cb
      })
    }
  }
  // 派发事件
  emit(key?: string, ...args: any) {
    if (key) { 
      this.Listener[key].forEach(cb => { 
        cb.call(this, ...args)
      })
      return
    }
    // 执行所有
    for (let key in this.Listener) { 
      this.Listener[key].forEach(cb => cb.call(this))
    }
  }
}

export default new Listener()
let event = new Listener()
export const dragStart = {
  on: function (cb: cb) {
    event.on('dragstart', cb)
  },
  emit:  function (...args: any) {
    event.emit('dragstart', ...args)
  },
  off: function (cb: cb) {
    event.off('dragstart', cb)
  }
}

export const dragEnd = {
  on: function (cb: cb) {
    event.on('dragend', cb)
  },
  emit:  function (...args: any) {
    event.emit('dragend', ...args)
  },
  off: function (cb: cb) {
    event.off('dragend', cb)
  }
}