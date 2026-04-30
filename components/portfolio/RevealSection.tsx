'use client'

import { ReactNode } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import styles from './MainContent.module.css'

interface RevealSectionProps {
  children: ReactNode
  id?: string
  className?: string
}

export default function RevealSection({ children, id, className = '' }: RevealSectionProps) {
  const { ref, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.15 })

  const combinedClassName = `${className} ${styles.reveal} ${isVisible ? styles.visible : ''}`.trim()

  return (
    <section ref={ref} id={id} className={combinedClassName}>
      {children}
    </section>
  )
}
