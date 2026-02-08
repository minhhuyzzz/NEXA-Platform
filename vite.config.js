import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  // Thêm phần này để đảm bảo Vite tìm thấy các file trong thư mục modules
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})