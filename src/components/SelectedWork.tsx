import { useState } from 'react';
import { motion } from 'framer-motion';
import { projects, type Project } from '@/data/portfolio';
import { ProjectCard } from './ProjectCard';
import { CaseStudy } from './CaseStudy';

export function SelectedWork() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section id="work" className="relative bg-ivory py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-[1600px] mx-auto">
        {/* Section header */}
        <div className="flex items-end justify-between mb-16 md:mb-24 border-b border-ink/10 pb-6">
          <div className="flex items-center gap-3">
            <span className="font-sans text-[10px] uppercase tracking-wide-meta text-ink/40">
              §02
            </span>
            <span className="h-px w-12 bg-ink/20" />
            <span className="font-sans text-[10px] uppercase tracking-wide-meta text-ink/40">
              Selected Work
            </span>
          </div>
          <h2 className="font-serif-display text-2xl md:text-4xl text-ink tracking-tight">
            01 — 06
          </h2>
        </div>

        {/* Projects */}
        <div className="flex flex-col gap-24 md:gap-40">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <ProjectCard
                project={project}
                index={index}
                onOpen={() => setActiveProject(project)}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case study overlay */}
      <CaseStudy
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
}
