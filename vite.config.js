import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // Dòng này cực kỳ quan trọng

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // Phải có dòng này để kích hoạt Tailwind v4
  ],
})