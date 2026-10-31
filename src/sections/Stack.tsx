import { skills } from '../data/resume'
import { Container, Section, SectionHeader } from '../components/ui'
import { Reveal } from '../components/Kinetic'

const layers: { category: string; label: string }[] = [
  { category: 'Security', label: 'Security & Penetration Testing' },
  { category: 'AI', label: 'Machine Learning & Deep Learning' },
  { category: 'Networking', label: 'Networking & Systems' },
  { category: 'Core', label: 'Core Languages' },
  { category: 'Web', label: 'Web & Development' },
]

export default function Stack() {
  return (
    <Section id="stack" aria-labelledby="stack-heading">
      <Container>
        <SectionHeader
          index="02"
          label="STACK"
          title={['Tools & ', <span key="tech" className="serif-italic">technologies.</span>]}
          lede="Hands-on security tools, machine learning frameworks, and core engineering languages applied across research and industry work."
          id="stack-heading"
        />

        <div className="mt-12 sm:mt-16">
          {layers.map((layer, i) => {
            const items = skills.filter(s => s.category === layer.category)
            if (items.length === 0) return null

            return (
              <Reveal
                key={layer.category}
                as="div"
                delay={i * 0.06}
                className="group border-t border-[color:var(--line)] py-8 first:border-t-0 sm:py-10"
              >
                <div className="grid gap-6 md:grid-cols-[260px_1fr] md:gap-12 lg:grid-cols-[300px_1fr]">
                  <div>
                    <h3 className="font-display text-h3 font-semibold text-[color:var(--ink)]">
                      {layer.label}
                    </h3>
                  </div>

                  <ul className="flex flex-wrap gap-2.5 sm:gap-3">
                    {items.map(item => (
                      <li
                        key={item.name}
                        className="chip rounded-full border border-[color:var(--line)] bg-[color:var(--bg-elev)] px-4 py-2 font-mono text-[0.82rem] text-[color:var(--ink-muted)] transition-all duration-200 hover:border-[color:var(--accent)] hover:text-[color:var(--ink)] hover:shadow-sm"
                      >
                        {item.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
