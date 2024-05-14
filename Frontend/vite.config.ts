import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5100,
    proxy: {
      'api' : {
        target:  'https://lour-lady-of-lourdes-parish-church-tagaytay-city.vercel.app',
        changeOrigin: true
      }
    }
  },
  optimizeDeps: {
    exclude: ["js-big-decimal"]
  },
})
