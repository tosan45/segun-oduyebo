import { useId, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { SPEAKING_FAQ } from '../../../content.js';
import { EASE } from '../../../lib/motion.js';
import SectionHead from '../../../components/shared/SectionHead.jsx';
import Reveal from '../../../components/motion/Reveal.jsx';
import { PlusIcon } from '../../../components/ui/Icons.jsx';

function Question({ q, a }) {
  const [open, setOpen] = useState(false);
  const id = useId();
  return (
    <Reveal className="border-t border-brand/15">
      <h3>
        <button
          className="w-full flex justify-between items-center gap-6 py-6 text-left text-xl lg:text-2xl font-bold text-brand"
          aria-expanded={open}
          aria-controls={id}
          onClick={() => setOpen(o => !o)}
        >
          {q}
          <motion.span className="size-10 shrink-0 rounded-full bg-wash grid place-items-center" animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.5, ease: EASE }}>
            <PlusIcon />
          </motion.span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={id}
            className="overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <p className="text-read text-mute pb-8 measure">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </Reveal>
  );
}

export default function Faq() {
  return (
    <section className="px-4 sm:px-8 py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5"><SectionHead title="Questions organisers ask." /></div>
        <div className="lg:col-span-6 lg:col-start-7 border-b border-brand/15">
          {SPEAKING_FAQ.map(f => <Question key={f.q} {...f} />)}
        </div>
      </div>
    </section>
  );
}
