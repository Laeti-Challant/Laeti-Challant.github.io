<template>
  <section id="skills" v-reveal class="bg-cream py-20 md:py-28 px-6 md:px-10">
    <div class="max-w-6xl mx-auto">

      <div class="flex items-baseline gap-4 mb-12 md:mb-14">
        <span class="section-eyebrow">03</span>
        <h2 class="section-title">Compétences</h2>
      </div>

      <div v-if="pending" class="flex justify-center">
        <span class="text-text-light animate-pulse">Chargement des compétences...</span>
      </div>

      <div v-else-if="error" class="p-6 bg-red-50 text-red-600 rounded-xl text-sm">
        Impossible de charger les compétences. Vérifie que l'API Spring Boot est bien démarrée.
      </div>

      <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="category in data"
          :key="category.categorie"
          class="skill-card"
        >
          <h3 class="font-display text-[15px] font-semibold text-primary mb-4 uppercase tracking-wide">
            {{ category.categorie }}
          </h3>
          <div class="flex flex-wrap gap-2.5">
            <span
              v-for="skill in category.competences"
              :key="skill"
              class="skill-badge"
            >
              {{ skill }}
            </span>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
const { getSkills } = usePortfolioApi()
const { data, pending, error } = await getSkills()
</script>

<style scoped>
.skill-card {
  @apply bg-white rounded-2xl p-7 border border-[#eeece6]
         shadow-[0_12px_28px_-14px_rgba(31,41,55,0.28)]
         hover:-translate-y-2 hover:shadow-[0_32px_56px_-20px_rgba(31,41,55,0.4)]
         transition-all duration-300;
}

.skill-badge {
  @apply text-sm px-3.5 py-1.5 rounded-full bg-cream border border-border text-text-dark font-medium
         transition-colors duration-200 hover:border-primary hover:text-primary;
}
</style>
