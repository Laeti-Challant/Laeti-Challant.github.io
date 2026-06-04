<template>
  <header
    class="bg-white sticky top-0 z-50 transition-shadow duration-300"
    :class="scrolled ? 'shadow-md' : 'shadow-sm'"
  >
    <nav class="max-w-6xl mx-auto px-8 py-4 flex items-center justify-between">
      <a href="/" aria-label="Accueil">
        <img
          src="~/assets/images/logo-LC.webp"
          alt="LC"
          class="w-28 h-auto"
        />
      </a>

      <ul class="hidden md:flex items-center gap-8 list-none m-0 p-0">
        <li v-for="link in navLinks" :key="link.href">
          <a
            :href="link.href"
            class="text-text-dark font-medium no-underline transition-colors duration-300 hover:text-primary"
          >
            {{ link.label }}
          </a>
        </li>
      </ul>

      <button
        class="md:hidden p-2 text-text-dark"
        aria-label="Menu"
        @click="menuOpen = !menuOpen"
      >
        <span class="block w-6 h-0.5 bg-current mb-1.5 transition-all" />
        <span class="block w-6 h-0.5 bg-current mb-1.5 transition-all" />
        <span class="block w-6 h-0.5 bg-current transition-all" />
      </button>
    </nav>

    <div
      v-show="menuOpen"
      class="md:hidden border-t border-border px-8 py-4 flex flex-col gap-4"
    >
      <a
        v-for="link in navLinks"
        :key="link.href"
        :href="link.href"
        class="text-text-dark font-medium no-underline hover:text-primary"
        @click="menuOpen = false"
      >
        {{ link.label }}
      </a>
    </div>
  </header>
</template>

<script setup lang="ts">
const scrolled = ref(false)
const menuOpen = ref(false)

const navLinks = [
  { href: '#about', label: 'À propos' },
  { href: '#projects', label: 'Projets' },
  { href: '#skills', label: 'Compétences' },
  { href: '#contact', label: 'Contact' },
]

onMounted(() => {
  window.addEventListener('scroll', () => {
    scrolled.value = window.scrollY > 10
  })
})
</script>
