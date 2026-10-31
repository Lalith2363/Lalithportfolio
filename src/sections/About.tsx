import { ArrowRight } from 'lucide-react'
import { Container, Section } from '../components/ui'
import { KineticText, Reveal } from '../components/Kinetic'
import { scrollToId } from '../lib/smoothScroll'

export default function About() {
  return (
    <Section id="about" aria-labelledby="about-thesis">
      <Container size="narrow" className="text-center">
        <Reveal>
          <span className="section-index text-[color:var(--accent-strong)]">The mission</span>
        </Reveal>

        <KineticText
          as="h2"
          id="about-thesis"
          className="thesis mt-6 text-display text-[color:var(--ink)]"
        >
          {[
            'Securing systems with ',
            <span key="data" className="serif-italic text-[color:var(--ink)]">intelligent</span>,
            ' defense. Merging the tactical edge of ',
            <span key="sec" className="serif-italic text-[color:var(--ink)]">cybersecurity</span>,
            ' with the pattern-recognition power of deep learning to detect what traditional firewalls ',
            <span key="miss" className="serif-italic text-[color:var(--ink)]">overlook</span>,
            '.',
          ]}
        </KineticText>

        <Reveal
          as="p"
          delay={0.1}
          className="mx-auto mt-8 max-w-[60ch] text-lede text-[color:var(--ink-muted)]"
        >
          M.Tech Cybersecurity researcher and engineer based in India. Experienced across threat detection,
          vulnerability assessment, and AI-driven security tooling. Comfortable operating in Kali Linux,
          building Python automated pipelines, and training machine learning models to solve high-stakes
          enterprise security challenges.
        </Reveal>

        <Reveal delay={0.16} className="mt-9">
          <a
            href="#contact"
            data-cursor="target"
            onClick={e => {
              e.preventDefault()
              scrollToId('contact')
            }}
            className="link-underline group inline-flex min-h-[44px] items-center gap-2 font-display text-[color:var(--ink)]"
          >
            Start a conversation
            <ArrowRight
              size={18}
              strokeWidth={1.5}
              aria-hidden="true"
              className="text-[color:var(--accent-strong)] transition-transform duration-200 group-hover:translate-x-1"
            />
          </a>
        </Reveal>
      </Container>
    </Section>
  )
}
