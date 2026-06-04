import type { SkillCategory } from '~/types/portfolio'

export default defineEventHandler(async () => {
  const config = useRuntimeConfig()
  return await $fetch<SkillCategory[]>(`${config.apiBaseUrl}/api/skills`)
})
