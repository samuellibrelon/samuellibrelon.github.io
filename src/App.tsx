import { useEffect, useState } from 'react'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Education } from './components/Education'
import { Experience } from './components/Experience'
import { FeaturedWork } from './components/FeaturedWork'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { ImpactMetrics } from './components/ImpactMetrics'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { interfaceCopy, type Language } from './data/content'

const getInitialLanguage = (): Language => {
  try {
    const stored = window.localStorage.getItem('portfolio-language')
    return stored === 'pt' ? 'pt' : 'en'
  } catch {
    return 'en'
  }
}

function App() {
  const [language, setLanguage] = useState<Language>(getInitialLanguage)

  useEffect(() => {
    const metadata = language === 'en'
      ? {
          lang: 'en',
          title: 'Samuel Librelon — Data Analyst | Python, SQL, Power BI & Automation',
          description: 'Samuel Librelon is a data and automation professional using Python, SQL and Power BI to improve complex enterprise operations.',
        }
      : {
          lang: 'pt-BR',
          title: 'Samuel Librelon — Analista de Dados | Python, SQL, Power BI & Automação',
          description: 'Samuel Librelon é um profissional de dados e automação que usa Python, SQL e Power BI para melhorar operações empresariais complexas.',
        }

    document.documentElement.lang = metadata.lang
    document.title = metadata.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', metadata.description)

    try {
      window.localStorage.setItem('portfolio-language', language)
    } catch {
      // The language still works when browser storage is unavailable.
    }
  }, [language])

  return (
    <>
      <a className="skip-link" href="#main-content">{interfaceCopy.skip[language]}</a>
      <Header language={language} onLanguageChange={setLanguage} />
      <main id="main-content">
        <Hero language={language} />
        <ImpactMetrics language={language} />
        <FeaturedWork language={language} />
        <Projects language={language} />
        <Experience language={language} />
        <Skills language={language} />
        <About language={language} />
        <Education language={language} />
        <Contact language={language} />
      </main>
      <Footer language={language} />
    </>
  )
}

export default App
