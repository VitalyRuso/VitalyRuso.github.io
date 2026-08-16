import { CheckCircle2, Eye, MousePointerClick, ShieldCheck, XCircle } from 'lucide-react'
import { useState } from 'react'
import { useI18n } from '../../i18n/context'
import { DemoBadge, DemoLog, DemoSteps, type DemoLogEntry } from './DemoUI'

type Stage = 'idle' | 'analyzed' | 'confirmed' | 'rejected'

export function ActionPilotDemo() {
  const { t } = useI18n()
  const a = t.demos.actionpilot
  const [stage, setStage] = useState<Stage>('idle')
  const analyzed = stage !== 'idle'
  const executed = stage === 'confirmed'
  const logs: DemoLogEntry[] = [{ time: '14:03', message: a.logConnected }]

  if (analyzed) logs.push(
    { time: '14:04', message: a.logAnalyzed },
    { time: '14:04', message: a.logControls },
    { time: '14:05', message: a.logProposed },
  )
  if (stage === 'confirmed') logs.push(
    { time: '14:05', message: a.logConfirmed },
    { time: '14:06', message: a.logExecuted },
  )
  if (stage === 'rejected') logs.push({ time: '14:05', message: a.logRejected })

  return (
    <div className="demo-product actionpilot-demo">
      <DemoSteps steps={a.flow} current={executed ? 4 : analyzed ? 2 : 0} />
      <div className="actionpilot-layout">
        <section className="sim-browser" aria-label={a.browserLabel}>
          <div className="sim-browser-bar">
            <span aria-hidden="true">‹</span><span aria-hidden="true">›</span>
            <p><ShieldCheck size={12} aria-hidden="true" /> madrid-dev-conf.test</p>
          </div>
          <div className="sim-page">
            <DemoBadge>{a.fictionalPage}</DemoBadge>
            <h3>{a.eventTitle}</h3>
            <p>{a.eventDescription}</p>
            <div className="sim-page-meta"><span>{a.date}</span><span>Madrid</span><span>{a.seats}</span></div>
            {executed ? (
              <div className="sim-form">
                <strong>{a.formOpened}</strong>
                <label>{a.attendeeName}<input value={a.sampleAttendee} readOnly /></label>
                <button type="button" disabled>{a.continueDemo}</button>
              </div>
            ) : (
              <div className="sim-page-actions"><button type="button">{a.viewSchedule}</button><button type="button">{a.register}</button></div>
            )}
          </div>
        </section>

        <section className="agent-panel">
          <div className="agent-panel-title"><Eye size={17} aria-hidden="true" /><div><span>ActionPilot</span><small>{a.agentSubtitle}</small></div></div>
          {!analyzed ? (
            <div className="agent-empty">
              <MousePointerClick size={25} aria-hidden="true" />
              <h3>{a.readyTitle}</h3>
              <p>{a.readyDescription}</p>
              <button className="demo-primary" type="button" onClick={() => setStage('analyzed')}>{a.analyzePage}</button>
            </div>
          ) : (
            <div className="agent-analysis">
              <div className="analysis-status"><CheckCircle2 size={16} aria-hidden="true" /><strong>{a.analysisComplete}</strong><DemoBadge tone="success">{a.lowRisk}</DemoBadge></div>
              <dl>
                <div><dt>{a.pageType}</dt><dd>{a.pageTypeValue}</dd></div>
                <div><dt>{a.detectedControls}</dt><dd>{a.detectedControlsValue}</dd></div>
                <div><dt>{a.availableActions}</dt><dd>{a.availableActionsValue}</dd></div>
                <div><dt>{a.riskLevel}</dt><dd>{a.riskLevelValue}</dd></div>
              </dl>
              <div className="proposal">
                <span>{a.proposedAction}</span>
                <strong>{a.proposalTitle}</strong>
                <p>{a.proposalDescription}</p>
              </div>
              {stage === 'analyzed' && (
                <div className="demo-action-row">
                  <button className="demo-primary" type="button" onClick={() => setStage('confirmed')}><CheckCircle2 size={15} /> {a.confirm}</button>
                  <button className="demo-secondary" type="button" onClick={() => setStage('rejected')}><XCircle size={15} /> {a.reject}</button>
                </div>
              )}
              {stage === 'confirmed' && <p className="demo-success"><CheckCircle2 size={16} /> {a.executed}</p>}
              {stage === 'rejected' && <p className="demo-rejected"><XCircle size={16} /> {a.rejected}</p>}
            </div>
          )}
        </section>
      </div>
      <DemoLog entries={logs} />
    </div>
  )
}
