import type { Localized } from './content'

export type Project = {
  name: string
  label: Localized<string>
  description: Localized<string>
  evidence: Localized<string>
  tech: string[]
  url: string
  motif: 'pipeline' | 'api' | 'sequence'
}

export const projects: Project[] = [
  {
    name: 'Enterprise Insights — NLP Prototype',
    label: { en: 'PERSONAL PROTOTYPE', pt: 'PROTÓTIPO PESSOAL' },
    description: {
      en: 'A public-data ingestion prototype that extracts website and annual-report content, stores it in MySQL, cleans text with NLTK and includes an OpenAI API response script.',
      pt: 'Protótipo de ingestão de dados públicos que extrai conteúdo de páginas e relatório anual, armazena em MySQL, trata texto com NLTK e inclui um script de resposta via API da OpenAI.',
    },
    evidence: {
      en: 'Presented as a personal demonstration—not an official Novo Nordisk product.',
      pt: 'Apresentado como demonstração pessoal — não como produto oficial da Novo Nordisk.',
    },
    tech: ['Python', 'MySQL', 'NLTK', 'Selenium', 'OpenAI API'],
    url: 'https://github.com/samuellibrelon/NovoNordiskInsights',
    motif: 'pipeline',
  },
  {
    name: 'Baozi Store API',
    label: { en: 'BACKEND & DATA MODELING', pt: 'BACKEND & MODELAGEM DE DADOS' },
    description: {
      en: 'A Java 17 REST API with Spring Boot, relational entities, validation and CRUD flows for customers, products and orders.',
      pt: 'API REST em Java 17 com Spring Boot, entidades relacionais, validação e fluxos CRUD para clientes, produtos e pedidos.',
    },
    evidence: {
      en: 'Includes an integration test, Postman collection and UML use-case documentation.',
      pt: 'Inclui teste de integração, coleção Postman e documentação UML de casos de uso.',
    },
    tech: ['Java 17', 'Spring Boot', 'JPA', 'H2', 'Integration Testing'],
    url: 'https://github.com/samuellibrelon/baozi-store-api-rest',
    motif: 'api',
  },
  {
    name: 'BioSeqResearchTool',
    label: { en: 'DATA PROCESSING IN C', pt: 'PROCESSAMENTO DE DADOS EM C' },
    description: {
      en: 'A C application for processing nucleotide sequences, detecting patterns across different string sizes and organizing researcher/project records.',
      pt: 'Aplicação em C para processar sequências de nucleotídeos, detectar padrões em diferentes tamanhos de strings e organizar registros de pesquisadores e projetos.',
    },
    evidence: {
      en: 'A substantial procedural implementation with file handling and domain-specific data structures.',
      pt: 'Implementação procedural substancial com manipulação de arquivos e estruturas de dados específicas do domínio.',
    },
    tech: ['C', 'Pattern Detection', 'File Handling', 'Data Structures'],
    url: 'https://github.com/samuellibrelon/BioSeqResearchTool',
    motif: 'sequence',
  },
]
