import { BookOpen, CheckCircle2, Database, FileText, Search } from 'lucide-react'
import { useState } from 'react'
import { useI18n } from '../../i18n/context'
import { DemoBadge, DemoSteps } from './DemoUI'

export function SpainHelperDemo() {
  const { t } = useI18n()
  const s = t.demos.spain
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const result = selectedIndex === null ? null : s.answers[selectedIndex]

  return (
    <div className="demo-product spain-demo">
      <div className="spain-demo-header">
        <div className="spain-mark"><span>ES</span><Search size={16} /></div>
        <div><h3>Spain Helper</h3><p>{s.subtitle}</p></div>
        <DemoBadge>{s.demoContent}</DemoBadge>
      </div>
      <DemoSteps steps={s.pipeline} current={result ? 4 : 0} />
      <div className="spain-layout">
        <aside className="sample-questions">
          <span>{s.tryQuestion}</span>
          {s.answers.map((item, index) => (
            <button className={selectedIndex === index ? 'is-selected' : ''} type="button" key={item.question} onClick={() => setSelectedIndex(index)}>
              <Search size={14} aria-hidden="true" /> {item.question}
            </button>
          ))}
          <p>{s.disclaimer}</p>
        </aside>

        <section className="rag-result" aria-live="polite">
          {!result ? (
            <div className="rag-empty"><BookOpen size={28} /><h3>{s.emptyTitle}</h3><p>{s.emptyDescription}</p></div>
          ) : (
            <>
              <div className="rag-query"><span>{s.question}</span><h3>{result.question}</h3></div>
              <div className="retrieved-docs">
                <div className="retrieved-title"><span><Database size={14} /> {s.retrievedContext}</span><DemoBadge tone="success">{result.documents.length} {s.matches}</DemoBadge></div>
                <div className="document-grid">
                  {result.documents.map((document, index) => (
                    <article key={document.title}>
                      <FileText size={16} aria-hidden="true" />
                      <div><span>0{index + 1} · {document.type}</span><h4>{document.title}</h4></div>
                    </article>
                  ))}
                </div>
                <details>
                  <summary>{s.expandContext}</summary>
                  {result.documents.map((document) => <p key={document.title}><strong>{document.title}:</strong> {document.excerpt}</p>)}
                </details>
              </div>
              <div className="grounded-answer"><span><CheckCircle2 size={14} /> {s.groundedAnswer}</span><p>{result.answer}</p></div>
            </>
          )}
        </section>
      </div>
      <div className="architecture-strip"><span>{s.websiteDemo}</span><i />{s.architecture}</div>
    </div>
  )
}
