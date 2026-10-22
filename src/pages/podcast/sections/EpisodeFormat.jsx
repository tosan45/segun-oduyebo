import { useLayoutEffect, useRef } from 'react';
import { motion, useMotionValue, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { PODCAST_FORMAT } from '../../../content.js';
import { useMediaQuery } from '../../../lib/useMediaQuery.js';
import SectionHead from '../../../components/shared/SectionHead.jsx';

/* Tension → Truth → Tool → Transformation. On large screens the
   section pins and the steps slide sideways as you scroll down. */
export default function EpisodeFormat() {
  const section = useRef(null);
  const track = useRef(null);
  const reduce = useReducedMotion();
  const large = useMediaQuery('(min-width: 1024px)');
  const distance = useMotionValue(0);
  const { scrollYProgress } = useScroll({ target: section, offset: ['start start', 'end end'] });
  const x = useTransform([scrollYProgress, distance], ([v, d]) => -d * v);

  useLayoutEffect(() => {
    const measure = () => distance.set(Math.max(0, track.current.scrollWidth - innerWidth));
    measure();
    addEventListener('resize', measure);
    return () => removeEventListener('resize', measure);
  }, [large]);

  const pinned = large && !reduce;

  return (
    <section ref={section} className={`brand on-dark relative ${pinned ? 'h-[300vh]' : ''}`}>
      <div className={`flex flex-col justify-center py-24 ${pinned ? 'sticky top-0 h-svh overflow-hidden lg:py-0' : ''}`}>
        <div className="px-4 sm:px-8 mx-auto w-full max-w-[1440px]">
          <SectionHead dark title="Every episode moves the same way." intro="From the problem people actually live with to the change that comes from practising the truth." />
        </div>
        <motion.ol ref={track} style={pinned ? { x } : undefined} className={`mt-14 flex gap-4 px-4 sm:px-8 ${pinned ? 'w-max' : 'flex-col lg:flex-row lg:flex-wrap'}`}>
          {PODCAST_FORMAT.map((f, i) => (
            <li key={f.name} className={`shrink-0 rounded-md bg-white/[.06] ring-1 ring-white/10 p-8 lg:p-12 flex flex-col justify-between ${pinned ? 'w-[38vw] min-h-[48vh]' : ''}`}>
              <span className="text-ochre font-semibold tabular-nums">Step {i + 1} of {PODCAST_FORMAT.length}</span>
              <span>
                <span className="display block text-[clamp(1.6rem,6vw,6rem)] leading-none mt-10 lg:mt-0">{f.name}</span>
                <span className="block font-serif text-xl text-white/75 mt-5 max-w-[22em]">{f.text}</span>
              </span>
            </li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
