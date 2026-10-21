import { createContext, useContext } from 'react';
import { useInView } from 'motion/react';

export const EASE = [0.16, 1, 0.3, 1];
export const EASE_IO = [0.76, 0, 0.24, 1];
export const BACK = [0.34, 1.56, 0.64, 1];
export const SPRING = { type: 'spring', stiffness: 260, damping: 22, mass: 0.6 };

/* False while the page curtain is still covering the screen,
   so entrances wait for the page to be visible. */
export const PageReady = createContext(true);

export function useEnter(ref, { amount = 0.2 } = {}) {
  const ready = useContext(PageReady);
  const inView = useInView(ref, { amount, once: true });
  return ready && inView;
}

export const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
export const easeOut = t => 1 - Math.pow(1 - t, 3);
export const wrap = (min, max, v) => {
  const r = max - min;
  return ((((v - min) % r) + r) % r) + min;
};
