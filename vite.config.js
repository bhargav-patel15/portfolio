import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace 'portfolio' below with your actual GitHub repo name
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',  // <-- Change this to your repo name
})
