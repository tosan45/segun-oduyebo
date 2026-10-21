import { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { NAV } from '../../content.js';
import { href } from '../../lib/router.js';
import { EASE, EASE_IO } from '../../lib/motion.js';
import Mark from '../ui/Mark.jsx';
import { ArrowIcon, CloseIcon } from '../ui/Icons.jsx';

const ITEM = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } }
};

/* Full-screen menu that opens as a circle from the Menu button */
export default function Menu({ open, origin, onClose }) {
  const closeRef = useRef(null);
  const at = `${origin.x}px ${origin.y}px`;

  useEffect(() => {
    if (!open) return;
    document.documentElement.style.overflow = 'hidden';
    closeRef.current?.focus();
    const onKey = e => { if (e.key === 'Escape') close(); };
    addEventListener('keydown', onKey);
    return () => {
      document.documentElement.style.overflow = '';
      removeEventListener('keydown', onKey);
    };
  }, [open]);

  const close = () => {
    onClose();
    document.getElementById('menu-open')?.focus();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id="menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="fixed inset-0 z-70 adire on-dark overflow-y-auto"
          initial={{ clipPath: `circle(0px at ${at})` }}
          animate={{ clipPath: `circle(150vmax at ${at})` }}
          exit={{ clipPath: `circle(0px at ${at})` }}
          transition={{ duration: 0.8, ease: EASE_IO }}
        >
          <motion.div
            className="mx-auto max-w-[1440px] px-4 sm:px-8 min-h-full flex flex-col"
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.035, delayChildren: 0.25 } } }}
          >
            <div className="h-20 flex items-center justify-between">
              <a href="#/" onClick={onClose} className="flex items-center gap-3">
                <Mark className="size-10 bg-ochre text-adire" />
                <span className="font-bold text-lg wide">Segun Oduyebo</span>
              </a>
              <button ref={closeRef} className="btn btn-line !min-h-11 !px-5" onClick={close}>Close<CloseIcon /></button>
            </div>

            <div className="flex-1 grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 py-12 content-center">
              {NAV.map(group => (
                <div key={group.group}>
                  <motion.p variants={ITEM} className="text-ochre font-semibold mb-4">{group.group}</motion.p>
                  <ul className="space-y-1">
                    {group.links.map(([route, label]) => (
                      <motion.li key={label} variants={ITEM}>
                        <a className="group block py-1" href={href(route)} onClick={onClose}>
                          <span className="stretch-row display text-d3 inline-block">{label}</span>
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <motion.div variants={ITEM} className="py-8 border-t border-white/15 flex flex-wrap gap-x-8 gap-y-3 justify-between items-center">
              <p className="text-white/70">Developing people who can strengthen communities, institutions and society.</p>
              <a className="btn btn-ochre" href="#/speaking" onClick={onClose}>Invite Segun to speak<ArrowIcon /></a>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
