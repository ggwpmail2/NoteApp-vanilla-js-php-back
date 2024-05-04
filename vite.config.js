import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const jsToBottomNoModule = () => {
  return {
    name: "no-attribute",
    transformIndexHtml(html) {
      html = html.replace(`type="module" crossorigin`, "")
      let scriptTag = html.match(/<script[^>]*>(.*?)<\/script[^>]*>/)[0]
      console.log("\n SCRIPT TAG", scriptTag, "\n")
      html = html.replace(scriptTag, "")
      html = html.replace("<!-- # INSERT SCRIPT HERE -->", scriptTag)
      return html;
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    jsToBottomNoModule(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
