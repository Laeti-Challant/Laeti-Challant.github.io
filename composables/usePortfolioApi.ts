import { useFetch, useRuntimeConfig } from "nuxt/app";
import type {
  ProjectSummary,
  ProjectDetail,
  SkillCategory,
} from "../types/portfolio";

export function usePortfolioApi() {
  const config = useRuntimeConfig();
  const base = config.public.apiBaseUrl || "";

  function getProjects() {
    return useFetch<ProjectSummary[]>(`${base}/api/projects`);
  }

  function getProject(name: string) {
    return useFetch<ProjectDetail>(`${base}/api/projects/${name}`);
  }

  function getSkills() {
    return useFetch<SkillCategory[]>(`${base}/api/skills`);
  }

  return { getProjects, getProject, getSkills };
}
