# Visual Editor Vue3

## 🚀 项目简介

Visual Editor Vue3 是一个基于 Vue 3 的可视化编辑器组件，专为无代码/低代码平台而设计。它提供了一个强大而灵活的基座，让您能够快速构建各种场景的可视化编辑器。

### 🎯 核心特性

- **模块化架构**: 组件化设计，易于扩展和定制
- **JSON 驱动**: 所有编辑结果以 JSON 格式输出，便于跨平台渲染和数据持久化
- **业务无关**: 提供基础框架，具体业务组件可按需开发
- **Vue 3 原生**: 充分利用 Vue 3 的 Composition API 和响应式系统
- **AI 友好**: JSON 格式天然适配 AI 生成和处理

# Visual Editor Vue3

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

## 📦 快速开始

### 环境要求

- Node.js >= 16.0.0
- Vue 3.x
- TypeScript (推荐)

### 安装步骤

#### 1. 克隆项目

```bash
git clone https://github.com/your-repo/visual-editor-vue3.git
cd visual-editor-vue3
```

#### 2. 安装依赖

```bash
npm install
# 或者使用 yarn
yarn install
```

#### 3. 构建项目

```bash
npm run build
# 或者使用 yarn
yarn build
```

构建完成后，产物将位于 `visualEditor` 目录中。

#### 4. 在您的项目中使用

**方式一：直接拷贝**

将 `visualEditor` 目录的所有内容拷贝到您的项目中：

```bash
cp -r visualEditor your-project/src/
```

**方式二：发布到 NPM（推荐）**

```bash
# 发布到您的 NPM 仓库
npm publish
```

然后在您的项目中安装：

```bash
npm install visual-editor-vue3
# 或者使用 yarn
yarn add visual-editor-vue3
```

#### 5. 基础使用

```vue
<template>
  <div>
    <VisualEditor
      v-model="editorData"
      :built-in-coms="builtInComponents"
      @save="handleSave"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import VisualEditor from "visual-editor-vue3"

// 编辑器数据
const editorData = ref({
  page: {
    background: "#ffffff",
    components: [],
  },
})

// 内置组件配置
const builtInComponents = ref({
  baseImg: true,
  baseSubmit: true,
  baseTitle: true,
})

// 保存处理
const handleSave = (data: any) => {
  console.log("保存的数据:", data)
}
</script>
```

## 🏗️ 组件属性

### 页面级属性

Visual Editor Vue3 支持丰富的页面级配置，让您可以轻松定制编辑器的外观和行为。

#### 背景配置

- **背景色**: 支持十六进制、RGB、RGBA 等多种颜色格式
- **背景图**: 支持图片上传和 URL 配置
- **背景图位置**: 支持多种定位方式（居中、平铺、拉伸等）

#### 布局属性

- **宽度 (width)**: 支持百分比和固定像素值
- **上边距 (margin-top)**: 控制组件与上边界的距离
- **下边距 (margin-bottom)**: 控制组件与下边界的距离

#### 高级属性

- **动画属性**: 支持组件入场、交互动画配置
- **规则属性**: 支持条件显示、数据验证等业务规则

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

## 📚 API 文档

### 组件属性

| 属性名        | 类型          | 默认值 | 说明           |
| ------------- | ------------- | ------ | -------------- |
| v-model       | Object        | {}     | 编辑器数据绑定 |
| built-in-coms | Object        | {}     | 内置组件配置   |
| width         | String/Number | '100%' | 编辑器宽度     |
| height        | String/Number | 'auto' | 编辑器高度     |

### 事件

| 事件名 | 参数                        | 说明           |
| ------ | --------------------------- | -------------- |
| save   | (data: Object) => void      | 保存编辑器数据 |
| change | (data: Object) => void      | 数据变更回调   |
| select | (component: Object) => void | 组件选中回调   |

### 方法

| 方法名     | 参数                   | 返回值    | 说明             |
| ---------- | ---------------------- | --------- | ---------------- |
| exportJSON | () => Object           | JSON 数据 | 导出为 JSON 格式 |
| importJSON | (data: Object) => void | -         | 导入 JSON 数据   |
| clear      | () => void             | -         | 清空编辑器内容   |

