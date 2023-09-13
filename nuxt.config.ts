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
  runtimeConfig: {
    public: {
      API_BASE_URL: process.env.API_BASE_URL,
      Todos_URL: process.env.Todos_URL,
    },
  },
  nitro: {
    devProxy: {
      '/api/todos/': { 
        target: "https://port-0-todo-api-f02w2almhfuepj.sel5.cloudtype.app/", 
        changeOrigin: true,
        secure: false 
      }
    },
    routeRules: {
      '/api/todos/**': { proxy: 'https://port-0-todo-api-f02w2almhfuepj.sel5.cloudtype.app/**', cors: true}
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
