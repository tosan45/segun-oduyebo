import { useState } from 'react';
import { motion, useMotionValueEvent, useScroll } from 'motion/react';
import { PRIMARY_NAV } from '../../content.js';
import { href } from '../../lib/router.js';
import { EASE } from '../../lib/motion.js';
import Mark from '../ui/Mark.jsx';

/* Fixed header: turns solid after scrolling, tucks away going down, returns going up */
export default function Header({ current, menuOpen, onOpenMenu }) {
  const { scrollY } = useScroll();
  const [solid, setSolid] = useState(false);
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, 'change', y => {
    const prev = scrollY.getPrevious() ?? 0;
    setSolid(y > 24);
    if (y > 400 && y > prev + 4) setHidden(true);
    else if (y < prev - 4 || y < 400) setHidden(false);
  });

  const open = e => {
    const r = e.currentTarget.getBoundingClientRect();
    onOpenMenu({ x: r.left + r.width / 2, y: r.top + r.height / 2 });
  };

  return (
    <motion.header
      className={`site-header fixed inset-x-0 top-0 z-50 ${solid ? 'is-solid' : ''}`}
      animate={{ y: hidden && !menuOpen ? '-110%' : '0%' }}
      transition={{ duration: 0.5, ease: EASE }}
    >
      <div className="mx-auto max-w-[1440px] h-20 px-4 sm:px-8 flex items-center justify-between gap-6">
        <a href="#/" className="flex items-center gap-3 text-brand" aria-label="Segun Oduyebo, home">
          <Mark />
          <span className="hidden sm:block font-bold text-lg wide tracking-tight">Segun Oduyebo</span>
        </a>
        <nav className="hidden xl:flex items-center gap-7 text-[.95rem]" aria-label="Main">
          {PRIMARY_NAV.map(([route, label]) => (
            <a key={route} className="nav-link" href={href(route)} aria-current={current === route ? 'page' : undefined}>{label}</a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a className="btn btn-ochre !min-h-11 !px-5 hidden sm:inline-flex" href="#/speaking">Invite Segun</a>
          <button id="menu-open" className="btn btn-line !min-h-11 !px-5" aria-expanded={menuOpen} aria-controls="menu" onClick={open}>
            <span className="flex flex-col gap-1.5" aria-hidden="true">
              <span className="block w-5 h-0.5 bg-current" /><span className="block w-3.5 h-0.5 bg-current" />
            </span>
            Menu
          </button>
        </div>
      </div>
    </motion.header>
  );
}
