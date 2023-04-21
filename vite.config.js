import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/final-bootstrap5-nocab7714/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
    @import 'bootstrap/scss/functions';
    @import '@/assets/helpers/variables';
    @import 'bootstrap/scss/maps';
    @import 'bootstrap/scss/mixins';
    @import '@/assets/helpers/utilities';
      `
      }
    }
  }
})
