export type Project = {
  name: string
  description: string
  github: string
  demo?: string
  technologies: string[]
  accent: 'mint' | 'blue' | 'violet' | 'amber'
  code: string
}

export type SkillGroup = {
  name: string
  skills: string[]
}

export const links = {
  github: 'https://github.com/VitalyRuso',
  linkedin: 'https://www.linkedin.com/in/vitaly-solovyev-515568426/',
}

export const projects: Project[] = [
  {
    name: 'ActionPilot',
    description:
      'Human-in-the-loop browser agent that analyzes the active tab, proposes safe actions and executes them only after explicit user confirmation.',
    github: 'https://github.com/VitalyRuso/actionpilot',
    technologies: ['TypeScript', 'Browser automation', 'AI/LLM workflows'],
    accent: 'mint',
    code: 'observe → propose → confirm → execute',
  },
  {
    name: 'AI Workspace Control Center',
    description:
      'Local-first AI command center for project workflows, focused tools and controlled execution.',
    github: 'https://github.com/VitalyRuso/ai-workspace-control-center',
    technologies: ['TypeScript', 'React', 'AI tooling', 'LLM workflows'],
    accent: 'blue',
    code: 'projects / tools / agents / runs',
  },
  {
    name: 'Spain Helper',
    description:
      'Russian-first platform for immigrants, expats and newcomers in Spain with retrieval-augmented information assistance.',
    github: 'https://github.com/VitalyRuso/helper',
    technologies: ['Rust', 'Axum', 'React', 'PostgreSQL', 'Qdrant', 'RAG', 'LLM'],
    accent: 'amber',
    code: 'question → retrieve → ground → answer',
  },
  {
    name: 'Visual Foundry',
    description:
      'Experimental AI workspace for 2D/3D generation workflows and generative visual tooling.',
    github: 'https://github.com/VitalyRuso',
    technologies: ['TypeScript', 'React', 'AI tooling', '2D/3D workflows'],
    accent: 'violet',
    code: 'prompt × scene × generation',
  },
]

export const skillGroups: SkillGroup[] = [
  {
    name: 'Frontend',
    skills: ['TypeScript', 'React', 'Vite', 'HTML', 'CSS', 'Responsive UI'],
  },
  {
    name: 'Backend',
    skills: ['Node.js', 'Rust', 'Axum', 'Python', 'REST APIs'],
  },
  {
    name: 'Data',
    skills: ['PostgreSQL', 'SQLite', 'Qdrant', 'Firestore', 'SQL'],
  },
  {
    name: 'AI',
    skills: ['LLM Integration', 'RAG', 'AI Agents', 'Local models', 'Cloud models', 'AI workflows'],
  },
  {
    name: 'DevOps / Tools',
    skills: ['Docker', 'Git', 'GitHub', 'Cloud Run', 'Cloud Storage'],
  },
]
