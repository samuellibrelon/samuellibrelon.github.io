import { sectionCopy, skills, type Language } from '../data/content'
import { SectionIntro } from './SectionIntro'

export function Skills({ language }: { language: Language }) {
  return (
    <section className="section section-skills" aria-labelledby="skills-heading">
      <div className="container">
        <SectionIntro {...sectionCopy.skills} language={language} headingId="skills-heading" />
        <div className="skills-grid">
          {skills.map((group, index) => (
            <article className="skill-group" key={group.title.en}>
              <span aria-hidden="true">0{index + 1}</span>
              <h3>{group.title[language]}</h3>
              <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
