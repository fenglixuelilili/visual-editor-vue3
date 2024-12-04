export default {
  title: "visualEditor",
  description: "一个基于vue3活动表单/专题编辑器",
  themeConfig: {
    lastUpdated: "最后更新时间",
    docsDir: "docs",
    editLinks: true,
    editLinkText: "编辑此网站",
    repo: "https://gitee.com/login",
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2024-present 李雪峰",
    },
    nav: [
      { text: "指南", link: "/guide/installation", activeMatch: "/guide/" },
      { text: "组件", link: "/component/icon", activeMatch: "/component/" },
    ],
    sidebar: {
      "/guide/": [
        {
          text: "指南",
          items: [
            { text: "安装", link: "/guide/installation" },
            { text: "快速开始", link: "/guide/quieStart" },
          ],
        },
      ],
      "/component/": [
        {
          text: "基础组件",
          items: [{ text: "Icon", link: "/component/icon" }],
        },
      ],
    },
  },
}
