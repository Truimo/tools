import { resolve } from 'path'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  appType: 'mpa',
  plugins: [
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        textTransform: resolve(__dirname, 'text-transform.html'),
        notFound: resolve(__dirname, '404.html')
      }
    }
  }
})

