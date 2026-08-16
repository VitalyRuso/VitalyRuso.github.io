export type Project = {
  name: string
  github: string
  demo?: string
  interactiveDemo: DemoId
  technologies: string[]
  accent: 'mint' | 'blue' | 'violet' | 'amber'
}

export type DemoId = 'actionpilot' | 'workspace' | 'spain-helper' | 'visual-foundry'

export const demoTitles: Record<DemoId, string> = {
  actionpilot: 'ActionPilot',
  workspace: 'AI Workspace Control Center',
  'spain-helper': 'Spain Helper',
  'visual-foundry': 'Visual Foundry',
}

export type SkillGroup = {
  id: 'frontend' | 'backend' | 'data' | 'ai' | 'tools'
  skills: string[]
}

export const links = {
  github: 'https://github.com/VitalyRuso',
  linkedin: 'https://www.linkedin.com/in/vitaly-solovyev-515568426/',
}

export const projects: Project[] = [
  {
    name: 'ActionPilot',
    github: 'https://github.com/VitalyRuso/actionpilot',
    interactiveDemo: 'actionpilot',
    technologies: ['TypeScript', 'Browser automation', 'AI/LLM workflows'],
    accent: 'mint',
  },
  {
    name: 'AI Workspace Control Center',
    github: 'https://github.com/VitalyRuso/ai-workspace-control-center',
    interactiveDemo: 'workspace',
    technologies: ['TypeScript', 'React', 'AI tooling', 'LLM workflows'],
    accent: 'blue',
  },
  {
    name: 'Spain Helper',
    github: 'https://github.com/VitalyRuso/helper',
    interactiveDemo: 'spain-helper',
    technologies: ['Rust', 'Axum', 'React', 'PostgreSQL', 'Qdrant', 'RAG', 'LLM'],
    accent: 'amber',
  },
  {
    name: 'Visual Foundry',
    github: 'https://github.com/VitalyRuso',
    interactiveDemo: 'visual-foundry',
    technologies: ['TypeScript', 'React', 'AI tooling', '2D/3D workflows'],
    accent: 'violet',
  },
]

export const skillGroups: SkillGroup[] = [
  {
    id: 'frontend',
    skills: ['TypeScript', 'React', 'Vite', 'HTML', 'CSS', 'Responsive UI'],
  },
  {
    id: 'backend',
    skills: ['Node.js', 'Rust', 'Axum', 'Python', 'REST APIs'],
  },
  {
    id: 'data',
    skills: ['PostgreSQL', 'SQLite', 'Qdrant', 'Firestore', 'SQL'],
  },
  {
    id: 'ai',
    skills: ['LLM Integration', 'RAG', 'AI Agents', 'Local Models', 'Cloud Models', 'AI Workflows'],
  },
  {
    id: 'tools',
    skills: ['Docker', 'Git', 'GitHub', 'Cloud Run', 'Cloud Storage'],
  },
]
