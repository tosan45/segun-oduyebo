import { motion, useAnimationFrame, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform, useVelocity } from 'motion/react';
import { wrap } from '../../lib/motion.js';

/* Endless ribbon. Scrolling faster pushes it faster.
   speed: percent of one copy per second. direction: 1 left, -1 right. */
export default function Marquee({ speed = 2, direction = 1, className = '', children }) {
  const reduce = useReducedMotion();
  const base = useMotionValue(0);
  const { scrollY } = useScroll();
  const velocity = useSpring(useVelocity(scrollY), { damping: 50, stiffness: 400 });
  const boost = useTransform(velocity, [0, 1000], [0, 5], { clamp: false });
  const x = useTransform(base, v => `${wrap(-50, 0, v)}%`);

  useAnimationFrame((_, delta) => {
    if (reduce) return;
    const step = direction * speed * (delta / 1000);
    base.set(base.get() - step * (1 + Math.abs(boost.get())));
  });

  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div className="flex w-max" style={{ x }}>
        <div className="flex shrink-0">{children}</div>
        <div className="flex shrink-0" aria-hidden="true">{children}</div>
      </motion.div>
    </div>
  );
}
