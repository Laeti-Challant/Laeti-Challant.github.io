<template>
  <section id="projects" v-reveal class="bg-sand py-20 md:py-28 px-6 md:px-10">
    <div class="max-w-6xl mx-auto">

      <div class="flex items-baseline gap-4 mb-4">
        <span class="section-eyebrow">02</span>
        <h2 class="section-title">Projets</h2>
      </div>
      <p class="text-lg text-text-light max-w-xl mb-12 md:mb-14">
        Projets récupérés depuis mes dépôts GitHub via l'API portfolio.
      </p>

      <div v-if="pending" class="flex justify-center">
        <span class="text-text-light animate-pulse">Chargement des projets...</span>
      </div>

      <div v-else-if="error" class="p-6 bg-red-50 text-red-600 rounded-xl text-sm">
        Impossible de charger les projets. Vérifie que l'API Spring Boot est bien démarrée.
      </div>

      <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
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
