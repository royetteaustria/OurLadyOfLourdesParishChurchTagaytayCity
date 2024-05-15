import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5101,
    proxy: {
      'api' : {
        target:  'https://ourladyoflourdes-parishchurch-tagaytay-city-server.vercel.app',
        changeOrigin: true,
      }
    }
  },
  optimizeDeps: {
    exclude: ["js-big-decimal"]
  },
})
