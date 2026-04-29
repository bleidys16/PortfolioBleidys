'use client'

import { useState, useEffect } from 'react'
import styles from './Navigation.module.css'

const navItems = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#sobre-mi', label: 'Sobre Mí' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('inicio')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const sections = navItems.map(item => item.href.replace('#', ''))
      const scrollPosition = window.scrollY + 200

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={styles.wrapper}>
      <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ''}`}>
        <ul className={styles.navList}>
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`${styles.navLink} ${
                  activeSection === item.href.replace('#', '')
                    ? styles.active
                    : ''
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

    </div>
  )
}