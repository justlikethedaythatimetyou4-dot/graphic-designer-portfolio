import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

type CursorState = 'default' | 'view' | 'open' | 'text';

export function CustomCursor() {
  const [state, setState] = useState<CursorState>('default');
  const [visible, setVisible] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { damping: 30, stiffness: 400, mass: 0.3 });
  const springY = useSpring(y, { damping: 30, stiffness: 400, mass: 0.3 });

  useEffect(() => {
    const isDesktop = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!isDesktop) return;

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);

      const target = e.target as HTMLElement;
      const cursorAttr = target.closest('[data-cursor]') as HTMLElement | null;
      if (cursorAttr) {
        setState(cursorAttr.dataset.cursor as CursorState);
      } else if (target.tagName === 'A' || target.closest('button')) {
        setState('open');
      } else {
        setState('default');
      }
    };

    const leave = () => setVisible(false);

    window.addEventListener('mousemove', move);
    document.addEventListener('mouseleave', leave);
    return () => {
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseleave', leave);
    };
  }, [x, y]);

  if (!visible) return null;

  const size = state === 'view' ? 80 : state === 'open' ? 60 : state === 'text' ? 24 : 8;

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none flex items-center justify-center"
      style={{ x: springX, y: springY }}
    >
      <motion.div
        className="flex items-center justify-center rounded-full"
        style={{
          width: size,
          height: size,
          marginLeft: -size / 2,
          marginTop: -size / 2,
        }}
        animate={{
          backgroundColor: state === 'view' || state === 'open' ? '#111111' : 'rgba(17,17,17,0.8)',
        }}
        transition={{ duration: 0.2 }}
      >
        {(state === 'view' || state === 'open') && (
          <span className="text-ivory text-[10px] font-sans font-medium tracking-wide uppercase">
            {state === 'view' ? 'View →' : 'Open →'}
          </span>
        )}
      </motion.div>
    </motion.div>
  );
}
