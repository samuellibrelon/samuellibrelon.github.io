import { siteConfig, type CaseStudy as CaseStudyData, type Language } from '../data/content'

function ConceptDiagram({ kind, language }: { kind: CaseStudyData['visual']; language: Language }) {
  if (kind === 'automation') {
    return (
      <div className="concept-diagram automation-diagram" aria-label={language === 'en' ? 'Conceptual before and after workflow' : 'Fluxo conceitual antes e depois'}>
        <div className="diagram-column">
          <span className="diagram-label">{language === 'en' ? 'BEFORE' : 'ANTES'}</span>
          {['SAP', language === 'en' ? 'Spreadsheets' : 'Planilhas', language === 'en' ? 'Manual documents' : 'Documentos manuais', language === 'en' ? 'Repeated checks' : 'Verificações repetidas'].map((item) => <div className="diagram-node is-muted" key={item}>{item}</div>)}
        </div>
        <span className="diagram-arrow" aria-hidden="true">→</span>
        <div className="diagram-column">
          <span className="diagram-label">{language === 'en' ? 'AFTER' : 'DEPOIS'}</span>
          {['SAP', 'Python', language === 'en' ? 'Structured processing' : 'Processamento estruturado', language === 'en' ? 'Automated output' : 'Saída automatizada'].map((item) => <div className="diagram-node" key={item}>{item}</div>)}
        </div>
      </div>
    )
  }

  if (kind === 'planning') {
    const nodes = language === 'en'
      ? ['Enterprise data', 'Python + SQL', 'Scenario engine', 'Power BI', 'Business decision']
      : ['Dados corporativos', 'Python + SQL', 'Motor de cenários', 'Power BI', 'Decisão de negócio']
    return (
      <div className="concept-diagram planning-diagram" aria-label={language === 'en' ? 'Sanitized planning analytics workflow' : 'Fluxo sanitizado de analytics de planejamento'}>
        <span className="diagram-caption">{language === 'en' ? 'CONCEPTUAL / SANITIZED WORKFLOW' : 'FLUXO CONCEITUAL / SANITIZADO'}</span>
        {nodes.map((node, index) => (
          <div className="planning-step" key={node}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <strong>{node}</strong>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="concept-diagram freight-diagram" aria-label={language === 'en' ? 'Sea shipment share comparison' : 'Comparação da participação de embarques marítimos'}>
      <span className="diagram-caption">{language === 'en' ? 'SEA-SHIPMENT SHARE' : 'PARTICIPAÇÃO MARÍTIMA'}</span>
      <div className="freight-bars">
        <div className="freight-bar-row"><span>{language === 'en' ? 'Starting point' : 'Ponto inicial'}</span><div><i style={{ width: '40%' }} /></div><strong>~40%</strong></div>
        <div className="freight-bar-row"><span>{language === 'en' ? 'Supported shift' : 'Mudança apoiada'}</span><div><i style={{ width: '80%' }} /></div><strong>~80%</strong></div>
      </div>
      <p>{language === 'en' ? 'Analytical support—not a claim of sole causation.' : 'Suporte analítico — não uma alegação de causalidade exclusiva.'}</p>
    </div>
  )
}

export function CaseStudy({ study, language }: { study: CaseStudyData; language: Language }) {
  const hasKaizenPhoto = study.visual === 'automation' && siteConfig.kaizenImage.enabled

  return (
    <article className={`case-study${hasKaizenPhoto ? ' has-kaizen-photo' : ''}`} id={study.id}>
      <div className="case-index" aria-hidden="true">{study.number}</div>
      <div className="case-header">
        <p className="case-category">{study.category[language]}</p>
        <h3>{study.title[language]}</h3>
        <p>{study.summary[language]}</p>
        <div className="tag-list">
          {study.tech.map((item) => <span key={item}>{item}</span>)}
        </div>
      </div>

      <div className="case-visual">
        {hasKaizenPhoto && (
          <figure className="kaizen-photo">
            <img
              src={siteConfig.kaizenImage.url}
              alt={language === 'en' ? 'Samuel Librelon presenting a continuous-improvement automation case.' : 'Samuel Librelon apresentando um case de automação e melhoria contínua.'}
              width="1800"
              height="1200"
              loading="lazy"
            />
            <figcaption>{language === 'en' ? 'Presenting the automation case as part of an internal continuous-improvement initiative.' : 'Apresentação do case de automação em uma iniciativa interna de melhoria contínua.'}</figcaption>
          </figure>
        )}
        {!hasKaizenPhoto && <ConceptDiagram kind={study.visual} language={language} />}
      </div>

      <div className="case-details">
        <div><h4>{language === 'en' ? 'Context' : 'Contexto'}</h4><p>{study.context[language]}</p></div>
        <div><h4>{language === 'en' ? 'Problem' : 'Problema'}</h4><p>{study.problem[language]}</p></div>
        <div><h4>{language === 'en' ? 'My role' : 'Meu papel'}</h4><p>{study.role[language]}</p></div>
        <div><h4>{language === 'en' ? 'Approach' : 'Abordagem'}</h4><p>{study.approach[language]}</p></div>
      </div>

      <div className="case-outcome">
        <div>
          <p className="outcome-label">{language === 'en' ? 'SUPPORTED IMPACT' : 'IMPACTO APOIADO'}</p>
          <ul>{study.impact[language].map((item) => <li key={item}>{item}</li>)}</ul>
          {study.visual === 'freight' && siteConfig.showFreightOpportunity && siteConfig.freightOpportunityMetric && (
            <p>{siteConfig.freightOpportunityMetric[language]}</p>
          )}
        </div>
        <div>
          <p className="outcome-label">{language === 'en' ? 'DECISION / LEARNING' : 'DECISÃO / APRENDIZADO'}</p>
          <p>{study.outcome[language]}</p>
        </div>
      </div>
    </article>
  )
}
