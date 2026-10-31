import { lazy, Suspense, useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, ArrowRight } from 'lucide-react'
import { GithubIcon, LinkedinIcon, MailIcon } from '../components/SocialIcons'
import LocalTime from '../components/LocalTime'
import { Container } from '../components/ui'
import { scrollToId } from '../lib/smoothScroll'

const HeroAmbient = lazy(() => import('../components/HeroAmbient'))

const ease = [0.23, 1, 0.32, 1] as const

const proof = [
  { value: '4+', label: 'security & AI internships' },
  { value: 'M.Tech', label: 'Cybersecurity research' },
  { value: '100%', label: 'hands-on Linux & ML focus' },
]

const socials = [
  { href: 'https://github.com/Lalith2363', icon: <GithubIcon size={16} />, label: 'GitHub' },
  { href: 'https://linkedin.com/in/lalith-nivas-yadlapalli-77531921a', icon: <LinkedinIcon size={16} />, label: 'LinkedIn' },
  { href: 'mailto:lalithnivasy@gmail.com', icon: <MailIcon size={16} />, label: 'Email' },
]

function useShaderEligible(): boolean {
  const reduceMotion = useReducedMotion()
  const [eligible, setEligible] = useState(false)
  useEffect(() => {
    if (reduceMotion || typeof window === 'undefined' || !window.matchMedia) return
    const check = () => {
      const capable = window.matchMedia('(min-width: 768px) and (hover: hover) and (pointer: fine)').matches
      const dark = document.documentElement.getAttribute('data-theme') === 'dark'
      const mem = (navigator as Navigator & { deviceMemory?: number }).deviceMemory
      const enoughRam = mem === undefined || mem >= 4
      setEligible(capable && dark && enoughRam)
    }
    check()
    const obs = new MutationObserver(check)
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })
    return () => obs.disconnect()
  }, [reduceMotion])
  return eligible
}

function CharReveal({ text, baseDelay = 0, italic = false }: { text: string; baseDelay?: number; italic?: boolean }) {
  return (
    <span className={italic ? 'serif-italic' : undefined}>
      {text.split('').map((c, i) => (
        <span key={`${c}-${i}`} className="char" style={{ animationDelay: `${baseDelay + 0.04 * i}s` }}>
          {c}
        </span>
      ))}
    </span>
  )
}

