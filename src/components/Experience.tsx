import { sectionCopy, type Language } from '../data/content'
import { experience } from '../data/experience'
import { SectionIntro } from './SectionIntro'

export function Experience({ language }: { language: Language }) {
  return (
    <section className="section section-experience" id="experience" aria-labelledby="experience-heading">
      <div className="container experience-layout">
        <SectionIntro {...sectionCopy.experience} language={language} headingId="experience-heading" />
        <div className="timeline">
          {experience.map((item, index) => (
            <article className="timeline-item" key={`${item.company}-${item.period.en}`}>
              <span className="timeline-number" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
              <div className="timeline-header">
                <div><p>{item.company}</p><h3>{item.role[language]}</h3></div>
                <time>{item.period[language]}</time>
              </div>
              <p className="timeline-summary">{item.summary[language]}</p>
              <ul>{item.highlights[language].map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
              <div className="tag-list">{item.tools.map((tool) => <span key={tool}>{tool}</span>)}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
