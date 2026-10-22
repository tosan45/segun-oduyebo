import { useRef } from 'react';
import { motion } from 'motion/react';
import { COMMUNITY_PRACTICES } from '../../../content.js';
import { useEnter, EASE } from '../../../lib/motion.js';
import SectionHead from '../../../components/shared/SectionHead.jsx';
import { StretchIn } from '../../../components/motion/StretchText.jsx';

/* "Curiosity over certainty": the value widens in, its counterpart slides after */
function Practice({ lead, rest }) {
  const ref = useRef(null);
  const on = useEnter(ref, { amount: 0.5 });
  return (
    <li ref={ref} className="border-t border-brand/20 py-8 lg:py-12">
      <StretchIn className="display block text-[clamp(2.2rem,5vw,4.75rem)] leading-none text-brand">{lead}</StretchIn>
      <motion.span
        className="block font-serif italic text-[clamp(1.4rem,2.6vw,2.4rem)] text-mute mt-2"
        initial={{ opacity: 0, x: -40 }}
        animate={on ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, ease: EASE, delay: 0.35 }}
      >
        {rest}
      </motion.span>
    </li>
  );
}

export default function Practices() {
  return (
    <section className="px-4 sm:px-8 py-24 lg:py-36 bg-wash">
      <div className="mx-auto max-w-[1440px]">
        <SectionHead title="Belonging with purpose." intro="What this community practises, together." />
        <ul className="mt-16 grid md:grid-cols-2 gap-x-12">
          {COMMUNITY_PRACTICES.map(([lead, rest]) => <Practice key={lead} lead={lead} rest={rest} />)}
        </ul>
      </div>
    </section>
  );
}
