<template>
  <section id="skills" class="py-16 px-8">
    <div class="max-w-6xl mx-auto">

      <h2 class="section-title">Compétences</h2>

      <div v-if="pending" class="mt-12 flex justify-center">
        <span class="text-text-light animate-pulse">Chargement des compétences...</span>
      </div>

      <div v-else-if="error" class="mt-12 p-6 bg-red-50 text-red-600 rounded-xl text-sm">
        Impossible de charger les compétences. Vérifie que l'API Spring Boot est bien démarrée.
      </div>

      <div v-else class="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="category in data"
          :key="category.categorie"
          class="skill-card"
        >
          <h3 class="text-base font-semibold text-primary mb-4">{{ category.categorie }}</h3>
          <div class="flex flex-wrap gap-2">
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
.section-title {
  @apply text-3xl font-bold text-text-dark relative inline-block pb-3;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 3rem;
  height: 3px;
  background: linear-gradient(90deg, #764ba2, #fe9a66);
  border-radius: 2px;
}

.skill-card {
  @apply bg-bg-light rounded-xl p-6 border border-border shadow-sm;
}

.skill-badge {
  @apply text-sm px-3 py-1 rounded-full bg-white border border-border text-text-dark;
}
</style>
