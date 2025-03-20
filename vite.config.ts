import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// 引入path模块  //使用的是node模块
import path from "path";
// 要保证项目里安装了 @types/node，这个包包含了 Node.js 模块的类型定义。
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
