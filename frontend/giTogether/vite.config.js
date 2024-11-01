import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/event': {
        target: 'http://localhost:4000', // Replace with your API server
        changeOrigin: true,
      },
    }
  },
})
