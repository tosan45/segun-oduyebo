import { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { DESTINY_PORTALS } from '../../../content.js';
import { EASE } from '../../../lib/motion.js';
import SectionHead from '../../../components/shared/SectionHead.jsx';
import { CheckIcon } from '../../../components/ui/Icons.jsx';

/* Tabs for each role. The green pill glides between tabs (shared layoutId)
   and the panel's list cascades in. Arrow keys move between tabs. */
export default function RolePortals() {
  const [active, setActive] = useState(0);
  const tabs = useRef([]);
  const portal = DESTINY_PORTALS[active];

  const onKey = e => {
    const d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
    if (!d) return;
    const n = (active + d + DESTINY_PORTALS.length) % DESTINY_PORTALS.length;
    setActive(n);
    tabs.current[n]?.focus();
  };

  return (
    <section className="px-4 sm:px-8 py-24 lg:py-36">
      <div className="mx-auto max-w-[1440px] grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <SectionHead title="One platform, five roles." intro="Each person sees only what their role needs." />
        </div>
        <div className="lg:col-span-8">
          <div className="flex flex-wrap gap-1 p-1.5 rounded-[1.75rem] bg-wash w-fit max-w-full" role="tablist" aria-label="Roles">
            {DESTINY_PORTALS.map((p, i) => (
              <button
                key={p.name}
                ref={el => { tabs.current[i] = el; }}
                id={`role-tab-${i}`}
                role="tab"
                aria-selected={i === active}
                aria-controls="role-panel"
                tabIndex={i === active ? 0 : -1}
                onClick={() => setActive(i)}
                onKeyDown={onKey}
                className={`relative rounded-full px-4 py-2.5 font-semibold transition-colors duration-300 ${i === active ? 'text-white' : 'text-brand'}`}
              >
                {i === active && (
                  <motion.span layoutId="role-pill" className="absolute inset-0 rounded-full bg-brand" transition={{ type: 'spring', stiffness: 380, damping: 32 }} />
                )}
                <span className="relative">{p.name}</span>
              </button>
            ))}
          </div>

          <div id="role-panel" role="tabpanel" aria-labelledby={`role-tab-${active}`} className="mt-10 min-h-64">
            <AnimatePresence mode="wait">
              <motion.div key={active} initial="hidden" animate="show" exit={{ opacity: 0, y: -10, transition: { duration: 0.2 } }} variants={{ show: { transition: { staggerChildren: 0.06 } } }}>
                <motion.h3 variants={ITEM} className="display text-d2 text-brand">{portal.name}</motion.h3>
                <ul className="mt-8 grid sm:grid-cols-2 gap-x-8">
                  {portal.items.map(it => (
                    <motion.li key={it} variants={ITEM} className="border-t border-brand/15 py-4 text-lg flex gap-3 items-start">
                      <CheckIcon className="size-5 mt-1 text-brand-3 shrink-0" />{it}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

const ITEM = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } }
};
