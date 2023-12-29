import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
// import VitePrettierPlugin from 'vite-plugin-prettier';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue()
    // VitePrettierPlugin({
    //   "singleQuote": true,
    //   "trailingComma": "none",
    //   "tabWidth": 2,
    //   "vueIndentScriptAndStyle": true
    // })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
});
