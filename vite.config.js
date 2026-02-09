import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    watch: {
      usePolling: true,
    },
  },
  // --- PHẦN MỚI THÊM ĐỂ TỐI ƯU ---
  build: {
    // 1. Tăng giới hạn cảnh báo lên 1000kB (1MB) để Vercel không báo vàng
    chunkSizeWarningLimit: 1000,
    
    // 2. Chia nhỏ file (Chunk Splitting)
    rollupOptions: {
      output: {
        manualChunks: {
          // Gom bộ lõi React vào 1 gói riêng
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          // Gom Recharts (biểu đồ) vào 1 gói riêng vì nó rất nặng
          'vendor-charts': ['recharts'],
          // Gom Icons vào 1 gói riêng
          'vendor-icons': ['lucide-react'],
        },
      },
    },
  },
})