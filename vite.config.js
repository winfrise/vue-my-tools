import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteMockServe } from 'vite-plugin-mock'
import { resolve } from 'path' 

export default defineConfig({
  plugins: [
    vue({
      template: {
          compilerOptions: {
            // 忽略 @cropper/elements 的 Web Components 标签
            isCustomElement: (tag) => {
              const customTags = ['cropper-canvas', 'cropper-image', 'cropper-selection', 'cropper-crosshair', 'cropper-grid', 'cropper-handle', 'cropper-shade']
              return customTags.includes(tag)
            }
          }
      }
    }),
    viteMockServe({
      mockPath: 'src/mock',
      enable: true,
      watchFiles: true,
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'), // 👈 关键：将 @ 指向 src 目录
    },
  },
})
