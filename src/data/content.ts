export type Language = 'en' | 'pt'
export type Localized<T> = Record<Language, T>

export const siteConfig = {
  showRemoteAvailability: true,
  showFreightOpportunity: false,
  freightOpportunityMetric: null as Localized<string> | null,
  resumeUrl: '/resume/Samuel_Librelon_Data_Analyst_Resume.pdf',
  email: 'librelondev@gmail.com',
  linkedin: 'https://www.linkedin.com/in/samuellibrelon',
  github: 'https://github.com/samuellibrelon',
  profileImage: {
    enabled: false,
    url: '/images/profile/profile.webp',
  },
  kaizenImage: {
    enabled: true,
    url: '/images/impact/kaizen-presentation.webp',
  },
} as const

export const interfaceCopy = {
  skip: { en: 'Skip to content', pt: 'Pular para o conteúdo' },
  navLabel: { en: 'Primary navigation', pt: 'Navegação principal' },
  menuOpen: { en: 'Open menu', pt: 'Abrir menu' },
  menuClose: { en: 'Close menu', pt: 'Fechar menu' },
  work: { en: 'Work', pt: 'Trabalho' },
  experience: { en: 'Experience', pt: 'Experiência' },
  about: { en: 'About', pt: 'Sobre' },
  contact: { en: 'Contact', pt: 'Contato' },
  resume: { en: 'Résumé', pt: 'Currículo' },
  language: { en: 'Choose language', pt: 'Escolher idioma' },
  external: { en: 'opens in a new tab', pt: 'abre em uma nova aba' },
} satisfies Record<string, Localized<string>>

export const hero = {
  eyebrow: { en: 'DATA · ANALYTICS · AUTOMATION', pt: 'DADOS · ANALYTICS · AUTOMAÇÃO' },
  name: 'Samuel Librelon',
  title: {
    en: 'I turn operational complexity into data, automation and better decisions.',
    pt: 'Transformo complexidade operacional em dados, automação e decisões melhores.',
  },
  summary: {
    en: 'Data and automation professional at Novo Nordisk, building with Python, SQL and Power BI to reduce manual work, surface operational risk and support better decisions.',
    pt: 'Profissional de dados e automação na Novo Nordisk, criando soluções com Python, SQL e Power BI para reduzir trabalho manual, dar visibilidade a riscos e apoiar decisões melhores.',
  },
  primaryCta: { en: 'View case studies', pt: 'Ver estudos de caso' },
  secondaryCta: { en: 'Download résumé', pt: 'Baixar currículo' },
  current: { en: 'Currently', pt: 'Atualmente' },
  currentRole: {
    en: 'Material Planning Analyst · PPM',
    pt: 'Analista de Planejamento de Materiais · PPM',
  },
  metadata: [
    { label: { en: 'Based in', pt: 'Localização' }, value: { en: 'Brazil', pt: 'Brasil' } },
    { label: { en: 'Communication', pt: 'Comunicação' }, value: { en: 'English — Advanced', pt: 'Inglês — Avançado' } },
    { label: { en: 'Availability', pt: 'Disponibilidade' }, value: { en: 'Remote / International', pt: 'Remoto / Internacional' }, remoteOnly: true },
  ],
} satisfies {
  eyebrow: Localized<string>
  name: string
  title: Localized<string>
  summary: Localized<string>
  primaryCta: Localized<string>
  secondaryCta: Localized<string>
  current: Localized<string>
  currentRole: Localized<string>
  metadata: Array<{ label: Localized<string>; value: Localized<string>; remoteOnly?: boolean }>
}

export const impactMetrics = [
  {
    value: '>97%',
    label: { en: 'Processing-time reduction', pt: 'Redução no tempo de processamento' },
    detail: { en: '68 min → 2 min', pt: '68 min → 2 min' },
  },
  {
    value: '900 → 7',
    label: { en: 'Manual steps', pt: 'Etapas manuais' },
    detail: { en: 'through Python + SAP automation', pt: 'com automação em Python + SAP' },
  },
  {
    value: 'DKK 60K',
    label: { en: 'Estimated annual savings', pt: 'Economia anual estimada' },
    detail: { en: 'from one automation initiative', pt: 'em uma iniciativa de automação' },
  },
] satisfies Array<{ value: string; label: Localized<string>; detail: Localized<string> }>

