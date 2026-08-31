import type { Language } from '../data/content'

export function Footer({ language }: { language: Language }) {
  return (
    <footer className="site-footer">
      <div className="container">
        <p>© {new Date().getFullYear()} Samuel Librelon</p>
        <p>{language === 'en' ? 'Data · Analytics · Automation' : 'Dados · Analytics · Automação'}</p>
        <a href="#top">{language === 'en' ? 'Back to top ↑' : 'Voltar ao topo ↑'}</a>
      </div>
    </footer>
  )
}
