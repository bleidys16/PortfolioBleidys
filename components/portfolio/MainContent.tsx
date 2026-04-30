'use client'

import { useLanguage } from '@/context/LanguageContext'
import { dictionary } from '@/lib/dictionary'
import styles from './MainContent.module.css'
import CyberText from './CyberText'
import RevealSection from './RevealSection'

const skills = [
  'React', 'Next.js', 'TypeScript', 'Node.js',
  'JavaScript', 'HTML5', 'CSS3', 'Git',
  'MongoDB', 'PostgreSQL', 'Tailwind', 'Figma'
]

export default function MainContent() {
  const { language } = useLanguage()
  const content = dictionary[language]

  const stats = [
    { number: '+3', label: content.hero.statsLabel },
  ]

  const services = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="32" height="32">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <line x1="9" y1="21" x2="9" y2="9" />
        </svg>
      ),
      title: content.services.list[0].title,
      description: content.services.list[0].description,
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="32" height="32">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
      title: content.services.list[1].title,
      description: content.services.list[1].description,
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="32" height="32">
          <path d="M12 19l7-7 3 3-7 7-3-3z" />
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
          <path d="M2 2l7.586 7.586" />
          <circle cx="11" cy="11" r="2" />
        </svg>
      ),
      title: content.services.list[2].title,
      description: content.services.list[2].description,
    },
  ]

  const projects = [
    {
      title: content.projects.list[0].title,
      description: content.projects.list[0].description,
      tags: ['React', 'API REST', 'CSS Modules'],
      link: '#',
    },
    {
      title: content.projects.list[1].title,
      description: content.projects.list[1].description,
      tags: ['Next.js', 'TypeScript', 'PostgreSQL'],
      link: '#',
    },
    {
      title: content.projects.list[2].title,
      description: content.projects.list[2].description,
      tags: ['React', 'Node.js', 'MongoDB'],
      link: '#',
    },
  ]

  return (
    <div className={styles.content}>
      {/* Hero Section */}
      <RevealSection className={styles.hero} id="inicio">
        <div className={styles.heroText}>
          <CyberText 
            text={content.hero.title1} 
            highlight={content.hero.highlight} 
            className={styles.heroTitle} 
            highlightClassName={styles.highlight}
          />
          <p className={styles.heroDescription}>
            {content.hero.description}
          </p>
        </div>

        <div className={styles.stats}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statItem}>
              <span className={styles.statNumber}>{stat.number}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      </RevealSection>

      {/* About Section */}
      <RevealSection className={styles.section} id="sobre-mi">
        <h3 className={styles.sectionTitle}>{content.about.title}</h3>
        <div className={styles.aboutContent}>
          <p className={styles.aboutText}>
            {content.about.p1}
          </p>
          <p className={styles.aboutText}>
            {content.about.p2}
          </p>
        </div>

        <h4 className={styles.subsectionTitle}>{content.about.techTitle}</h4>
        <div className={styles.skills}>
          {skills.map((skill, index) => (
            <span key={index} className={styles.skillTag}>
              {skill}
            </span>
          ))}
        </div>
      </RevealSection>

      {/* Services Section */}
      <RevealSection className={styles.section} id="servicios">
        <h3 className={styles.sectionTitle}>{content.services.title}</h3>
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <div className={styles.serviceIcon}>{service.icon}</div>
              <h4 className={styles.serviceTitle}>{service.title}</h4>
              <p className={styles.serviceDescription}>{service.description}</p>
            </div>
          ))}
        </div>
      </RevealSection>

      {/* Projects Section */}
      <RevealSection className={styles.section} id="proyectos">
        <h3 className={styles.sectionTitle}>{content.projects.title}</h3>
        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <a key={index} href={project.link} className={styles.projectCard}>
              <div className={styles.projectImagePlaceholder}>
                <span>{project.title.charAt(0)}</span>
              </div>
              <div className={styles.projectInfo}>
                <h4 className={styles.projectTitle}>{project.title}</h4>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.projectTags}>
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className={styles.projectTag}>{tag}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </RevealSection>

      {/* Contact Section */}
      <RevealSection className={styles.section} id="contacto">
        <h3 className={styles.sectionTitle}>{content.contact.title}</h3>
        <p className={styles.contactIntro}>
          {content.contact.intro}
        </p>
        <form className={styles.contactForm}>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.formLabel}>{content.contact.name}</label>
              <input
                type="text"
                id="name"
                name="name"
                className={styles.formInput}
                placeholder={content.contact.namePlaceholder}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.formLabel}>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className={styles.formInput}
                placeholder="tu@email.com"
              />
            </div>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.formLabel}>{content.contact.message}</label>
            <textarea
              id="message"
              name="message"
              className={styles.formTextarea}
              placeholder={content.contact.msgPlaceholder}
              rows={5}
            />
          </div>
          <button type="submit" className={styles.submitButton}>
            {content.contact.btnSubmit}
          </button>
        </form>
      </RevealSection>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>&copy; {(new Date()).getFullYear()} Bleidys Larios. {content.footer.rights}</p>
      </footer>
    </div>
  )
}
