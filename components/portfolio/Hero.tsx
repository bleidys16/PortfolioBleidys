import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.backgroundGlow}></div>
      <div className={styles.backgroundGlow2}></div>
      
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.greeting}>Hello, I&apos;m</span>
          <h1 className={styles.name}>Bleidys Larios</h1>
          <h2 className={styles.role}>
            <span className={styles.roleHighlight}>Junior</span> Full Stack Web Developer
          </h2>
          <p className={styles.description}>
            I create modern, beautiful, and user-friendly web applications. 
            Passionate about transforming ideas into exceptional digital experiences 
            with clean code and creative solutions.
          </p>
          
          <div className={styles.buttons}>
            <a href="#projects" className={styles.primaryBtn}>
              <span>View Projects</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17"/>
              </svg>
            </a>
            <a href="#contact" className={styles.secondaryBtn}>
              <span>Contact Me</span>
            </a>
          </div>

          <div className={styles.stats}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>5+</span>
              <span className={styles.statLabel}>Projects</span>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>10+</span>
              <span className={styles.statLabel}>Technologies</span>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>100%</span>
              <span className={styles.statLabel}>Dedication</span>
            </div>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.codeBlock}>
            <div className={styles.codeHeader}>
              <span className={styles.dot}></span>
              <span className={styles.dot}></span>
              <span className={styles.dot}></span>
            </div>
            <pre className={styles.code}>
              <code>
                <span className={styles.keyword}>const</span> <span className={styles.variable}>developer</span> = &#123;{'\n'}
                {'  '}<span className={styles.property}>name</span>: <span className={styles.string}>&quot;Bleidys&quot;</span>,{'\n'}
                {'  '}<span className={styles.property}>skills</span>: [<span className={styles.string}>&quot;React&quot;</span>, <span className={styles.string}>&quot;Node&quot;</span>],{'\n'}
                {'  '}<span className={styles.property}>passion</span>: <span className={styles.string}>&quot;Building&quot;</span>,{'\n'}
                {'  '}<span className={styles.function}>createSolutions</span>() &#123;{'\n'}
                {'    '}<span className={styles.keyword}>return</span> <span className={styles.string}>&quot;✨ Magic&quot;</span>;{'\n'}
                {'  '}&#125;{'\n'}
                &#125;;
              </code>
            </pre>
          </div>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <span>Scroll</span>
        <div className={styles.scrollLine}></div>
      </div>
    </section>
  )
}
