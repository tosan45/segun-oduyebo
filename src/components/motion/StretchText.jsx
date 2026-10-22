import { useEffect, useRef } from 'react';
import { motion, animate, useMotionValue, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { useEnter, easeOut, EASE } from '../../lib/motion.js';

/* Archivo's width and weight shift together: condensed and light
   settles into normal width and heavy. */
const toStretch = v => `${75 + 25 * v}%`;
const toWeight = v => String(Math.round(250 + 600 * v));

/* Linked to scroll: settles as it travels up the screen */
export default function StretchText({ as = 'span', end = 'center center', style, children, ...rest }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', end] });
  const e = useTransform(scrollYProgress, easeOut);
  const fontStretch = useTransform(e, toStretch);
  const fontWeight = useTransform(e, toWeight);
  const M = motion[as];
  return <M ref={ref} style={reduce ? style : { ...style, fontStretch, fontWeight }} {...rest}>{children}</M>;
}

/* Plays once on first view */
export function StretchIn({ as = 'span', duration = 1.2, delay = 0, style, children, ...rest }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const on = useEnter(ref, { amount: 0.5 });
  const p = useMotionValue(reduce ? 1 : 0);
  const fontStretch = useTransform(p, toStretch);
  const fontWeight = useTransform(p, toWeight);
  const opacity = useTransform(p, v => Math.min(1, v * 2));
  useEffect(() => {
    if (on && !reduce) animate(p, 1, { duration, delay, ease: EASE });
  }, [on]);
  const M = motion[as];
  return <M ref={ref} style={{ ...style, fontStretch, fontWeight, opacity }} {...rest}>{children}</M>;
}
