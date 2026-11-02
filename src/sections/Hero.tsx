import { ArrowRight } from 'lucide-react'
import { GithubIcon, LinkedinIcon, MailIcon } from '../components/SocialIcons'
import LocalTime from '../components/LocalTime'
import { Container } from '../components/ui'
import { scrollToId } from '../lib/smoothScroll'

const proof = [
  { value: '4+', label: 'Internships' },
  { value: 'M.Tech', label: 'Cybersecurity' },
  { value: 'Cybersecurity & ML', label: 'Core Specialization' },
]

const socials = [
  { href: 'https://github.com/Lalith2363', icon: <GithubIcon size={16} />, label: 'GitHub' },
  { href: 'https://linkedin.com/in/lalith-nivas-yadlapalli-77531921a', icon: <LinkedinIcon size={16} />, label: 'LinkedIn' },
  { href: 'mailto:lalithnivasy@gmail.com', icon: <MailIcon size={16} />, label: 'Email' },
]

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative pt-24 pb-16 md:pt-32 md:pb-20 border-b border-[color:var(--line)]"
    >
      <Container>
        <div className="max-w-3xl">
          {/* Status badge */}
          <div className="flex flex-wrap items-center gap-3">
            <LocalTime />
            <span className="inline-flex items-center gap-1.5 font-mono text-[0.72rem] text-[color:var(--ink-faint)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
              Available for roles
            </span>
          </div>

          <h1 className="mt-6 text-3xl font-medium tracking-tight text-[color:var(--ink)] sm:text-4xl md:text-5xl">
            Lalith Nivas Yadlapalli
          </h1>

          <p className="mt-2 text-base font-medium text-[color:var(--accent)] sm:text-lg">
            Cybersecurity Engineer &amp; Applied AI Researcher
          </p>

          <p className="mt-5 text-base leading-relaxed text-[color:var(--ink-muted)] sm:text-lg sm:leading-relaxed">
            M.Tech Cybersecurity researcher specializing in automated threat detection, network vulnerability assessment,
            and machine learning defense pipelines. Focused on practical security tools built with Kali Linux, Python, and TensorFlow.
          </p>

          {/* Action buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              onClick={(e: React.MouseEvent) => {
                e.preventDefault()
                scrollToId('work')
              }}
              className="btn-primary"
            >
              View Projects
              <ArrowRight size={15} />
            </a>
            <a
              href="#contact"
              onClick={(e: React.MouseEvent) => {
                e.preventDefault()
                scrollToId('contact')
              }}
              className="btn-ghost"
            >
              Contact Me
            </a>
          </div>

          {/* Social icons & stat strip */}
          <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between border-t border-[color:var(--line)] pt-6">
            <div className="flex items-center gap-3">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target={s.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={s.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  aria-label={s.label}
                  className="rounded-lg border border-[color:var(--line)] p-2 text-[color:var(--ink-muted)] hover:border-[color:var(--accent)] hover:text-[color:var(--ink)] transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-6 font-mono text-xs">
              {proof.map((p, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="font-semibold text-[color:var(--ink)]">{p.value}</span>
                  <span className="text-[color:var(--ink-faint)]">{p.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
