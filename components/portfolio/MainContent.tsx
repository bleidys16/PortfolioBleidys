import styles from './MainContent.module.css'

const stats = [
  { number: '+5', label: 'Proyectos' },
]

const skills = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 
  'JavaScript', 'HTML5', 'CSS3', 'Git',
  'MongoDB', 'PostgreSQL', 'Tailwind', 'Figma'
]

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="32" height="32">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
        <line x1="3" y1="9" x2="21" y2="9"/>
        <line x1="9" y1="21" x2="9" y2="9"/>
      </svg>
    ),
    title: 'Desarrollo Frontend',
    description: 'Interfaces modernas y responsivas con React, Next.js y las últimas tecnologías web.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="32" height="32">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    title: 'Desarrollo Backend',
    description: 'APIs robustas y escalables con Node.js, Express y bases de datos SQL/NoSQL.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="32" height="32">
        <path d="M12 19l7-7 3 3-7 7-3-3z"/>
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>
        <path d="M2 2l7.586 7.586"/>
        <circle cx="11" cy="11" r="2"/>
      </svg>
    ),
    title: 'Diseño UI/UX',
    description: 'Experiencias de usuario intuitivas y diseños atractivos centrados en el usuario.',
  },
]

const projects = [
  {
    title: 'CineApp',
    description: 'Aplicación web para explorar películas y series con información detallada, trailers y reseñas.',
    tags: ['React', 'API REST', 'CSS Modules'],
    link: '#',
  },
  {
    title: 'E-Commerce Dashboard',
    description: 'Panel de administración para tiendas online con estadísticas en tiempo real.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL'],
    link: '#',
  },
  {
    title: 'Task Manager',
    description: 'Aplicación de gestión de tareas con autenticación y sincronización en la nube.',
    tags: ['React', 'Node.js', 'MongoDB'],
    link: '#',
  },
]

export default function MainContent() {
  return (
    <div className={styles.content}>
      {/* Hero Section */}
      <section className={styles.hero} id="inicio">
        <div className={styles.heroText}>
          <h2 className={styles.heroTitle}>
            Transformando ideas en{' '}
            <span className={styles.highlight}>realidad digital</span>
          </h2>
          <p className={styles.heroDescription}>
            Soy una desarrolladora web apasionada por crear experiencias digitales 
            únicas y funcionales. Me especializo en el desarrollo full stack con 
            tecnologías modernas.
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
      </section>

      {/* About Section */}
      <section className={styles.section} id="sobre-mi">
        <h3 className={styles.sectionTitle}>Sobre Mí</h3>
        <div className={styles.aboutContent}>
          <p className={styles.aboutText}>
            Hola! Soy Bleidys Larios, una desarrolladora web full stack junior de Colombia. 
            Me apasiona crear aplicaciones web que no solo funcionen bien, sino que también 
            ofrezcan una experiencia de usuario excepcional.
          </p>
          <p className={styles.aboutText}>
            Actualmente me encuentro expandiendo mis conocimientos en tecnologías cloud 
            y arquitecturas de microservicios. Siempre estoy buscando nuevos desafíos 
            que me permitan crecer profesionalmente.
          </p>
        </div>
        
        <h4 className={styles.subsectionTitle}>Tecnologías</h4>
        <div className={styles.skills}>
          {skills.map((skill, index) => (
            <span key={index} className={styles.skillTag}>
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className={styles.section} id="servicios">
        <h3 className={styles.sectionTitle}>Servicios</h3>
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <div className={styles.serviceIcon}>{service.icon}</div>
              <h4 className={styles.serviceTitle}>{service.title}</h4>
              <p className={styles.serviceDescription}>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className={styles.section} id="proyectos">
        <h3 className={styles.sectionTitle}>Proyectos Destacados</h3>
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
      </section>

      {/* Contact Section */}
      <section className={styles.section} id="contacto">
        <h3 className={styles.sectionTitle}>Contacto</h3>
        <p className={styles.contactIntro}>
          ¿Tienes un proyecto en mente? Me encantaría saber más sobre él.
        </p>
        <form className={styles.contactForm}>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.formLabel}>Nombre</label>
              <input 
                type="text" 
                id="name" 
                name="name"
                className={styles.formInput}
                placeholder="Tu nombre"
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
            <label htmlFor="message" className={styles.formLabel}>Mensaje</label>
            <textarea 
              id="message" 
              name="message"
              className={styles.formTextarea}
              placeholder="Cuéntame sobre tu proyecto..."
              rows={5}
            />
          </div>
          <button type="submit" className={styles.submitButton}>
            Enviar Mensaje
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>&copy; 2026 Bleidys Larios. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}
