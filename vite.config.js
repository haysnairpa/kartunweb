import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,  // Mengizinkan akses melalui IP address
    port: 5173,  // Port yang ingin Anda gunakan, defaultnya 5173
  },
})