export const sectionCopy = {
  work: {
    eyebrow: { en: 'FEATURED WORK', pt: 'TRABALHO EM DESTAQUE' },
    title: { en: 'Selected problems. Measurable outcomes.', pt: 'Problemas selecionados. Resultados mensuráveis.' },
    intro: {
      en: 'Sanitized case studies from enterprise operations. No internal systems, source code or confidential data are shown.',
      pt: 'Estudos de caso sanitizados de operações empresariais. Nenhum sistema interno, código-fonte ou dado confidencial é exibido.',
    },
  },
  projects: {
    eyebrow: { en: 'SELECTED TECHNICAL WORK', pt: 'TRABALHO TÉCNICO SELECIONADO' },
    title: { en: 'Engineering breadth beyond the enterprise context.', pt: 'Amplitude de engenharia além do contexto corporativo.' },
    intro: {
      en: 'A focused selection from public repositories, chosen for data processing, system design and implementation evidence.',
      pt: 'Uma seleção objetiva de repositórios públicos, escolhidos por evidências de processamento de dados, arquitetura e implementação.',
    },
  },
  experience: {
    eyebrow: { en: 'EXPERIENCE', pt: 'EXPERIÊNCIA' },
    title: { en: 'Data work grounded in real operations.', pt: 'Dados aplicados a operações reais.' },
  },
  skills: {
    eyebrow: { en: 'CAPABILITIES', pt: 'COMPETÊNCIAS' },
    title: { en: 'Tools connected to business decisions.', pt: 'Ferramentas conectadas a decisões de negócio.' },
  },
  about: {
    eyebrow: { en: 'ABOUT', pt: 'SOBRE' },
    title: { en: 'Between the business question and the useful answer.', pt: 'Entre a pergunta de negócio e a resposta útil.' },
  },
} as const

