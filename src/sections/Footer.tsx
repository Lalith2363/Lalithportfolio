import { GithubIcon, LinkedinIcon, MailIcon } from '../components/SocialIcons'
import { Container } from '../components/ui'
import LocalTime from '../components/LocalTime'
import { scrollToTop } from '../lib/smoothScroll'

const sitemap = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Projects' },
  { id: 'stack', label: 'Stack' },
  { id: 'process', label: 'Methodology' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
] as const

const connect = [
  { href: 'https://github.com/Lalith2363', icon: <GithubIcon size={16} />, label: 'GitHub · Lalith2363' },
  { href: 'https://linkedin.com/in/lalith-nivas-yadlapalli-77531921a', icon: <LinkedinIcon size={16} />, label: 'LinkedIn' },
  { href: 'mailto:lalithnivasy@gmail.com', icon: <MailIcon size={16} />, label: 'Email' },
] as const

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      aria-label="Site footer"
      className="relative z-[1] border-t border-[color:var(--line)] bg-[color:var(--bg-elev)] pb-10 pt-[clamp(3.5rem,7vw,6rem)]"
    >
      <Container>
        {/* ---- Signature ---- */}
        <button
          type="button"
          data-cursor="target"
          onClick={scrollToTop}
          aria-label="Lalith Nivas — back to top"
          className="group block w-full text-left font-display text-[clamp(2.5rem,6vw,5rem)] font-bold tracking-[-0.035em] text-[color:var(--ink)] transition-[transform,opacity] duration-200 ease-[var(--ease-out)] active:scale-[0.985] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--accent)]"
        >
          Lalith Nivas{' '}
          <span className="serif-italic text-[color:var(--ink)] transition-colors duration-200 group-hover:text-[color:var(--accent-strong)]">
            Yadlapalli
          </span>
          <span aria-hidden="true" className="serif-italic text-[color:var(--accent-strong)]">.</span>
        </button>

        <p className="mt-6 max-w-[60ch] text-body text-[color:var(--ink-muted)]">
          Cybersecurity &amp; AI Engineer. Developing predictive threat intelligence pipelines and defensive tooling.
        </p>

        <div className="mt-12 grid gap-10 border-t border-[color:var(--line)] pt-10 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <span className="font-mono text-eyebrow uppercase tracking-[0.16em] text-[color:var(--ink-faint)]">
              Status
            </span>
            <div className="mt-3">
              <LocalTime />
            </div>
            <p className="mt-2 text-body-sm text-[color:var(--ink-muted)]">
              Open to full-time cybersecurity &amp; ML roles
            </p>
          </div>

          <div>
            <span className="font-mono text-eyebrow uppercase tracking-[0.16em] text-[color:var(--ink-faint)]">
              Navigation
            </span>
            <ul className="mt-3 space-y-2 text-body-sm">
              {sitemap.map(link => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="text-[color:var(--ink-muted)] transition-colors duration-200 hover:text-[color:var(--accent)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="font-mono text-eyebrow uppercase tracking-[0.16em] text-[color:var(--ink-faint)]">
              Connect
            </span>
            <ul className="mt-3 space-y-2 text-body-sm">
              {connect.map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[color:var(--ink-muted)] transition-colors duration-200 hover:text-[color:var(--accent)]"
                  >
                    {link.icon}
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="font-mono text-eyebrow uppercase tracking-[0.16em] text-[color:var(--ink-faint)]">
              Contact
            </span>
            <p className="mt-3 text-body-sm text-[color:var(--ink-muted)]">
              <a href="mailto:lalithnivasy@gmail.com" className="hover:text-[color:var(--accent)]">
                lalithnivasy@gmail.com
              </a>
            </p>
            <p className="mt-1 text-body-sm text-[color:var(--ink-muted)]">
              +91 9390361183
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between border-t border-[color:var(--line)] pt-6 text-eyebrow text-[color:var(--ink-faint)] sm:flex-row">
          <span>&copy; {year} Yadlapalli Lalith Nivas. All rights reserved.</span>
          <span className="mt-2 sm:mt-0 font-mono">Secured &amp; Powered by React 19 + TypeScript</span>
        </div>
      </Container>
    </footer>
  )
}
