# 简介，这是个什么项目？

一个 vue3 的组件，用于无代码或低代码平台，可以满足不同的场景，组件只提供基础的基座，基础操作，生成 JSON，渲染等基础工作，具体某个业务组件需要自己开发，就像开发一个 vue 组件一样简单

## 最终产物是什么？

最终是一串 JSON，无论是夸平台渲染，还是后端存储，以及接入 AI，json 都是最佳的方案

# 快速开始

- 第一步 拉取此项目后 安装依赖就不多赘述了
- 第二步 打包，执行
  ```javascript
    npm run build
  ```
- 第三步 打包产物放在了 visualEditor 目录下
- 第四步 在您的项目中使用
  将 visualEditor 目录所有内容拷贝到您的项目（或者传到 npm 也行）
- 第五步 使用

  ```javascript

  ```

# 所需要的属性

- 页面属性
  背景色
  背景图
  ～背景图的位置

- 基础属性
  宽度 width (百分比)
  上边距 margin-top
  下边距 margin-bottom

- 动画属性

- 规则属性

# 文档

# 插槽

- header

- tempList

# api

# 开始

## 打包

## 使用

## 注意事项

# 内置组件

通过编辑器组件上的 builtInComs 属性来控制内置组件的显示与否
内置组件有（有些可能跟业务有关的，只是文案不一样，用于快捷创建表单）：

- baseImg
  图片组件
- baseSubmit
  提交按钮
- baseTitle
  标题组件
- baseText
  文本描述组件
- baseSuccess
  一个成功页
- checkPhone
  手机号组件，走短信验证的
- personName
  姓名组件（就是输入框组件）
- personOther
  其他输入组件 （就是输入框组件）
- personPhone
  手机号组件，不走短信验证
- personProvince
  选择省份组件
- personSchool
  学校输入组件 （就是输入框组件）
- personUpload
  上传文件组件
- personYear
  选择年份组件（选择器组件）
- commenMultiple
  通用多选组件
- commenRadio
  单选组件

# 开发自定义组件

## 一个组件的基本构成规则

## 基础属性

```javascript
  props: {
    successSrc: {
      defaultValue:
        "https://ysys-assets.oss-cn-beijing.aliyuncs.com/public/17262956483528fb5172629564835229384_succ.png",
      label: "成功图标",
      type: "imgUpload",
    }
  }
```

- type 控制器中的类型解析成什么组件，如果不写 type 则不渲染（一般用于自定义渲染，见下文）
  color：颜色取值组件
  input：输入框组件
  textarea: 文本与输入组件
  imgUpload：基础上传组件
  number： 数字输入框
  select: 下拉选择，配合 options 使用，例如下面这个例子

  ```javascript
    // 一个选择字体类型的控制器
    fontFamily: {
      label: "字体",
      defaultValue: '"SF Pro Display"',
      type: "select",
      options: [
        {
          name: "跟随系统",
          value: '"SF Pro Display"',
        },
        {
          name: "微软雅黑",
          value: '"Microsoft YaHei"',
        },
        {
          name: "平方",
          value: '"PingFang SC"',
        },
        {
          name: "无衬线",
          value: '"sans-serif"',
        },
      ],
    }
  ```

- defaultValue
  这个属性用于传递默认值
- label
  就是 title

## 自定义属性与高级用法
