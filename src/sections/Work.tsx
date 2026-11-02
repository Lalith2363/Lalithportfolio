import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Container } from '../components/ui'
import { projects } from '../data/projects'
import ProjectModal from '../components/ProjectModal'
import type { Project } from '../types'

export default function Work() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section id="work" aria-label="Projects" className="py-16 md:py-20 border-b border-[color:var(--line)]">
      <Container>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[color:var(--accent)]">
              01 / Selected Work
            </span>
            <h2 className="mt-2 text-2xl font-medium tracking-tight text-[color:var(--ink)] sm:text-3xl">
              Systems &amp; Projects
            </h2>
          </div>
          <a
            href="https://github.com/Lalith2363"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-[color:var(--ink-muted)] hover:text-[color:var(--accent)] transition-colors"
          >
            All GitHub Repositories <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Clean, minimalistic grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map(project => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group flex flex-col justify-between rounded-xl border border-[color:var(--line)] bg-[color:var(--bg-elev)] p-6 transition-all duration-200 hover:border-[color:var(--accent)] hover:shadow-sm cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[color:var(--ink-faint)]">
                  <span>{project.year}</span>
                  <span className="rounded bg-[color:var(--surface)] px-2 py-0.5 text-[0.7rem] text-[color:var(--accent)]">
                    {project.category}
                  </span>
                </div>

                <h3 className="mt-4 text-lg font-medium text-[color:var(--ink)] group-hover:text-[color:var(--accent)] transition-colors">
                  {project.name}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-[color:var(--ink-muted)] line-clamp-3">
                  {project.tagline}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[color:var(--line)] flex flex-wrap gap-1.5">
                {project.tech.slice(0, 4).map(t => (
                  <span
                    key={t}
                    className="rounded bg-[color:var(--surface)] px-2 py-0.5 text-[0.72rem] font-mono text-[color:var(--ink-muted)]"
                  >
                    {t}
                  </span>
                ))}
                {project.tech.length > 4 && (
                  <span className="text-[0.72rem] font-mono text-[color:var(--ink-faint)] self-center">
                    +{project.tech.length - 4}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </Container>
    </section>
  )
}
