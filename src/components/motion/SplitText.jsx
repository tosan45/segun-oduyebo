import { Fragment, useRef } from 'react';
import { motion } from 'motion/react';
import { useEnter, EASE } from '../../lib/motion.js';

const WORD = {
  hidden: { y: '110%', rotate: 6 },
  show: { y: '0%', rotate: 0, transition: { duration: 1.1, ease: EASE } }
};

/* Headline whose words rise out of a mask. Use \n for a line break. */
export default function SplitText({ as = 'h2', text, delay = 0, ...rest }) {
  const ref = useRef(null);
  const on = useEnter(ref, { amount: 0.2 });
  const M = motion[as];
  return (
    <M
      ref={ref}
      initial="hidden"
      animate={on ? 'show' : 'hidden'}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.055, delayChildren: delay } } }}
      {...rest}
    >
      {text.split('\n').map((line, li) => (
        <Fragment key={li}>
          {li > 0 && <br />}
          {line.split(' ').map((word, wi) => (
            <Fragment key={wi}>
              <span className="w"><motion.span className="wi" variants={WORD}>{word}</motion.span></span>{' '}
            </Fragment>
          ))}
        </Fragment>
      ))}
    </M>
  );
}
