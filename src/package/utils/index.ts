import { block } from "@/types/editor"
import { useVisualCommand } from "./visual.command"
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
    return data
  }
 }
// 获取所有快捷按钮
export function getBtns(commder: ReturnType< typeof useVisualCommand >, currentBlockInfo: any, debug: boolean, props: any) {
  const buttons = [
    {
      label: "删除",
      icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/1726286985855114a17262869858559088_dl.png",
      handler: () => {
        if (!currentBlockInfo.value.focusBlock?.length) {
          return
        }
        commder.delete()
      },
      tip: "delete",
    },
    {
      label: "清空画布",
      icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17262860792458a37172628607924683951_clean.png",
      handler: () => {
        // if (!currentBlockInfo.value.focusBlock?.length) {
        //   return
        // }
        commder.clear()
      },
      tip: "ctrl + alt + d",
    },
    {
      label: "撤销",
      icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/1726286118186292f172628611818673562_undo.png",
      handler: commder.undo,
      tip: "ctrl + z",
    },
    {
      label: "重做",
      icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17262861296832676172628612968393295_redo.png",
      handler: commder.redo,
      tip: "ctrl + y",
    },
    {
      label: "上移",
      icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17262861408486588172628614084821011_up.png",
      handler: commder.up,
      tip: "alt + up",
    },
    {
      label: "下移",
      icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17262861510304f96172628615103083185_down.png",
      handler: commder.down,
      tip: "alt + down",
    },
  ]
  if (debug) { 
    buttons.push( {
      label: "导出json",
      icon: "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17263054455271570172630544552753846_export.png",
      handler: () => {
        console.log( props )
        console.log( JSON.stringify( props.modelValue.blocks ) )
      },
      tip: "",
    },)
  }
  return buttons
}
// 检测某些画布组件唯一性（只能添加一个）
export function isPass( block: block, blocks: block[] ): boolean {
  let currentKey = block.componentKey
  return !!!blocks.find(cblock => cblock.componentKey === currentKey)
}