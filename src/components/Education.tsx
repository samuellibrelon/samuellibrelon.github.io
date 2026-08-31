import { certifications, education, languages, type Language } from '../data/content'

export function Education({ language }: { language: Language }) {
  return (
    <section className="section section-education" aria-labelledby="education-heading">
      <div className="container education-grid">
        <div>
          <p className="eyebrow">{language === 'en' ? 'EDUCATION' : 'FORMAÇÃO'}</p>
          <h2 id="education-heading">{language === 'en' ? 'Learning with a clear purpose.' : 'Aprendizado com propósito claro.'}</h2>
          <div className="education-list">
            {education.map((item) => (
              <article key={item.degree.en}>
                <h3>{item.degree[language]}</h3>
                <p>{item.school}</p>
                <span>{item.date[language]}</span>
              </article>
            ))}
          </div>
        </div>
        <div className="supporting-evidence">
          <div>
            <h3>{language === 'en' ? 'Relevant certifications' : 'Certificações relevantes'}</h3>
            <ul>{certifications.map((item) => <li key={item.name}><strong>{item.name}</strong><span>{item.issuer} · {item.detail}</span></li>)}</ul>
          </div>
          <div>
            <h3>{language === 'en' ? 'Languages' : 'Idiomas'}</h3>
            <dl>{languages.map((item) => <div key={item.name.en}><dt>{item.name[language]}</dt><dd>{item.level[language]}</dd></div>)}</dl>
          </div>
        </div>
      </div>
    </section>
  )
}
