import { useImperativeHandle, useRef } from 'react';
import { animate, useReducedMotion } from 'motion/react';
import { EASE, EASE_IO, SPRING } from '../../lib/motion.js';

/* Brand-green panel that covers the screen between pages.
   The parent drives it through ref: intro(), cover(label), uncover(). */
export default function Curtain({ ref }) {
  const reduce = useReducedMotion();
  const panel = useRef(null);
  const label = useRef(null);
  const mark = useRef(null);

  // Archivo opens from condensed-light to wide-heavy
  const stretchIn = (duration, delay) => animate(0, 1, {
    duration, delay, ease: EASE,
    onUpdate: v => {
      const el = label.current;
      el.style.opacity = Math.min(1, v * 2);
      el.style.fontStretch = `${75 + 25 * v}%`;
      el.style.fontWeight = Math.round(200 + 600 * v);
    }
  });

  useImperativeHandle(ref, () => ({
    async intro() {
      label.current.textContent = 'Segun Oduyebo';
      if (reduce) return;
      mark.current.style.display = 'block';
      animate(mark.current, { scale: [0, 1] }, { ...SPRING, delay: 0.1 });
      await stretchIn(1.1, 0.2);
    },
    async cover(text) {
      label.current.textContent = text;
      panel.current.style.visibility = 'visible';
      mark.current.style.display = 'none';
      if (reduce) return;
      stretchIn(0.7, 0.15);
      await animate(panel.current, { clipPath: ['inset(100% 0% 0% 0%)', 'inset(0% 0% 0% 0%)'] }, { duration: 0.55, ease: EASE_IO });
    },
    async uncover() {
      if (!reduce) await animate(panel.current, { clipPath: ['inset(0% 0% 0% 0%)', 'inset(0% 0% 100% 0%)'] }, { duration: 0.75, ease: EASE_IO });
      panel.current.style.visibility = 'hidden';
    }
  }));

  return (
    <div ref={panel} className="brand fixed inset-0 z-80 grid place-items-center" aria-hidden="true">
      <div className="flex flex-col items-center gap-6 px-6 text-center">
        <span ref={mark} className="hidden size-16 bg-ochre" style={{ borderRadius: '999px 999px 8px 8px' }} />
        <span ref={label} className="text-white text-[clamp(2.2rem,7vw,6rem)] leading-none opacity-0" />
      </div>
    </div>
  );
}
