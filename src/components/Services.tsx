import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { services } from '@/data/portfolio';
import { useInView } from '@/hooks/useScroll';

export function Services() {
  const [hovered, setHovered] = useState<number | null>(null);
  const { inView, ref } = useInView<HTMLDivElement>(0.15);

  return (
    <section ref={ref} className="relative bg-ivory py-24 md:py-40 px-6 md:px-10 grain">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-12 md:mb-20">
          <span className="font-sans text-[10px] uppercase tracking-wide-meta text-ink/40">
            §07
          </span>
          <span className="h-px w-12 bg-ink/20" />
          <span className="font-sans text-[10px] uppercase tracking-wide-meta text-ink/40">
            Services
          </span>
        </div>

        <div className="grid grid-cols-12 gap-4 md:gap-8">
          {/* Service list */}
          <div className="col-span-12 md:col-span-8 flex flex-col">
            {services.map((service, i) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                data-cursor="open"
                className="group relative border-t border-ink/10 last:border-b py-5 md:py-8 cursor-pointer"
              >
                <div className="flex items-baseline justify-between">
                  <h3
                    className={`font-serif-display text-5xl md:text-8xl leading-none tracking-tight transition-all duration-500 ${
                      hovered === i ? 'text-vermilion translate-x-4' : 'text-ink'
                    }`}
                  >
                    {service.name}
                  </h3>
                  <span className="font-sans text-[10px] uppercase tracking-wide-meta text-ink/30">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <AnimatePresence>
                  {hovered === i && (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute right-0 top-1/2 -translate-y-1/2 font-sans text-[10px] uppercase tracking-wide-meta text-ink/40 hidden md:block"
                    >
                      {service.project} →
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Preview image */}
          <div className="col-span-12 md:col-span-4 md:col-start-9 relative min-h-[300px] md:min-h-0">
            <div className="sticky top-24 aspect-[3/4] overflow-hidden bg-soft-gray">
              <AnimatePresence mode="wait">
                {hovered !== null && (
                  <motion.div
                    key={hovered}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full"
                  >
                    <img
                      src={services[hovered].image}
                      alt={services[hovered].project}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute bottom-4 left-4 font-sans text-[10px] uppercase tracking-wide-meta text-ivory bg-ink/60 px-2 py-1">
                      {services[hovered].project}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              {hovered === null && (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="font-sans text-[10px] uppercase tracking-wide-meta text-ink/30 text-center px-4">
                    Hover a service
                    <br />
                    to see an example
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
