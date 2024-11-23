# 待处理 bug 和 功能

## 已完成

- [x] ~~删除组件 不对~~

- [x] ~~快捷键撤销不对~~

- [x] ~~清空命令~~

- [x] ~~单个组件删除操作~~

- [x] ~~快捷键命令禁用~~

- [x] ~~置顶命令~~

- [x] ~~置底命令~~

- [x] ~~按住 shift 进行只能上下移动操作~~

- [x] ~~组件贴边~~

- [x] ~~确定取消功能，数据回滚~~

## 待完成

- [ ] 画布合适尺寸以及等比缩放

- [ ] 画布真实宽度模拟（包括组件的固定宽度/高度 或者 宽度百分百）

- [ ] 组件的缩放（拖拽进行宽高调整）

- [ ] 布局组件的支持(左右布局，上下布局 左中右等等 现做一个 左右布局的 demo)

- [ ] 组件的排列方式: (编辑和预览组件)的定位放置 以及 按顺序放置

- [ ] 组件按顺序排放时候的上下拖拽 或者 像码云工作台一样丝滑拖拽

- [ ] 组件的分组

- [ ] 布局容器

- [ ] 预览以及各个平台兼容

- [ ] 自定义快捷键开放给用户

- [x] 标线模式可取消

- [ ] 只能建 1 页？多页怎么办

- [ ] 完善各个功能测试

## 已知 bug

- 删除会有 bug

## 已知需优化

- 组件的 props 类型推断

# 最后需要的工作

- ~~如何打包成组件库~~

- ~~最终导出哪些方法~~

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
        // "SF Pro Display",无衬线体 Roboto,Noto,Arial,"PingFang SC","Hiragino Sans GB","Microsoft YaHei",sans-serif
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
