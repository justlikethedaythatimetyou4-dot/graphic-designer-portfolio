import { motion } from 'framer-motion';
import { identityProcess } from '@/data/portfolio';
import { useInView } from '@/hooks/useScroll';
import { LogoSketch } from './DesignMockups';

export function IdentityDevelopment() {
  const { inView, ref } = useInView<HTMLDivElement>(0.15);

  return (
    <section ref={ref} className="relative bg-ink text-ivory py-24 md:py-40 px-6 md:px-10 grain">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-12 md:mb-20">
          <span className="font-sans text-[10px] uppercase tracking-wide-meta text-ivory/40">§03</span>
          <span className="h-px w-12 bg-ivory/20" />
          <span className="font-sans text-[10px] uppercase tracking-wide-meta text-ivory/40">Identity Development</span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="font-serif-display text-5xl md:text-8xl leading-[0.9] tracking-tightest mb-16 md:mb-24"
        >
          Before the final mark,
          <br />
          there were <span className="text-vermilion italic">47 bad ideas.</span>
        </motion.h2>

        {/* Process flow */}
        <div className="flex flex-col md:flex-row items-stretch gap-2 md:gap-0 mb-16 md:mb-24">
          {identityProcess.map((step, i) => (
            <div key={step} className="flex items-center flex-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex flex-col items-center gap-2 flex-1"
              >
                <span className="font-sans text-[10px] uppercase tracking-wide-meta text-ivory/30">{String(i + 1).padStart(2, '0')}</span>
                <span className="font-serif-display text-2xl md:text-3xl text-ivory">{step}</span>
              </motion.div>
              {i < identityProcess.length - 1 && <span className="hidden md:block text-ivory/20 mx-1">↓</span>}
            </div>
          ))}
        </div>

        {/* Logo explorations grid — using SVG sketches */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
          {Array.from({ length: 12 }).map((_, i) => {
            const isCrossed = i < 7;
            const isFinal = i === 11;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.3 + i * 0.05, duration: 0.4 }}
                className={`relative aspect-square border flex items-center justify-center p-4 group ${
                  isFinal ? 'border-vermilion bg-vermilion/10' : 'border-ivory/15'
                }`}
              >
                <LogoSketch variant={i} crossed={isCrossed} className="w-full h-full" />
                {/* Annotation */}
                <span className="absolute top-2 left-2 font-sans text-[8px] uppercase tracking-meta text-ivory/20">
                  v.{String(i + 1).padStart(2, '0')}
                </span>
                {isFinal && (
                  <span className="absolute bottom-2 right-2 font-sans text-[8px] uppercase tracking-meta text-vermilion">Final</span>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Annotation */}
        <div className="mt-8 grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-6 md:col-start-7">
            <p className="font-sans text-sm text-ivory/50 leading-relaxed">
              Each mark was tested against the same criteria — legibility at 12px, distinction at 12 feet, and whether it could survive being printed on a napkin. Only one made it through.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
