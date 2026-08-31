import type { Localized, Language } from '../data/content'

type SectionIntroProps = {
  eyebrow: Localized<string>
  title: Localized<string>
  intro?: Localized<string>
  language: Language
  headingId: string
}

export function SectionIntro({ eyebrow, title, intro, language, headingId }: SectionIntroProps) {
  return (
    <div className="section-intro">
      <p className="eyebrow">{eyebrow[language]}</p>
      <h2 id={headingId}>{title[language]}</h2>
      {intro && <p>{intro[language]}</p>}
    </div>
  )
}
