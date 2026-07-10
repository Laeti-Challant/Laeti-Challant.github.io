<template>
  <footer class="bg-text-dark text-white py-11 px-6 md:px-10">
    <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <div class="text-center md:text-left">
        <p class="font-semibold text-[15px]">© {{ currentYear }} Laetitia Challant</p>
        <p class="text-sm text-gray-400 mt-1">Développeuse d'applications · Mortagne-sur-Sèvre</p>
      </div>

      <div class="flex items-center gap-7">
        <a
          href="https://github.com/Laeti-Challant"
          target="_blank"
          rel="noopener noreferrer"
          class="text-gray-400 hover:text-white transition-colors duration-200 text-sm font-medium"
        >
          GitHub
        </a>
        <a
          href="mailto:l.challant@gmail.com"
          class="text-gray-400 hover:text-white transition-colors duration-200 text-sm font-medium"
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
