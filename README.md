# Visual Editor Vue3

<div align="center">
  <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20visual%20editor%20interface%20with%20drag%20and%20drop%20functionality%2C%20clean%20UI%2C%20Vue%203%20based&image_size=square_hd" alt="Visual Editor Vue3" width="400" />
  
  <p>A powerful, flexible Vue 3 component for building no-code/low-code editors</p>
  
  <div>
    <a href="#" target="_blank">
      <img src="https://img.shields.io/badge/Vue-3.x-brightgreen.svg" alt="Vue 3" />
    </a>
    <a href="#" target="_blank">
      <img src="https://img.shields.io/badge/TypeScript-4.9+-blue.svg" alt="TypeScript" />
    </a>
    <a href="#" target="_blank">
      <img src="https://img.shields.io/badge/Vite-4.0+-yellow.svg" alt="Vite" />
    </a>
    <a href="#" target="_blank">
      <img src="https://img.shields.io/badge/License-MIT-green.svg" alt="MIT License" />
    </a>
  </div>
</div>

## 🚀 项目简介

Visual Editor Vue3 是一个基于 Vue 3 的可视化编辑器组件，专为无代码/低代码平台而设计。它提供了一个强大而灵活的基座，让您能够快速构建各种场景的可视化编辑器。

### 🎯 核心特性

- **模块化架构**: 组件化设计，易于扩展和定制
- **JSON 驱动**: 所有编辑结果以 JSON 格式输出，便于跨平台渲染和数据持久化
- **业务无关**: 提供基础框架，具体业务组件可按需开发
- **Vue 3 原生**: 充分利用 Vue 3 的 Composition API 和响应式系统
- **AI 友好**: JSON 格式天然适配 AI 生成和处理

### 📊 技术优势

- **高性能渲染**: 基于 Vue 3 的虚拟 DOM 和响应式系统
- **类型安全**: 完整的 TypeScript 支持
- **开发友好**: 丰富的开发工具和调试支持
- **生态丰富**: 无缝集成 Vue 3 生态系统

### 🎨 应用场景

- **表单设计器**: 快速构建复杂的业务表单
- **页面编辑器**: 可视化页面布局和内容编辑
- **营销页面**: H5 营销页面的快速搭建
- **配置中心**: 可视化配置管理界面
- **原型设计**: 快速产品原型开发

## 📦 安装

### 环境要求

- Node.js >= 16.0.0
- Vue 3.x
- TypeScript (推荐)

#### 本地调试项目（非正确使用，用于调试源码）

1. 克隆项目并运行

```bash
git clone https://github.com/your-repo/visual-editor-vue3.git
cd visual-editor-vue3
yarn install
npm run dev
```

### 使用方式

#### 方式一：直接使用构建产物

1. 克隆项目并构建

```bash
git clone https://github.com/your-repo/visual-editor-vue3.git
cd visual-editor-vue3
yarn install
yarn build
```

2. 将 `visualEditor` 目录的所有内容拷贝到您的项目中

#### 方式二：NPM 安装（推荐）

```bash
# 发布到您的 NPM 仓库
npm publish

# 然后在您的项目中安装
npm install visual-editor-vue3
# 或者使用 yarn
yarn add visual-editor-vue3
```

## 🚀 快速开始

### 基础使用

