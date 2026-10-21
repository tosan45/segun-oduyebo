import { motion, useScroll, useSpring } from 'motion/react';

/* Thin ochre reading-progress bar along the top edge */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });
  return <motion.div aria-hidden="true" className="fixed inset-x-0 top-0 h-0.75 z-60 bg-ochre origin-left" style={{ scaleX }} />;
}
