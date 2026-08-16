import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useI18n } from '../i18n/context'
import { LanguageSwitcher } from './LanguageSwitcher'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useI18n()
  const navigation = [
    { label: t.nav.projects, href: '#projects' },
    { label: t.nav.skills, href: '#skills' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.background, href: '#education' },
    { label: t.nav.contact, href: '#contact' },
  ]

  useEffect(() => {
    if (!isOpen) return

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false)
    }

    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [isOpen])

  return (
    <header className="site-header">
      <div className="nav-shell">
        <a className="brand" href="#top" aria-label={t.common.backToTopLabel}>
          <span>VS</span><i aria-hidden="true">.</i>
        </a>

        <nav className={isOpen ? 'nav-links is-open' : 'nav-links'} aria-label={t.common.mainNavigation}>
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
              {item.label}
            </a>
          ))}
          <LanguageSwitcher />
        </nav>

        <button
          className="menu-button"
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          aria-label={isOpen ? t.common.closeNavigation : t.common.openNavigation}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
    </header>
  )
}
