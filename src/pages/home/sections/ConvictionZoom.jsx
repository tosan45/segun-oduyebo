import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { CONVICTION, PHOTOS } from '../../../content.js';
import { clamp, easeOut } from '../../../lib/motion.js';
import Photo from '../../../components/ui/Photo.jsx';

/* One person to a whole room: an arch around a close-up opens to
   full screen and gives way to a packed hall, while the core
   conviction lights up word by word. Pinned for 280vh of scroll. */
export default function ConvictionZoom() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress: p } = useScroll({ target: ref, offset: ['start start', 'end end'] });

  const clipPath = useTransform(p, v => {
    const vw = innerWidth, vh = innerHeight;
    const w0 = Math.min(vw * (vw < 768 ? 0.62 : 0.34), 380), h0 = w0 * 1.3;
    const e = easeOut(clamp(v / 0.55));
    const ix = ((vw - w0) / 2) * (1 - e), iy = ((vh - h0) / 2) * (1 - e), r = (w0 / 2) * (1 - e);
    return `inset(${iy}px ${ix}px ${iy}px ${ix}px round ${r}px ${r}px ${r * 0.1}px ${r * 0.1}px)`;
  });
  const scaleA = useTransform(p, [0, 0.55], [1.35, 1]);
  const opacityB = useTransform(p, [0.3, 0.55], [0, 1]);
  const scaleB = useTransform(p, [0.3, 0.55], [1.12, 1]);
  const shade = useTransform(p, [0.35, 0.55], [0, 1]);
  const caption = useTransform(p, [0.85, 0.95], [0, 1]);

  const words = CONVICTION.split(' ');

  return (
    <section id="conviction" ref={ref} className="relative h-[280vh]" aria-label="Core conviction">
      <div className="sticky top-0 h-svh overflow-hidden">
        <motion.div className="absolute inset-0" style={reduce ? undefined : { clipPath }}>
          <Photo photo="closeup" className="absolute inset-0 size-full object-cover" style={reduce ? undefined : { scale: scaleA }} animated />
          <Photo photo="osunAudience" className="absolute inset-0 size-full object-cover" style={reduce ? undefined : { opacity: opacityB, scale: scaleB }} animated />
          <motion.div className="absolute inset-0 bg-gradient-to-t from-adire via-adire/55 to-adire/20" style={reduce ? undefined : { opacity: shade }} />
        </motion.div>
        <div className="absolute inset-0 flex items-end px-4 sm:px-8 pb-16 lg:pb-24 pointer-events-none">
          <div className="mx-auto w-full max-w-[1440px]">
            <blockquote className="display text-d1 text-white max-w-[22ch]">
              {words.map((w, i) => (
                <QuoteWord key={i} progress={p} index={i} count={words.length} still={reduce}>{w}</QuoteWord>
              ))}
            </blockquote>
            <motion.p className="mt-6 text-white/70" style={reduce ? undefined : { opacity: caption }}>{PHOTOS.osunAudience.caption}</motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}

function QuoteWord({ progress, index, count, still, children }) {
  const start = 0.45 + (0.42 * index) / (count * 1.2);
  const end = 0.45 + (0.42 * (index + 1)) / (count * 1.2);
  const opacity = useTransform(progress, [start, end], [0, 1]);
  const y = useTransform(progress, [start, end], ['40%', '0%']);
  return (
    <>
      <span className="w"><motion.span className="wi" style={still ? undefined : { opacity, y }}>{children}</motion.span></span>{' '}
    </>
  );
}
