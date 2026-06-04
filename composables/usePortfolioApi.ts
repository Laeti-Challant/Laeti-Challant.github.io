import type { ProjectSummary, ProjectDetail, SkillCategory } from '~/types/portfolio'

export function usePortfolioApi() {
  function getProjects() {
    return useFetch<ProjectSummary[]>('/api/projects')
  }

  function getProject(name: string) {
    return useFetch<ProjectDetail>(`/api/projects/${name}`)
  }

  function getSkills() {
    return useFetch<SkillCategory[]>('/api/skills')
  }

  return { getProjects, getProject, getSkills }
}
