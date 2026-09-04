import { motion } from 'framer-motion';
import { clients, testimonials } from '@/data/portfolio';
import { useInView } from '@/hooks/useScroll';

export function ClientsTestimonials() {
  const { inView, ref } = useInView<HTMLDivElement>(0.1);

  return (
    <section ref={ref} className="relative bg-ink text-ivory py-24 md:py-40 px-6 md:px-10 grain">
      <div className="max-w-[1600px] mx-auto">
        {/* Client list */}
        <div className="flex items-center gap-3 mb-12 md:mb-20">
          <span className="font-sans text-[10px] uppercase tracking-wide-meta text-ivory/40">
            §08
          </span>
          <span className="h-px w-12 bg-ivory/20" />
          <span className="font-sans text-[10px] uppercase tracking-wide-meta text-ivory/40">
            Selected Collaborations
          </span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="font-serif-display text-4xl md:text-6xl text-ivory/90 mb-12 md:mb-16"
        >
          Selected Collaborations
        </motion.h2>

        <div className="flex flex-col gap-0 mb-24 md:mb-40">
          {clients.map((client, i) => (
            <motion.div
              key={client}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="group border-t border-ivory/10 last:border-b py-4 md:py-5 flex items-baseline justify-between"
              data-cursor="open"
            >
              <span className="font-serif-display text-3xl md:text-5xl text-ivory/70 group-hover:text-ivory transition-colors duration-300">
                {client}
              </span>
              <span className="font-sans text-[10px] uppercase tracking-wide-meta text-ivory/30">
                {String(i + 1).padStart(2, '0')} / {String(clients.length).padStart(2, '0')}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="flex items-center gap-3 mb-12 md:mb-20">
          <span className="font-sans text-[10px] uppercase tracking-wide-meta text-ivory/40">
            §09
          </span>
          <span className="h-px w-12 bg-ivory/20" />
          <span className="font-sans text-[10px] uppercase tracking-wide-meta text-ivory/40">
            Words from Collaborators
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.15, duration: 0.6 }}
              className="flex flex-col gap-6"
            >
              <div className="font-serif-display text-vermilion text-6xl leading-none">
                &ldquo;
              </div>
              <p className="font-serif-display text-xl md:text-2xl text-ivory leading-relaxed -mt-4">
                {t.quote}
              </p>
              <div className="border-t border-ivory/15 pt-4">
                <div className="font-sans text-sm text-ivory font-medium">
                  {t.name}
                </div>
                <div className="font-sans text-[10px] uppercase tracking-wide-meta text-ivory/40 mt-1">
                  {t.title}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
