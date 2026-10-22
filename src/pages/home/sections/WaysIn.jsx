import { useState } from 'react';
import { AnimatePresence, motion, useSpring } from 'motion/react';
import { PHOTOS, WAYS_IN } from '../../../content.js';
import { href } from '../../../lib/router.js';
import { EASE } from '../../../lib/motion.js';
import SectionHead from '../../../components/shared/SectionHead.jsx';
import Reveal from '../../../components/motion/Reveal.jsx';
import { ArrowIcon } from '../../../components/ui/Icons.jsx';

const FOLLOW = { stiffness: 160, damping: 20 };

/* Big list of entry points; on desktop a photo follows the pointer */
export default function WaysIn() {
  const x = useSpring(0, FOLLOW);
  const y = useSpring(0, FOLLOW);
  const rotate = useSpring(0, FOLLOW);
  const [photo, setPhoto] = useState(null);
  const [shown, setShown] = useState(false);

  const follow = e => {
    x.set(e.clientX - 144);
    y.set(e.clientY - 180);
    rotate.set(Math.max(-12, Math.min(12, (e.movementX || 0) * 0.6)));
  };
  const enter = (e, key) => {
    if (!shown) { x.jump(e.clientX - 144); y.jump(e.clientY - 180); }
    setPhoto(key);
    setShown(true);
  };

  return (
    <section className="px-4 sm:px-8 py-28 lg:py-40">
      <div className="mx-auto max-w-[1440px]">
        <SectionHead title="Find your way in." intro="Every part of the work starts in the same place: people. Pick the door that fits where you are." />
        <ul className="mt-16 border-b border-brand/15" onPointerMove={follow} onPointerLeave={() => setShown(false)}>
          {WAYS_IN.map(w => (
            <Reveal as="li" key={w.route} className="border-t border-brand/15">
              <a
                className="group grid md:grid-cols-12 gap-2 md:gap-8 items-center py-7 md:py-9 text-brand"
                href={href(w.route)}
                onPointerEnter={e => enter(e, w.photo)}
              >
                <span className="md:col-span-7 display stretch-row text-[clamp(1.8rem,4vw,3.75rem)] leading-none group-hover:text-brand-3">{w.name}</span>
                <span className="md:col-span-4 text-mute">{w.text}</span>
                <span className="hidden md:grid md:col-span-1 justify-self-end size-12 rounded-full border border-brand/25 place-items-center transition-all duration-500 group-hover:bg-ochre group-hover:border-ochre group-hover:-rotate-45">
                  <ArrowIcon className="size-5" />
                </span>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>

      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-30 w-72 aspect-[4/5] overflow-hidden arch hidden lg:block"
        style={{ x, y, rotate }}
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: shown ? 1 : 0, scale: shown ? 1 : 0.6 }}
        transition={{ duration: 0.45, ease: EASE }}
      >
        <AnimatePresence initial={false}>
          {photo && (
            <motion.img
              key={photo}
              src={PHOTOS[photo].src}
              alt=""
              className="absolute inset-0 size-full object-cover"
              initial={{ opacity: 0, scale: 1.15 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: EASE }}
            />
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
