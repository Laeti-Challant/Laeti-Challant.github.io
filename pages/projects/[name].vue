<template>
  <div>
    <div v-if="pending" class="min-h-screen flex items-center justify-center">
      <span class="text-text-light animate-pulse">Chargement...</span>
    </div>

    <div v-else-if="error || !project" class="min-h-screen flex flex-col items-center justify-center gap-4">
      <p class="text-text-light">Projet introuvable.</p>
      <NuxtLink to="/#projects" class="text-primary font-semibold hover:underline">
        ← Retour aux projets
      </NuxtLink>
    </div>

    <div v-else>
      <div class="project-hero h-64 md:h-80 relative flex items-end">
        <img
          v-if="project.screenshot"
          :src="project.screenshot"
          :alt="project.name"
          class="absolute inset-0 w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-black/40" />
        <div class="relative z-10 max-w-6xl mx-auto w-full px-8 pb-8">
          <NuxtLink to="/#projects" class="text-white/80 hover:text-white text-sm font-medium transition-colors">
            ← Retour aux projets
          </NuxtLink>
          <h1 class="text-4xl font-bold text-white mt-2">{{ project.name }}</h1>
          <div class="flex flex-wrap gap-2 mt-3">
            <span :class="statusClass" class="text-xs font-medium px-3 py-1 rounded-full">
              {{ statusLabel }}
            </span>
            <span
              v-if="project.contexte"
              class="text-xs font-medium px-3 py-1 rounded-full bg-white/20 text-white"
            >
              {{ project.contexte }}
            </span>
          </div>
        </div>
      </div>

      <div class="max-w-6xl mx-auto px-8 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12">

        <div class="lg:col-span-2 flex flex-col gap-8">
          <p class="text-text-light leading-relaxed text-lg">{{ project.description }}</p>

          <div v-if="renderedReadme" class="prose max-w-none">
            <h2 class="text-xl font-semibold text-text-dark mb-4">README</h2>
            <div class="readme-content" v-html="renderedReadme" />
          </div>
        </div>

        <aside class="flex flex-col gap-6">

          <div v-if="project.technologies.length">
            <h3 class="text-sm font-semibold text-text-light uppercase tracking-wider mb-3">
              Technologies
            </h3>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in project.technologies"
                :key="tech"
                class="text-sm px-3 py-1 bg-bg-light text-text-dark rounded-md"
              >
                {{ tech }}
              </span>
            </div>
          </div>

          <div v-if="project.competences?.length">
            <h3 class="text-sm font-semibold text-text-light uppercase tracking-wider mb-3">
              Compétences démontrées
            </h3>
            <ul class="flex flex-col gap-2">
              <li
                v-for="comp in project.competences"
                :key="comp"
                class="flex items-center gap-2 text-sm text-text-dark"
              >
                <span class="text-primary font-bold">→</span>
                {{ comp }}
              </li>
            </ul>
          </div>

          <div class="flex flex-col gap-3">
            <a
              v-if="project.repoUrl"
              :href="project.repoUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center justify-center gap-2 px-4 py-2.5 bg-text-dark text-white rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
            >
              Voir le code
            </a>
            <a
              v-if="project.siteUrl"
              :href="project.siteUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center justify-center gap-2 px-4 py-2.5 border-2 border-primary text-primary rounded-lg font-medium text-sm hover:bg-primary hover:text-white transition-colors"
            >
              Voir le site
            </a>
          </div>

        </aside>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { marked } from 'marked'

const route = useRoute()
const { getProject } = usePortfolioApi()
const { data: project, pending, error } = await getProject(route.params.name as string)

useHead({
  title: computed(() => project.value ? `${project.value.name} · Laeti Challant` : 'Projet'),
})

const statusLabel = computed(() => {
  if (!project.value) return ''
  if (project.value.actif && !project.value.termine) return 'En cours'
  if (project.value.termine) return 'Terminé'
  return 'En pause'
})

const statusClass = computed(() => {
  if (!project.value) return ''
  if (project.value.actif && !project.value.termine) return 'bg-emerald-500 text-white'
  if (project.value.termine) return 'bg-blue-500 text-white'
  return 'bg-gray-400 text-white'
})

const renderedReadme = computed(() => {
  if (!project.value?.readme) return null
  return marked(project.value.readme)
})
</script>

<style scoped>
.project-hero {
  background: linear-gradient(135deg, #fe9a66 0%, #f7d59b 35%, #764ba2 100%);
}

.readme-content :deep(h1),
.readme-content :deep(h2),
.readme-content :deep(h3) {
  @apply font-semibold text-text-dark mt-6 mb-3;
}

.readme-content :deep(h1) { @apply text-2xl; }
.readme-content :deep(h2) { @apply text-xl; }
.readme-content :deep(h3) { @apply text-lg; }

.readme-content :deep(p) {
  @apply text-text-light leading-relaxed mb-4;
}

.readme-content :deep(code) {
  @apply bg-bg-light text-primary px-1.5 py-0.5 rounded text-sm font-mono;
}

.readme-content :deep(pre) {
  @apply bg-text-dark text-white p-4 rounded-xl overflow-x-auto mb-4;
}

.readme-content :deep(ul) {
  @apply list-disc list-inside mb-4 flex flex-col gap-1 text-text-light;
}

.readme-content :deep(a) {
  @apply text-primary hover:underline;
}
</style>
