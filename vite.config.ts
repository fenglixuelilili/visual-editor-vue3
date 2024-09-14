import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from "path"
import { vitePluginForArco } from '@arco-plugins/vite-vue'
// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      // less: {
      //   modifyVars: {
      //     'arcoblue-6': '#780341',
      //     "primary-6": '#780341',
      //   },
      //   javascriptEnabled: true,
      // },
      // less: {
      //   modifyVars: {
      //     // 引入`base.less`
      //     hack: `true; @import (reference) "${path.resolve('./src/styles/base.less')}";`,
      //     'arcoblue-6': '#780341',
      //   },
      //   javascriptEnabled: true,
      // }
    }
  },
  plugins: [
    vue(),
    vueJsx(),
    vitePluginForArco({
      style: 'less' as any,
      modifyVars: {
        'arcoblue-6': '#00a680',
        // "primary-6": '#780341',
      }
    })
  ],
  // 配置组件库打包模式
  build: {
    outDir: "visualEditor", //输出文件名称
		lib: {
			entry: path.resolve(__dirname, "./src/index.ts"), //指定组件编译入口文件
			name: "index",
			fileName: "index",
		}, //库编译模式配置
		rollupOptions: {
			// 确保外部化处理那些你不想打包进库的依赖
			external: ["vue"],
			output: {
				// 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
				globals: {
					vue: "Vue",
				},
			},
		}
  }
})
