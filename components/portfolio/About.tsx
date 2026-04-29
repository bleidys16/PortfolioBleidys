import styles from './About.module.css'

const skills = [
  { name: 'React', level: 85 },
  { name: 'Node.js', level: 80 },
  { name: 'TypeScript', level: 75 },
  { name: 'PostgreSQL', level: 70 },
]

const technologies = [
  'React', 'Next.js', 'Node.js', 'Express', 
  'TypeScript', 'JavaScript', 'PostgreSQL', 'MongoDB',
  'HTML5', 'CSS3', 'Git', 'REST API'
]

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>About Me</span>
          <h2 className={styles.title}>
            Passionate about creating
            <span className={styles.highlight}> digital experiences</span>
          </h2>
        </div>

        <div className={styles.content}>
          <div className={styles.description}>
            <p>
              I&apos;m a Junior Full Stack Web Developer with a strong passion for building 
              modern, responsive, and user-friendly web applications. My journey in 
              programming started with curiosity and has grown into a commitment to 
              continuous learning and improvement.
            </p>
            <p>
              I specialize in both frontend and backend development, working with 
              technologies like React, Node.js, and PostgreSQL. I believe in writing 
              clean, maintainable code and creating intuitive user interfaces that 
              provide exceptional experiences.
            </p>
            <p>
              When I&apos;m not coding, I&apos;m exploring new technologies, contributing 
              to open-source projects, or learning about the latest trends in web development.
            </p>
          </div>

          <div className={styles.skillsSection}>
            <h3 className={styles.skillsTitle}>Core Skills</h3>
            <div className={styles.skillBars}>
              {skills.map((skill) => (
                <div key={skill.name} className={styles.skillBar}>
                  <div className={styles.skillInfo}>
                    <span className={styles.skillName}>{skill.name}</span>
                    <span className={styles.skillPercent}>{skill.level}%</span>
                  </div>
                  <div className={styles.skillTrack}>
                    <div 
                      className={styles.skillProgress} 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.techSection}>
          <h3 className={styles.techTitle}>Technologies I Work With</h3>
          <div className={styles.techGrid}>
            {technologies.map((tech) => (
              <span key={tech} className={styles.techBadge}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
