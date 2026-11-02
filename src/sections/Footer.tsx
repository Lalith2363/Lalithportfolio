import { Container } from '../components/ui'
import LocalTime from '../components/LocalTime'
import { scrollToTop } from '../lib/smoothScroll'

const links = [
  { id: 'hero', label: 'Home' },
  { id: 'work', label: 'Projects' },
  { id: 'stack', label: 'Stack' },
  { id: 'process', label: 'Methodology' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer aria-label="Site footer" className="py-12 bg-[color:var(--bg-elev)] border-t border-[color:var(--line)]">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <span className="text-base font-medium text-[color:var(--ink)]">
              Yadlapalli Lalith Nivas
            </span>
            <p className="text-xs text-[color:var(--ink-muted)] mt-1">
              Cybersecurity Engineer &amp; Applied AI Researcher
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs">
            {links.map(l => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className="text-[color:var(--ink-muted)] hover:text-[color:var(--accent)] transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-[color:var(--line)] pt-6 text-xs text-[color:var(--ink-faint)] sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <LocalTime />
            <span>&copy; {year} Lalith Nivas.</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Lalith2363"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[color:var(--ink)]"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/lalith-nivas-yadlapalli-77531921a"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[color:var(--ink)]"
            >
              LinkedIn
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              className="hover:text-[color:var(--ink)]"
            >
              Back to top &uarr;
            </button>
          </div>
        </div>
      </Container>
    </footer>
  )
}