```vue
<template>
  <div>
    <visualEditor
      v-model="formData"
      :builtInComs="builtInComs"
      builtInComsControlView
      debug
      dragMove
      :fileUploadHandler="uploadFileOss"
      v-if="!isSuccessCom"
    >
      <template #tempList>
        <tab-page
          :formData="formData"
          :successData="successData"
          @change="useTemplate"
        ></tab-page>
      </template>
      <template #pageTemp>
        <theme-temple-list
          v-model="form.theme_id"
          @change="themeChange"
        ></theme-temple-list>
      </template>
    </visualEditor>
  </div>
</template>

<script lang="ts">
import visualEditor from "@/assets/visualEditor/index"
export default defineComponent({
  components: {
    visualEditor: visualEditor.visualEditor,
    priviewVisualEditor: visualEditor.priviewVisualEditor,
  },
  setup() {
    function createForm() {
      return {
        form: {
          owner_id: store.state?.User?.userInfo?.employee_id
            ? store.state.User.userInfo.employee_id
            : "", // 创建人
          name: "", // 表单名称
          activity_type_id: "", // 表单类型
          sub_title: "", // 表单副标题
          service_site_id: "", // 服务点
          description: "", // 表单描述
          cover_path: "", // 微信分享封面地址
          share_content: "", // 分享内容
          share_title: "", // 分享标题
          field_maps: [], // 字段映射信息
          channel_ids: [], // 渠道
          target_type_data_id: [] as { name: string; id: string }[], // 推广人员id
          target_info: [], // 推广人员id json
          form_configs: [], // 主页面的json

          start_time: `${curDate.year}-${curDate.month}-${curDate.day}`, // 当前日期 固定值
          end_time: `${curDate.year}-${curDate.month}-${curDate.day}`, // 当前日期  固定值

          class_form: 1, // 固定值
          target_student_type: 1, // 固定值
          target_type: 3, // 固定值
          submit_base_num: 0, // 固定值 0
          owner_campus_id: "", // 所在校区
          theme_id: "1", // 默认主题
          if_service_location: 2, // 是否是多校区 1 是 2 否
        },
        formData: {
          container: {
            width: 350,
            height: 600,
            backgroundColor: "#fff",
            scale: 100,
            backgroundImage: "",
            // wrapper: 600,
          },
          blocks: [] as any[],
        },
        successData: deepClone(successData),
      }
    }
    let state = reactive({
      formData: createForm().formData,
      builtInComs: [
        "baseImg",
        "baseSubmit",
        "baseText",
        "baseTitle",
        // "baseSuccess",
        "checkPhone",
        "personName",
        "personOther",
        "personPhone",
        // 'personProvince',
        "personSchool",
        "personUpload",
        // 'personYear',
        "commenMultiple",
        "commenRadio",
        "info",
        "file",
        "personUrbanarea",
        "personGrade",
        "personServicesite",
        // 'baseThemesuccess'
      ],
    })
    onMounted(() => {
      visualEditor.registry(infoPlugin)
      visualEditor.registry(uploadPlugin)
      visualEditor.registry(personUrbanarea)
      visualEditor.registry(personGrade)
      visualEditor.registry(baseThemesuccess)
      visualEditor.registry(personServicesite)
      init()
    })
    function setThemeFormData(id: string) {
      let pageBgColor = ""
      let bgColor = "" // 输入框的颜色
      let themeColor = "" // 主题色
      if (id == "1") {
        pageBgColor = "#ffffff"
        bgColor = "#F5F7FA"
        themeColor = "#3C7EFF"
        state.successData = deepClone(successData)
      }
      if (id == "2") {
        pageBgColor = "#FFF2EA"
        bgColor = "#FFFFFF"
        themeColor = "#FF7E2C"
      }
      if (id == "3") {
        pageBgColor = "#FFF2F2"
        bgColor = "#FFFFFF"
        themeColor = "#FF4039"
      }
      if (id == "4") {
        pageBgColor = "#F0FDF4"
        bgColor = "#FFFFFF"
        themeColor = "#36A556"
      }
      state.formData = {
        container: {
          ...state.formData.container,
          backgroundColor: pageBgColor,
        },
        blocks: state.formData.blocks.map((item) => {
          for (let key in item.props) {
            if (
              (item.componentKey == "baseTitle" ||
                item.componentKey == "baseSubmit") &&
              key == "backgroundColor"
            ) {
              item.props[key] = {
                ...item.props[key],
                defaultValue: themeColor,
              }
            }
            if (key == "bgColor") {
              item.props[key] = {
                ...item.props[key],
                defaultValue: bgColor,
              }
            }
            if (key == "themeColor") {
              item.props[key] = {
                ...item.props[key],
                defaultValue: themeColor,
              }
            }
          }
          return item
        }),
      }

      let topStartColor = ""
      let topEndColor = ""
      let successQR = ""
      if (id == "2") {
        topStartColor = "#FFA770"
        topEndColor = "#FF7822"
        successQR =
          "https://fileax.shuipingce.com/public/44d5172965311864165425_origin.png"
      }
      if (id == "3") {
        topStartColor = "#FFA09C"
        topEndColor = "#FF4039"
        successQR =
          "https://fileax.shuipingce.com/public/664c172965314639366570_red.png"
      }
      if (id == "4") {
        topStartColor = "#6ED28B"
        topEndColor = "#2BBF56"
        successQR =
          "https://xy-shunshun-pro.oss-cn-hangzhou.aliyuncs.com/public/7061172965317420111128_green.png"
      }
      if (id != "1") {
        state.successData = {
          container: {
            ...state.successData.container,
            backgroundColor: "#ffffff",
          },
          blocks: [
            {
              adjustmentPosition: true,
              focus: true,
              zIndex: 0,
              hasResize: false,
              width: 0,
              height: 0,
              id: "$i29210470047928260",
              dragMode: "",
              widthAdaption100: false,
              top: 0,
              left: 0,
              componentKey: "baseThemesuccess",
              props: {
                successSrc: {
                  defaultValue:
                    "https://webviewax.shuipingce.com/static/img/succ.4eea012c.png",
                  label: "成功图标",
                  type: "imgUpload",
                  key: "successSrc",
                },
                successText: {
                  defaultValue: "已提交成功",
                  label: "成功标题",
                  type: "input",
                  key: "successText",
                },
                successColor: {
                  defaultValue: "#fff",
                  label: "成功标题文字颜色",
                  type: "color",
                  key: "successColor",
                },
                topStartColor: {
                  defaultValue: topStartColor,
                  label: "顶部开始渐变色",
                  type: "color",
                  key: "topStartColor",
                },
                topEndColor: {
                  defaultValue: topEndColor,
                  label: "顶部结束渐变色",
                  type: "color",
                  key: "topEndColor",
                },
                successQR: {
                  defaultValue: successQR,
                  label: "成功二维码",
                  type: "imgUpload",
                  key: "successQR",
                },
                erCodeBgColor: {
                  defaultValue: pageBgColor,
                  label: "二维码背景色",
                  type: "color",
                  key: "erCodeBgColor",
                },
                erCodeBorderColor: {
                  defaultValue: themeColor,
                  label: "二维码边框色",
                  type: "color",
                  key: "erCodeBorderColor",
                },
                successDesc: {
                  label: "成功提示",
                  defaultValue: "提交成功",
                  type: "textarea",
                  key: "successDesc",
                },
                successLinkType: {
                  defaultValue: "1",
                  label: "跳转类型",
                  type: "radio",
                  options: [
                    { name: "链接跳转", value: "1" },
                    { name: "文件跳转", value: "2" },
                  ],
                  key: "successLinkType",
                },
                successFileLink: {
                  defaultValue: "",
                  label: "跳转文件",
                  type: "fileUpload",
                  key: "successFileLink",
                },
                successLink: {
                  defaultValue: "",
                  label: "跳转链接",
                  type: "input",
                  key: "successLink",
                },
              },
              x: 1,
              y: 1,
              w: 1,
              h: 1,
              formItemField: "",
            },
          ],
        }
      } else {
        state.successData = deepClone(successData)
      }
    }
    watch(
      () => [state.step, state.successData, state.formData, state.form],
      () => {
        if (!state.id) {
          // 保存
          saveForm()
        }
      },
      {
        deep: true,
      },
    )
    watch(
      () => route.query.id,
      () => {
        state.id = (route.query.id ? route.query.id : "") as string
        init()
      },
    )
    watch(
      () => state.formData.blocks.length,
      (val, oldVal) => {
        if (val != oldVal) {
          setTimeout(() => {
            !state.detailLoading && setThemeFormData(state.form.theme_id)
          }, 10)
        }
      },
      { deep: true },
    )
    function getText(htmlString: string) {
      let text = htmlString
      let matches: string[] | null = text.match(/[\u4e00-\u9fff]+/g) // 匹配所有连续的中文字符序列
      if (!matches) {
        return ""
      }
      return matches.join("")
    }
    return {
      mform,
      uploadFileOss,
      mmajorCascader,
      ...toRefs(state),
      back() {
        router.$back()
      },
      next() {
        if (state.step == "1") {
          if (!state.formData.blocks.length) {
            ElMessage.warning("请检查表单是否添加！")
            return
          }
          let result = state.formData.blocks.find((item: any) => {
            return item.componentKey === "baseSubmit"
          })
          if (!result) {
            cusElMessageBox(
              "温馨提示",
              "您似乎忘记了添加提交按钮了,是否要继续添加?",
              "确定",
              "回去添加",
            ).then(() => {
              state.step = "2"
            })
            return
          }
          let repeatPhone = state.formData.blocks.filter((item: any) => {
            return (
              item.componentKey === "personPhone" ||
              item.componentKey === "checkPhone"
            )
          })
          if (repeatPhone.length >= 2) {
            cusElMessage.warning("抱歉，收集电话组件重复，请检查！")
            return
          }
          // 查找标题和描述
          let titleInfo: any = state.formData.blocks.find(
            (item: any) => item.componentKey == "baseTitle",
          )
          let descInfo: any = state.formData.blocks.find(
            (item: any) => item.componentKey == "baseText",
          )
          try {
            if (
              titleInfo &&
              !(state.type == "2" && state.id) &&
              !state.form.name
            ) {
              if (titleInfo.props.text && titleInfo.props.text.defaultValue) {
                state.form.name = getText(titleInfo.props.text.defaultValue)
              }

              if (
                titleInfo.props.descText &&
                titleInfo.props.descText.defaultValue
              ) {
                // state.form.sub_title = getText(
                //   titleInfo.props.descText.defaultValue
                // )
                state.form.description = getText(
                  titleInfo.props.descText.defaultValue,
                )
              }
            }
            if (
              descInfo &&
              !(state.type == "2" && state.id) &&
              !state.form.description
            ) {
              state.form.description = descInfo.props.text.defaultValue
            }
          } catch (error) {}
          state.step = "2"
        } else {
          mform.value &&
            mform.value.validate((valid: any, fields: any) => {
              if (valid) {
                console.log(state.formData, "详情里面的state.formData???")
                // 计算 field_maps
                let field_maps: any[] = []
                state.formData.blocks.forEach((block: any) => {
                  if (block.formItemField) {
                    let obj: any = {
                      field_label: block?.props?.title?.defaultValue
                        ? block.props.title.defaultValue
                        : "暂无",
                      field_name: block.formItemField,
                      field_type: 1,
                    }
                    if (
                      block.formItemField == "phone" ||
                      block.formItemField == "sms_code"
                    ) {
                      obj.field_config = JSON.stringify({
                        hours: (function () {
                          if (block.props.only.defaultValue == "2") {
                            return "0"
                          }
                          return block.props.cycle.defaultValue + ""
                        })(),
                      })
                    }
                    if (block.formItemField == "name") {
                      obj.field_config = JSON.stringify({
                        unique: block.props.only.defaultValue + "",
                      })
                    }
                    field_maps.push(obj)
                  }
                  if (
                    block.componentKey == "commenRadio" ||
                    block.componentKey == "commenMultiple"
                  ) {
                    let obj: any = {
                      field_label: block?.props?.title?.defaultValue
                        ? block.props.title.defaultValue
                        : "暂无",
                      field_name: block.id,
                      field_type: 2,
                    }
                    field_maps.push(obj)
                  }
                })
                // 计算target_info
                let target_info = state.form.target_type_data_id.map((item) => {
                  return {
                    data_id: item.id,
                    target_amount: 0,
                    target_num: 1,
                    target_student_type_num: {
                      activation_num: 0,
                      deal_num: 0,
                      new_num: 1,
                    },
                  }
                })

                let resultForm = {
                  ...state.form,
                  field_maps: JSON.stringify(field_maps),
                  channel_ids: JSON.stringify(
                    state.tableData.map((item) => item.id),
                  ),
                  target_type_data_id: JSON.stringify(
                    state.form.target_type_data_id.map((item) => item.id),
                  ),
                  target_info: JSON.stringify(target_info),
                  form_configs: JSON.stringify(state.formData),
                  form_success_configs: JSON.stringify(state.successData),
                  org_id: store.getters.orgId || "",
                }
                if (getSystem() == "schoolSystem") {
                  if (
                    !resultForm.owner_campus_id ||
                    resultForm.owner_campus_id == "-1"
                  ) {
                    // 如果啥也没选  或者 选择了多校区 判断服务点表单必选
                    let isHaveService = state.formData.blocks.find((block) => {
                      return block.componentKey == "personServicesite"
                    })
                    if (!isHaveService) {
                      cusElMessage.warning(
                        "表单中的服务点组件必选，请退回上一步重新操作！",
                      )
                      return
                    }
                  }
                  if (resultForm.owner_campus_id == "-1") {
                    // 选择了多校区后 将值复位
                    resultForm.owner_campus_id = "0"
                    resultForm.if_service_location = 1
                  } else {
                    resultForm.if_service_location = 2
                  }
                }
                if (state.type == "1" || state.type == "3") {
                  // 新增
                  formApi.add(resultForm).then(() => {
                    resetForm()
                    ElMessage.success("添加成功")
                    closeTag()
                    router.$go()
                  })
                } else if (state.type == "2" && state.id) {
                  // 编辑
                  formApi
                    .edit({
                      ...resultForm,
                      id: state.id,
                    })
                    .then(() => {
                      ElMessage.success("编辑成功")
                      closeTag()
                      router.$go()
                      // resetForm()
                    })
                } else {
                  ElMessage.warning("参数错误，请退出重进！")
                }
              } else {
                ElMessage.warning("请检查表单！")
              }
            })
        }
      },
    }
  },
})
</script>
```

