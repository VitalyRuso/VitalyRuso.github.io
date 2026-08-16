import { RotateCcw, ShieldCheck, X } from 'lucide-react'
import { useEffect, useRef, type MouseEvent, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { useI18n } from '../../i18n/context'

type DemoShellProps = {
  title: string
  onClose: () => void
  onReset: () => void
  children: ReactNode
}

export function DemoShell({ title, onClose, onReset, children }: DemoShellProps) {
  const { t } = useI18n()
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const previousFocus = document.activeElement as HTMLElement | null
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
        return
      }

      if (event.key !== 'Tab' || !dialogRef.current) return
      const focusable = [...dialogRef.current.querySelectorAll<HTMLElement>('button:not(:disabled), input, select, summary, [href]')]
      const first = focusable[0]
      const last = focusable.at(-1)
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last?.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first?.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow
      previousFocus?.focus()
    }
  }, [onClose])

  const closeFromBackdrop = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) onClose()
  }

  return createPortal(
    <div className="demo-backdrop" onMouseDown={closeFromBackdrop}>
      <div className="demo-dialog" role="dialog" aria-modal="true" aria-labelledby="demo-title" ref={dialogRef}>
        <header className="demo-dialog-header">
          <div className="demo-dialog-heading">
            <span className="demo-window-dots" aria-hidden="true"><i /><i /><i /></span>
            <div>
              <h2 id="demo-title">{title}</h2>
              <p><ShieldCheck size={13} aria-hidden="true" /> {t.common.interactiveDemoLabel}</p>
            </div>
          </div>
          <div className="demo-dialog-actions">
            <button type="button" onClick={onReset}><RotateCcw size={15} aria-hidden="true" /> {t.common.resetDemo}</button>
            <button className="demo-close" type="button" onClick={onClose} ref={closeRef} aria-label={t.common.closeDemo}>
              <X size={19} aria-hidden="true" />
            </button>
          </div>
        </header>
        <div className="demo-dialog-body">{children}</div>
      </div>
    </div>,
    document.body,
  )
}
