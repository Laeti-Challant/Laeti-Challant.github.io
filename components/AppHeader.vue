<template>
  <header
    class="sticky top-0 z-50 backdrop-blur-md bg-cream/85 transition-colors duration-300"
    :class="scrolled ? 'border-b border-border' : 'border-b border-transparent'"
  >
    <div class="px-6 md:px-10">
    <nav class="max-w-6xl mx-auto py-4 flex items-center justify-between">
      <a href="/" class="flex items-center gap-2.5 no-underline">
        <img
          src="~/assets/images/logo-LC.webp"
          alt=""
          class="w-10 h-auto block"
        />
        <span class="font-display font-bold text-[15px] tracking-tight text-text-dark">
          Laetitia Challant
        </span>
      </a>

      <ul class="hidden md:flex items-center gap-9 list-none m-0 p-0">
        <li v-for="link in navLinks" :key="link.href">
          <a
            :href="link.href"
            class="text-text-dark font-medium text-[15px] no-underline pb-1 border-b-2 border-transparent transition-colors duration-200 hover:text-primary hover:border-primary"
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
    </div>

    <div
      v-show="menuOpen"
      class="md:hidden border-t border-border px-6 py-4 flex flex-col gap-4 bg-cream"
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
  { href: '/#about', label: 'À propos' },
  { href: '/#projects', label: 'Projets' },
  { href: '/#skills', label: 'Compétences' },
  { href: '/#contact', label: 'Contact' },
]

onMounted(() => {
  window.addEventListener('scroll', () => {
    scrolled.value = window.scrollY > 12
  })
})
</script>
