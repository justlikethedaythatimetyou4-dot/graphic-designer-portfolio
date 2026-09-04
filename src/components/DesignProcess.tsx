import { motion } from 'framer-motion';
import { designProcess } from '@/data/portfolio';
import { useInView } from '@/hooks/useScroll';

export function DesignProcess() {
  const { inView, ref } = useInView<HTMLDivElement>(0.15);

  return (
    <section ref={ref} className="relative bg-ivory-deep py-24 md:py-40 px-6 md:px-10 grain border-y border-ink/8">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-12 md:mb-20">
          <span className="font-sans text-[10px] uppercase tracking-wide-meta text-ink/40">
            §06
          </span>
          <span className="h-px w-12 bg-ink/20" />
          <span className="font-sans text-[10px] uppercase tracking-wide-meta text-ink/40">
            Design Process
          </span>
        </div>

        <div className="grid grid-cols-12 gap-4 md:gap-8 mb-16 md:mb-24">
          <div className="col-span-12 md:col-span-7">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="font-serif-display text-5xl md:text-8xl leading-[0.9] tracking-tightest text-ink"
            >
              Think first.
              <br />
              Make <span className="text-vermilion italic">second.</span>
            </motion.h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9 flex items-end">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-sans text-sm text-ink/60 leading-relaxed"
            >
              Every project follows the same rhythm — but the thinking is
              always different. The process is a scaffold, not a formula.
            </motion.p>
          </div>
        </div>

        {/* Process steps — studio wall style */}
        <div className="flex flex-col gap-0">
          {designProcess.map((step, i) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative border-t border-ink/10 last:border-b py-6 md:py-8"
            >
              <div className="grid grid-cols-12 gap-4 items-center">
                <div className="col-span-1">
                  <span className="font-sans text-[10px] uppercase tracking-wide-meta text-ink/30">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="col-span-7 md:col-span-8">
                  <h3 className="font-serif-display text-4xl md:text-7xl text-ink leading-none tracking-tight transition-all duration-500 group-hover:translate-x-4 group-hover:text-vermilion">
                    {step}
                  </h3>
                </div>
                <div className="col-span-4 md:col-span-3 text-right">
                  <span className="font-sans text-[10px] uppercase tracking-wide-meta text-ink/30">
                    {i < designProcess.length - 1 ? 'Next →' : 'Deliver'}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
