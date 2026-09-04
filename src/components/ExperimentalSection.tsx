import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useScroll';

export function ExperimentalSection() {
  const { inView, ref } = useInView<HTMLDivElement>(0.1);

  const experiments = [
    { label: 'Type Study 01', color: '#F04A32', bg: '#F4F0E8' },
    { label: 'Poster Experiment', color: '#3157FF', bg: '#111111' },
    { label: 'Texture / Grain', color: '#D9FF3F', bg: '#111111' },
    { label: 'Generative Pattern', color: '#111111', bg: '#D9FF3F' },
    { label: 'Motion Sketch', color: '#F4F0E8', bg: '#F04A32' },
    { label: '3D Form Study', color: '#F4F0E8', bg: '#3157FF' },
  ];

  return (
    <section ref={ref} className="relative bg-ivory py-24 md:py-40 px-6 md:px-10 grain">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-12 md:mb-20">
          <span className="font-sans text-[10px] uppercase tracking-wide-meta text-ink/40">
            §11
          </span>
          <span className="h-px w-12 bg-ink/20" />
          <span className="font-sans text-[10px] uppercase tracking-wide-meta text-ink/40">
            Experiments
          </span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="font-serif-display text-4xl md:text-7xl leading-[0.95] tracking-tightest text-ink mb-4"
        >
          Things I made
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="font-serif-display text-4xl md:text-7xl leading-[0.95] tracking-tightest text-ink mb-4"
        >
          just to see
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="font-serif-display text-4xl md:text-7xl leading-[0.95] tracking-tightest text-ink mb-16 md:mb-24"
        >
          what would{' '}
          <span className="text-vermilion italic">happen.</span>
        </motion.h2>

        {/* Experiment grid — intentionally irregular */}
        <div className="grid grid-cols-12 gap-3 md:gap-4">
          {experiments.map((exp, i) => {
            const layouts = [
              'col-span-6 md:col-span-4 aspect-square',
              'col-span-6 md:col-span-8 aspect-[4/3] md:aspect-video',
              'col-span-6 md:col-span-4 aspect-[3/4]',
              'col-span-12 md:col-span-6 aspect-video',
              'col-span-6 md:col-span-3 aspect-[3/4]',
              'col-span-6 md:col-span-3 aspect-[3/4]',
            ];
            return (
              <motion.div
                key={exp.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className={`relative ${layouts[i]} overflow-hidden group cursor-pointer`}
                style={{ backgroundColor: exp.bg }}
                data-cursor="view"
              >
                {/* Abstract content per experiment */}
                {i === 0 && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span
                      className="font-serif-display text-[12vw] md:text-[8vw] leading-none"
                      style={{ color: exp.color, fontStyle: 'italic' }}
                    >
                      Aa
                    </span>
                  </div>
                )}
                {i === 1 && (
                  <div className="absolute inset-0 flex flex-col justify-between p-4 md:p-8">
                    <span className="font-sans text-[10px] uppercase tracking-wide-meta text-cobalt">
                      City / After Dark
                    </span>
                    <div className="flex-1 flex items-center justify-center">
                      <span className="font-serif-display text-4xl md:text-8xl text-cobalt leading-none rotate-[-3deg]">
                        DARK
                      </span>
                    </div>
                    <span className="font-sans text-[10px] uppercase tracking-wide-meta text-cobalt/60">
                      Poster study, 2025
                    </span>
                  </div>
                )}
                {i === 2 && (
                  <div className="absolute inset-0 paper-texture opacity-90 flex items-center justify-center">
                    <span className="font-serif-display text-3xl md:text-5xl text-acid-yellow italic">
                      texture
                    </span>
                  </div>
                )}
                {i === 3 && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="grid grid-cols-4 gap-1">
                      {Array.from({ length: 16 }).map((_, j) => (
                        <div
                          key={j}
                          className="w-4 h-4 md:w-6 md:h-6"
                          style={{
                            backgroundColor: j % 3 === 0 ? '#111111' : j % 3 === 1 ? '#F04A32' : 'transparent',
                            borderRadius: j % 2 === 0 ? '0' : '50%',
                          }}
                        />
                      ))}
                    </div>
                  </div>
                )}
                {i === 4 && (
                  <div className="absolute inset-0 flex flex-col justify-center items-center p-4">
                    <motion.span
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                      className="font-serif-display text-3xl md:text-5xl text-ivory italic"
                    >
                      motion
                    </motion.span>
                    <motion.span
                      animate={{ y: [0, 8, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                      className="font-serif-display text-3xl md:text-5xl text-ivory/60 italic"
                    >
                      sketch
                    </motion.span>
                  </div>
                )}
                {i === 5 && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-16 h-16 md:w-24 md:h-24">
                      <div className="absolute inset-0 rounded-full border-2 border-ivory/30" />
                      <div className="absolute inset-2 rounded-full border-2 border-ivory/50" />
                      <div className="absolute inset-4 rounded-full border-2 border-ivory/70" />
                      <div className="absolute inset-6 rounded-full bg-ivory/20" />
                    </div>
                  </div>
                )}

                {/* Label */}
                <div className="absolute bottom-3 left-3 font-sans text-[9px] uppercase tracking-meta opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ color: exp.color }}>
                  {exp.label} →
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
