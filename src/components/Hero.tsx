import { hero, siteConfig, type Language } from '../data/content'

export function Hero({ language }: { language: Language }) {
  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">{hero.eyebrow[language]}</p>
          <p className="hero-name">{hero.name}</p>
          <h1>{hero.title[language]}</h1>
          <p className="hero-summary">{hero.summary[language]}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              {hero.primaryCta[language]} <span aria-hidden="true">↓</span>
            </a>
            <a className="button button-secondary" href={siteConfig.resumeUrl} download="Samuel_Librelon_Data_Analyst_Resume.pdf">
              {hero.secondaryCta[language]} <span aria-hidden="true">↓</span>
            </a>
          </div>
          <div className="professional-links" aria-label={language === 'en' ? 'Professional links' : 'Links profissionais'}>
            <a href={siteConfig.linkedin} target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
            <a href={siteConfig.github} target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
            <a href={`mailto:${siteConfig.email}`}>Email <span aria-hidden="true">↗</span></a>
          </div>
        </div>

        <aside className="hero-proof" aria-label={language === 'en' ? 'Professional profile' : 'Perfil profissional'}>
          <p className="proof-kicker">{hero.current[language]}</p>
          <strong>Novo Nordisk</strong>
          <p>{hero.currentRole[language]}</p>
          <dl>
            {hero.metadata
              .filter((item) => !item.remoteOnly || siteConfig.showRemoteAvailability)
              .map((item) => (
                <div key={item.label.en}>
                  <dt>{item.label[language]}</dt>
                  <dd>{item.value[language]}</dd>
                </div>
              ))}
          </dl>
          <div className="proof-stack" aria-label="Core tools">
            <span>Python</span><span>SQL</span><span>Power BI</span>
          </div>
        </aside>
      </div>
    </section>
  )
}
