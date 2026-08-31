import { contact, siteConfig, type Language } from '../data/content'

export function Contact({ language }: { language: Language }) {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-heading">
      <div className="container contact-grid">
        <div>
          <p className="eyebrow">{contact.eyebrow[language]}</p>
          <h2 id="contact-heading">{contact.title[language]}</h2>
        </div>
        <div>
          <p>{contact.body[language]}</p>
          <div className="contact-actions">
            <a className="button button-light" href={`mailto:${siteConfig.email}`}>{contact.email[language]} <span aria-hidden="true">↗</span></a>
            <a className="button button-ghost" href={siteConfig.resumeUrl} download="Samuel_Librelon_Data_Analyst_Resume.pdf">{contact.download[language]} <span aria-hidden="true">↓</span></a>
          </div>
          <div className="contact-links">
            <a href={siteConfig.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a href={siteConfig.github} target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          </div>
        </div>
      </div>
    </section>
  )
}
