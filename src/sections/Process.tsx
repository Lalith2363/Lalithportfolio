import { Container } from '../components/ui'
import { processSteps } from '../data/process'

export default function Process() {
  return (
    <section id="process" aria-label="Methodology" className="py-16 md:py-20 border-b border-[color:var(--line)]">
      <Container>
        <span className="font-mono text-xs uppercase tracking-widest text-[color:var(--accent)]">
          03 / Methodology
        </span>
        <h2 className="mt-2 text-2xl font-medium tracking-tight text-[color:var(--ink)] sm:text-3xl">
          Security &amp; Engineering Process
        </h2>
        <p className="mt-2 text-sm text-[color:var(--ink-muted)] max-w-xl">
          Structured security analysis lifecycle from active reconnaissance to defense verification.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {processSteps.map(step => (
            <div
              key={step.id}
              className="rounded-xl border border-[color:var(--line)] bg-[color:var(--bg-elev)] p-5 flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs font-semibold text-[color:var(--accent)]">
                  {step.index}
                </span>
                <h3 className="mt-2 text-base font-medium text-[color:var(--ink)]">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[color:var(--ink-muted)]">
                  {step.body}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[color:var(--line)] space-y-1">
                {step.artifacts.map((a, i) => (
                  <div key={i} className="text-[0.7rem] font-mono text-[color:var(--ink-faint)]">
                    • {a}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