### 预览模式

```vue
<template>
  <div>
    <PreviewEditor :editor-data="editorData" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { priviewVisualEditor as PreviewEditor } from "visual-editor-vue3"

// 编辑器数据
const editorData = ref({
  page: {
    background: "#ffffff",
    components: [],
  },
})
</script>
```

## 🏗️ 组件 API

### VisualEditor 组件

| 属性名        | 类型          | 默认值 | 说明           |
| ------------- | ------------- | ------ | -------------- |
| v-model       | Object        | {}     | 编辑器数据绑定 |
| built-in-coms | Object        | {}     | 内置组件配置   |
| width         | String/Number | '100%' | 编辑器宽度     |
| height        | String/Number | 'auto' | 编辑器高度     |

#### 事件

| 事件名 | 参数                        | 说明           |
| ------ | --------------------------- | -------------- |
| save   | (data: Object) => void      | 保存编辑器数据 |
| change | (data: Object) => void      | 数据变更回调   |
| select | (component: Object) => void | 组件选中回调   |

### 全局 API

| 方法名        | 参数                                                              | 返回值                  | 说明               |
| ------------- | ----------------------------------------------------------------- | ----------------------- | ------------------ |
| registry      | (component: VisualEditorComponent, pushType: 'push' \| 'unshift') | void                    | 注册单个自定义组件 |
| batchRegistry | (components: VisualEditorComponent[])                             | void                    | 批量注册自定义组件 |
| logConfig     | ()                                                                | VisualEditorComponent[] | 查看所有注册组件   |

