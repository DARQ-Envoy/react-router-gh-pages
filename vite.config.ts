import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const BASE = "/react-router-gh-pages/";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: BASE
})
