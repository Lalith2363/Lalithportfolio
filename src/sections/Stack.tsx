import { Container } from '../components/ui'
import { skills } from '../data/resume'

const layers: { category: string; label: string }[] = [
  { category: 'Security', label: 'Security & Penetration Testing' },
  { category: 'AI', label: 'Machine Learning & Deep Learning' },
  { category: 'Networking', label: 'Networking & Systems' },
  { category: 'Core', label: 'Core Languages' },
  { category: 'Web', label: 'Web & Tools' },
]

export default function Stack() {
  return (
    <section id="stack" aria-label="Skills & Stack" className="py-16 md:py-20 border-b border-[color:var(--line)]">
      <Container>
        <span className="font-mono text-xs uppercase tracking-widest text-[color:var(--accent)]">
          02 / Technical Skills
        </span>
        <h2 className="mt-2 text-2xl font-medium tracking-tight text-[color:var(--ink)] sm:text-3xl">
          Stack &amp; Capabilities
        </h2>
        <p className="mt-2 text-sm text-[color:var(--ink-muted)] max-w-xl">
          Core toolsets and frameworks used across threat detection, vulnerability analysis, and machine learning research.
        </p>

        <div className="mt-10 divide-y divide-[color:var(--line)]">
          {layers.map(layer => {
            const items = skills.filter(s => s.category === layer.category)
            if (items.length === 0) return null

            return (
              <div key={layer.category} className="py-6 first:pt-0 last:pb-0 grid gap-4 sm:grid-cols-[220px_1fr]">
                <h3 className="text-sm font-medium text-[color:var(--ink)]">
                  {layer.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map(s => (
                    <span
                      key={s.name}
                      className="rounded border border-[color:var(--line)] bg-[color:var(--bg-elev)] px-2.5 py-1 text-xs font-mono text-[color:var(--ink-muted)] hover:border-[color:var(--accent)] hover:text-[color:var(--ink)] transition-colors"
                    >
                      {s.name}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