export type CaseStudy = {
  id: string
  number: string
  category: Localized<string>
  title: Localized<string>
  summary: Localized<string>
  context: Localized<string>
  problem: Localized<string>
  role: Localized<string>
  approach: Localized<string>
  impact: Localized<string[]>
  outcome: Localized<string>
  tech: string[]
  visual: 'automation' | 'planning' | 'freight'
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'enterprise-automation',
    number: '01',
    category: { en: 'PROFESSIONAL CASE STUDY', pt: 'ESTUDO DE CASO PROFISSIONAL' },
    title: { en: 'From 900 manual steps to 7.', pt: 'De 900 etapas manuais para 7.' },
    summary: {
      en: 'Automating an enterprise export-documentation workflow with Python and SAP.',
      pt: 'Automação de um fluxo corporativo de documentação de exportação com Python e SAP.',
    },
    context: {
      en: 'A daily export-documentation process depended on repeated SAP interactions, spreadsheet handling and manual checks.',
      pt: 'Um processo diário de documentação de exportação dependia de interações repetidas no SAP, planilhas e verificações manuais.',
    },
    problem: {
      en: 'Approximately 900 manual actions and 68 minutes of execution created avoidable workload and documentation risk.',
      pt: 'Aproximadamente 900 ações manuais e 68 minutos de execução geravam carga de trabalho e risco documental evitáveis.',
    },
    role: {
      en: 'Designed and developed the end-to-end automation, connecting extraction, processing, document generation and workflow steps.',
      pt: 'Desenhei e desenvolvi a automação ponta a ponta, conectando extração, processamento, geração de documentos e etapas do fluxo.',
    },
    approach: {
      en: 'Mapped the manual sequence, standardized the data path and automated the repeatable steps while retaining clear controls for the remaining exceptions.',
      pt: 'Mapeei a sequência manual, padronizei o fluxo de dados e automatizei as etapas repetíveis, mantendo controles claros para as exceções restantes.',
    },
    impact: {
      en: ['900 → 7 manual steps', '68 → 2 minutes daily', '>97% processing-time reduction', 'DKK 60K estimated annual savings'],
      pt: ['900 → 7 etapas manuais', '68 → 2 minutos por dia', '>97% de redução no tempo', 'DKK 60 mil de economia anual estimada'],
    },
    outcome: {
      en: 'Lower operational and documentation risk, plus internal continuous-improvement recognition. The case also strengthened how I communicate technical work to stakeholders.',
      pt: 'Menor risco operacional e documental, além de reconhecimento interno em melhoria contínua. O caso também fortaleceu minha comunicação técnica com stakeholders.',
    },
    tech: ['Python', 'SAP', 'Automation', 'Data Processing'],
    visual: 'automation',
  },
  {
    id: 'planning-analytics',
    number: '02',
    category: { en: 'PROFESSIONAL CASE STUDY', pt: 'ESTUDO DE CASO PROFISSIONAL' },
    title: { en: 'Turning supply complexity into decision-ready data.', pt: 'Transformando complexidade de suprimentos em dados para decisão.' },
    summary: {
      en: 'Planning analytics and scenario automation across enterprise operational data.',
      pt: 'Analytics de planejamento e automação de cenários sobre dados operacionais corporativos.',
    },
    context: {
      en: 'Material planning decisions combine production demand, inventory, open orders, lead times, expected arrivals and changing supply constraints.',
      pt: 'Decisões de planejamento de materiais combinam demanda de produção, estoque, pedidos em aberto, lead times, chegadas esperadas e restrições de fornecimento.',
    },
    problem: {
      en: 'The analytical challenge is not one metric; it is keeping multiple operational signals reliable, comparable and visible early enough to act.',
      pt: 'O desafio analítico não é uma única métrica, mas manter vários sinais operacionais confiáveis, comparáveis e visíveis a tempo de agir.',
    },
    role: {
      en: 'Build Python automations, SQL datasets, Power BI views and Excel models for inventory risk, material requirements and planning scenarios.',
      pt: 'Construo automações em Python, datasets SQL, visões em Power BI e modelos em Excel para risco de estoque, necessidades de materiais e cenários de planejamento.',
    },
    approach: {
      en: 'Structure enterprise data into repeatable analytical flows, then evaluate what-if scenarios such as plan changes, delayed arrivals, deviations and supply constraints.',
      pt: 'Estruturo dados corporativos em fluxos analíticos repetíveis e avalio cenários como mudanças de plano, atrasos, desvios e restrições de fornecimento.',
    },
    impact: {
      en: ['Earlier shortage-risk visibility', 'More consistent scenario analysis', 'Decision-ready operational datasets', 'Less manual analytical effort'],
      pt: ['Visibilidade antecipada de riscos', 'Análises de cenário mais consistentes', 'Datasets operacionais prontos para decisão', 'Menos esforço analítico manual'],
    },
    outcome: {
      en: 'The work supports faster planning conversations while preserving traceability. All visuals shown here are conceptual and intentionally exclude internal identifiers or operational values.',
      pt: 'O trabalho apoia conversas de planejamento mais rápidas com rastreabilidade. Todos os visuais aqui são conceituais e excluem identificadores ou valores operacionais internos.',
    },
    tech: ['Python', 'SQL', 'SAP HANA', 'Power BI', 'Excel'],
    visual: 'planning',
  },
  {
    id: 'freight-analytics',
    number: '03',
    category: { en: 'PROFESSIONAL CASE STUDY', pt: 'ESTUDO DE CASO PROFISSIONAL' },
    title: { en: 'Using analytics to support logistics decisions.', pt: 'Usando analytics para apoiar decisões logísticas.' },
    summary: {
      en: 'Power BI analysis connecting transportation mode, lead time and cost opportunity.',
      pt: 'Análises em Power BI conectando modal de transporte, lead time e oportunidade de custo.',
    },
    context: {
      en: 'Freight decisions require a shared view of service, lead time, mode mix and opportunity—not isolated spreadsheets.',
      pt: 'Decisões de frete exigem uma visão comum de serviço, lead time, composição de modais e oportunidades — não planilhas isoladas.',
    },
    problem: {
      en: 'Stakeholders needed clearer KPI visibility to evaluate transportation-mode choices and their operational implications.',
      pt: 'Stakeholders precisavam de KPIs mais claros para avaliar escolhas de modal e suas implicações operacionais.',
    },
    role: {
      en: 'Developed Power BI datasets, dashboards and KPIs for logistics, transportation modes, lead time and cost opportunities.',
      pt: 'Desenvolvi datasets, dashboards e KPIs em Power BI para logística, modais, lead time e oportunidades de custo.',
    },
    approach: {
      en: 'Translated freight questions into a consistent analytical view, allowing teams to compare mode mix and discuss decisions using the same evidence.',
      pt: 'Traduzi perguntas sobre frete em uma visão analítica consistente, permitindo comparar modais e discutir decisões com a mesma evidência.',
    },
    impact: {
      en: ['Sea-shipment share: ~40% → ~80%', 'Clearer transportation-mode KPIs', 'Evidence for cross-functional decisions'],
      pt: ['Participação marítima: ~40% → ~80%', 'KPIs de modal mais claros', 'Evidências para decisões multifuncionais'],
    },
    outcome: {
      en: 'The analysis supported a shift in freight-mode decisions from approximately 40% to 80% sea shipments. No confidential financial estimate is published.',
      pt: 'A análise apoiou uma mudança nas decisões de modal, de aproximadamente 40% para 80% de embarques marítimos. Nenhuma estimativa financeira confidencial é publicada.',
    },
    tech: ['Power BI', 'KPIs', 'Logistics Analytics', 'Lead-time Analysis'],
    visual: 'freight',
  },
]

