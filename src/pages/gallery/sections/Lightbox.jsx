import { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { PHOTOS } from '../../../content.js';
import { EASE, EASE_IO } from '../../../lib/motion.js';
import Photo from '../../../components/ui/Photo.jsx';
import { ArrowIcon, CloseIcon } from '../../../components/ui/Icons.jsx';
import { visiblePhotos } from './PhotoGrid.jsx';

/* The tapped photo grows out of its tile into the viewer and returns on close */
export default function Lightbox({ filter, photo, onChange, onClose }) {
  const closeRef = useRef(null);

  const step = d => {
    const list = visiblePhotos(filter);
    onChange(list[(list.indexOf(photo) + d + list.length) % list.length]);
  };

  useEffect(() => {
    if (!photo) return;
    closeRef.current?.focus();
    document.documentElement.style.overflow = 'hidden';
    const onKey = e => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    addEventListener('keydown', onKey);
    return () => {
      removeEventListener('keydown', onKey);
      document.documentElement.style.overflow = '';
    };
  }, [photo, filter]);

  // Return focus to the tile for the photo being closed
  const close = () => {
    const tile = document.querySelector(`[data-photo="${photo}"]`);
    onClose();
    requestAnimationFrame(() => tile?.focus());
  };

  return (
    <AnimatePresence>
      {photo && (
        <motion.div
          key="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          className="fixed inset-0 z-90 grid place-items-center"
          initial={{ backgroundColor: 'rgba(11,36,24,0)' }}
          animate={{ backgroundColor: 'rgba(11,36,24,.94)' }}
          exit={{ backgroundColor: 'rgba(11,36,24,0)' }}
          transition={{ duration: 0.5 }}
          onClick={e => { if (e.target === e.currentTarget) close(); }}
        >
          <figure className="m-0 flex flex-col items-center pointer-events-none">
            <Photo
              photo={photo}
              layoutId={`photo-${photo}`}
              transition={{ duration: 0.7, ease: EASE_IO }}
              className="max-h-[78dvh] max-w-[92vw] min-h-[min(62dvh,60vw)] w-auto h-auto rounded-md object-contain pointer-events-auto"
            />
            <motion.figcaption
              key={photo}
              className="mt-4 text-white/85 text-center px-4"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: EASE }}
            >
              {PHOTOS[photo].caption}
            </motion.figcaption>
          </figure>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <button ref={closeRef} className="absolute top-4 right-4 btn btn-line on-dark !text-white !min-h-11" onClick={close}>Close<CloseIcon /></button>
            <button className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 size-12 rounded-full bg-white/10 text-white grid place-items-center hover:bg-white/20" onClick={() => step(-1)} aria-label="Previous photo">
              <ArrowIcon className="size-5 rotate-180" />
            </button>
            <button className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 size-12 rounded-full bg-white/10 text-white grid place-items-center hover:bg-white/20" onClick={() => step(1)} aria-label="Next photo">
              <ArrowIcon className="size-5" />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
