import { useRef } from 'react';
import { motion } from 'motion/react';
import { useEnter, EASE, BACK } from '../../lib/motion.js';

const VARIANTS = {
  up: { hidden: { opacity: 0, y: 48 }, show: { opacity: 1, y: 0 } },
  fade: { hidden: { opacity: 0 }, show: { opacity: 1 } },
  line: { hidden: { scaleX: 0 }, show: { scaleX: 1 } },
  scale: { hidden: { opacity: 0, scale: 0.6 }, show: { opacity: 1, scale: 1 } }
};

const TIMING = {
  up: { duration: 1, ease: EASE },
  fade: { duration: 1.2, ease: 'easeOut' },
  line: { duration: 1.2, ease: EASE },
  scale: { duration: 0.9, ease: BACK }
};

/* Entrance on first view: up | fade | line | scale */
export default function Reveal({ as = 'div', variant = 'up', delay = 0, amount = 0.15, style, children, ...rest }) {
  const ref = useRef(null);
  const on = useEnter(ref, { amount });
  const M = motion[as];
  return (
    <M
      ref={ref}
      initial="hidden"
      animate={on ? 'show' : 'hidden'}
      variants={VARIANTS[variant]}
      transition={{ ...TIMING[variant], delay }}
      style={variant === 'line' ? { originX: 0, ...style } : style}
      {...rest}
    >
      {children}
    </M>
  );
}
