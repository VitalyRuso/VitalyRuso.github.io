import { ArrowUpRight, ExternalLink, Github } from 'lucide-react'
import type { Project } from '../data/portfolio'

type ProjectCardProps = {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
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
          <code>{project.code}</code>
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
        <p>{project.description}</p>
        <ul className="tech-list" aria-label={`${project.name} technologies`}>
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
        <div className="project-links">
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <Github size={16} aria-hidden="true" /> GitHub
          </a>
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              <ExternalLink size={16} aria-hidden="true" /> Live demo
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
