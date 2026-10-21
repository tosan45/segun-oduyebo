import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

function Word({ progress, range, children }) {
  const opacity = useTransform(progress, range, [0.14, 1]);
  return <><motion.span style={{ opacity }}>{children}</motion.span>{' '}</>;
}

/* Words light up one by one as the text scrolls past */
export default function ScrubText({ as = 'p', text, offset = ['start 85%', 'end 45%'], ...rest }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset });
  const words = text.split(' ');
  const Tag = as;
  return (
    <Tag ref={ref} {...rest}>
      {words.map((w, i) => (
        <Word key={i} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]}>{w}</Word>
      ))}
    </Tag>
  );
}
