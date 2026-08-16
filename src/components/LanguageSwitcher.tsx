import { useI18n } from '../i18n/context'
import type { Language } from '../i18n/translations'

const languageNames: Record<Language, string> = { en: 'English', es: 'Español', ru: 'Русский' }

export function LanguageSwitcher() {
  const { language, setLanguage, t } = useI18n()

  return (
    <div className="language-switcher" role="group" aria-label={t.common.language}>
      {(['en', 'es', 'ru'] as const).map((option) => (
        <button
          className={language === option ? 'is-active' : ''}
          type="button"
          aria-pressed={language === option}
          title={languageNames[option]}
          lang={option}
          onClick={() => setLanguage(option)}
          key={option}
        >
          {option.toUpperCase()}
        </button>
      ))}
    </div>
  )
}
