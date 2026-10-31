import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon, Menu, X, Search } from 'lucide-react'
import { useWindowSize } from '../hooks/useWindowSize'
import { useModalA11y } from '../hooks/useModalA11y'
import { scrollToId, scrollToTop } from '../lib/smoothScroll'

interface NavbarProps {
  theme: 'dark' | 'light'
  onToggleTheme: (e?: React.MouseEvent) => void
  onOpenPalette: () => void
}

const links = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Projects' },
  { id: 'stack', label: 'Stack' },
  { id: 'process', label: 'Methodology' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
] as const

export default function Navbar({ theme, onToggleTheme, onOpenPalette }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')
  const { isMobile } = useWindowSize()
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => { if (!isMobile) setMenuOpen(false) }, [isMobile])

  useModalA11y(menuOpen, menuRef, () => setMenuOpen(false), { initialFocus: 'first' })

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) }),
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )
    links.forEach(l => { const el = document.getElementById(l.id); if (el) observer.observe(el) })
    return () => observer.disconnect()
  }, [])

  const go = (id: string) => { setMenuOpen(false); scrollToId(id) }
  const isMac = typeof navigator !== 'undefined' && /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform || navigator.userAgent || '')

  return (
    <>
      <motion.nav
        initial={{ y: -32, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        aria-label="Main navigation"
        className="fixed top-4 left-1/2 z-50 -translate-x-1/2 w-[min(94%,1040px)]"
      >
        <div className="flex items-center justify-between rounded-full border border-[color:var(--line)] bg-[color:var(--bg-elev)]/85 px-4 py-2 backdrop-blur-md shadow-sm sm:px-6">
          <button
            type="button"
            onClick={scrollToTop}
            className="font-display font-semibold text-[color:var(--ink)] tracking-tight hover:text-[color:var(--accent)] transition-colors"
          >
            Lalith Nivas<span className="text-[color:var(--accent-strong)]">.</span>
          </button>

          {!isMobile && (
            <ul className="flex items-center gap-1">
              {links.map(link => {
                const isActive = active === link.id
                return (
                  <li key={link.id}>
                    <button
                      type="button"
                      onClick={() => go(link.id)}
                      className={`relative px-3 py-1.5 font-display text-[0.85rem] transition-colors ${
                        isActive ? 'text-[color:var(--ink)] font-semibold' : 'text-[color:var(--ink-muted)] hover:text-[color:var(--ink)]'
                      }`}
                    >
                      {link.label}
                      {isActive && (
                        <motion.span
                          layoutId="nav-pill"
                          aria-hidden="true"
                          className="absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[color:var(--accent)]"
                          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                        />
                      )}
                    </button>
                  </li>
                )
              })}
            </ul>
          )}

          <div className="flex items-center gap-2">
            {!isMobile && (
              <button
                type="button"
                onClick={onOpenPalette}
                aria-label="Open command palette"
                title="Search (press ⌘K)"
                className="hidden h-9 items-center gap-2 rounded-full border border-[color:var(--line)] bg-[color:var(--surface)] px-3 text-[color:var(--ink-muted)] hover:border-[color:var(--line-strong)] hover:text-[color:var(--ink)] sm:inline-flex"
              >
                <Search size={13} strokeWidth={1.5} aria-hidden="true" />
                <kbd className="text-[0.62rem] font-mono">{isMac ? '⌘' : 'Ctrl '}K</kbd>
              </button>
            )}

            <button
              type="button"
              onClick={e => onToggleTheme(e)}
              className="grid h-9 w-9 place-items-center rounded-full border border-[color:var(--line)] bg-[color:var(--surface)] text-[color:var(--ink-muted)] hover:text-[color:var(--ink)] transition-colors"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            >
              {theme === 'dark' ? <Sun size={15} strokeWidth={1.5} /> : <Moon size={15} strokeWidth={1.5} />}
            </button>

            {!isMobile && (
              <a
                href="mailto:lalithnivasy@gmail.com"
                className="inline-flex h-9 items-center gap-1 rounded-full bg-[color:var(--ink)] px-4 font-display text-[0.8rem] font-semibold text-[color:var(--bg)] transition-all hover:bg-[color:var(--accent)] hover:text-white"
              >
                Get in touch &rarr;
              </a>
            )}

            {isMobile && (
              <button
                type="button"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                className="grid h-9 w-9 place-items-center rounded-full border border-[color:var(--line)] text-[color:var(--ink)]"
              >
                {menuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            )}
          </div>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-x-4 top-20 z-50 rounded-2xl border border-[color:var(--line)] bg-[color:var(--bg-elev)] p-6 shadow-xl backdrop-blur-xl sm:hidden"
          >
            <ul className="flex flex-col gap-3">
              {links.map(link => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => go(link.id)}
                    className="w-full text-left font-display text-lg text-[color:var(--ink)] py-2"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="pt-2 border-t border-[color:var(--line)]">
                <a
                  href="mailto:lalithnivasy@gmail.com"
                  className="block text-center rounded-full bg-[color:var(--ink)] py-2.5 font-display text-sm font-semibold text-[color:var(--bg)]"
                >
                  Get in touch
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
