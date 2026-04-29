'use client'

import { useLanguage } from '@/context/LanguageContext'
import styles from './LanguageSwitcher.module.css'

export default function LanguageSwitcher() {
  const { language, toggleLanguage } = useLanguage()

  return (
    <button 
      onClick={toggleLanguage}
      className={styles.switcher}
      aria-label="Cambiar idioma"
      title={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
    >
      <span className={styles.flag}>
        {language === 'es' ? '🇪🇸' : '🇺🇸'}
      </span>
      <span className={styles.text}>
        {language === 'es' ? 'EN' : 'ES'}
      </span>
    </button>
  )
}
