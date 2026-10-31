import { MapPin } from 'lucide-react'
import { experience, education, certifications } from '../data/resume'
import { Container, Section, SectionHeader } from '../components/ui'
import { Reveal } from '../components/Kinetic'

export default function Experience() {
  return (
    <Section id="experience" aria-labelledby="experience-heading">
      <Container>
        <SectionHeader
          index="04"
          label="EXPERIENCE"
          id="experience-heading"
          title={['Industry & ', <span className="serif-italic">research experience.</span>]}
          lede="Hands-on internships and practical technical engagements across cybersecurity, machine learning, and software development."
        />

        <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-12 lg:gap-x-14 lg:gap-y-0">
          {/* ---- Role timeline ---- */}
          <div className="lg:col-span-8">
            <ol className="relative">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute left-3 top-2 bottom-2 w-px -translate-x-1/2 bg-[color:var(--line-strong)]"
              />
              {experience.map((exp, i) => (
                <li
                  key={`${exp.company}-${exp.period}`}
                  className="relative grid grid-cols-[1.5rem_1fr] gap-x-4 pb-10 last:pb-0 sm:gap-x-6"
                >
                  <span aria-hidden="true" className="relative">
                    <span className="absolute left-3 top-7 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-[color:var(--bg)] bg-[color:var(--accent)] shadow-[var(--shadow-glow)]" />
                  </span>

                  <Reveal delay={Math.min(i * 0.06, 0.24)}>
                    <div className="rounded-[var(--r-md)] border border-[color:var(--line)] bg-[color:var(--bg-elev)] p-6 transition-all duration-200 hover:border-[color:var(--line-strong)]">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h3 className="font-display text-h3 font-semibold text-[color:var(--ink)]">
                          {exp.role}
                        </h3>
                        <span className="font-mono text-eyebrow text-[color:var(--ink-faint)]">
                          {exp.period}
                        </span>
                      </div>

                      <div className="mt-1 flex flex-wrap items-center gap-3 text-body-sm text-[color:var(--ink-muted)]">
                        <span className="font-medium text-[color:var(--ink)]">{exp.company}</span>
                        <span>·</span>
                        <span className="inline-flex items-center gap-1 font-mono text-[0.76rem]">
                          <MapPin size={12} aria-hidden="true" />
                          {exp.location}
                        </span>
                      </div>

                      <ul className="mt-4 space-y-2 border-t border-[color:var(--line)] pt-4 text-body text-[color:var(--ink-muted)]">
                        {exp.bullets.map((b, bi) => (
                          <li key={bi} className="flex items-start gap-2">
                            <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[color:var(--accent)]" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>

          {/* ---- Education & Certifications ---- */}
          <div className="space-y-10 lg:col-span-4">
            <div>
              <Reveal>
                <h3 className="font-display text-h3 font-semibold text-[color:var(--ink)]">
                  Education
                </h3>
              </Reveal>

              <div className="mt-5 space-y-4">
                {education.map((edu, i) => (
                  <Reveal key={edu.degree} delay={i * 0.08}>
                    <div className="rounded-[var(--r-md)] border border-[color:var(--line)] bg-[color:var(--bg-elev)] p-5">
                      <h4 className="font-display font-medium text-[color:var(--ink)]">
                        {edu.degree}
                      </h4>
                      <p className="mt-1 text-body-sm text-[color:var(--ink-muted)]">
                        {edu.institution}
                      </p>
                      <p className="mt-2 font-mono text-eyebrow text-[color:var(--ink-faint)]">
                        {edu.period}
                      </p>
                      {edu.note && (
                        <p className="mt-2 border-t border-[color:var(--line)] pt-2 text-[0.8rem] text-[color:var(--ink-muted)]">
                          {edu.note}
                        </p>
                      )}
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <div>
              <Reveal>
                <h3 className="font-display text-h3 font-semibold text-[color:var(--ink)]">
                  Certifications
                </h3>
              </Reveal>

              <div className="mt-5 space-y-4">
                {certifications.map((cert, i) => (
                  <Reveal key={cert.name} delay={i * 0.08}>
                    <div className="rounded-[var(--r-md)] border border-[color:var(--line)] bg-[color:var(--bg-elev)] p-5">
                      <h4 className="font-display font-medium text-[color:var(--ink)]">
                        {cert.name}
                      </h4>
                      <p className="mt-1 text-body-sm text-[color:var(--ink-muted)]">
                        {cert.issuer}
                      </p>
                      <p className="mt-2 font-mono text-eyebrow text-[color:var(--ink-faint)]">
                        {cert.year}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
