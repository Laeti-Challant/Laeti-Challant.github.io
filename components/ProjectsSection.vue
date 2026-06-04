<template>
  <section id="projects" class="py-16 px-8 bg-bg-light">
    <div class="max-w-6xl mx-auto">

      <h2 class="section-title">Projets</h2>
      <p class="mt-4 text-text-light max-w-2xl">
        Projets récupérés depuis mes dépôts GitHub via l'API portfolio.
      </p>

      <div v-if="pending" class="mt-12 flex justify-center">
        <span class="text-text-light animate-pulse">Chargement des projets...</span>
      </div>

      <div v-else-if="error" class="mt-12 p-6 bg-red-50 text-red-600 rounded-xl text-sm">
        Impossible de charger les projets. Vérifie que l'API Spring Boot est bien démarrée.
      </div>

      <div v-else class="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard
          v-for="project in visibleProjects"
          :key="project.name"
          :project="project"
        />
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
const { getProjects } = usePortfolioApi()
const { data, pending, error } = await getProjects()

const visibleProjects = computed(() =>
  (data.value ?? []).filter(p => p.visible)
)
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
</style>
