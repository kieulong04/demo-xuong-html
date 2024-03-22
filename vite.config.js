// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        shop: resolve(__dirname, 'src/shop.html'),
        productDetails: resolve(__dirname, 'src/productDetails.html'),
        cart: resolve(__dirname, 'src/cart.html'),
        pay: resolve(__dirname, 'src/pay.html'),
        login: resolve(__dirname, 'src/login.html'),

      },
    },
  },
})