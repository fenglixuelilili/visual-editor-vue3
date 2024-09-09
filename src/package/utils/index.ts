import { visualCommand, block } from "../../types/editor.d" 
import { useVisualCommand } from "./visual.command"
// import { useVisualCommand } from ''
// 深拷贝
 export function deepClone(data: any): any {
  if (data && typeof data === "object") {
    //针对函数的拷贝
    if (typeof data === "function") {
      let tempFunc = data.bind(null)
      tempFunc.prototype = deepClone(data.prototype)
      return tempFunc
    }
    switch (Object.prototype.toString.call(data)) {
      case "[object String]":
        return data.toString()
      case "[object Number]":
        return Number(data.toString())
      case "[object Boolean]":
        return new Boolean(data.toString())
      case "[object Date]":
        return new Date(data.getTime())
      case "[object Array]":
        var arr = []
        for (let i = 0; i < data.length; i++) {
          arr[i] = deepClone(data[i])
        }
        return arr
      //js自带对象或用户自定义类实例
      case "[object Object]":
        var obj = {} as any
        for (let key in data) {
          //会遍历原型链上的属性方法，可以用hasOwnProperty来控制 （obj.hasOwnProperty(prop)
          obj[key] = deepClone(data[key])
        }
        return obj
    }
  } else {
    //string,number,bool,null,undefined,symbol
    return data
  }
 }
// 获取所有快捷按钮
export function getBtns(commder: ReturnType< typeof useVisualCommand >, currentBlockInfo: any) {
  const buttons = [
    {
      label: "删除",
      icon: "",
      handler: () => {
        if (!currentBlockInfo.value.focusBlock?.length) {
          return
        }
        commder.delete()
      },
      tip: "delete",
    },
    {
      label: "清空",
      icon: "",
      handler: () => {
        if (!currentBlockInfo.value.focusBlock?.length) {
          return
        }
        commder.clear()
      },
      tip: "ctrl + alt + d",
    },
    {
      label: "撤销",
      icon: "",
      handler: commder.undo,
      tip: "ctrl + z",
    },
    {
      label: "重做",
      icon: "",
      handler: commder.redo,
      tip: "ctrl + y",
    },
    {
      label: "上移",
      icon: "",
      handler: commder.up,
      tip: "alt + up",
    },
    {
      label: "下移",
      icon: "",
      handler: commder.down,
      tip: "alt + down",
    },
  ]
  return buttons
}