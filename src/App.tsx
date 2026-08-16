import {
  ArrowDown,
  ArrowRight,
  Blocks,
  Bot,
  Braces,
  Database,
  Github,
  GraduationCap,
  Languages,
  Layers3,
  Linkedin,
  ServerCog,
  Sparkles,
  Terminal,
  Workflow,
} from 'lucide-react'
import { useState } from 'react'
import { Header } from './components/Header'
import { ProjectCard } from './components/ProjectCard'
import { SectionHeading } from './components/SectionHeading'
import { DemoContent } from './components/demos/DemoContent'
import { DemoShell } from './components/demos/DemoShell'
import { demoTitles, links, projects, skillGroups, type DemoId } from './data/portfolio'
import { useI18n } from './i18n/context'

const skillIcons = [Braces, ServerCog, Database, Bot, Workflow]
const principleIcons = [Sparkles, Layers3, Blocks]

function App() {
  const { t } = useI18n()
  const [activeDemo, setActiveDemo] = useState<DemoId | null>(null)
  const [demoRevision, setDemoRevision] = useState(0)

  const openDemo = (demo: DemoId) => {
    setDemoRevision(0)
    setActiveDemo(demo)
  }

  return (
    <>
      <a className="skip-link" href="#main">{t.common.skipToContent}</a>
      <Header />

      <main id="main">
        <section className="hero" id="top">
          <div className="ambient ambient-one" aria-hidden="true" />
          <div className="ambient ambient-two" aria-hidden="true" />
          <div className="hero-shell">
            <div className="hero-copy">
              <p className="availability"><span aria-hidden="true" /> {t.hero.location}</p>
              <h1>
                <span>{t.hero.name}</span>
                {t.hero.roleLead}
                <em>{t.hero.roleAccent}</em>
              </h1>
              <p className="hero-description">{t.hero.description}</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#projects">
                  {t.hero.viewProjects} <ArrowDown size={17} aria-hidden="true" />
                </a>
                <a className="button button-secondary" href={links.github} target="_blank" rel="noopener noreferrer">
                  <Github size={17} aria-hidden="true" /> GitHub
                </a>
                <a className="text-link" href={links.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn <ArrowRight size={16} aria-hidden="true" />
                </a>
              </div>
              <p className="hero-demo-note"><Sparkles size={14} aria-hidden="true" /> {t.hero.demoNote}</p>
              <div className="exploring">
                <span>{t.hero.exploringLabel}</span>
                <p>{t.hero.exploring}</p>
              </div>
            </div>

            <div className="hero-terminal" aria-label={t.hero.terminalLabel}>
              <div className="terminal-topbar">
                <div className="terminal-dots" aria-hidden="true"><i /><i /><i /></div>
                <span>vitaly@workspace</span>
                <Terminal size={15} aria-hidden="true" />
              </div>
              <div className="terminal-body">
                <p><span>~</span> whoami</p>
                <div className="terminal-result">
                  <div className="avatar-mark" aria-hidden="true">VS</div>
                  <div>
                    <strong>{t.hero.productDeveloper}</strong>
                    <small>{t.hero.stack}</small>
                  </div>
                </div>
                <p><span>~</span> cat focus.json</p>
                <div className="code-block" aria-label={t.hero.terminalLabel}>
                  <code><b>{'{'}</b></code>
                  <code>&nbsp;&nbsp;<i>"build"</i>: <em>"{t.hero.buildValue}"</em>,</code>
                  <code>&nbsp;&nbsp;<i>"ai"</i>: <em>"{t.hero.aiValue}"</em>,</code>
                  <code>&nbsp;&nbsp;<i>"mode"</i>: <em>"{t.hero.modeValue}"</em></code>
                  <code><b>{'}'}</b></code>
                </div>
                <p className="terminal-cursor"><span>~</span> <i aria-hidden="true" /></p>
              </div>
            </div>
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="content-shell">
            <SectionHeading eyebrow={t.projects.eyebrow} title={t.projects.title} description={t.projects.description} />
            <div className="projects-grid">
              {projects.map((project, index) => (
                <ProjectCard key={project.name} project={project} index={index} onTryDemo={openDemo} />
              ))}
            </div>
            <a className="all-projects-link" href={links.github} target="_blank" rel="noopener noreferrer">
              {t.projects.allRepositories} <ArrowRight size={17} aria-hidden="true" />
            </a>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="content-shell">
            <SectionHeading eyebrow={t.skills.eyebrow} title={t.skills.title} description={t.skills.description} />
            <div className="skills-grid">
              {skillGroups.map((group, index) => {
                const Icon = skillIcons[index]
                return (
                  <article className="skill-group" key={group.id}>
                    <div className="skill-title">
                      <span><Icon size={19} aria-hidden="true" /></span>
                      <h3>{t.skills.groups[group.id]}</h3>
                    </div>
                    <ul>
                      {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
                    </ul>
                  </article>
                )
              })}
              <div className="also-used">
                <span>{t.skills.alsoUsed}</span>
                <p>Java</p>
                <p>PHP</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="content-shell about-grid">
            <div>
              <SectionHeading eyebrow={t.about.eyebrow} title={t.about.title} />
              <div className="about-copy">
                {t.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
              <div className="about-tags" aria-label={t.about.tagsLabel}>
                {t.about.tags.map((tag, index) => {
                  const Icon = principleIcons[index]
                  return <span key={tag}><Icon size={15} aria-hidden="true" /> {tag}</span>
                })}
              </div>
            </div>

            <article className="experience-card">
              <div className="experience-card-header">
                <span><Terminal size={18} aria-hidden="true" /></span>
                <div>
                  <p>{t.experience.label}</p>
                  <h3>{t.experience.title}</h3>
                </div>
              </div>
              <ul>
                {t.experience.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <p className="experience-note">{t.experience.note}</p>
            </article>
          </div>
        </section>

        <section className="section education-section" id="education">
          <div className="content-shell">
            <SectionHeading eyebrow={t.education.eyebrow} title={t.education.title} />
            <div className="background-grid">
              <div className="education-list">
                <article>
                  <span className="education-icon"><GraduationCap size={19} aria-hidden="true" /></span>
                  <div><h3>{t.education.damTitle}</h3><p>{t.education.damMeta}</p></div>
                </article>
                <article>
                  <span className="education-icon"><GraduationCap size={19} aria-hidden="true" /></span>
                  <div><h3>{t.education.smrTitle}</h3><p>{t.education.smrMeta}</p></div>
                </article>
                <article>
                  <span className="education-icon"><GraduationCap size={19} aria-hidden="true" /></span>
                  <div><h3>{t.education.unirTitle}</h3><p>{t.education.unirMeta}</p></div>
                </article>
              </div>
              <article className="languages-card">
                <div className="languages-title"><Languages size={20} aria-hidden="true" /><h3>{t.education.languagesTitle}</h3></div>
                <dl>
                  {t.education.languages.map(({ name, level }) => (
                    <div key={name}><dt>{name}</dt><dd>{level}</dd></div>
                  ))}
                </dl>
              </article>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="content-shell contact-shell">
            <div>
              <p className="eyebrow"><span aria-hidden="true">//</span> {t.contact.eyebrow}</p>
              <h2>{t.contact.title}</h2>
              <p>{t.contact.description}</p>
            </div>
            <div className="contact-links">
              <a className="button button-primary" href={links.github} target="_blank" rel="noopener noreferrer">
                <Github size={18} aria-hidden="true" /> GitHub
              </a>
              <a className="button button-secondary" href={links.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin size={18} aria-hidden="true" /> LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="content-shell footer-shell">
          <p><span>VS</span> {t.footer.builtWith}</p>
          <a href="#top">{t.footer.backToTop} <ArrowDown size={15} aria-hidden="true" /></a>
        </div>
      </footer>

      {activeDemo && (
        <DemoShell
          title={demoTitles[activeDemo]}
          onClose={() => setActiveDemo(null)}
          onReset={() => setDemoRevision((revision) => revision + 1)}
        >
          <DemoContent key={demoRevision} demo={activeDemo} />
        </DemoShell>
      )}
    </>
  )
}

export default App
