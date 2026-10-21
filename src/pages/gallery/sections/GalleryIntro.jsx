import { motion } from 'motion/react';
import { GALLERY_GROUPS } from '../../../content.js';
import SplitText from '../../../components/motion/SplitText.jsx';
import Reveal from '../../../components/motion/Reveal.jsx';
import { Dot } from '../../../components/ui/Mark.jsx';

/* Page title and filter chips; the active fill glides between chips */
export default function GalleryIntro({ filter, onFilter }) {
  return (
    <section className="px-4 sm:px-8 pt-32 lg:pt-40 pb-12">
      <div className="mx-auto max-w-[1440px]">
        <Reveal as="p" variant="fade" className="text-adire-2 font-semibold mb-6 flex items-center gap-3"><Dot />Gallery</Reveal>
        <SplitText as="h1" text="In the room." className="display text-mega text-adire" />
        <Reveal as="p" delay={0.3} className="text-lede text-mute mt-8 measure">
          Churches, schools, universities and conference halls: the places where the work happens.
        </Reveal>
        <Reveal delay={0.4} className="mt-12 flex flex-wrap gap-2" role="group" aria-label="Filter photos">
          {GALLERY_GROUPS.map(g => {
            const on = g.key === filter;
            return (
              <button
                key={g.key}
                aria-pressed={on}
                onClick={() => onFilter(g.key)}
                className={`relative rounded-full px-5 py-2.5 font-semibold bg-wash transition-colors duration-300 ${on ? 'text-white' : 'text-adire hover:bg-adire/10'}`}
              >
                {on && <motion.span layoutId="gallery-chip" className="absolute inset-0 rounded-full bg-adire" transition={{ type: 'spring', stiffness: 380, damping: 32 }} />}
                <span className="relative">{g.label}</span>
              </button>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
