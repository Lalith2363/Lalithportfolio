import { MapPin } from 'lucide-react'
import { experience, education, certifications } from '../data/resume'
import { Container } from '../components/ui'

export default function Experience() {
  return (
    <section id="experience" aria-label="Experience & Education" className="py-16 md:py-20 border-b border-[color:var(--line)]">
      <Container>
        <span className="font-mono text-xs uppercase tracking-widest text-[color:var(--accent)]">
          04 / Background
        </span>
        <h2 className="mt-2 text-2xl font-medium tracking-tight text-[color:var(--ink)] sm:text-3xl">
          Experience &amp; Education
        </h2>

        <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Work timeline */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-sm font-mono uppercase tracking-wider text-[color:var(--ink-faint)]">
              Internships &amp; Roles
            </h3>

            <div className="space-y-6">
              {experience.map(exp => (
                <div
                  key={`${exp.company}-${exp.period}`}
                  className="rounded-xl border border-[color:var(--line)] bg-[color:var(--bg-elev)] p-5"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h4 className="text-base font-medium text-[color:var(--ink)]">
                      {exp.role}
                    </h4>
                    <span className="font-mono text-xs text-[color:var(--ink-faint)]">
                      {exp.period}
                    </span>
                  </div>

                  <div className="mt-1 flex items-center gap-2 text-xs text-[color:var(--ink-muted)]">
                    <span className="font-medium text-[color:var(--ink)]">{exp.company}</span>
                    <span>·</span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin size={11} />
                      {exp.location}
                    </span>
                  </div>

                  <ul className="mt-3 space-y-1.5 border-t border-[color:var(--line)] pt-3 text-xs leading-relaxed text-[color:var(--ink-muted)]">
                    {exp.bullets.map((b, bi) => (
                      <li key={bi} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-[color:var(--accent)]" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certs */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h3 className="text-sm font-mono uppercase tracking-wider text-[color:var(--ink-faint)]">
                Education
              </h3>
              {education.map(edu => (
                <div
                  key={edu.degree}
                  className="rounded-xl border border-[color:var(--line)] bg-[color:var(--bg-elev)] p-5"
                >
                  <h4 className="text-sm font-medium text-[color:var(--ink)]">
                    {edu.degree}
                  </h4>
                  <p className="mt-1 text-xs text-[color:var(--ink-muted)]">
                    {edu.institution}
                  </p>
                  <p className="mt-1 font-mono text-[0.7rem] text-[color:var(--ink-faint)]">
                    {edu.period}
                  </p>
                  {edu.note && (
                    <p className="mt-2 text-xs text-[color:var(--ink-faint)] border-t border-[color:var(--line)] pt-2">
                      {edu.note}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-mono uppercase tracking-wider text-[color:var(--ink-faint)]">
                Certifications
              </h3>
              {certifications.map(cert => (
                <div
                  key={cert.name}
                  className="rounded-xl border border-[color:var(--line)] bg-[color:var(--bg-elev)] p-5"
                >
                  <h4 className="text-sm font-medium text-[color:var(--ink)]">
                    {cert.name}
                  </h4>
                  <p className="mt-1 text-xs text-[color:var(--ink-muted)]">
                    {cert.issuer}
                  </p>
                  <p className="mt-1 font-mono text-[0.7rem] text-[color:var(--ink-faint)]">
                    {cert.year}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
