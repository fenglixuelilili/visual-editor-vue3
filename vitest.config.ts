import { defineConfig } from "vitest/config"
export default defineConfig({
  test: {
    environment: "node", // 指定测试环境 为node
    exclude: [
      // 排除路径
      "**/node_modules/**",
      "**/dist/**", // 构建产物也给排除
    ],
    threads: true, // 是否开启多线程
  },
})