## 🚀 进阶使用

### 打包配置

项目使用 Vite 进行构建，支持多种打包模式：

```bash
# 开发模式
npm run dev

# 生产构建
npm run build

# 预览构建结果
npm run preview
```

### 自定义主题

支持通过 CSS 变量自定义编辑器主题：

```css
:root {
  --ve-primary-color: #2563eb;
  --ve-border-color: #e5e7eb;
  --ve-bg-color: #ffffff;
}
```

### 注意事项

1. **性能优化**: 大量组件时建议使用虚拟化技术
2. **数据持久化**: 建议定期保存编辑器状态
3. **浏览器兼容**: 支持现代浏览器，IE11 需要额外 polyfill
4. **移动端适配**: 建议使用响应式设计

## 🧩 内置组件

Visual Editor Vue3 提供了丰富的内置组件，通过 `builtInComs` 属性可以灵活控制组件的显示与隐藏。这些组件涵盖了常见的业务场景，让您能够快速搭建功能完整的表单和页面。

### 基础组件

#### 🖼️ baseImg - 图片组件

用于展示图片内容，支持图片上传、URL 配置和多种显示模式。

#### 📝 baseText - 文本描述组件

用于展示说明文字、提示信息等内容，支持富文本格式。

#### 🏷️ baseTitle - 标题组件

用于页面标题、章节标题等，支持多种字体样式和大小配置。

#### 🎯 baseSubmit - 提交按钮

表单提交按钮，支持自定义文案、样式和点击事件。

#### ✅ baseSuccess - 成功页组件

用于展示操作成功后的反馈页面，包含成功图标和提示信息。

### 表单组件

#### 📱 checkPhone - 手机号验证组件

支持手机号输入和短信验证码验证，内置格式校验和防刷机制。

#### 📱 personPhone - 手机号输入组件

基础的手机号输入组件，支持格式校验。

#### 👤 personName - 姓名输入组件

用于输入用户姓名，支持中英文校验。

#### 🏫 personSchool - 学校输入组件

用于输入学校名称，支持模糊匹配和历史记录。

#### 📅 personYear - 年份选择组件

用于选择年份，支持范围限制和默认值设置。

#### 🗺️ personProvince - 省份选择组件

支持中国省份选择，可配合城市组件使用。

#### 📤 personUpload - 文件上传组件

支持多种文件格式上传，可配置文件大小限制和上传进度显示。

#### 📝 personOther - 其他输入组件

通用的文本输入组件，适用于各种自定义输入场景。

### 选择组件

#### 🔘 commenRadio - 单选组件

支持单选按钮组，可配置选项列表和默认值。

#### ✅ commenMultiple - 多选组件

支持多选按钮组，适用于需要选择多个选项的场景。

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

### 业务场景适配

内置组件的设计充分考虑了不同业务场景的需求：

- **教育行业**: personSchool、personYear 等组件专为教育场景优化
- **金融行业**: checkPhone、personProvince 等组件满足金融合规要求
- **电商行业**: baseImg、baseSubmit 等组件适合商品展示和购买流程
- **通用场景**: baseText、baseTitle 等组件适用于各种通用场景

> 💡 **提示**: 您可以根据具体业务需求，选择性地启用或禁用某些内置组件，以提供更精准的编辑体验。

## 🔧 开发自定义组件

Visual Editor Vue3 提供了强大的自定义组件开发能力，让您能够根据业务需求创建专属的组件。通过简单的配置，您就可以将普通的 Vue 组件集成到编辑器中。

### 📋 组件基本构成规则

自定义组件需要遵循以下基本结构：

```typescript
// 自定义组件示例
export default {
  name: "CustomComponent",
  props: {
    // 组件属性配置
    title: {
      type: String,
      default: "默认标题",
    },
    // 更多属性...
  },
  setup(props) {
    // 组件逻辑
    return {
      // 返回模板中需要的数据和方法
    }
  },
}
```

### 🎛️ 基础属性配置

