import { impactMetrics, type Language } from '../data/content'

export function ImpactMetrics({ language }: { language: Language }) {
  return (
    <section className="metrics-band" aria-labelledby="impact-title">
      <div className="container">
        <div className="metrics-heading">
          <p className="eyebrow">{language === 'en' ? 'SELECTED IMPACT' : 'IMPACTO SELECIONADO'}</p>
          <h2 id="impact-title">{language === 'en' ? 'Proof before promises.' : 'Evidências antes de promessas.'}</h2>
        </div>
        <div className="metrics-grid">
          {impactMetrics.map((metric) => (
            <article className="metric-card" key={metric.value}>
              <strong>{metric.value}</strong>
              <p>{metric.label[language]}</p>
              <span>{metric.detail[language]}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
