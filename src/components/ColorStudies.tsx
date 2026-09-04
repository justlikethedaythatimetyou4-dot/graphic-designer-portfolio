import { motion } from 'framer-motion';
import { colorStudies } from '@/data/portfolio';
import { useInView } from '@/hooks/useScroll';

export function ColorStudies() {
  const { inView, ref } = useInView<HTMLDivElement>(0.1);

  return (
    <section ref={ref} className="relative bg-ivory py-24 md:py-40 px-6 md:px-10 grain">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-12 md:mb-20">
          <span className="font-sans text-[10px] uppercase tracking-wide-meta text-ink/40">
            §05
          </span>
          <span className="h-px w-12 bg-ink/20" />
          <span className="font-sans text-[10px] uppercase tracking-wide-meta text-ink/40">
            Color / System / Mood
          </span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="font-serif-display text-5xl md:text-8xl leading-[0.9] tracking-tightest text-ink mb-16 md:mb-24"
        >
          Color / System
          <br />
          <span className="text-cobalt italic">/ Mood.</span>
        </motion.h2>

        {/* Color study blocks */}
        <div className="flex flex-col gap-16 md:gap-24">
          {colorStudies.map((study, studyIdx) => (
            <motion.div
              key={study.project}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: studyIdx * 0.1, duration: 0.6 }}
              className="grid grid-cols-12 gap-4 md:gap-6"
            >
              {/* Project name */}
              <div className="col-span-12 md:col-span-3">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="font-sans text-[10px] uppercase tracking-wide-meta text-ink/40">
                    {String(studyIdx + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="font-serif-display text-2xl md:text-3xl text-ink leading-tight">
                  {study.project}
                </h3>
              </div>

              {/* Color blocks */}
              <div className="col-span-12 md:col-span-9">
                <div className="grid grid-cols-3 gap-2 md:gap-3 h-40 md:h-56">
                  {study.colors.map((color, colorIdx) => (
                    <div
                      key={color.name}
                      className="relative group flex flex-col justify-between p-4 md:p-6 transition-transform duration-500 hover:scale-[1.02]"
                      style={{ backgroundColor: color.hex }}
                    >
                      <div
                        className={`font-sans text-[10px] uppercase tracking-wide-meta ${
                          ['#F4F0E8', '#F9F6F0', '#D8D3C8', '#C8A063'].includes(color.hex)
                            ? 'text-ink/50'
                            : 'text-white/50'
                        }`}
                      >
                        {String(colorIdx + 1).padStart(2, '0')}
                      </div>
                      <div>
                        <div
                          className={`font-serif-display text-xl md:text-2xl mb-1 ${
                            ['#F4F0E8', '#F9F6F0', '#D8D3C8', '#C8A063'].includes(color.hex)
                              ? 'text-ink'
                              : 'text-white'
                          }`}
                        >
                          {color.name}
                        </div>
                        <div
                          className={`font-sans text-[10px] uppercase tracking-meta ${
                            ['#F4F0E8', '#F9F6F0', '#D8D3C8', '#C8A063'].includes(color.hex)
                              ? 'text-ink/40'
                              : 'text-white/40'
                          }`}
                        >
                          {color.hex}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
