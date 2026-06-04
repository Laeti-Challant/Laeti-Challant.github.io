import type { ProjectDetail } from '~/types/portfolio'

export default defineEventHandler(async (event) => {
  const name = getRouterParam(event, 'name')
  const config = useRuntimeConfig()
  return await $fetch<ProjectDetail>(`${config.apiBaseUrl}/api/projects/${name}`)
})
