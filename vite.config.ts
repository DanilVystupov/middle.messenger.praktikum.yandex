import { defineConfig } from 'vite'

export default defineConfig({
  root: '.',
  preview: { port: 3000 },
  build: {
    outDir: 'dist'
  }
})
