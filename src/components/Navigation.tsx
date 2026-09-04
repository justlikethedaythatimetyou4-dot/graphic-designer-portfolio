import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollY } from '@/hooks/useScroll';

export function Navigation() {
  const scrollY = useScrollY();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setScrolled(scrollY > 60);
  }, [scrollY]);

  const navItems = [
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div
          className={`transition-all duration-500 ${
            scrolled
              ? 'bg-ivory/80 backdrop-blur-md border-b border-ink/8'
              : 'bg-transparent'
          }`}
        >
          <nav className="flex items-center justify-between px-6 md:px-10 py-4 md:py-5">
            {/* Left — name */}
            <a
              href="#top"
              data-cursor="open"
              className="font-sans text-sm font-medium tracking-meta text-ink"
            >
              ANANYA RAO<span className="text-vermilion">®</span>
            </a>

            {/* Center — selected work */}
            <span className="hidden md:block absolute left-1/2 -translate-x-1/2 font-sans text-[11px] uppercase tracking-wide-meta text-ink/50">
              Selected Work
            </span>

            {/* Right — nav links + status */}
            <div className="hidden md:flex items-center gap-8">
              <span className="flex items-center gap-2 font-sans text-[10px] uppercase tracking-wide-meta text-ink/50">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-vermilion opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-vermilion" />
                </span>
                Available for Select Projects
              </span>
              <div className="flex items-center gap-6">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    data-cursor="open"
                    className="font-sans text-sm font-medium text-ink hover:text-vermilion transition-colors duration-300"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex flex-col gap-1.5"
              aria-label="Menu"
            >
              <span
                className={`block h-px w-6 bg-ink transition-all ${
                  menuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`block h-px w-6 bg-ink transition-all ${
                  menuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block h-px w-6 bg-ink transition-all ${
                  menuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 left-0 right-0 z-40 bg-ivory border-b border-ink/10 md:hidden"
          >
            <div className="flex flex-col px-6 py-6 gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-serif-display text-3xl text-ink"
                >
                  {item.label}
                </a>
              ))}
              <span className="mt-2 flex items-center gap-2 font-sans text-[10px] uppercase tracking-wide-meta text-ink/50">
                <span className="h-2 w-2 rounded-full bg-vermilion" />
                Available for Select Projects
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