组件的 `props` 配置决定了它在编辑器中的表现形式：

```javascript
props: {
  successSrc: {
    defaultValue: "https://example.com/success.png",
    label: "成功图标",
    type: "imgUpload",
  },
  title: {
    defaultValue: "默认标题",
    label: "标题文本",
    type: "input",
  },
  fontSize: {
    defaultValue: 16,
    label: "字体大小",
    type: "number",
  },
  themeColor: {
    defaultValue: "#2563eb",
    label: "主题色",
    type: "color",
  },
  description: {
    defaultValue: "请输入描述",
    label: "描述文本",
    type: "textarea",
  },
  // 下拉选择示例
  fontFamily: {
    label: "字体",
    defaultValue: '"SF Pro Display"',
    type: "select",
    options: [
      { name: "跟随系统", value: '"SF Pro Display"' },
      { name: "微软雅黑", value: '"Microsoft YaHei"' },
      { name: "平方", value: '"PingFang SC"' },
      { name: "无衬线", value: '"sans-serif"' },
    ],
  }
}
```

### 🔧 控制器类型说明

| 类型        | 说明         | 用途                                |
| ----------- | ------------ | ----------------------------------- |
| `color`     | 颜色选择器   | 用于颜色配置                        |
| `input`     | 文本输入框   | 用于简单文本输入                    |
| `textarea`  | 多行文本输入 | 用于长文本描述                      |
| `imgUpload` | 图片上传组件 | 用于图片资源配置                    |
| `number`    | 数字输入框   | 用于数值配置                        |
| `select`    | 下拉选择器   | 用于选项选择，需配合 `options` 使用 |

### 🎨 高级用法

#### 自定义渲染

当内置的控制器类型无法满足需求时，您可以使用自定义渲染：

```javascript
props: {
  customConfig: {
    label: "自定义配置",
    // 不设置 type，将在编辑器中使用自定义渲染
  }
}
```

然后在组件中实现自定义的渲染逻辑：

```vue
<template>
  <div>
    <!-- 组件内容 -->
    <div v-if="showCustomPanel">
      <!-- 自定义配置面板 -->
      <CustomConfigPanel v-model="props.customConfig" />
    </div>
  </div>
</template>
```

#### 条件显示

支持根据其他属性的值来控制属性的显示：

```javascript
props: {
  showTitle: {
    type: "select",
    label: "显示标题",
    options: [
      { name: "显示", value: true },
      { name: "隐藏", value: false }
    ]
  },
  titleText: {
    label: "标题内容",
    type: "input",
    // 只有当 showTitle 为 true 时才显示
    condition: (values) => values.showTitle === true
  }
}
```

#### 数据验证

支持对属性值进行验证：

```javascript
props: {
  email: {
    label: "邮箱地址",
    type: "input",
    validator: (value) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return emailRegex.test(value) || "请输入有效的邮箱地址"
    }
  }
}
```

### 🚀 注册自定义组件

将自定义组件注册到编辑器中：

```javascript
import { registerComponent } from "visual-editor-vue3"

// 注册自定义组件
registerComponent({
  name: "MyCustomComponent",
  component: MyCustomComponent,
  category: "custom", // 组件分类
  icon: "custom-icon", // 组件图标
  description: "我的自定义组件", // 组件描述
})
```

### 💡 最佳实践

1. **命名规范**: 使用有意义的组件名称和属性名称
2. **默认值**: 为所有属性提供合理的默认值
3. **类型安全**: 充分利用 TypeScript 提供类型检查
4. **性能优化**: 避免在组件中进行复杂的计算
5. **用户体验**: 提供清晰的属性说明和验证提示

### 📚 开发示例

查看项目中的内置组件实现，了解更详细的开发模式：

- `src/built-in-registor/base/base-img/` - 图片组件示例
- `src/built-in-registor/commen/commen-radio/` - 单选组件示例
- `src/built-in-registor/person/person-name/` - 表单组件示例

> 💡 **提示**: 自定义组件的开发就像开发普通的 Vue 组件一样简单，关键是要理解属性配置和编辑器的交互方式。

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
