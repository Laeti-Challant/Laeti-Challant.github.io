import type { ProjectSummary, ProjectDetail, SkillCategory } from '~/types/portfolio'

export function usePortfolioApi() {
  const config = useRuntimeConfig()
  const baseUrl = config.public.apiBaseUrl

  function getProjects() {
    return useFetch<ProjectSummary[]>(`${baseUrl}/api/projects`)
  }

  function getProject(name: string) {
    return useFetch<ProjectDetail>(`${baseUrl}/api/projects/${name}`)
  }

  function getSkills() {
    return useFetch<SkillCategory[]>(`${baseUrl}/api/skills`)
  }

  return { getProjects, getProject, getSkills }
}
