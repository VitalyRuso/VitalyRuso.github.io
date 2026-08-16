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
import { Header } from './components/Header'
import { ProjectCard } from './components/ProjectCard'
import { SectionHeading } from './components/SectionHeading'
import { links, projects, skillGroups } from './data/portfolio'

const skillIcons = [Braces, ServerCog, Database, Bot, Workflow]

function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />

      <main id="main">
        <section className="hero" id="top">
          <div className="ambient ambient-one" aria-hidden="true" />
          <div className="ambient ambient-two" aria-hidden="true" />
          <div className="hero-shell">
            <div className="hero-copy">
              <p className="availability"><span aria-hidden="true" /> Madrid, Spain</p>
              <h1>
                <span>Vitaly Solovyev</span>
                Full-Stack / AI-Enabled
                <em>Software Developer</em>
              </h1>
              <p className="hero-description">
                Building practical web products, AI-assisted tools, automation workflows and retrieval-based applications.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#projects">
                  View projects <ArrowDown size={17} aria-hidden="true" />
                </a>
                <a className="button button-secondary" href={links.github} target="_blank" rel="noopener noreferrer">
                  <Github size={17} aria-hidden="true" /> GitHub
                </a>
                <a className="text-link" href={links.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn <ArrowRight size={16} aria-hidden="true" />
                </a>
              </div>
              <div className="exploring">
                <span>Currently exploring</span>
                <p>Rust <i>·</i> AI Agents <i>·</i> RAG Systems <i>·</i> Developer Tooling</p>
              </div>
            </div>

            <div className="hero-terminal" aria-label="Developer focus overview">
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
                    <strong>Product-minded developer</strong>
                    <small>Frontend · Backend · Data · AI</small>
                  </div>
                </div>
                <p><span>~</span> cat focus.json</p>
                <div className="code-block" aria-label="Current focus areas">
                  <code><b>{'{'}</b></code>
                  <code>&nbsp;&nbsp;<i>"build"</i>: <em>"end-to-end products"</em>,</code>
                  <code>&nbsp;&nbsp;<i>"ai"</i>: <em>"useful, controlled, grounded"</em>,</code>
                  <code>&nbsp;&nbsp;<i>"mode"</i>: <em>"learn → ship → iterate"</em></code>
                  <code><b>{'}'}</b></code>
                </div>
                <p className="terminal-cursor"><span>~</span> <i aria-hidden="true" /></p>
              </div>
            </div>
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="content-shell">
            <SectionHeading
              eyebrow="Selected work"
              title="Projects built around real problems."
              description="A selection of end-to-end products spanning browser automation, local-first AI tooling, retrieval systems and generative workflows."
            />
            <div className="projects-grid">
              {projects.map((project, index) => (
                <ProjectCard key={project.name} project={project} index={index} />
              ))}
            </div>
            <a className="all-projects-link" href={links.github} target="_blank" rel="noopener noreferrer">
              Explore all repositories on GitHub <ArrowRight size={17} aria-hidden="true" />
            </a>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="content-shell">
            <SectionHeading
              eyebrow="Toolkit"
              title="Across the full product stack."
              description="Tools selected for the job at hand—from responsive interfaces to data infrastructure and AI-enabled workflows."
            />
            <div className="skills-grid">
              {skillGroups.map((group, index) => {
                const Icon = skillIcons[index]
                return (
                  <article className="skill-group" key={group.name}>
                    <div className="skill-title">
                      <span><Icon size={19} aria-hidden="true" /></span>
                      <h3>{group.name}</h3>
                    </div>
                    <ul>
                      {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
                    </ul>
                  </article>
                )
              })}
              <div className="also-used">
                <span>Also used</span>
                <p>Java</p>
                <p>PHP</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="content-shell about-grid">
            <div>
              <SectionHeading eyebrow="About" title="Curious across layers. Focused on outcomes." />
              <div className="about-copy">
                <p>
                  Vitaly is a software developer focused on building end-to-end applications and AI-enabled tools. He works across frontend, backend, data and integration layers.
                </p>
                <p>
                  He is especially interested in practical AI, thoughtful automation and developer tooling—technology that makes complex work clearer and more useful.
                </p>
              </div>
              <div className="about-tags" aria-label="Working principles">
                <span><Sparkles size={15} aria-hidden="true" /> Practical AI</span>
                <span><Layers3 size={15} aria-hidden="true" /> End-to-end thinking</span>
                <span><Blocks size={15} aria-hidden="true" /> Useful systems</span>
              </div>
            </div>

            <article className="experience-card">
              <div className="experience-card-header">
                <span><Terminal size={18} aria-hidden="true" /></span>
                <div>
                  <p>Hands-on work</p>
                  <h3>Project &amp; Practical Experience</h3>
                </div>
              </div>
              <ul>
                <li>Full-stack web development in small teams</li>
                <li>Interface architecture and responsive layouts</li>
                <li>Complex navigation, card systems and UI animation</li>
                <li>Scraping and data tooling</li>
                <li>API and application integrations</li>
                <li>End-to-end implementation of web application features</li>
              </ul>
              <p className="experience-note">Project-based and practical experience</p>
            </article>
          </div>
        </section>

        <section className="section education-section" id="education">
          <div className="content-shell">
            <SectionHeading eyebrow="Background" title="Education & languages." />
            <div className="background-grid">
              <div className="education-list">
                <article>
                  <span className="education-icon"><GraduationCap size={19} aria-hidden="true" /></span>
                  <div><h3>DAM — Desarrollo de Aplicaciones Multiplataforma</h3><p>Completed 2026</p></div>
                </article>
                <article>
                  <span className="education-icon"><GraduationCap size={19} aria-hidden="true" /></span>
                  <div><h3>SMR — Sistemas Microinformáticos y Redes</h3><p>Technical education</p></div>
                </article>
                <article>
                  <span className="education-icon"><GraduationCap size={19} aria-hidden="true" /></span>
                  <div><h3>Computer Engineering — UNIR</h3><p>2026/27 · AI specialization</p></div>
                </article>
              </div>
              <article className="languages-card">
                <div className="languages-title"><Languages size={20} aria-hidden="true" /><h3>Languages</h3></div>
                <dl>
                  <div><dt>Russian</dt><dd>Native</dd></div>
                  <div><dt>Spanish</dt><dd>Intermediate</dd></div>
                  <div><dt>English</dt><dd>Basic · improving</dd></div>
                </dl>
              </article>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="content-shell contact-shell">
            <div>
              <p className="eyebrow"><span aria-hidden="true">//</span> Contact</p>
              <h2>Let’s build something useful.</h2>
              <p>Explore the code, follow the work, or connect professionally.</p>
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
          <p><span>VS</span> Built with React &amp; TypeScript.</p>
          <a href="#top">Back to top <ArrowDown size={15} aria-hidden="true" /></a>
        </div>
      </footer>
    </>
  )
}

export default App
