import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // Served from https://sa4drao.github.io/portfolio/
  base: '/portfolio/',
  plugins: [react()],
})
