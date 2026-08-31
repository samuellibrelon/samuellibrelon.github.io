import { about, sectionCopy, siteConfig, type Language } from '../data/content'
import { SectionIntro } from './SectionIntro'

export function About({ language }: { language: Language }) {
  return (
    <section className="section section-about" id="about" aria-labelledby="about-heading">
      <div className="container about-grid">
        <div>
          <SectionIntro {...sectionCopy.about} language={language} headingId="about-heading" />
          <div className="about-copy">
            <p>{about.body[language]}</p>
            <p>{about.supporting[language]}</p>
          </div>
          <ul className="about-highlights">{about.highlights[language].map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
        <div className="about-visual">
          {siteConfig.profileImage.enabled ? (
            <img src={siteConfig.profileImage.url} alt={about.imageAlt[language]} width="720" height="900" loading="lazy" />
          ) : (
            <div className="thinking-model" aria-label={language === 'en' ? 'Samuel’s analytical approach' : 'Abordagem analítica de Samuel'}>
              <p>{language === 'en' ? 'THE USEFUL MIDDLE' : 'O MEIO QUE GERA VALOR'}</p>
              <div><span>01</span><strong>{language === 'en' ? 'Business question' : 'Pergunta de negócio'}</strong></div>
              <i aria-hidden="true">↓</i>
              <div><span>02</span><strong>{language === 'en' ? 'Reliable analytical path' : 'Caminho analítico confiável'}</strong></div>
              <i aria-hidden="true">↓</i>
              <div><span>03</span><strong>{language === 'en' ? 'Decision people can use' : 'Decisão que as pessoas usam'}</strong></div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
