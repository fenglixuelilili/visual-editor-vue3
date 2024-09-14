import { builtIn, createVisuaEditorComponents } from "@/types/editor"
import baseText from "./base/base-text"
import baseImg from "./base/base-img"
import baseSubmit from "./base/base-submit"
import baseTitle from "./base/base-title"
import baseSuccess from "./base/base-success"
import commenMultiple from "./commen/commen-multiple"
import commenRadio from "./commen/commen-radio"
import checkPhone from "./person/check-phone"
import personName from "./person/person-name"
import personOther from "./person/person-other"
import personPhone from "./person/person-phone"
import personProvince from "./person/person-province"
import personSchool from "./person/person-school"
import personUpload from "./person/person-upload"
import personYear from "./person/person-year"
const registorMap: any = {
  baseText,
  baseImg,
  baseSubmit,
  baseTitle,
  baseSuccess,
  commenMultiple,
  commenRadio,
  checkPhone,
  personName,
  personOther,
  personPhone,
  personProvince,
  personSchool,
  personUpload,
  personYear,
}
export function registorBuiltIn(
  editorInstance: ReturnType<typeof createVisuaEditorComponents>,
  comStr: builtIn[]
) {
  comStr.forEach((key) => {
    if (registorMap[key]) {
      editorInstance.registry(key, registorMap[key])
    } else {
      let keys = Object.keys(registorMap)
      console.error(
        `内置组件不合法，仅支持：${keys.join(",")}共${
          keys.length
        }种类型，如需其他自定义组件 需要使用registor工具手动注册`
      )
    }
  })
}
