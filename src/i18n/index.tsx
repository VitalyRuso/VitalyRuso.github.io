import { useEffect, useMemo, useState, type ReactNode } from 'react'
import { I18nContext } from './context'
import { translations, type Language } from './translations'

const STORAGE_KEY = 'vitaly-portfolio-language'

function initialLanguage(): Language {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'en' || saved === 'es' || saved === 'ru') return saved
  } catch {
    // Storage may be unavailable in strict privacy modes; browser language still works.
  }

  const browserLanguage = navigator.language.toLowerCase()
  if (browserLanguage.startsWith('ru')) return 'ru'
  if (browserLanguage.startsWith('es')) return 'es'
  return 'en'
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(initialLanguage)
  const t = translations[language]

  const setLanguage = (nextLanguage: Language) => {
    setLanguageState(nextLanguage)
    try {
      localStorage.setItem(STORAGE_KEY, nextLanguage)
    } catch {
      // The interface can still switch languages without persistence.
    }
  }

  useEffect(() => {
    document.documentElement.lang = language
    document.title = t.seo.title
    document.querySelector<HTMLMetaElement>('meta[name="description"]')?.setAttribute('content', t.seo.description)
  }, [language, t])

  const value = useMemo(() => ({ language, setLanguage, t }), [language, t])
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}
