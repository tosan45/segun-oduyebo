import { useRef } from 'react';
import { motion } from 'motion/react';
import { useEnter, EASE } from '../../lib/motion.js';

export const STAGGER_ITEM = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } }
};

/* Children built with <StaggerItem> enter one after another */
export default function Stagger({ as = 'div', gap = 0.08, delay = 0, amount = 0.1, children, ...rest }) {
  const ref = useRef(null);
  const on = useEnter(ref, { amount });
  const M = motion[as];
  return (
    <M
      ref={ref}
      initial="hidden"
      animate={on ? 'show' : 'hidden'}
      variants={{ hidden: {}, show: { transition: { staggerChildren: gap, delayChildren: delay } } }}
      {...rest}
    >
      {children}
    </M>
  );
}

export function StaggerItem({ as = 'div', variants = STAGGER_ITEM, children, ...rest }) {
  const M = motion[as];
  return <M variants={variants} {...rest}>{children}</M>;
}
