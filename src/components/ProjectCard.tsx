import { ArrowUpRight, ExternalLink, Github, Play } from 'lucide-react'
import type { DemoId, Project } from '../data/portfolio'
import { useI18n } from '../i18n/context'

type ProjectCardProps = {
  project: Project
  index: number
  onTryDemo: (demo: DemoId) => void
}

export function ProjectCard({ project, index, onTryDemo }: ProjectCardProps) {
  const { t } = useI18n()

  return (
    <article className={`project-card project-${project.accent}`}>
      <div className="project-visual" aria-hidden="true">
        <div className="window-bar">
          <span />
          <span />
          <span />
          <i>0{index + 1}</i>
        </div>
        <div className="project-command">
          <span>$</span>
          <code>{t.projects.codes[project.interactiveDemo]}</code>
        </div>
        <div className="signal-lines">
          <span />
          <span />
          <span />
        </div>
      </div>

      <div className="project-content">
        <div className="project-title-row">
          <h3>{project.name}</h3>
          <ArrowUpRight size={20} aria-hidden="true" />
        </div>
        <p>{t.projects.descriptions[project.interactiveDemo]}</p>
        <ul className="tech-list" aria-label={`${project.name} ${t.common.technologies}`}>
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
        <div className="project-links">
          {project.demo && (
            <a className="project-live-link" href={project.demo} target="_blank" rel="noopener noreferrer">
              <ExternalLink size={16} aria-hidden="true" /> {t.common.liveApp}
            </a>
          )}
          <button className="project-demo-button" type="button" onClick={() => onTryDemo(project.interactiveDemo)}>
            <Play size={15} fill="currentColor" aria-hidden="true" /> {t.common.tryDemo}
          </button>
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <Github size={16} aria-hidden="true" /> GitHub
          </a>
        </div>
      </div>
    </article>
  )
}
