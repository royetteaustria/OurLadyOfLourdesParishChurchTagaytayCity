import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5101,
    proxy: {
      'api' : {
        target:  'https://our-lady-of-lourdes-parish-church-tagaytay-city-backend.vercel.app//',
        changeOrigin: true,
      }
    }
  },
  optimizeDeps: {
    exclude: ["js-big-decimal"]
  },
})
