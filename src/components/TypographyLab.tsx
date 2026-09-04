import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useMousePosition, useInView } from '@/hooks/useScroll';

export function TypographyLab() {
  const mouse = useMousePosition();
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { inView, ref: inViewRef } = useInView<HTMLDivElement>(0.15);
  const [activeChar, setActiveChar] = useState(0);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const springX = useSpring(mx, { damping: 50, stiffness: 150, mass: 0.8 });
  const springY = useSpring(my, { damping: 50, stiffness: 150, mass: 0.8 });

  const rotate = useTransform(springX, [-0.5, 0.5], [-8, 8]);
  const scaleY = useTransform(springY, [-0.5, 0.5], [0.95, 1.05]);

  useEffect(() => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    mx.set((mouse.x - cx) / window.innerWidth);
    my.set((mouse.y - cy) / window.innerHeight);
  }, [mouse, mx, my]);

  const chars = ['A', 'a', 'B', 'b', 'C', 'c', '1', '2', '3'];

  return (
    <section
      ref={(node: HTMLElement | null) => {
        sectionRef.current = node as HTMLDivElement | null;
        inViewRef(node);
      }}
      className="relative bg-ivory py-24 md:py-40 px-6 md:px-10 overflow-hidden grain"
    >
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-12 md:mb-20">
          <span className="font-sans text-[10px] uppercase tracking-wide-meta text-ink/40">
            §04
          </span>
          <span className="h-px w-12 bg-ink/20" />
          <span className="font-sans text-[10px] uppercase tracking-wide-meta text-ink/40">
            Typography Lab
          </span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="font-serif-display text-5xl md:text-8xl leading-[0.9] tracking-tightest text-ink mb-16 md:mb-24"
        >
          Type is not
          <br />
          <span className="text-vermilion italic">decoration.</span>
        </motion.h2>

        {/* Interactive character display */}
        <div className="grid grid-cols-12 gap-4 md:gap-8 items-center">
          {/* Large interactive letter */}
          <div className="col-span-12 md:col-span-7 relative">
            <motion.div
              style={{ rotate, scaleY }}
              className="font-serif-display text-[30vw] md:text-[22vw] leading-[0.8] tracking-tightest text-ink select-none"
              data-cursor="text"
              onMouseEnter={() => setActiveChar(1)}
              onMouseLeave={() => setActiveChar(0)}
            >
              {chars[activeChar] || 'A'}
            </motion.div>
            {/* Annotation */}
            <div className="absolute top-0 right-0 font-sans text-[10px] uppercase tracking-wide-meta text-ink/30">
              Instrument Serif
              <br />
              400 / Regular
              <br />
              Display
            </div>
          </div>

          {/* Character grid */}
          <div className="col-span-12 md:col-span-5">
            <div className="grid grid-cols-3 gap-2 md:gap-3">
              {chars.map((char, i) => (
                <button
                  key={`${char}-${i}`}
                  onClick={() => setActiveChar(i)}
                  data-cursor="text"
                  className={`aspect-square border flex items-center justify-center transition-all duration-300 ${
                    activeChar === i
                      ? 'border-ink bg-ink text-ivory'
                      : 'border-ink/15 text-ink/60 hover:border-ink/40'
                  }`}
                >
                  <span className="font-serif-display text-5xl md:text-6xl">
                    {char}
                  </span>
                </button>
              ))}
            </div>

            {/* Type specimen text */}
            <div className="mt-8 border-t border-ink/10 pt-6">
              <div className="font-sans text-[10px] uppercase tracking-wide-meta text-ink/40 mb-3">
                Specimen
              </div>
              <p className="font-serif-display text-lg md:text-xl text-ink leading-relaxed">
                The quick brown fox jumps over the lazy dog. 0123456789 —
                ABCDEFGHIJKLMNOPQRSTUVWXYZ.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom type treatments */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 md:mt-24 border-t border-ink/10 pt-12">
          <div>
            <div className="font-sans text-[10px] uppercase tracking-wide-meta text-ink/40 mb-3">
              Display
            </div>
            <p className="font-serif-display text-3xl md:text-4xl text-ink leading-tight">
              Form meets function.
            </p>
          </div>
          <div>
            <div className="font-sans text-[10px] uppercase tracking-wide-meta text-ink/40 mb-3">
              Body
            </div>
            <p className="font-sans text-sm text-ink/70 leading-relaxed">
              Space Grotesk is used for body copy, captions, and metadata. It
              provides a quiet, readable counterpoint to the display serif
              without competing for attention.
            </p>
          </div>
          <div>
            <div className="font-sans text-[10px] uppercase tracking-wide-meta text-ink/40 mb-3">
              Labels
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-sans text-[10px] uppercase tracking-wide-meta text-ink/60">
                Section 04 / Typography
              </span>
              <span className="font-sans text-[10px] uppercase tracking-wide-meta text-ink/40">
                Fig. 03 — Interactive specimen
              </span>
              <span className="font-sans text-[10px] uppercase tracking-wide-meta text-vermilion">
                Hover to interact
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
