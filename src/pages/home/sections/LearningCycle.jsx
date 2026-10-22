import { useRef, useState } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll } from 'motion/react';
import { CYCLE } from '../../../content.js';
import { EASE } from '../../../lib/motion.js';
import { useMediaQuery } from '../../../lib/useMediaQuery.js';
import SplitText from '../../../components/motion/SplitText.jsx';
import Reveal from '../../../components/motion/Reveal.jsx';

const OCHRE = '#F4BA5C';
const BRAND = '#115C38';

/* Six stages advance as you scroll; the ring draws itself.
   Pinned on large screens, a plain list on small ones. */
export default function LearningCycle() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const large = useMediaQuery('(min-width: 1024px)');
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const [active, setActive] = useState(0);

  useMotionValueEvent(scrollYProgress, 'change', v => {
    setActive(Math.min(CYCLE.length - 1, Math.floor(v * CYCLE.length)));
  });

  return (
    <section ref={ref} className="brand on-dark relative lg:h-[420vh]" aria-labelledby="cycle-title">
      <div className="lg:sticky top-0 lg:h-svh px-4 sm:px-8 py-24 lg:py-0 flex items-center">
        <div className="mx-auto w-full max-w-[1440px] grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <SplitText id="cycle-title" text="A cycle of learning, not a one-off event." className="display text-d2" />
            <Reveal as="p" className="text-lede text-white/70 mt-6 measure">
              Six stages carry an idea from a question about real people to a change you can see, and back to a better question.
            </Reveal>
            <ol className="mt-10 space-y-1">
              {CYCLE.map((s, i) => (
                <motion.li
                  key={s.name}
                  className="flex gap-4 items-baseline py-2 border-b border-white/10"
                  animate={{ opacity: !large || i === active ? 1 : 0.4 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="text-ochre font-semibold tabular-nums w-6">{i + 1}</span>
                  <span>
                    <span className="font-semibold text-lg wide">{s.name}</span>
                    <span className="block text-white/70 lg:hidden mt-1">{s.text}</span>
                  </span>
                </motion.li>
              ))}
            </ol>
          </div>

          {large && (
            <div className="lg:col-span-7 flex justify-center">
              <div className="relative size-[min(70vh,560px)]">
                <svg viewBox="0 0 200 200" className="absolute inset-0 size-full -rotate-90" aria-hidden="true">
                  <circle cx="100" cy="100" r="86" fill="none" stroke="rgb(255 255 255 / .12)" strokeWidth="1.5" />
                  <motion.circle cx="100" cy="100" r="86" fill="none" stroke={OCHRE} strokeWidth="2.5" strokeLinecap="round" style={{ pathLength: reduce ? 1 : scrollYProgress }} />
                </svg>
                {CYCLE.map((s, i) => {
                  const a = (i / CYCLE.length) * Math.PI * 2 - Math.PI / 2;
                  const on = i <= active;
                  return (
                    <motion.span
                      key={s.name}
                      className="absolute -translate-x-1/2 -translate-y-1/2 size-4 rounded-full border-2"
                      style={{ left: `${50 + 43 * Math.cos(a)}%`, top: `${50 + 43 * Math.sin(a)}%` }}
                      animate={{ scale: i === active ? 1.8 : 1, backgroundColor: on ? OCHRE : BRAND, borderColor: on ? OCHRE : 'rgba(255,255,255,.4)' }}
                      transition={{ duration: 0.5, ease: EASE }}
                    />
                  );
                })}
                <div className="absolute inset-[18%] grid place-items-center text-center" aria-live="polite">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={active}
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.35, ease: EASE }}
                    >
                      <p className="text-ochre font-semibold tabular-nums">{active + 1} of {CYCLE.length}</p>
                      <p className="display text-d2 mt-2">{CYCLE[active].name}</p>
                      <p className="font-serif text-xl text-white/75 mt-4 max-w-[18em] mx-auto">{CYCLE[active].text}</p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
