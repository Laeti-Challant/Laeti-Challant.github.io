<template>
  <NuxtLink :to="`/projects/${project.name}`" class="block bg-white rounded-xl overflow-hidden shadow-md hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer">

    <div class="project-thumbnail h-48 flex items-center justify-center overflow-hidden">
      <img
        v-if="project.screenshot"
        :src="project.screenshot"
        :alt="project.name"
        class="w-full h-full object-cover object-top"
      />
      <span v-else class="text-white text-4xl font-bold opacity-40 select-none">
        {{ project.name.charAt(0).toUpperCase() }}
      </span>
    </div>

    <div class="p-6 flex flex-col gap-3 flex-1">

      <div class="flex items-start justify-between gap-2">
        <h3 class="text-lg font-semibold text-text-dark">{{ project.name }}</h3>
        <span :class="statusClass" class="text-xs font-medium px-3 py-1 rounded-full shrink-0">
          {{ statusLabel }}
        </span>
      </div>

      <p class="text-text-light text-sm leading-relaxed flex-1">
        {{ project.description }}
      </p>

      <div class="flex flex-wrap gap-2">
        <span
          v-for="tech in project.technologies"
          :key="tech"
          class="text-xs px-2.5 py-1 bg-bg-light text-text-dark rounded-md"
        >
          {{ tech }}
        </span>
      </div>

    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { ProjectSummary } from '~/types/portfolio'

const props = defineProps<{
  project: ProjectSummary
}>()

const statusLabel = computed(() => {
  if (props.project.actif && !props.project.termine) return 'En cours'
  if (props.project.termine) return 'Terminé'
  return 'En pause'
})

const statusClass = computed(() => {
  if (props.project.actif && !props.project.termine) return 'bg-emerald-100 text-emerald-700'
  if (props.project.termine) return 'bg-blue-100 text-blue-700'
  return 'bg-gray-100 text-gray-500'
})
</script>

<style scoped>
.project-thumbnail {
  background: linear-gradient(135deg, #fe9a66 0%, #f7d59b 35%, #764ba2 100%);
}
</style>
