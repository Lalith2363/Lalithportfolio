import { useEffect, useId, useMemo, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Search,
  ArrowRight,
  Sun,
  Moon,
  ExternalLink,
  Layers,
  Sparkles,
} from 'lucide-react'
import { GithubIcon, LinkedinIcon, MailIcon } from './SocialIcons'
import { projects } from '../data/projects'
import { scrollToId } from '../lib/smoothScroll'

interface CommandPaletteProps {
  open: boolean
  onClose: () => void
  theme: 'dark' | 'light'
  onToggleTheme: () => void
}

interface Command {
  id: string
  group: 'Navigation' | 'Projects' | 'Links' | 'Actions'
  label: string
  hint?: string
  icon: React.ReactNode
  keywords?: string
  run?: () => void
  href?: string
  external?: boolean
}

const ICON = 16

export default function CommandPalette({
  open,
  onClose,
  theme,
  onToggleTheme,
}: CommandPaletteProps) {
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const listRef = useRef<HTMLUListElement>(null)
  const listboxId = useId()

  useEffect(() => {
    if (open) {
      setQuery('')
      setSelected(0)
      window.setTimeout(() => inputRef.current?.focus(), 50)
    }
  }, [open])

  const commands = useMemo<Command[]>(() => {
    const nav: Command[] = [
      { id: 'nav-about', group: 'Navigation', label: 'About', hint: 'Overview & Mission', icon: <Sparkles size={ICON} />, keywords: 'about bio summary mission', run: () => scrollToId('about') },
      { id: 'nav-work', group: 'Navigation', label: 'Projects', hint: 'Cybersecurity & AI systems', icon: <Layers size={ICON} />, keywords: 'work projects portfolio code security threat detection', run: () => scrollToId('work') },
      { id: 'nav-stack', group: 'Navigation', label: 'Stack', hint: 'Tools & Technologies', icon: <Layers size={ICON} />, keywords: 'stack skills tech tools python linux kali nmap', run: () => scrollToId('stack') },
      { id: 'nav-process', group: 'Navigation', label: 'Methodology', hint: 'Security analysis process', icon: <Sparkles size={ICON} />, keywords: 'process methodology workflow audit recon attack mitigation', run: () => scrollToId('process') },
      { id: 'nav-experience', group: 'Navigation', label: 'Experience', hint: 'Internships & Education', icon: <Sparkles size={ICON} />, keywords: 'experience history jobs palo alto slash mark internshala education mtech', run: () => scrollToId('experience') },
      { id: 'nav-contact', group: 'Navigation', label: 'Contact', hint: 'Send a message', icon: <MailIcon size={ICON} />, keywords: 'contact hire message email phone', run: () => scrollToId('contact') },
    ]

    const projs: Command[] = projects.map(p => ({
      id: `proj-${p.id}`,
      group: 'Projects',
      label: p.name,
      hint: p.platform,
      icon: <Layers size={ICON} />,
      keywords: `${p.name} ${p.platform} ${p.category} ${p.tech.join(' ')}`.toLowerCase(),
      run: () => scrollToId('work'),
    }))

    const links: Command[] = [
      {
        id: 'link-github',
        group: 'Links',
        label: 'GitHub',
        hint: 'github.com/Lalith2363',
        icon: <GithubIcon size={ICON} />,
        keywords: 'github code source repos lalith2363',
        href: 'https://github.com/Lalith2363',
        external: true,
      },
      {
        id: 'link-linkedin',
        group: 'Links',
        label: 'LinkedIn',
        hint: 'linkedin.com/in/lalith-nivas-yadlapalli',
        icon: <LinkedinIcon size={ICON} />,
        keywords: 'linkedin profile professional network',
        href: 'https://linkedin.com/in/lalith-nivas-yadlapalli-77531921a',
        external: true,
      },
    ]

    const actions: Command[] = [
      {
        id: 'action-email',
        group: 'Actions',
        label: 'Draft Email',
        hint: 'lalithnivasy@gmail.com',
        icon: <MailIcon size={ICON} />,
        keywords: 'email mail contact hire message gmail',
        href: 'mailto:lalithnivasy@gmail.com',
      },
      {
        id: 'action-theme',
        group: 'Actions',
        label: theme === 'dark' ? 'Switch to Light Theme' : 'Switch to Dark Theme',
        icon: theme === 'dark' ? <Sun size={ICON} /> : <Moon size={ICON} />,
        keywords: 'theme dark light mode toggle',
        run: onToggleTheme,
      },
    ]

    return [...nav, ...projs, ...links, ...actions]
  }, [theme, onToggleTheme])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return commands
    return commands.filter(
      c =>
        c.label.toLowerCase().includes(q) ||
        (c.hint && c.hint.toLowerCase().includes(q)) ||
        (c.keywords && c.keywords.includes(q)),
    )
  }, [commands, query])

  useEffect(() => {
    setSelected(0)
  }, [query])

  const execute = (cmd: Command) => {
    onClose()
    if (cmd.run) cmd.run()
    else if (cmd.href) {
      if (cmd.external) window.open(cmd.href, '_blank', 'noopener,noreferrer')
      else window.location.href = cmd.href
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelected(s => (s + 1) % Math.max(1, filtered.length))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSelected(s => (s - 1 + filtered.length) % Math.max(1, filtered.length))
    } else if (e.key === 'Enter') {
      e.preventDefault()
      const cmd = filtered[selected]
      if (cmd) execute(cmd)
    } else if (e.key === 'Escape') {
      e.preventDefault()
      onClose()
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Command palette"
          onClick={onClose}
          className="fixed inset-0 z-[120] flex items-start justify-center bg-black/50 p-4 pt-[15vh] backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -8 }}
            transition={{ duration: 0.18, ease: [0.23, 1, 0.32, 1] }}
            onClick={e => e.stopPropagation()}
            className="w-full max-w-xl overflow-hidden rounded-xl border border-[color:var(--line-strong)] bg-[color:var(--bg-elev)] shadow-2xl"
          >
            <div className="flex items-center gap-3 border-b border-[color:var(--line)] px-4 py-3">
              <Search size={16} className="text-[color:var(--ink-faint)]" />
              <input
                ref={inputRef}
                value={query}
                onChange={e => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search commands, projects, topics... (e.g. Python, Nmap, ML)"
                className="w-full bg-transparent text-sm text-[color:var(--ink)] placeholder:text-[color:var(--ink-faint)] outline-none"
              />
              <kbd className="rounded border border-[color:var(--line)] bg-[color:var(--surface)] px-1.5 py-0.5 text-[0.65rem] font-mono text-[color:var(--ink-muted)]">
                ESC
              </kbd>
            </div>

            <ul
              ref={listRef}
              id={listboxId}
              role="listbox"
              className="max-h-[360px] overflow-y-auto p-2"
            >
              {filtered.length === 0 ? (
                <li className="p-4 text-center text-xs text-[color:var(--ink-muted)]">
                  No matching commands found.
                </li>
              ) : (
                filtered.map((cmd, idx) => {
                  const isSelected = idx === selected
                  return (
                    <li
                      key={cmd.id}
                      role="option"
                      aria-selected={isSelected}
                      onClick={() => execute(cmd)}
                      onMouseEnter={() => setSelected(idx)}
                      className={`flex cursor-pointer items-center justify-between rounded-lg px-3 py-2.5 text-xs transition-colors ${
                        isSelected
                          ? 'bg-[color:var(--surface)] text-[color:var(--ink)]'
                          : 'text-[color:var(--ink-muted)] hover:bg-[color:var(--surface)]'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className={isSelected ? 'text-[color:var(--accent)]' : 'text-[color:var(--ink-faint)]'}>
                          {cmd.icon}
                        </span>
                        <span className="font-medium text-[color:var(--ink)]">{cmd.label}</span>
                        {cmd.hint && (
                          <span className="text-[0.7rem] text-[color:var(--ink-faint)]">
                            · {cmd.hint}
                          </span>
                        )}
                      </div>
                      {cmd.external ? (
                        <ExternalLink size={12} className="text-[color:var(--ink-faint)]" />
                      ) : (
                        <ArrowRight size={12} className="text-[color:var(--ink-faint)]" />
                      )}
                    </li>
                  )
                })
              )}
            </ul>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