## 🧩 内置组件

Visual Editor Vue3 提供了丰富的内置组件，通过 `builtInComs` 属性可以灵活控制组件的显示与隐藏。

### 基础组件

- **baseImg** - 图片组件：用于展示图片内容，支持图片上传、URL 配置
- **baseText** - 文本描述组件：用于展示说明文字、提示信息等
- **baseTitle** - 标题组件：用于页面标题、章节标题等
- **baseSubmit** - 提交按钮：表单提交按钮，支持自定义文案和样式
- **baseSuccess** - 成功页组件：用于展示操作成功后的反馈页面

### 表单组件

- **checkPhone** - 手机号验证组件：支持手机号输入和短信验证码验证
- **personPhone** - 手机号输入组件：基础的手机号输入组件
- **personName** - 姓名输入组件：用于输入用户姓名
- **personSchool** - 学校输入组件：用于输入学校名称
- **personYear** - 年份选择组件：用于选择年份
- **personProvince** - 省份选择组件：支持中国省份选择
- **personUpload** - 文件上传组件：支持多种文件格式上传
- **personOther** - 其他输入组件：通用的文本输入组件

### 选择组件

- **commenRadio** - 单选组件：支持单选按钮组
- **commenMultiple** - 多选组件：支持多选按钮组

### 组件配置示例

