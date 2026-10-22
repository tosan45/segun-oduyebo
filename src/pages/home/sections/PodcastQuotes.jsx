import { useRef, useState } from 'react';
import { AnimatePresence, motion, useAnimationFrame, useInView, useMotionValue, useReducedMotion } from 'motion/react';
import { PODCAST_THEMES } from '../../../content.js';
import { EASE } from '../../../lib/motion.js';
import SplitText from '../../../components/motion/SplitText.jsx';
import Reveal from '../../../components/motion/Reveal.jsx';
import Button from '../../../components/ui/Button.jsx';

const SECONDS = 7;

/* Quotes from the four podcast themes rotate on a timer.
   Hovering or focusing the section pauses it; the bars show time left. */
export default function PodcastQuotes() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const inView = useInView(ref, { amount: 0.3 });
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const progress = useMotionValue(0);

  useAnimationFrame((_, delta) => {
    if (paused || reduce || !inView) return;
    const next = progress.get() + delta / (SECONDS * 1000);
    if (next >= 1) { progress.set(0); setActive(i => (i + 1) % PODCAST_THEMES.length); }
    else progress.set(next);
  });

  const choose = i => { progress.set(0); setActive(i); };
  const theme = PODCAST_THEMES[active];

  return (
    <section
      ref={ref}
      className="px-4 sm:px-8 py-28 lg:py-40 bg-wash"
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="mx-auto max-w-[1440px] grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <Reveal as="p" variant="fade" className="text-brand-2 font-semibold">The podcast</Reveal>
          <SplitText text="The Fulfillment Perspective" className="display text-d2 text-brand mt-4" />
          <Reveal as="p" className="text-lede text-mute mt-6">
            Faith-rooted personal formation for purposeful African living. Coming soon to Spotify, Apple Podcasts and YouTube.
          </Reveal>
          <Reveal className="mt-8"><Button to="podcast" variant="ink">Get episode notes</Button></Reveal>
        </div>

        <Reveal delay={0.2} className="lg:col-span-8 lg:pl-10 flex flex-col justify-between min-h-[22rem]">
          <div className="relative" aria-live="polite">
            <span className="absolute -top-10 -left-2 font-serif text-[9rem] leading-none text-ochre select-none" aria-hidden="true">“</span>
            <AnimatePresence mode="wait">
              <motion.figure
                key={active}
                className="relative"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.5, ease: EASE }}
              >
                <blockquote className="font-serif text-[clamp(1.6rem,3vw,2.75rem)] leading-[1.2] text-brand">{theme.quote}</blockquote>
                <figcaption className="mt-6 font-semibold text-brand-2">{theme.name}</figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          <div className="mt-10 flex gap-2" role="group" aria-label="Choose a theme">
            {PODCAST_THEMES.map((t, i) => (
              <button key={t.name} className="h-11 px-1" onClick={() => choose(i)} aria-label={t.name} aria-pressed={i === active}>
                <span className="block h-1 w-12 rounded-full bg-brand/15 overflow-hidden">
                  <motion.span className="block h-full w-full bg-brand origin-left" style={{ scaleX: i === active ? progress : i < active ? 1 : 0 }} />
                </span>
              </button>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
