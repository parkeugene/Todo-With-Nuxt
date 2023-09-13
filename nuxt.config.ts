export default defineNuxtConfig({
  modules: ["nuxt-icon", "@pinia/nuxt"],
  css: ["@/assets/scss/global.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/_vars.scss" as *;',
        },
      },
    },
  },
  nitro: {
    devProxy: {
      '/api/todos': { 
        target: "https://port-0-todo-api-f02w2almhfuepj.sel5.cloudtype.app", 
        changeOrigin: true 
      }
    },
  },
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
    },
  },
});
