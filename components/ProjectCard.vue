<template>
  <NuxtLink
    :to="`/projects/${project.name}`"
    class="group block bg-white rounded-2xl overflow-hidden border border-[#eeece6] shadow-[0_12px_28px_-14px_rgba(31,41,55,0.28)] hover:-translate-y-2 hover:shadow-[0_32px_56px_-20px_rgba(31,41,55,0.4)] transition-all duration-300 flex flex-col cursor-pointer no-underline"
  >

    <div class="project-thumbnail h-40 flex items-center justify-center overflow-hidden">
      <img
        v-if="project.screenshot"
        :src="project.screenshot"
        :alt="project.name"
        loading="lazy"
        decoding="async"
        class="w-full h-full object-cover object-top"
      />
      <span v-else class="text-white font-display text-4xl font-bold opacity-50 select-none">
        {{ project.name.charAt(0).toUpperCase() }}
      </span>
    </div>

    <div class="p-6 flex flex-col gap-3 flex-1">

      <div class="flex items-center justify-between gap-2">
        <h3 class="font-display text-lg font-semibold text-text-dark">{{ project.name }}</h3>
        <span :class="statusClass" class="text-xs font-semibold px-3 py-1 rounded-full shrink-0">
          {{ statusLabel }}
        </span>
      </div>

      <p class="text-text-light text-sm leading-relaxed flex-1">
        {{ project.description }}
      </p>

      <div class="flex flex-wrap gap-2 mt-1">
        <span
          v-for="tech in project.technologies"
          :key="tech"
          class="text-xs px-2.5 py-1.5 bg-sand text-text-dark rounded-md font-medium"
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
  if (props.project.actif && !props.project.termine) return 'bg-[#e7f6ef] text-[#0f7a52]'
  if (props.project.termine) return 'bg-blue-100 text-blue-700'
  return 'bg-gray-100 text-gray-500'
})
</script>

<style scoped>
.project-thumbnail {
  background: linear-gradient(135deg, #fe9a66 0%, #f7d59b 35%, #764ba2 100%);
}
</style>
