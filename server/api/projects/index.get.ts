import type { ProjectSummary } from '~/types/portfolio'

export default defineEventHandler(async () => {
  const config = useRuntimeConfig()
  return await $fetch<ProjectSummary[]>(`${config.apiBaseUrl}/api/projects`)
})
