import { motion } from 'framer-motion';
import { experience, tools } from '@/data/portfolio';
import { useInView } from '@/hooks/useScroll';

export function About() {
  const { inView, ref } = useInView<HTMLDivElement>(0.1);

  return (
    <section id="about" ref={ref} className="relative bg-ivory py-24 md:py-40 px-6 md:px-10 grain">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-12 md:mb-20">
          <span className="font-sans text-[10px] uppercase tracking-wide-meta text-ink/40">
            §10
          </span>
          <span className="h-px w-12 bg-ink/20" />
          <span className="font-sans text-[10px] uppercase tracking-wide-meta text-ink/40">
            About
          </span>
        </div>

        <div className="grid grid-cols-12 gap-4 md:gap-8 mb-16 md:mb-24">
          {/* Portrait */}
          <div className="col-span-12 md:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="relative aspect-[3/4] overflow-hidden bg-soft-gray"
            >
              <img
                src="https://images.pexels.com/photos/15870623/pexels-photo-15870623.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="Ananya Rao in her studio"
                className="w-full h-full object-cover grayscale-[0.2]"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 font-sans text-[10px] uppercase tracking-wide-meta text-ivory bg-ink/50 px-2 py-1">
                Studio, Bengaluru
              </div>
            </motion.div>
          </div>

          {/* Headline + body */}
          <div className="col-span-12 md:col-span-7 flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              <h2 className="font-serif-display text-5xl md:text-7xl leading-[0.9] tracking-tightest text-ink mb-8">
                Designer.
                <br />
                Art Director.
                <br />
                Perpetual
                <br />
                <span className="text-vermilion italic">Observer.</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col gap-4 max-w-md"
            >
              <p className="font-sans text-sm text-ink/70 leading-relaxed">
                Ananya Rao is an independent graphic designer and art director
                based in Bengaluru.
              </p>
              <p className="font-sans text-sm text-ink/70 leading-relaxed">
                Over the past eight years, she has worked across identity,
                packaging, editorial, campaigns and digital experiences.
              </p>
              <p className="font-sans text-sm text-ink/70 leading-relaxed">
                Her approach combines strategy, typography and visual
                experimentation to create identities that feel distinctive
                without becoming disposable.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Experience timeline */}
        <div className="border-t border-ink/10 pt-12 md:pt-16 mb-16 md:mb-24">
          <div className="font-sans text-[10px] uppercase tracking-wide-meta text-ink/40 mb-8">
            Experience
          </div>
          <div className="flex flex-col gap-0">
            {experience.map((exp, i) => (
              <motion.div
                key={exp.year}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.08, duration: 0.4 }}
                className="group grid grid-cols-12 gap-4 items-baseline border-b border-ink/10 py-4 md:py-5"
              >
                <div className="col-span-3 md:col-span-2">
                  <span className="font-serif-display text-2xl md:text-3xl text-ink">
                    {exp.year}
                  </span>
                </div>
                <div className="col-span-9 md:col-span-5">
                  <span className="font-sans text-sm md:text-base text-ink font-medium">
                    {exp.role}
                  </span>
                </div>
                <div className="col-span-12 md:col-span-5 text-left md:text-right">
                  <span className="font-sans text-sm text-ink/50">
                    {exp.company}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div className="border-t border-ink/10 pt-12 md:pt-16">
          <div className="font-sans text-[10px] uppercase tracking-wide-meta text-ink/40 mb-8">
            Design Tools
          </div>
          <div className="flex flex-col gap-0">
            {tools.map((tool, i) => (
              <motion.div
                key={tool}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.6 + i * 0.06, duration: 0.4 }}
                className="group flex items-baseline justify-between border-b border-ink/10 py-3 md:py-4"
                data-cursor="text"
              >
                <span className="font-serif-display text-2xl md:text-3xl text-ink/70 group-hover:text-ink transition-colors duration-300">
                  {tool}
                </span>
                <span className="font-sans text-[10px] uppercase tracking-wide-meta text-ink/30">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
