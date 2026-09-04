import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Project } from '@/data/portfolio';
import { useLockScroll } from '@/hooks/useScroll';
import { X } from 'lucide-react';

interface CaseStudyProps {
  project: Project | null;
  onClose: () => void;
}

export function CaseStudy({ project, onClose }: CaseStudyProps) {
  useLockScroll(!!project);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (!project) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [project, onClose]);

  useEffect(() => {
    if (!project) return;
    const panel = document.getElementById('case-study-panel');
    if (!panel) return;
    const handler = () => {
      const max = panel.scrollHeight - panel.clientHeight;
      setScrollProgress(max > 0 ? panel.scrollTop / max : 0);
    };
    panel.addEventListener('scroll', handler);
    return () => panel.removeEventListener('scroll', handler);
  }, [project]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[100] bg-ivory"
        >
          {/* Progress bar */}
          <div className="absolute top-0 left-0 right-0 h-px bg-ink/10 z-50">
            <div
              className="h-full transition-all duration-150"
              style={{
                width: `${scrollProgress * 100}%`,
                backgroundColor: project.accent,
              }}
            />
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            data-cursor="open"
            className="fixed top-5 right-5 md:top-6 md:right-6 z-50 flex items-center gap-2 font-sans text-[10px] uppercase tracking-wide-meta text-ink/60 hover:text-ink transition-colors"
          >
            Close
            <X className="w-4 h-4" />
          </button>

          {/* Scrollable content */}
          <motion.div
            id="case-study-panel"
            initial={{ y: 40 }}
            animate={{ y: 0 }}
            exit={{ y: 40 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="h-full overflow-y-auto"
          >
            <div className="max-w-[1400px] mx-auto px-6 md:px-10 pt-20 md:pt-24 pb-20">
              {/* Header */}
              <div className="flex flex-col gap-6 mb-16 md:mb-24">
                <div className="flex items-center gap-3">
                  <span
                    className="font-serif-display text-5xl md:text-7xl leading-none"
                    style={{ color: project.accent }}
                  >
                    {project.number}
                  </span>
                  <div className="flex flex-col gap-1">
                    <span className="font-sans text-[10px] uppercase tracking-wide-meta text-ink/40">
                      {project.category}
                    </span>
                    <span className="font-sans text-[10px] uppercase tracking-wide-meta text-ink/40">
                      {project.year}
                    </span>
                  </div>
                </div>

                <h1 className="font-serif-display text-5xl md:text-8xl leading-[0.9] tracking-tightest text-ink">
                  {project.title}
                </h1>

                <p className="font-sans text-sm md:text-base text-ink/60 max-w-md">
                  {project.subtitle}
                </p>

                <div className="grid grid-cols-2 gap-6 md:gap-12 mt-4 max-w-2xl">
                  <div>
                    <div className="font-sans text-[10px] uppercase tracking-wide-meta text-ink/40 mb-2">
                      Role
                    </div>
                    <div className="font-sans text-sm text-ink">
                      {project.role}
                    </div>
                  </div>
                  <div>
                    <div className="font-sans text-[10px] uppercase tracking-wide-meta text-ink/40 mb-2">
                      Deliverables
                    </div>
                    <div className="font-sans text-sm text-ink">
                      {project.deliverables}
                    </div>
                  </div>
                </div>
              </div>

              {/* Hero image */}
              <div
                className="relative w-full aspect-[16/9] overflow-hidden mb-16 md:mb-24"
                style={{ background: project.accent }}
              >
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Case study sections */}
              <div className="flex flex-col gap-16 md:gap-24 mb-16 md:mb-24">
                {project.caseStudy.map((section, i) => (
                  <div
                    key={section.heading}
                    className="grid grid-cols-12 gap-4 md:gap-8"
                  >
                    <div className="col-span-12 md:col-span-3">
                      <div className="flex items-baseline gap-3 sticky top-6">
                        <span
                          className="font-serif-display text-3xl md:text-4xl"
                          style={{ color: project.accent }}
                        >
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span className="font-sans text-[10px] uppercase tracking-wide-meta text-ink/40">
                          {section.heading}
                        </span>
                      </div>
                    </div>
                    <div className="col-span-12 md:col-span-8 md:col-start-5">
                      <p className="font-serif-display text-xl md:text-2xl leading-relaxed text-ink">
                        {section.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Gallery */}
              <div className="flex flex-col gap-4 mb-16 md:mb-24">
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-12 md:col-span-8">
                    <div
                      className="relative aspect-[4/3] overflow-hidden"
                      style={{ background: project.accent }}
                    >
                      <img
                        src={project.images[1]}
                        alt={`${project.title} detail`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-4 flex flex-col gap-4">
                    <div
                      className="relative flex-1 aspect-square overflow-hidden"
                      style={{ background: project.accent }}
                    >
                      <img
                        src={project.images[2]}
                        alt={`${project.title} detail`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div
                      className="relative flex-1 aspect-square overflow-hidden"
                      style={{ background: project.accent }}
                    >
                      <img
                        src={project.images[3]}
                        alt={`${project.title} detail`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Project statement */}
              <div className="text-center py-16 md:py-24 border-y border-ink/10">
                <p
                  className="font-serif-display text-4xl md:text-7xl leading-[0.95] whitespace-pre-line"
                  style={{ color: project.accent }}
                >
                  {project.statement}
                </p>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between mt-12">
                <span className="font-sans text-[10px] uppercase tracking-wide-meta text-ink/40">
                  {project.client} — {project.year}
                </span>
                <button
                  onClick={onClose}
                  data-cursor="open"
                  className="font-sans text-xs uppercase tracking-wide-meta text-ink border-b border-ink/30 pb-1 hover:border-ink transition-colors"
                >
                  Back to Work →
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
