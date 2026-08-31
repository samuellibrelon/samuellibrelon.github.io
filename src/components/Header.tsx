import { useEffect, useState } from 'react'
import { interfaceCopy, siteConfig, type Language } from '../data/content'

type HeaderProps = {
  language: Language
  onLanguageChange: (language: Language) => void
}

export function Header({ language, onLanguageChange }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  const links = [
    { href: '#work', label: interfaceCopy.work[language] },
    { href: '#experience', label: interfaceCopy.experience[language] },
    { href: '#about', label: interfaceCopy.about[language] },
    { href: '#contact', label: interfaceCopy.contact[language] },
  ]

  return (
    <header className="site-header">
      <nav className="container nav-shell" aria-label={interfaceCopy.navLabel[language]}>
        <a className="wordmark" href="#top" aria-label="Samuel Librelon — home" onClick={() => setMenuOpen(false)}>
          SL<span aria-hidden="true">.</span>
        </a>

        <div className={`nav-links ${menuOpen ? 'is-open' : ''}`} id="mobile-navigation">
          {links.map((link) => (
            <a href={link.href} key={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <div className="language-control" aria-label={interfaceCopy.language[language]}>
            {(['en', 'pt'] as const).map((item) => (
              <button
                aria-pressed={language === item}
                className={language === item ? 'is-active' : ''}
                key={item}
                onClick={() => onLanguageChange(item)}
                type="button"
              >
                {item.toUpperCase()}
              </button>
            ))}
          </div>
          <a className="text-link nav-resume" href={siteConfig.resumeUrl} download="Samuel_Librelon_Data_Analyst_Resume.pdf">
            {interfaceCopy.resume[language]} <span aria-hidden="true">↓</span>
          </a>
          <button
            aria-controls="mobile-navigation"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? interfaceCopy.menuClose[language] : interfaceCopy.menuOpen[language]}
            className="menu-toggle"
            onClick={() => setMenuOpen((value) => !value)}
            type="button"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
      </nav>
    </header>
  )
}
