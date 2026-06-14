export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/sitemap'],

  site: {
    url: 'https://laeti-challant.github.io',
  },

  sitemap: {
    sources: ['/api/__sitemap__/urls'],
  },

  runtimeConfig: {
    apiBaseUrl: process.env.NUXT_API_BASE_URL || 'http://localhost:8080',
    public: {
      apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL || '',
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
          content: 'Portfolio de Laeti Challant, développeuse fullstack en reconversion. Projets Python, Java, Angular, Nuxt. Recherche alternance mastère SupDeVinci Nantes.',
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://laeti-challant.github.io' },
        { property: 'og:title', content: 'Laeti Challant - Développeuse d\'applications' },
        { property: 'og:description', content: 'Portfolio de Laeti Challant, développeuse fullstack en reconversion. Projets Python, Java, Angular, Nuxt. Recherche alternance mastère SupDeVinci Nantes.' },
        { property: 'og:image', content: 'https://laeti-challant.github.io/screenshots/portfolio-home.png' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Laeti Challant - Développeuse d\'applications' },
        { name: 'twitter:description', content: 'Portfolio de Laeti Challant, développeuse fullstack en reconversion. Projets Python, Java, Angular, Nuxt. Recherche alternance mastère SupDeVinci Nantes.' },
      ],
    },
  },
})
