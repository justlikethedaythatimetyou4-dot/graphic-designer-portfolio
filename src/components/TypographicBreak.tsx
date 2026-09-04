import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useScroll';

export function TypographicBreak() {
  const { inView, ref } = useInView<HTMLDivElement>(0.2);

  const lines = ['MAKE IT', 'CLEAR.', 'MAKE IT', 'STRANGE.', 'MAKE IT', 'MEMORABLE.'];

  return (
    <section ref={ref} className="relative bg-vermilion text-ivory py-24 md:py-40 px-6 md:px-10 overflow-hidden grain">
      {/* Background number */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
        <span className="font-serif-display text-[40vw] md:text-[30vw] leading-none text-ivory/5">
          26
        </span>
      </div>

      <div className="relative max-w-[1600px] mx-auto">
        <div className="flex items-center gap-3 mb-12 md:mb-20">
          <span className="font-sans text-[10px] uppercase tracking-wide-meta text-ivory/50">
            Manifesto
          </span>
          <span className="h-px w-12 bg-ivory/30" />
        </div>

        <div className="flex flex-col">
          {lines.map((line, i) => (
            <motion.h2
              key={`${line}-${i}`}
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: i * 0.1,
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="font-serif-display text-[16vw] md:text-[12vw] leading-[0.85] tracking-tightest text-ivory"
            >
              {line === 'CLEAR.' || line === 'STRANGE.' || line === 'MEMORABLE.' ? (
                <span>
                  {line.replace('.', '')}
                  <span className="text-ink">.</span>
                </span>
              ) : (
                line
              )}
            </motion.h2>
          ))}
        </div>
      </div>
    </section>
  );
}
