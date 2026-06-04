export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: ['@nuxtjs/tailwindcss'],

  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL || 'http://localhost:8080',
    },
  },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Laeti Challant - Développeuse d\'applications',
      meta: [
        {
          name: 'description',
          content: 'Portfolio de Laeti Challant - Développeuse fullstack en reconversion professionnelle',
        },
      ],
    },
  },
})
