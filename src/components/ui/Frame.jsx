import { useRef } from 'react';
import { motion } from 'motion/react';
import { PHOTOS } from '../../content.js';
import { useEnter, EASE, EASE_IO } from '../../lib/motion.js';
import Photo from './Photo.jsx';
import Parallax from '../motion/Parallax.jsx';

const HIDDEN = { clip: 'inset(100% 0% 0% 0%)', side: 'inset(0% 100% 0% 0%)', none: 'inset(0% 0% 0% 0%)' };

/* A photo that wipes into view, optionally drifting with scroll.
   arch gives it the doorway shape used for portraits. */
export default function Frame({ photo, className = '', ratio = 'aspect-[4/5]', arch = false, reveal = 'clip', parallax = 0, caption = false, eager = false }) {
  // Watch the figure, not the clipped box: a fully clipped element never reports as visible
  const ref = useRef(null);
  const on = useEnter(ref, { amount: 0.15 }) || reveal === 'none';
  const img = <Photo photo={photo} eager={eager} className="size-full object-cover" />;
  return (
    <figure ref={ref} className={className}>
      <motion.div
        className={`relative overflow-hidden ${ratio} ${arch ? 'arch' : 'rounded-md'} bg-wash`}
        initial={{ clipPath: HIDDEN[reveal] }}
        animate={{ clipPath: on ? HIDDEN.none : HIDDEN[reveal] }}
        transition={{ duration: 1.3, ease: EASE_IO }}
      >
        <motion.div
          className="absolute inset-0"
          initial={{ scale: reveal === 'none' ? 1 : 1.35 }}
          animate={{ scale: on ? 1 : 1.35 }}
          transition={{ duration: 1.8, ease: EASE }}
        >
          {parallax ? <Parallax amount={parallax}>{img}</Parallax> : img}
        </motion.div>
      </motion.div>
      {caption && <figcaption className="mt-3 text-sm text-mute">{PHOTOS[photo].caption}</figcaption>}
    </figure>
  );
}