```vue
<template>
  <VisualEditor
    :built-in-coms="{
      baseImg: true,
      baseSubmit: true,
      baseTitle: true,
      checkPhone: true,
      personName: true,
      commenRadio: true,
      commenMultiple: false, // 隐藏多选组件
    }"
  />
</template>
```

## 🔧 开发自定义组件

Visual Editor Vue3 提供了强大的自定义组件开发能力，让您能够根据业务需求创建专属的组件。

### 组件基本结构

```typescript
import type { VisualEditorComponent } from 'visual-editor-vue3'

const MyCustomComponent: VisualEditorComponent = {
  name: '组件标识',
  group: '组件所在分组名称',
  sort: '排序',
  icon: '图标',
  activeIcon: '激活状态的图标',
  label: '组件在编辑器中的名称',
  disabled?: false, // 是否禁用
  hide?: false, // 是否隐藏该组件
  addOnly?: false, // 在画布中是否只能有一条数据
  pushType?: 'push' | 'unshift', // 注册组件的时候 是往后注册还是往前插入
  formItemField?: 'string', // 如果组件是表单类型的组件 需要有一个key值来标识这个组件，用于收集传给后端（一般后端定义或者我们定义好给后端也行）
  props: {
    // 这里是我们自定义的字段名，用于配置这个组件有哪些属性可配置（只读也行的）
    // key用于在预览组件 或者 C端（小程序 h5等）还原设置的组件
    title: {
      defaultValue: '该组件的默认值',
      label: '在右侧控制器中的名称',
      type?: '该类型可选 有input｜textarea｜imgUpload等等，具体看下面表格， 如果设置了该属性那么就会在右侧控制器中立即有一个组件可以配置这个属性值',
    },
    // 更多属性...
  },
  render: (block) => {
    //  渲染器 这里可以实时拿到 props中设置的属性和属性值 用于实时渲染
    let props = block.props
    let style = computed(() => {
      return {
        marginTop: (props?.marginTop ? props.marginTop.defaultValue : 0) + "px",
        marginBottom:
          (props?.marginBottom ? props.marginBottom.defaultValue : 0) + "px",
      }
    })
    return createVNode(Com, { // Com 是我们引入的组件
      src: props.src.defaultValue,
      style: style.value,
    })
  },
  controlView: (block, updateBlock) => {
    //这里是控制器，用于自定义渲染右侧的配置项，如果您的props中的属性都有 type 并且设置正确，那么可以无需控制器 返回null即可或者空div
    return createVNode(control, {
      block,
    })
  },
}

export default MyCustomComponent
```

