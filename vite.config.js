import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1500, 
    rollupOptions: {
      output: {
        // Suppress warnings from Terser
        format: 'esm',
        freeze: false,
      },
    },
  },
})
