import { useState } from 'react';
import { motion } from 'motion/react';
import { BOOKS } from '../../../content.js';
import { EASE } from '../../../lib/motion.js';
import SectionHead from '../../../components/shared/SectionHead.jsx';
import Stagger, { StaggerItem } from '../../../components/motion/Stagger.jsx';
import { CheckIcon } from '../../../components/ui/Icons.jsx';

const KEY = 'so-book-interest';
const load = () => { try { return JSON.parse(localStorage.getItem(KEY)) || []; } catch { return []; } };
const save = list => { try { localStorage.setItem(KEY, JSON.stringify(list)); } catch { /* storage unavailable */ } };

const TONES = {
  adire: 'adire text-white',
  ochre: 'bg-ochre text-ink',
  wash: 'bg-wash text-adire',
  ink: 'bg-ink text-ochre',
  'adire-2': 'bg-adire-2 text-white',
  'adire-3': 'bg-adire-3 text-white'
};

/* Placeholder cover until artwork is confirmed */
function Cover({ book }) {
  return (
    <div className={`relative aspect-[2/3] rounded-r-md rounded-l-sm p-6 flex flex-col justify-between shadow-[0_24px_50px_-20px_rgb(22_28_79/.55)] overflow-hidden ${TONES[book.tone]}`}>
      <span className="absolute inset-y-0 left-0 w-3 bg-black/15" aria-hidden="true" />
      <span className="absolute -right-16 -bottom-16 size-48 rounded-full border-[1.6rem] border-current opacity-15" aria-hidden="true" />
      <span className="relative display text-2xl leading-[1.02] pl-2">{book.title}</span>
      <span className="relative text-sm font-semibold pl-2 narrow">Segun Oduyebo</span>
    </div>
  );
}

export default function Library() {
  const [saved, setSaved] = useState(load);

  const toggle = title => {
    const next = saved.includes(title) ? saved.filter(t => t !== title) : [...saved, title];
    setSaved(next);
    save(next);
  };

  return (
    <section className="px-4 sm:px-8 py-24 lg:py-32 bg-wash">
      <div className="mx-auto max-w-[1440px]">
        <SectionHead title="The developing library." intro="Add a title to your interest list and you’ll be the first to know when it’s available." />
        <Stagger as="ul" className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-14 lg:gap-x-12">
          {BOOKS.map(b => {
            const on = saved.includes(b.title);
            return (
              <StaggerItem as="li" key={b.title} className="[perspective:1200px]">
                <motion.div whileHover={{ rotateY: -14, y: -8 }} transition={{ duration: 0.7, ease: EASE }} style={{ transformOrigin: 'left' }}>
                  <Cover book={b} />
                </motion.div>
                <h3 className="mt-6 text-xl font-bold text-adire leading-tight">{b.title}</h3>
                <p className="text-sm text-mute mt-1">Edition and availability to be confirmed</p>
                <motion.button
                  className={`btn ${on ? 'btn-ink' : 'btn-line'} !min-h-11 !px-4 mt-4 text-sm`}
                  aria-pressed={on}
                  onClick={() => toggle(b.title)}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 15 }}
                >
                  {on ? <><CheckIcon className="size-4" />On your interest list</> : 'Add to interest list'}
                </motion.button>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
