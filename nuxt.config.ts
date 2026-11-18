export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/sitemap'],

  tailwindcss: {
    cssPath: '~/assets/css/main.css',
  },

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
      htmlAttrs: { lang: 'fr' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Laetitia Challant - Conceptrice développeuse d\'applications métier',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700;800&display=swap',
        },
      ],
      meta: [
        {
          name: 'description',
          content: 'Laetitia Challant (Laeti Challant), conceptrice développeuse d\'applications métier en Java et Spring Boot, 13 ans en production agroalimentaire. Recherche un CDI.',
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://laeti-challant.github.io' },
        { property: 'og:title', content: 'Laetitia Challant - Conceptrice développeuse d\'applications métier' },
        { property: 'og:description', content: 'Laetitia Challant (Laeti Challant), conceptrice développeuse d\'applications métier en Java et Spring Boot, 13 ans en production agroalimentaire. Recherche un CDI.' },
        { property: 'og:image', content: 'https://laeti-challant.github.io/screenshots/portfolio-home.png' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Laetitia Challant - Conceptrice développeuse d\'applications métier' },
        { name: 'twitter:description', content: 'Laetitia Challant (Laeti Challant), conceptrice développeuse d\'applications métier en Java et Spring Boot, 13 ans en production agroalimentaire. Recherche un CDI.' },
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Laetitia Challant',
            alternateName: 'Laeti Challant',
            jobTitle: 'Conceptrice développeuse d\'applications métier',
            url: 'https://laeti-challant.github.io',
            sameAs: ['https://github.com/Laeti-Challant'],
          }),
        },
      ],
    },
  },
})
