import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useScroll';

export function Footer() {
  const { inView, ref } = useInView<HTMLDivElement>(0.3);

  const socials = ['Instagram', 'Behance', 'LinkedIn'];

  return (
    <footer ref={ref} className="relative bg-ink text-ivory py-16 md:py-24 px-6 md:px-10 grain">
      <div className="max-w-[1600px] mx-auto">
        {/* Large name */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12 md:mb-16"
        >
          <h2 className="font-serif-display text-[18vw] md:text-[14vw] leading-[0.8] tracking-tightest text-ivory">
            ANANYA RAO<span className="text-vermilion">®</span>
          </h2>
        </motion.div>

        {/* Footer columns */}
        <div className="grid grid-cols-12 gap-4 md:gap-8 border-t border-ivory/15 pt-8">
          {/* Identity */}
          <div className="col-span-6 md:col-span-3">
            <div className="font-sans text-[10px] uppercase tracking-wide-meta text-ivory/40 mb-3">
              Ananya Rao®
            </div>
            <div className="font-sans text-sm text-ivory/70 leading-relaxed">
              Graphic Designer
              <br />
              Art Director
            </div>
          </div>

          {/* Social */}
          <div className="col-span-6 md:col-span-3">
            <div className="font-sans text-[10px] uppercase tracking-wide-meta text-ivory/40 mb-3">
              Social
            </div>
            <div className="flex flex-col gap-1">
              {socials.map((social) => (
                <a
                  key={social}
                  href="#"
                  data-cursor="open"
                  className="font-sans text-sm text-ivory/70 hover:text-ivory transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Location */}
          <div className="col-span-6 md:col-span-3">
            <div className="font-sans text-[10px] uppercase tracking-wide-meta text-ivory/40 mb-3">
              Location
            </div>
            <div className="font-sans text-sm text-ivory/70 leading-relaxed">
              Bengaluru
              <br />
              India
            </div>
          </div>

          {/* Contact */}
          <div className="col-span-6 md:col-span-3">
            <div className="font-sans text-[10px] uppercase tracking-wide-meta text-ivory/40 mb-3">
              Contact
            </div>
            <a
              href="mailto:hello@ananyarao.studio"
              data-cursor="open"
              className="font-sans text-sm text-ivory/70 hover:text-ivory transition-colors"
            >
              hello@ananyarao.studio
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mt-12 pt-6 border-t border-ivory/10">
          <span className="font-sans text-[10px] uppercase tracking-wide-meta text-ivory/30">
            © 2026 Ananya Rao Studio
          </span>
          <span className="font-sans text-[10px] uppercase tracking-wide-meta text-ivory/30">
            Designed & art-directed with intent.
          </span>
          <a
            href="#top"
            data-cursor="open"
            className="font-sans text-[10px] uppercase tracking-wide-meta text-ivory/30 hover:text-ivory transition-colors"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
