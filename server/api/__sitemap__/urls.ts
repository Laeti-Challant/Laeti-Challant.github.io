import type { ProjectSummary } from '~/types/portfolio'

export default defineSitemapEventHandler(async () => {
  const config = useRuntimeConfig()
  const projects = await $fetch<ProjectSummary[]>(`${config.apiBaseUrl}/api/projects`)

  return projects.map((project) => ({
    loc: `/projects/${project.name}`,
    lastmod: project.pushedAt,
    changefreq: 'monthly',
    priority: 0.8,
  }))
})
