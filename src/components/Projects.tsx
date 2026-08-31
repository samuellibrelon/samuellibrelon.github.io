import { sectionCopy, type Language } from '../data/content'
import { projects, type Project } from '../data/projects'
import { SectionIntro } from './SectionIntro'

function ProjectMotif({ motif }: { motif: Project['motif'] }) {
  if (motif === 'api') {
    return <div className="project-motif api-motif" aria-hidden="true"><span>POST</span><i /><span>JSON</span><i /><span>200</span></div>
  }
  if (motif === 'sequence') {
    return <div className="project-motif sequence-motif" aria-hidden="true"><span>A</span><span>C</span><span>G</span><span>T</span><span>C</span><span>A</span><span>G</span></div>
  }
  return <div className="project-motif pipeline-motif" aria-hidden="true"><span>WEB / PDF</span><i>→</i><span>MYSQL</span><i>→</i><span>NLP</span></div>
}

export function Projects({ language }: { language: Language }) {
  return (
    <section className="section section-projects" aria-labelledby="projects-heading">
      <div className="container">
        <SectionIntro {...sectionCopy.projects} language={language} headingId="projects-heading" />
        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.name}>
              <ProjectMotif motif={project.motif} />
              <div className="project-body">
                <p className="project-label">{project.label[language]}</p>
                <h3>{project.name}</h3>
                <p>{project.description[language]}</p>
                <p className="project-evidence">{project.evidence[language]}</p>
                <div className="tag-list">{project.tech.map((item) => <span key={item}>{item}</span>)}</div>
                <a href={project.url} target="_blank" rel="noreferrer">
                  {language === 'en' ? 'Review repository' : 'Ver repositório'} <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
