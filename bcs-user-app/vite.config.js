import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/bcs-user-app/', // THIS MUST MATCH YOUR GITHUB REPO NAME
})
