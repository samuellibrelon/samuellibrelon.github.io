import type { Localized } from './content'

export type ExperienceItem = {
  company: string
  role: Localized<string>
  period: Localized<string>
  summary: Localized<string>
  highlights: Localized<string[]>
  tools: string[]
}

export const experience: ExperienceItem[] = [
  {
    company: 'Novo Nordisk',
    role: {
      en: 'OEA Logistic Analyst Jr. — Material Planning (PPM)',
      pt: 'Analista de Logística OEA Jr. — Planejamento de Materiais (PPM)',
    },
    period: { en: 'Jul 2026 — Present', pt: 'Jul 2026 — Atual' },
    summary: {
      en: 'Planning analytics and decision support across enterprise material and supply data.',
      pt: 'Analytics de planejamento e suporte à decisão sobre dados corporativos de materiais e suprimentos.',
    },
    highlights: {
      en: [
        'Analyze demand, inventory, orders, lead times and inbound forecasts using SQL, SAP HANA and Excel.',
        'Build Python automation for requirements analysis, inventory calculations and production-planning scenarios.',
        'Develop Power BI dashboards, SQL datasets and analytical models for risk visibility and planning decisions.',
      ],
      pt: [
        'Analiso demanda, estoque, pedidos, lead times e previsões de chegada com SQL, SAP HANA e Excel.',
        'Construo automações em Python para necessidades de materiais, cálculos de estoque e cenários de produção.',
        'Desenvolvo dashboards Power BI, datasets SQL e modelos analíticos para visibilidade de risco e decisões de planejamento.',
      ],
    },
    tools: ['Python', 'SQL', 'SAP HANA', 'Power BI', 'Excel'],
  },
  {
    company: 'Novo Nordisk',
    role: { en: 'Data Analytics Intern — Supply Chain', pt: 'Estagiário de Data Analytics — Supply Chain' },
    period: { en: 'Feb 2025 — Jul 2026', pt: 'Fev 2025 — Jul 2026' },
    summary: {
      en: 'Data automation, business intelligence and logistics analytics in a global pharmaceutical operation.',
      pt: 'Automação de dados, business intelligence e analytics logístico em uma operação farmacêutica global.',
    },
    highlights: {
      en: [
        'Built a Python + SAP workflow that reduced approximately 900 manual steps to 7 and 68 minutes to 2 minutes.',
        'Delivered an initiative with DKK 60,000 estimated annual savings and lower documentation risk.',
        'Developed Power BI datasets, dashboards and KPIs for logistics, lead time, transportation mode and cost opportunities.',
      ],
      pt: [
        'Construí um fluxo Python + SAP que reduziu cerca de 900 etapas manuais para 7 e 68 minutos para 2 minutos.',
        'Entreguei uma iniciativa com economia anual estimada de DKK 60 mil e menor risco documental.',
        'Desenvolvi datasets, dashboards e KPIs em Power BI para logística, lead time, modais e oportunidades de custo.',
      ],
    },
    tools: ['Python', 'SAP', 'Power BI', 'Automation', 'Logistics Analytics'],
  },
  {
    company: 'Plano de Saúde São Lucas',
    role: { en: 'IT / Data Intern', pt: 'Estagiário de TI / Dados' },
    period: { en: 'Aug 2024 — Dec 2024', pt: 'Ago 2024 — Dez 2024' },
    summary: {
      en: 'Reporting, analysis and automation at the intersection of databases, BI and IT operations.',
      pt: 'Relatórios, análises e automação na interseção entre bancos de dados, BI e operações de TI.',
    },
    highlights: {
      en: [
        'Queried and analyzed Oracle databases with SQL for reporting and decision support.',
        'Built Power BI dashboards and automated recurring reports with Python and Excel.',
        'Applied statistical and machine-learning techniques in exploratory analyses.',
      ],
      pt: [
        'Consultei e analisei bancos Oracle com SQL para relatórios e suporte à decisão.',
        'Construí dashboards Power BI e automatizei relatórios recorrentes com Python e Excel.',
        'Apliquei técnicas estatísticas e de machine learning em análises exploratórias.',
      ],
    },
    tools: ['Oracle SQL', 'Power BI', 'Python', 'Excel'],
  },
]
