import { defineNuxtConfig } from 'nuxt'
import { createStyleImportPlugin } from 'vite-plugin-style-import'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  vite: {
    plugins: [
      createStyleImportPlugin({
        libs: [
          {
            libraryName: '@fect-ui/vue',
            esModule: true,
            resolveStyle: (name) => {
              console.log(name)
              return `@fect-ui/vue/dist/esm/${name}/style`
            },
          },
        ],
      }),
    ],
  },
  build: {
    transpile: ['@fect-ui/vue'],
  },
})
