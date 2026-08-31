import { caseStudies, sectionCopy, type Language } from '../data/content'
import { CaseStudy } from './CaseStudy'
import { SectionIntro } from './SectionIntro'

export function FeaturedWork({ language }: { language: Language }) {
  return (
    <section className="section section-work" id="work" aria-labelledby="work-heading">
      <div className="container">
        <SectionIntro {...sectionCopy.work} language={language} headingId="work-heading" />
        <div className="case-list">
          {caseStudies.map((study) => <CaseStudy key={study.id} study={study} language={language} />)}
        </div>
      </div>
    </section>
  )
}
