import type { ReactNode } from 'react'
import { useI18n } from '../../i18n/context'

export function DemoBadge({ children, tone = 'neutral' }: { children: ReactNode; tone?: 'neutral' | 'success' | 'warning' }) {
  return <span className={`demo-badge demo-badge-${tone}`}>{children}</span>
}

export function DemoSteps({ steps, current }: { steps: readonly string[]; current: number }) {
  const { t } = useI18n()
  return (
    <ol className="demo-steps" aria-label={t.common.workflowProgress}>
      {steps.map((step, index) => (
        <li className={index < current ? 'is-complete' : index === current ? 'is-active' : ''} key={step}>
          <span>{index < current ? '✓' : index + 1}</span>
          <p>{step}</p>
        </li>
      ))}
    </ol>
  )
}

export type DemoLogEntry = { time: string; message: string }

export function DemoLog({ entries }: { entries: DemoLogEntry[] }) {
  const { t } = useI18n()
  return (
    <div className="demo-log" aria-live="polite">
      <div className="demo-log-title"><span /> {t.common.activityLog}</div>
      <ul>
        {entries.map((entry, index) => (
          <li key={`${entry.time}-${entry.message}-${index}`}><span>{entry.time}</span>{entry.message}</li>
        ))}
      </ul>
    </div>
  )
}
