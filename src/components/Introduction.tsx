import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useScroll';

export function Introduction() {
  const { inView, ref } = useInView<HTMLDivElement>(0.2);

  return (
    <section ref={ref} className="relative bg-ivory py-24 md:py-40 px-6 md:px-10 grain">
      <div className="max-w-[1600px] mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-12 md:mb-20">
          <span className="font-sans text-[10px] uppercase tracking-wide-meta text-ink/40">
            §01
          </span>
          <span className="h-px w-12 bg-ink/20" />
          <span className="font-sans text-[10px] uppercase tracking-wide-meta text-ink/40">
            Introduction
          </span>
        </div>

        <div className="grid grid-cols-12 gap-4 md:gap-8">
          {/* Large statement */}
          <div className="col-span-12 md:col-span-8">
            <div className="font-serif-display text-[10vw] md:text-[7vw] leading-[0.9] tracking-tightest text-ink">
              {['BRANDS NEED', 'MORE THAN', 'A LOGO.'].map((line, i) => (
                <motion.div
                  key={line}
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                  {line === 'A LOGO.' ? (
                    <span>
                      A LOGO<span className="text-vermilion">.</span>
                    </span>
                  ) : (
                    line
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Paragraph */}
          <div className="col-span-12 md:col-span-4 md:col-start-9 flex flex-col justify-end gap-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="font-sans text-sm md:text-base text-ink/70 leading-relaxed"
            >
              Ananya is an independent graphic designer and art director working
              across identity, campaigns, packaging, editorial and digital
              experiences.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.65, duration: 0.6 }}
              className="font-sans text-sm md:text-base text-ink/70 leading-relaxed"
            >
              She helps ambitious brands turn ideas into visual systems that feel
              distinctive, coherent and memorable.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-wrap gap-2 mt-2"
            >
              {['Identity', 'Typography', 'Packaging', 'Editorial', 'Campaigns', 'Digital'].map(
                (tag) => (
                  <span
                    key={tag}
                    className="font-sans text-[10px] uppercase tracking-meta text-ink/50 border border-ink/15 px-2.5 py-1"
                  >
                    {tag}
                  </span>
                )
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