export const skills = [
  {
    title: { en: 'Data analytics & BI', pt: 'Data analytics & BI' },
    items: ['SQL', 'Power BI', 'DAX', 'Power Query', 'Excel', 'Data Visualization', 'KPI Development', 'Statistical Analysis'],
  },
  {
    title: { en: 'Python & automation', pt: 'Python & automação' },
    items: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Process Automation', 'REST APIs', 'Git'],
  },
  {
    title: { en: 'Data & enterprise systems', pt: 'Dados & sistemas corporativos' },
    items: ['ETL', 'SAP HANA', 'Oracle SQL', 'SAP', 'Power Automate', 'SharePoint'],
  },
  {
    title: { en: 'Domain knowledge', pt: 'Conhecimento de negócio' },
    items: ['Supply Chain Analytics', 'Inventory', 'Material Planning', 'Procurement', 'Logistics', 'Scenario Analysis'],
  },
] satisfies Array<{ title: Localized<string>; items: string[] }>

export const about = {
  body: {
    en: 'My background combines Computer Science, business knowledge and hands-on experience solving operational problems with data. I am most useful in the space between a messy business question and a solution people can understand, trust and use.',
    pt: 'Minha formação combina Ciência da Computação, conhecimento de negócios e experiência prática resolvendo problemas operacionais com dados. Meu melhor trabalho acontece entre uma pergunta de negócio ainda confusa e uma solução que as pessoas conseguem entender, confiar e usar.',
  },
  supporting: {
    en: 'That means listening to stakeholders, structuring the problem, building the analytical path and communicating the decision—not only producing the code or dashboard.',
    pt: 'Isso envolve ouvir stakeholders, estruturar o problema, construir o caminho analítico e comunicar a decisão — não apenas produzir o código ou o dashboard.',
  },
  highlights: {
    en: ['Technical + business fluency', 'Cross-functional communication', 'International operating context'],
    pt: ['Fluência técnica + negócios', 'Comunicação multifuncional', 'Contexto operacional internacional'],
  },
  imageAlt: {
    en: 'Samuel Librelon in a professional setting',
    pt: 'Samuel Librelon em ambiente profissional',
  },
} satisfies {
  body: Localized<string>
  supporting: Localized<string>
  highlights: Localized<string[]>
  imageAlt: Localized<string>
}

export const education = [
  { degree: { en: 'B.Sc. in Computer Science', pt: 'Bacharelado em Ciência da Computação' }, school: 'IFNMG', date: { en: 'Expected Dec 2027', pt: 'Previsão: dez 2027' } },
  { degree: { en: 'Technology in Systems Analysis and Development', pt: 'Tecnologia em Análise e Desenvolvimento de Sistemas' }, school: 'UNINTER', date: { en: 'Expected May 2027', pt: 'Previsão: mai 2027' } },
  { degree: { en: 'Business Administration coursework · degree not completed', pt: 'Estudos em Administração · curso não concluído' }, school: 'UFMG', date: { en: '2019 — 2023', pt: '2019 — 2023' } },
] satisfies Array<{ degree: Localized<string>; school: string; date: Localized<string> }>

export const certifications = [
  { name: 'Google Advanced Data Analytics Professional Certificate', issuer: 'Coursera', detail: '168h' },
  { name: 'Machine Learning Specialist', issuer: 'DIO', detail: '92h' },
  { name: 'Power BI for Business Intelligence and Data Science', issuer: 'DIO', detail: '72h' },
]

export const languages = [
  { name: { en: 'Portuguese', pt: 'Português' }, level: { en: 'Native', pt: 'Nativo' } },
  { name: { en: 'English', pt: 'Inglês' }, level: { en: 'Advanced', pt: 'Avançado' } },
  { name: { en: 'Spanish', pt: 'Espanhol' }, level: { en: 'Intermediate', pt: 'Intermediário' } },
] satisfies Array<{ name: Localized<string>; level: Localized<string> }>

export const contact = {
  eyebrow: { en: 'LET’S WORK TOGETHER', pt: 'VAMOS TRABALHAR JUNTOS' },
  title: { en: 'Let’s build something useful with data.', pt: 'Vamos construir algo útil com dados.' },
  body: {
    en: 'I am interested in Data, BI and Analytics opportunities where I can combine technical execution with business understanding.',
    pt: 'Tenho interesse em oportunidades de Dados, BI e Analytics nas quais eu possa combinar execução técnica e entendimento de negócio.',
  },
  email: { en: 'Email me', pt: 'Enviar email' },
  download: { en: 'Download résumé', pt: 'Baixar currículo' },
} satisfies Record<string, Localized<string>>
