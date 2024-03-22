// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        shop: resolve(__dirname, 'src/shop.html'),
        detail: resolve(__dirname, 'src/productDetails.html'),
        car: resolve(__dirname, 'src/car.html'),
        pay: resolve(__dirname, 'src/pay.html'),
        login: resolve(__dirname, 'src/login.html'),

      },
    },
  },
})