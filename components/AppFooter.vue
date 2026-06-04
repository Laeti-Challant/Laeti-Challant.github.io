<template>
  <footer class="bg-text-dark text-white py-8 px-8">
    <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <div class="text-center md:text-left">
        <p class="font-medium">© {{ currentYear }} Laeti Challant</p>
        <p class="text-sm text-gray-400 mt-1">Développeuse d'applications · Mortagne-sur-Sèvre</p>
      </div>

      <div class="flex items-center gap-6">
        <a
          href="https://github.com/Laeti-Challant"
          target="_blank"
          rel="noopener noreferrer"
          class="text-gray-400 hover:text-white transition-colors duration-300 text-sm font-medium"
        >
          GitHub
        </a>
        <a
          href="mailto:l.challant@gmail.com"
          class="text-gray-400 hover:text-white transition-colors duration-300 text-sm font-medium"
        >
          Contact
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>