### props[key].type 的控制器类型如下

| 类型        | 说明         | 用途                                |
| ----------- | ------------ | ----------------------------------- |
| `color`     | 颜色选择器   | 用于颜色配置                        |
| `input`     | 文本输入框   | 用于简单文本输入                    |
| `textarea`  | 多行文本输入 | 用于长文本描述                      |
| `imgUpload` | 图片上传组件 | 用于图片资源配置                    |
| `number`    | 数字输入框   | 用于数值配置                        |
| `select`    | 下拉选择器   | 用于选项选择，需配合 `options` 使用 |
| `slider`    | 滑块控件     | 用于范围值选择                      |

### 注册自定义组件

```javascript
import { registry } from "visual-editor-vue3"
import MyCustomComponent from "./MyCustomComponent"

// 注册自定义组件
registry(MyCustomComponent)

// 或批量注册
import { batchRegistry } from "visual-editor-vue3"
import Component1 from "./Component1"
import Component2 from "./Component2"

batchRegistry([Component1, Component2])
```

## 🔌 插槽系统

Visual Editor Vue3 提供了灵活的插槽系统，让您能够自定义编辑器的各个部分。

### 可用插槽

- **header**: 自定义编辑器头部区域
- **tempList**: 自定义组件模板列表

### 插槽使用示例

```vue
<template>
  <VisualEditor>
    <!-- 自定义头部 -->
    <template #header>
      <div class="custom-header">
        <h2>我的编辑器</h2>
        <button @click="saveTemplate">保存模板</button>
      </div>
    </template>

    <!-- 自定义模板列表 -->
    <template #tempList>
      <div class="custom-template-list">
        <div v-for="template in templates" :key="template.id">
          {{ template.name }}
        </div>
      </div>
    </template>
  </VisualEditor>
</template>
```

## 🎨 自定义主题

支持通过 CSS 变量自定义编辑器主题：

```css
:root {
  --ve-primary-color: #2563eb;
  --ve-border-color: #e5e7eb;
  --ve-bg-color: #ffffff;
  --ve-text-color: #1f2937;
  --ve-hover-color: #f3f4f6;
  --ve-active-color: #e5e7eb;
}
```

## 🤝 贡献指南

我们欢迎社区贡献！如果您发现 bug 或有改进建议，请：

1. Fork 本项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交您的更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🙏 致谢

感谢所有为本项目做出贡献的开发者和用户！

---

**Visual Editor Vue3** - 让可视化编辑变得简单而强大 🚀
