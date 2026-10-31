import { useRef, useState, type FormEvent } from 'react'
import { Mail, Phone, Copy, Check, Send } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons'
import { Container, Section, SectionHeader } from '../components/ui'
import { Reveal } from '../components/Kinetic'
import LocalTime from '../components/LocalTime'

const EMAIL = 'lalithnivasy@gmail.com'
const PHONE = '+91 9390361183'

const channels = [
  { icon: <Mail size={16} strokeWidth={1.5} />, label: 'Email', handle: EMAIL, href: `mailto:${EMAIL}`, external: false },
  { icon: <LinkedinIcon size={16} />, label: 'LinkedIn', handle: 'lalith-nivas-yadlapalli', href: 'https://linkedin.com/in/lalith-nivas-yadlapalli-77531921a', external: true },
  { icon: <GithubIcon size={16} />, label: 'GitHub', handle: 'Lalith2363', href: 'https://github.com/Lalith2363', external: true },
  { icon: <Phone size={16} strokeWidth={1.5} />, label: 'Phone', handle: PHONE, href: 'tel:+919390361183', external: true },
] as const

const fieldClass =
  'w-full rounded-[var(--r-sm)] border border-[color:var(--line)] bg-[color:var(--bg-elev)] px-3.5 py-2.5 text-body text-[color:var(--ink)] outline-none transition-colors duration-200 placeholder:text-[color:var(--ink-faint)] focus:border-[color:var(--accent)]'

const labelClass = 'font-mono text-eyebrow uppercase tracking-[0.16em] text-[color:var(--ink-faint)]'

type FieldName = 'name' | 'email' | 'message'
type FieldErrors = Partial<Record<FieldName, string>>

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<FieldErrors>({})
  const [copied, setCopied] = useState(false)
  const [opened, setOpened] = useState(false)

  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const messageRef = useRef<HTMLTextAreaElement>(null)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  const validate = (data: typeof formData): FieldErrors => {
    const next: FieldErrors = {}
    if (!data.name.trim()) next.name = 'Please provide your name.'
    if (!data.email.trim()) {
      next.email = 'Please provide an email address.'
    } else if (!EMAIL_RE.test(data.email.trim())) {
      next.email = 'Please enter a valid email address.'
    }
    if (!data.message.trim()) next.message = 'Please include a short message.'
    return next
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const nextErrors = validate(formData)
    setErrors(nextErrors)

    if (nextErrors.name) {
      nameRef.current?.focus()
      return
    }
    if (nextErrors.email) {
      emailRef.current?.focus()
      return
    }
    if (nextErrors.message) {
      messageRef.current?.focus()
      return
    }

    const subject = encodeURIComponent(`Portfolio contact from ${formData.name.trim()}`)
    const body = encodeURIComponent(
      `From: ${formData.name.trim()} <${formData.email.trim()}>\n\nMessage:\n${formData.message.trim()}`,
    )
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
    setOpened(true)
  }

  return (
    <Section id="contact" aria-labelledby="contact-heading">
      <Container>
        <SectionHeader
          index="05"
          label="CONTACT"
          id="contact-heading"
          title={['Let’s build something ', <span className="serif-italic">secure.</span>]}
          lede="Actively open to cybersecurity, security analysis, AI/ML, and technical development opportunities."
        />

        <div className="mt-12 grid gap-10 md:grid-cols-12 md:gap-8">
          {/* Status & info */}
          <div className="md:col-span-5">
            <Reveal>
              <div className="rounded-[var(--r-md)] border border-[color:var(--line)] bg-[color:var(--bg-elev)] p-6">
                <div className="flex items-center gap-3">
                  <LocalTime />
                </div>

                <div className="mt-6 space-y-4">
                  <h3 className="font-display text-h3 font-semibold text-[color:var(--ink)]">
                    Yadlapalli Lalith Nivas
                  </h3>
                  <p className="text-body text-[color:var(--ink-muted)]">
                    M.Tech Cybersecurity student with hands-on expertise in threat detection, vulnerability analysis, and building machine learning defense tools.
                  </p>
                </div>

                <div className="mt-6 border-t border-[color:var(--line)] pt-6">
                  <h4 className={labelClass}>Direct channels</h4>
                  <ul className="mt-3 space-y-3">
                    {channels.map(c => (
                      <li key={c.label}>
                        <a
                          href={c.href}
                          target={c.external ? '_blank' : undefined}
                          rel={c.external ? 'noopener noreferrer' : undefined}
                          className="flex items-center justify-between rounded-[var(--r-sm)] p-2 text-body transition-colors duration-200 hover:bg-[color:var(--surface)] hover:text-[color:var(--accent)]"
                        >
                          <span className="flex items-center gap-2.5">
                            {c.icon}
                            <span className="font-medium text-[color:var(--ink)]">{c.label}</span>
                          </span>
                          <span className="font-mono text-eyebrow text-[color:var(--ink-faint)]">
                            {c.handle}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    onClick={copyEmail}
                    className="mt-4 flex w-full items-center justify-center gap-2 rounded-[var(--r-sm)] border border-[color:var(--line)] py-2 text-body-sm text-[color:var(--ink-muted)] transition-colors duration-200 hover:border-[color:var(--accent)] hover:text-[color:var(--ink)]"
                  >
                    {copied ? (
                      <>
                        <Check size={14} className="text-emerald-500" />
                        <span>Email address copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={14} />
                        <span>Copy email address</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <div className="md:col-span-7">
            <Reveal delay={0.08}>
              <form
                onSubmit={handleSubmit}
                noValidate
                className="rounded-[var(--r-md)] border border-[color:var(--line)] bg-[color:var(--bg-elev)] p-6 sm:p-8"
              >
                <h3 className="font-display text-h3 font-semibold text-[color:var(--ink)]">
                  Send a direct message
                </h3>
                <p className="mt-1 text-body-sm text-[color:var(--ink-muted)]">
                  Draft an email directly to <span className="font-mono text-[color:var(--ink)]">{EMAIL}</span>.
                </p>

                <div className="mt-6 space-y-4">
                  <div>
                    <label htmlFor="contact-name" className={labelClass}>
                      Your Name
                    </label>
                    <input
                      ref={nameRef}
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className={`${fieldClass} mt-1.5`}
                    />
                    {errors.name && <p className="mt-1 text-[0.8rem] text-rose-500">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="contact-email" className={labelClass}>
                      Your Email
                    </label>
                    <input
                      ref={emailRef}
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@example.com"
                      className={`${fieldClass} mt-1.5`}
                    />
                    {errors.email && <p className="mt-1 text-[0.8rem] text-rose-500">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="contact-message" className={labelClass}>
                      Message / Project Details
                    </label>
                    <textarea
                      ref={messageRef}
                      id="contact-message"
                      rows={5}
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Lalith, I’d like to discuss a role or collaboration on..."
                      className={`${fieldClass} mt-1.5 resize-none`}
                    />
                    {errors.message && <p className="mt-1 text-[0.8rem] text-rose-500">{errors.message}</p>}
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                  <button type="submit" className="btn-primary group">
                    <span>Draft Email</span>
                    <Send size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                  </button>

                  {opened && (
                    <span className="font-mono text-[0.8rem] text-emerald-500">
                      Email client opened!
                    </span>
                  )}
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  )
}
