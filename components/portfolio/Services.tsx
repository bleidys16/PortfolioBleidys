import styles from './Services.module.css'

const services = [
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8" />
        <path d="M12 17v4" />
        <path d="M7 7l3 3-3 3" />
        <path d="M14 13h3" />
      </svg>
    ),
    title: 'Frontend Development',
    description: 'Building responsive and interactive user interfaces using modern frameworks like React and Next.js. Creating pixel-perfect designs with smooth animations and optimal performance.',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 6h16a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2z" />
        <path d="M6 10h.01M10 10h.01M6 14h.01M10 14h.01M14 10h6M14 14h6" />
        <path d="M2 6l10-3 10 3" />
      </svg>
    ),
    title: 'Backend Development',
    description: 'Developing robust server-side applications with Node.js and Express. Creating RESTful APIs, implementing authentication systems, and managing databases efficiently.',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="M2 2l7.586 7.586" />
        <circle cx="11" cy="11" r="2" />
      </svg>
    ),
    title: 'UI/UX Design',
    description: 'Crafting intuitive and visually appealing user experiences. Focusing on usability, accessibility, and creating designs that delight users while achieving business goals.',
  },
]

export default function Services() {
  return (
    <section id="services" className={styles.services}>
      <div className={styles.backgroundGlow}></div>
      
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>What I Do</span>
          <h2 className={styles.title}>
            Services I <span className={styles.highlight}>Offer</span>
          </h2>
          <p className={styles.subtitle}>
            I provide comprehensive web development solutions to bring your ideas to life
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconWrapper}>
                {service.icon}
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
              <div className={styles.cardNumber}>0{index + 1}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
