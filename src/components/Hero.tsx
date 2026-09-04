import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useMousePosition } from '@/hooks/useScroll';
import { AfterDarkPoster, MiraHouseCard, TypeExperimentB } from './DesignMockups';

export function Hero() {
  const mouse = useMousePosition();
  const containerRef = useRef<HTMLDivElement>(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const springX = useSpring(mx, { damping: 40, stiffness: 200, mass: 0.5 });
  const springY = useSpring(my, { damping: 40, stiffness: 200, mass: 0.5 });

  const layer1X = useTransform(springX, [-0.5, 0.5], [-20, 20]);
  const layer1Y = useTransform(springY, [-0.5, 0.5], [-15, 15]);
  const layer2X = useTransform(springX, [-0.5, 0.5], [15, -15]);
  const layer2Y = useTransform(springY, [-0.5, 0.5], [10, -10]);
  const layer3X = useTransform(springX, [-0.5, 0.5], [-35, 35]);
  const layer3Y = useTransform(springY, [-0.5, 0.5], [-25, 25]);
  const textX = useTransform(springX, [-0.5, 0.5], [-8, 8]);
  const textY = useTransform(springY, [-0.5, 0.5], [-5, 5]);

  useEffect(() => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    mx.set((mouse.x - cx) / window.innerWidth);
    my.set((mouse.y - cy) / window.innerHeight);
  }, [mouse, mx, my]);

  const headlineLines = ['I DESIGN', 'THINGS', 'PEOPLE', 'REMEMBER.'];

  return (
    <section
      id="top"
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden bg-ivory grain pt-24 md:pt-20"
    >
      {/* Crop marks */}
      <div className="absolute top-6 left-6 md:top-10 md:left-10 z-20">
        <div className="w-4 h-4 border-l border-t border-ink/30" />
      </div>
      <div className="absolute top-6 right-6 md:top-10 md:right-10 z-20">
        <div className="w-4 h-4 border-r border-t border-ink/30" />
      </div>

      {/* Project number annotation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute top-24 right-6 md:top-32 md:right-10 z-20 text-right"
        style={{ x: layer1X, y: layer1Y }}
      >
        <div className="font-sans text-[10px] uppercase tracking-wide-meta text-ink/40">Portfolio</div>
        <div className="font-serif-display text-5xl md:text-7xl text-vermilion leading-none">2026</div>
      </motion.div>

      {/* Main grid */}
      <div className="relative z-10 grid grid-cols-12 gap-2 md:gap-4 px-6 md:px-10 pb-10 pt-8 md:pt-12 min-h-[calc(100vh-6rem)]">
        {/* Left metadata column */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="col-span-12 md:col-span-2 flex flex-col justify-end gap-4 md:gap-6"
        >
          <div className="hidden md:block">
            <div className="font-sans text-[10px] uppercase tracking-wide-meta text-ink/40 mb-1">Designer</div>
            <div className="font-sans text-xs text-ink leading-relaxed">Ananya Rao<br />Graphic Designer<br />Art Director</div>
          </div>
          <div className="hidden md:block">
            <div className="font-sans text-[10px] uppercase tracking-wide-meta text-ink/40 mb-1">Location</div>
            <div className="font-sans text-xs text-ink leading-relaxed">Bengaluru<br />India</div>
          </div>
        </motion.div>

        {/* Center — massive headline */}
        <div className="col-span-12 md:col-span-7 flex flex-col justify-center relative">
          <motion.div style={{ x: textX, y: textY }}>
            {headlineLines.map((line, i) => (
              <motion.h1
                key={line}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.12, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif-display text-[15vw] md:text-[10vw] leading-[0.85] tracking-tightest text-ink"
              >
                {line === 'REMEMBER.' ? <span>REMEMBER<span className="text-vermilion">.</span></span> : line}
              </motion.h1>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="absolute -bottom-4 left-0 flex items-center gap-2"
          >
            <span className="font-sans text-[10px] uppercase tracking-wide-meta text-ink/40">Scroll to Explore</span>
            <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }} className="text-ink/40">↓</motion.span>
          </motion.div>
        </div>

        {/* Right — graphic composition with design fragments */}
        <div className="col-span-12 md:col-span-3 relative flex flex-col justify-between min-h-[200px] md:min-h-0">
          {/* Vermilion circle */}
          <motion.div
            style={{ x: layer2X, y: layer2Y }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32"
          >
            <div className="w-full h-full rounded-full bg-vermilion" />
          </motion.div>

          {/* Design fragment — poster */}
          <motion.div
            style={{ x: layer3X, y: layer3Y }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="absolute top-20 md:top-24 right-0 w-24 md:w-28"
          >
            <AfterDarkPoster variant={1} className="w-full h-auto shadow-lg" />
          </motion.div>

          {/* Design fragment — business card */}
          <motion.div
            style={{ x: layer2X, y: layer2Y }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="absolute bottom-20 md:bottom-24 left-0 w-28 md:w-32 -rotate-6"
          >
            <MiraHouseCard className="w-full h-auto shadow-lg" />
          </motion.div>

          {/* Design fragment — type experiment */}
          <motion.div
            style={{ x: layer3X, y: layer3Y }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="absolute bottom-0 right-0 w-16 h-16 md:w-20 md:h-20"
          >
            <TypeExperimentB className="w-full h-auto shadow-md" />
          </motion.div>

          {/* Annotation */}
          <motion.div
            style={{ x: layer1X, y: layer1Y }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="absolute top-44 md:top-48 left-0"
          >
            <div className="font-sans text-[9px] uppercase tracking-wide-meta text-ink/40 max-w-[100px] leading-relaxed">
              Fig. 01 —<br />Selected works,<br />2024—2026
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom metadata bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 0.6 }}
        className="absolute bottom-0 left-0 right-0 border-t border-ink/10 px-6 md:px-10 py-3 flex flex-wrap items-center justify-between gap-2 bg-ivory/50 backdrop-blur-sm"
      >
        <div className="flex items-center gap-6 md:gap-10">
          <div className="font-sans text-[10px] uppercase tracking-wide-meta text-ink/50">8+ Years</div>
          <div className="hidden sm:block font-sans text-[10px] uppercase tracking-wide-meta text-ink/50">Brand / Type / Print / Digital</div>
        </div>
        <div className="font-sans text-[10px] uppercase tracking-wide-meta text-ink/50">I build visual identities that people remember.</div>
      </motion.div>
    </section>
  );
}
