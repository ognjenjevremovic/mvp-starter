import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@/client': fileURLToPath(new URL('./src/client', import.meta.url)),
      '@/common': fileURLToPath(new URL('./src/common', import.meta.url)),
    },
  },
  server: {
    proxy: {
      '^/api/.*': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        rewrite: (path) => {
          const p = path.replace(/^\/api/, '')
          return p
        },
      },
    },
  },
})
