export interface ProjectSummary {
  name: string
  description: string
  technologies: string[]
  actif: boolean
  termine: boolean
  pushedAt: string
  screenshot: string
  visible: boolean
}

export interface ProjectDetail extends ProjectSummary {
  competences: string[]
  contexte: string
  repoUrl: string
  siteUrl: string
  readme: string
}

export interface SkillCategory {
  categorie: string
  competences: string[]
}
