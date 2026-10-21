import { motion, useReducedMotion, useSpring } from 'motion/react';

const SPRING = { stiffness: 260, damping: 18, mass: 0.6 };

/* Leans toward the pointer, springs back when it leaves */
export default function Magnetic({ strength = 0.32, children }) {
  const reduce = useReducedMotion();
  const x = useSpring(0, SPRING);
  const y = useSpring(0, SPRING);
  const move = e => {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - r.left - r.width / 2) * strength);
    y.set((e.clientY - r.top - r.height / 2) * strength);
  };
  const leave = () => { x.set(0); y.set(0); };
  return (
    <motion.span className="inline-block" style={{ x, y }} onPointerMove={move} onPointerLeave={leave}>
      {children}
    </motion.span>
  );
}
