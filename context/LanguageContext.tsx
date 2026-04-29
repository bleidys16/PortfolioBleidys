'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

type Language = 'es' | 'en'

interface LanguageContextType {
  language: Language
  toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('es')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Obtener el idioma guardado o usar el navegador
    const saved = localStorage.getItem('language') as Language | null
    const browser = navigator.language.startsWith('es') ? 'es' : 'en'
    setLanguage(saved || browser)
    setMounted(true)
  }, [])

  const toggleLanguage = () => {
    const newLang = language === 'es' ? 'en' : 'es'
    setLanguage(newLang)
    localStorage.setItem('language', newLang)
  }

  if (!mounted) return <>{children}</>

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
