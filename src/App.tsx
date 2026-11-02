import { lazy, Suspense, useCallback, useEffect, useState } from 'react'
import { useTheme } from './hooks/useTheme'
import { useSmoothScroll } from './hooks/useSmoothScroll'
import Navbar from './components/NavBar'
import ScrollProgress from './components/ScrollProgress'
import Hero from './sections/Hero'
import Work from './sections/Work'
import Stack from './sections/Stack'
import Process from './sections/Process'
import Experience from './sections/Experience'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

const CommandPalette = lazy(() => import('./components/CommandPalette'))

export default function App() {
  const { theme, toggle, setOrigin } = useTheme()
  const [paletteOpen, setPaletteOpen] = useState(false)

  useSmoothScroll()

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const meta = e.metaKey || e.ctrlKey
      if (meta && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setPaletteOpen(o => !o)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const handleThemeToggle = useCallback(
    (e?: React.MouseEvent) => {
      if (e && typeof e.clientX === 'number') setOrigin(e.clientX, e.clientY)
      toggle()
    },
    [setOrigin, toggle],
  )

  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <ScrollProgress />
      <Navbar theme={theme} onToggleTheme={handleThemeToggle} onOpenPalette={() => setPaletteOpen(true)} />

      <main id="main">
        <Hero />
        <Work />
        <Stack />
        <Process />
        <Experience />
        <Contact />
      </main>

      <Footer />

      <Suspense fallback={null}>
        <CommandPalette
          open={paletteOpen}
          onClose={() => setPaletteOpen(false)}
          theme={theme}
          onToggleTheme={() => handleThemeToggle()}
        />
      </Suspense>
    </>
  )
}
