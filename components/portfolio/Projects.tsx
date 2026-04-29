import styles from './Projects.module.css'

const projects = [
  {
    title: 'CineApp',
    subtitle: 'Cinema Management System',
    description: 'A comprehensive web system for managing movies, ticket sales, schedules, and access control. Features include real-time seat selection, payment processing, and admin dashboard for cinema operations.',
    technologies: ['React', 'Node.js', 'Express', 'PostgreSQL', 'JWT'],
    image: '/projects/cineapp.jpg',
    featured: true,
  },
  {
    title: 'E-Commerce Platform',
    subtitle: 'Online Store',
    description: 'Full-stack e-commerce solution with product catalog, shopping cart, user authentication, and order management.',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'Stripe'],
    image: '/projects/ecommerce.jpg',
    featured: false,
  },
  {
    title: 'Task Manager',
    subtitle: 'Productivity App',
    description: 'A collaborative task management application with real-time updates, team workspaces, and progress tracking.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    image: '/projects/taskmanager.jpg',
    featured: false,
  },
]

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>My Work</span>
          <h2 className={styles.title}>
            Featured <span className={styles.highlight}>Projects</span>
          </h2>
          <p className={styles.subtitle}>
            Here are some of the projects I&apos;ve worked on
          </p>
        </div>

        {/* Featured Project */}
        <div className={styles.featuredProject}>
          <div className={styles.featuredImage}>
            <div className={styles.imagePlaceholder}>
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <rect x="2" y="2" width="20" height="20" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="M21 15l-5-5L5 21" />
              </svg>
              <span>CineApp Preview</span>
            </div>
            <div className={styles.featuredBadge}>Featured</div>
          </div>
          <div className={styles.featuredContent}>
            <span className={styles.projectSubtitle}>{projects[0].subtitle}</span>
            <h3 className={styles.projectTitle}>{projects[0].title}</h3>
            <p className={styles.projectDescription}>{projects[0].description}</p>
            <div className={styles.techStack}>
              {projects[0].technologies.map((tech) => (
                <span key={tech} className={styles.techTag}>{tech}</span>
              ))}
            </div>
            <div className={styles.projectLinks}>
              <a href="#" className={styles.projectLink}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
                Code
              </a>
              <a href="#" className={styles.projectLink}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                Live Demo
              </a>
            </div>
          </div>
        </div>

        {/* Other Projects Grid */}
        <div className={styles.projectsGrid}>
          {projects.slice(1).map((project, index) => (
            <div key={index} className={styles.projectCard}>
              <div className={styles.cardImage}>
                <div className={styles.imagePlaceholder}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <rect x="2" y="2" width="20" height="20" rx="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <path d="M21 15l-5-5L5 21" />
                  </svg>
                </div>
              </div>
              <div className={styles.cardContent}>
                <span className={styles.cardSubtitle}>{project.subtitle}</span>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDescription}>{project.description}</p>
                <div className={styles.techStack}>
                  {project.technologies.map((tech) => (
                    <span key={tech} className={styles.techTag}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
