// Apparition au scroll via une directive `v-reveal`.
// Plugin universel : la directive est enregistrée au rendu serveur (getSSRProps)
// comme au client, mais tout le travail DOM se fait au montage, donc côté client
// uniquement. La classe `.js` posée sur <html> conditionne l'état masqué en CSS,
// pour que le contenu reste visible si le JavaScript est absent.
export default defineNuxtPlugin((nuxtApp) => {
  if (import.meta.client) {
    document.documentElement.classList.add('js')
  }

  nuxtApp.vueApp.directive('reveal', {
    // Évite l'erreur SSR « Cannot read properties of undefined (reading 'getSSRProps') »
    getSSRProps() {
      return {}
    },
    mounted(el: HTMLElement) {
      el.classList.add('reveal')

      // Déjà (presque) dans le viewport au montage : on révèle sans animation
      // pour éviter tout clignotement du contenu au-dessus de la ligne de flottaison.
      const rect = el.getBoundingClientRect()
      if (rect.top < window.innerHeight * 0.9) {
        el.classList.add('reveal-visible')
        return
      }

      const observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              el.classList.add('reveal-visible')
              obs.unobserve(el)
            }
          })
        },
        { threshold: 0.12 },
      )
      observer.observe(el)
    },
  })
})
