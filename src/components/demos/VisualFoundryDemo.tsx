import { Box, CheckCircle2, Image, Sparkles } from 'lucide-react'
import { useEffect, useState } from 'react'
import { foundryPresets, foundryStages, foundryStyles } from '../../data/demoData'
import { DemoBadge, DemoSteps } from './DemoUI'

type FoundryMode = '2D' | '3D concept'

export function VisualFoundryDemo() {
  const [prompt, setPrompt] = useState<string>(foundryPresets[0])
  const [mode, setMode] = useState<FoundryMode>('3D concept')
  const [style, setStyle] = useState<(typeof foundryStyles)[number]>('Product concept')
  const [step, setStep] = useState(-1)

  useEffect(() => {
    if (step >= 0 && step < 3) {
      const timer = window.setTimeout(() => setStep((current) => current + 1), 430)
      return () => window.clearTimeout(timer)
    }
  }, [step])

  const generate = () => setStep(0)
  const isGenerating = step >= 0 && step < 3

  return (
    <div className="demo-product foundry-demo">
      <DemoSteps steps={foundryStages} current={step === 3 ? 4 : Math.max(step, 0)} />
      <div className="foundry-layout">
        <section className="foundry-controls">
          <div className="foundry-panel-title"><Sparkles size={17} /><div><span>Visual Foundry</span><small>Local workflow simulator</small></div></div>
          <label className="demo-field">Prompt
            <textarea value={prompt} onChange={(event) => setPrompt(event.target.value)} rows={3} />
          </label>
          <div className="foundry-presets">
            <span>Presets</span>
            {foundryPresets.map((preset) => <button type="button" onClick={() => setPrompt(preset)} key={preset}>{preset}</button>)}
          </div>
          <fieldset><legend>Mode</legend><div className="segmented-control">
            {(['2D', '3D concept'] as const).map((item) => <button className={mode === item ? 'is-selected' : ''} type="button" onClick={() => setMode(item)} key={item}>{item === '2D' ? <Image size={14} /> : <Box size={14} />}{item}</button>)}
          </div></fieldset>
          <label className="demo-field">Style
            <select value={style} onChange={(event) => setStyle(event.target.value as (typeof foundryStyles)[number])}>
              {foundryStyles.map((item) => <option value={item} key={item}>{item}</option>)}
            </select>
          </label>
          <button className="demo-primary foundry-generate" type="button" onClick={generate} disabled={!prompt.trim() || isGenerating}>
            <Sparkles size={15} /> {isGenerating ? foundryStages[step] : step === 3 ? 'Generate again' : 'Generate concept'}
          </button>
          <p className="local-note">Prompt stays in this browser. No image API is called.</p>
        </section>

        <section className={`foundry-output mode-${mode === '2D' ? '2d' : '3d'} style-${style.toLowerCase().replace(' ', '-')}`} aria-live="polite">
          {step < 0 ? (
            <div className="foundry-empty"><Sparkles size={30} /><h3>Ready to create</h3><p>Choose a prompt, mode and style to simulate the generative workflow.</p></div>
          ) : step < 3 ? (
            <div className="foundry-loading"><span><i /></span><h3>{foundryStages[step]} stage</h3><p>Building a deterministic local preview…</p></div>
          ) : (
            <>
              <div className="concept-canvas" aria-label={`Generated ${mode} preview for ${prompt}`}>
                <div className="concept-grid" />
                <div className="concept-object"><i /><i /><i /><span /></div>
                <div className="concept-axis"><span>X</span><span>Y</span><span>Z</span></div>
                <DemoBadge tone="success"><CheckCircle2 size={12} /> Output ready</DemoBadge>
              </div>
              <div className="output-meta"><div><span>Prompt</span><strong>{prompt}</strong></div><div><span>Mode</span><strong>{mode}</strong></div><div><span>Style</span><strong>{style}</strong></div></div>
            </>
          )}
        </section>
      </div>
    </div>
  )
}