export default function Hero() {
  const shaderOn = useShaderEligible()
  const reduceMotion = useReducedMotion()
  const ref = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const atmoY = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])

  return (
    <section
      id="hero"
      ref={ref}
      aria-label="Introduction"
      className="relative isolate overflow-hidden"
      style={{ paddingTop: 'calc(var(--section-y-hero) + 1rem)', paddingBottom: 'var(--section-y-hero)' }}
    >
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:gap-14">
          {/* ---- Left: type ---- */}
          <div className="relative z-[1]">
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
              className="flex flex-wrap items-center gap-x-4 gap-y-2"
            >
              <LocalTime />
              <span className="inline-flex items-center gap-2 font-mono text-eyebrow uppercase tracking-[0.16em] text-[color:var(--ink-faint)]">
                <span aria-hidden="true" className="relative h-1.5 w-1.5 rounded-full bg-[color:var(--ok)] before:absolute before:inset-0 before:animate-pulse-ring before:rounded-full before:bg-[color:var(--ok)]" />
                Available for roles
              </span>
            </motion.div>

            <p className="mt-7 font-mono text-eyebrow uppercase tracking-[0.16em] text-[color:var(--ink-faint)]">
              M.Tech Cybersecurity · Threat Detection &amp; Applied AI · India
            </p>

            <h1
              aria-label="Yadlapalli Lalith Nivas — Cybersecurity Engineer & AI Researcher"
              className="hero-name mt-4 text-mega text-[color:var(--ink)]"
            >
              <span aria-hidden="true" className="block text-[clamp(2.5rem,5.5vw,4.5rem)] font-bold tracking-tight">
                <CharReveal text="Lalith Nivas" />
              </span>
              <span aria-hidden="true" className="block text-[clamp(2rem,4.5vw,3.8rem)] text-[color:var(--ink)]">
                <CharReveal text="Yadlapalli" baseDelay={0.28} italic />
                <span className="char serif-italic text-[color:var(--accent-strong)]" style={{ animationDelay: '0.6s' }}>.</span>
              </span>
            </h1>

            <p className="reveal-mask mt-6 block max-w-[60ch] text-lede text-[color:var(--ink-muted)]">
              <span style={{ animationDelay: '0.5s' }}>
                Bridging modern <span className="serif-italic text-[color:var(--ink)]">Cybersecurity</span> with{' '}
                <span className="serif-italic text-[color:var(--ink)]">Machine Learning</span>. From real-time
                network threat detection with Kali Linux &amp; Nmap to deep learning attack prediction pipelines
                and computer vision diagnostics.
              </span>
            </p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <a href="#work" data-cursor="target" onClick={(e: React.MouseEvent) => { e.preventDefault(); scrollToId('work') }} className="btn-primary group">
                Explore Projects
                <ArrowRight size={18} strokeWidth={1.5} aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1" />
              </a>
              <a href="#contact" data-cursor="target" onClick={(e: React.MouseEvent) => { e.preventDefault(); scrollToId('contact') }} className="btn-ghost">
                Contact Me
              </a>
            </motion.div>

            {/* Quick social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6, ease }}
              className="mt-6 flex items-center gap-3 text-[color:var(--ink-muted)]"
            >
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target={s.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={s.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  aria-label={s.label}
                  className="rounded-full border border-[color:var(--line)] p-2 transition-colors hover:border-[color:var(--accent)] hover:text-[color:var(--ink)]"
                >
                  {s.icon}
                </a>
              ))}
            </motion.div>

            {/* Proof strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.7, ease }}
              className="mt-12 border-t border-[color:var(--line)] pt-6"
            >
              <dl className="grid grid-cols-3 gap-6">
                {proof.map((item, i) => (
                  <div key={i} className="flex flex-col">
                    <dt className="font-mono text-eyebrow uppercase tracking-[0.16em] text-[color:var(--ink-faint)]">
                      {item.label}
                    </dt>
                    <dd className="mt-1 font-mono text-h3 font-semibold text-[color:var(--ink)]">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </motion.div>
          </div>

          {/* ---- Right: Atmosphere / visual ---- */}
          <div className="relative aspect-square max-h-[540px] w-full lg:max-h-none">
            <motion.div
              style={{ y: atmoY }}
              className="relative h-full w-full overflow-hidden rounded-[var(--r-xl)] border border-[color:var(--line-strong)] bg-gradient-to-br from-[color:var(--bg-elev)] via-[color:var(--surface)] to-[color:var(--bg-elev)] p-8 shadow-[var(--shadow-md)]"
            >
              {shaderOn && !reduceMotion && (
                <Suspense fallback={null}>
                  <HeroAmbient />
                </Suspense>
              )}

              {/* Tactical Terminal / Security Card Graphic */}
              <div className="relative z-10 flex h-full flex-col justify-between font-mono text-[0.8rem]">
                <div className="flex items-center justify-between border-b border-[color:var(--line)] pb-4 text-[color:var(--ink-faint)]">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 text-[0.7rem] uppercase tracking-widest text-[color:var(--ink-muted)]">sec-ops // bash</span>
                  </div>
                  <span className="text-[0.7rem] text-[color:var(--accent-strong)]">SEC_AI_ACTIVE</span>
                </div>

                <div className="my-auto space-y-3 py-4 text-[color:var(--ink-muted)]">
                  <div className="text-[color:var(--ink-faint)]">$ ./detect_threats.py --interface eth0 --model cnn_lstm</div>
                  <div className="text-[color:var(--accent)]">&gt; Ingesting network telemetry stream...</div>
                  <div>[+] Nmap Discovery: active subnet scan completed</div>
                  <div>[+] Packet Inspection: Wireshark PCAP parser armed</div>
                  <div>[+] Anomaly Classifier: Deep Learning multi-head online</div>
                  <div className="text-emerald-500">[OK] Attack prediction: 0 critical vulnerabilities unmitigated</div>
                </div>

                <div className="border-t border-[color:var(--line)] pt-4">
                  <div className="flex items-center justify-between text-eyebrow text-[color:var(--ink-faint)]">
                    <span>STATUS: ACTIVE_DEFENSE</span>
                    <span>ENV: KALI_LINUX_X64</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll cue */}
        <motion.a
          href="#about"
          data-cursor="target"
          onClick={(e: React.MouseEvent) => { e.preventDefault(); scrollToId('about') }}
          aria-label="Scroll down"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1, ease }}
          className="group mt-14 inline-flex items-center gap-2 font-mono text-eyebrow uppercase tracking-[0.18em] text-[color:var(--ink-faint)]"
        >
          <span>Scroll</span>
          <span aria-hidden="true" className="grid h-7 w-7 place-items-center rounded-full border border-[color:var(--line-strong)] transition-colors duration-200 group-hover:border-[color:var(--accent)] group-hover:text-[color:var(--accent-strong)]">
            <ArrowDown size={12} strokeWidth={1.5} />
          </span>
        </motion.a>
      </Container>
    </section>
  )
}
