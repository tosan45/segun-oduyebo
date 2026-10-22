import { AnimatePresence, motion } from 'motion/react';
import { PHOTOS } from '../../../content.js';
import { EASE } from '../../../lib/motion.js';
import Photo from '../../../components/ui/Photo.jsx';

const KEYS = Object.keys(PHOTOS);
const BIG = new Set(['osunAudience', 'covenantStage', 'graduation', 'ddiTeam']);

export const visiblePhotos = filter => KEYS.filter(k => filter === 'all' || PHOTOS[k].group === filter);

/* Mosaic of photos. Filtering re-flows the grid with layout animation;
   opening a photo hands its image to the lightbox (shared layoutId). */
export default function PhotoGrid({ filter, openPhoto, onOpen }) {
  return (
    <section className="px-4 sm:px-8 pb-24 lg:pb-36">
      <motion.ul layout className="mx-auto max-w-[1440px] gallery-grid">
        <AnimatePresence mode="popLayout">
          {visiblePhotos(filter).map(k => {
            const p = PHOTOS[k];
            const shape = BIG.has(k) ? 'big' : p.h > p.w ? 'tall' : '';
            return (
              <motion.li
                key={k}
                layout
                className={shape}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.6, ease: EASE }}
              >
                <button
                  data-photo={k}
                  className="group relative block size-full overflow-hidden rounded-md bg-wash"
                  onClick={() => onOpen(k)}
                  aria-label={`View larger: ${p.alt}`}
                >
                  {openPhoto !== k && (
                    <Photo photo={k} layoutId={`photo-${k}`} className="size-full object-cover transition-transform duration-[1.2s] ease-(--ease-expo) group-hover:scale-105" />
                  )}
                  <span className="absolute inset-x-0 bottom-0 p-3 text-left text-sm font-semibold text-white bg-gradient-to-t from-brand/85 to-transparent opacity-0 translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 group-focus-visible:opacity-100">
                    {p.caption}
                  </span>
                </button>
              </motion.li>
            );
          })}
        </AnimatePresence>
      </motion.ul>
    </section>
  );
}
