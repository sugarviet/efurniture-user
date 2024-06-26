import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': '/src/components',
      '@utils': '/src/utils',
      '@pages': '/src/pages',
      '@layouts': '/src/layouts',
      '@stores': '/src/stores',
      '@services': '/src/services',
      '@constants': '/src/constants',
      '@hooks': '/src/hooks',
      '@hocs': '/src/hocs',
      '@api': '/src/api',
    },
  },
})
