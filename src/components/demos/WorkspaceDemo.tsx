import { CheckCircle2, ChevronRight, FolderGit2, Play, ShieldCheck, XCircle } from 'lucide-react'
import { useEffect, useState } from 'react'
import { workspaceProjects } from '../../data/demoData'
import { useI18n } from '../../i18n/context'
import { DemoBadge, DemoLog, DemoSteps, type DemoLogEntry } from './DemoUI'

export function WorkspaceDemo() {
  const { t } = useI18n()
  const w = t.demos.workspace
  const [project, setProject] = useState<(typeof workspaceProjects)[number]>('ActionPilot')
  const [task, setTask] = useState<string>(w.tasks[0])
  const [step, setStep] = useState(-1)
  const [cancelled, setCancelled] = useState(false)

  useEffect(() => {
    if ((step >= 0 && step < 3) || step === 4) {
      const timer = window.setTimeout(() => setStep((current) => current + 1), step === 4 ? 650 : 420)
      return () => window.clearTimeout(timer)
    }
  }, [step])

  const run = () => {
    setCancelled(false)
    setStep(0)
  }

  const visibleStages = step < 0 ? [] : w.stages.slice(0, step + 1)
  const stageTimes = ['09:40', '09:41', '09:42', '09:43', '09:44', '09:45']
  const logs: DemoLogEntry[] = [
    { time: '09:39', message: `${w.logReady} · ${project}` },
    ...visibleStages.map((stage, index) => ({
      time: stageTimes[index],
      message: `${stage}${index === 3 ? ` · ${w.logPaused}` : ''}`,
    })),
  ]
  if (cancelled) logs.push({ time: '09:44', message: w.logCancelled })

  return (
    <div className="demo-product workspace-demo">
      <DemoSteps steps={w.stages} current={step < 0 ? 0 : step === 5 ? 6 : step} />
      <div className="workspace-layout">
        <aside className="workspace-sidebar">
          <p>{w.projects}</p>
          {workspaceProjects.map((name) => (
            <button className={project === name ? 'is-selected' : ''} type="button" key={name} onClick={() => setProject(name)}>
              <FolderGit2 size={15} aria-hidden="true" /> {name}<ChevronRight size={13} aria-hidden="true" />
            </button>
          ))}
          <div className="workspace-local"><ShieldCheck size={14} /><span>{w.localWorkspace}<strong>{w.controlledExecution}</strong></span></div>
        </aside>

        <section className="workspace-main">
          <div className="workspace-heading"><div><span>{w.activeProject}</span><h3>{project}</h3></div><DemoBadge tone="success">{w.localFirst}</DemoBadge></div>
          <label className="demo-field">{w.task}
            <input value={task} onChange={(event) => setTask(event.target.value)} placeholder={w.placeholder} />
          </label>
          <div className="quick-tasks" aria-label={w.exampleTasks}>
            {w.tasks.map((item) => <button type="button" onClick={() => setTask(item)} key={item}>{item}</button>)}
          </div>
          <button className="demo-primary run-task" type="button" onClick={run} disabled={!task.trim() || (step >= 0 && step < 5 && !cancelled)}>
            <Play size={15} fill="currentColor" /> {step === 5 || cancelled ? w.runAgain : w.runTask}
          </button>

          {step >= 3 && (
            <div className="operation-proposal">
              <div>
                <span>{w.proposedOperation}</span>
                <strong>{w.proposalTitle}</strong>
                <p>{w.filesAffected} · {w.risk}</p>
                <p>{w.noWrite}</p>
              </div>
              {step === 3 && !cancelled && (
                <div className="demo-action-row">
                  <button className="demo-primary" type="button" onClick={() => setStep(4)}><CheckCircle2 size={15} /> {w.approve}</button>
                  <button className="demo-secondary" type="button" onClick={() => setCancelled(true)}><XCircle size={15} /> {w.cancel}</button>
                </div>
              )}
              {step === 5 && <p className="demo-success"><CheckCircle2 size={16} /> {w.completed}</p>}
              {cancelled && <p className="demo-rejected"><XCircle size={16} /> {w.cancelled}</p>}
            </div>
          )}
        </section>
      </div>
      <DemoLog entries={logs} />
    </div>
  )
}
