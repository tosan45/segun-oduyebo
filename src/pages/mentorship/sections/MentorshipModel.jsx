import { useRef } from 'react';
import { motion } from 'motion/react';
import { MENTORSHIP_TIERS } from '../../../content.js';
import { useEnter, EASE, BACK } from '../../../lib/motion.js';
import SectionHead from '../../../components/shared/SectionHead.jsx';
import Reveal from '../../../components/motion/Reveal.jsx';

const RINGS = [
  { r: 70, dots: 8, size: 7, fill: 'fill-adire' },
  { r: 130, dots: 14, size: 6, fill: 'fill-adire-2' },
  { r: 185, dots: 28, size: 4.5, fill: 'fill-adire-3' }
];

/* One centre, a ring of cohorts, a wider ring of mentors: each ring
   draws in after the one before, then the whole diagram turns slowly. */
function Diagram() {
  const ref = useRef(null);
  const on = useEnter(ref, { amount: 0.4 });
  return (
    <motion.svg
      ref={ref}
      viewBox="0 0 400 400"
      className="w-full max-w-[520px] mx-auto"
      role="img"
      aria-label="Diagram: one centre, a ring of cohorts, and a wider ring of mentors each with their own small group"
      animate={on ? { rotate: 360 } : {}}
      transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
    >
      {RINGS.map((ring, i) => (
        <motion.circle
          key={ring.r}
          cx="200" cy="200" r={ring.r} fill="none" stroke="var(--color-adire)" strokeOpacity=".15" strokeWidth="1.5"
          strokeDasharray={i === 2 ? '4 6' : undefined}
          initial={{ opacity: 0, scale: 0.3 }}
          animate={on ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.2, ease: EASE, delay: i * 0.25 }}
        />
      ))}
      <motion.circle cx="200" cy="200" r="26" fill="var(--color-ochre)" initial={{ scale: 0 }} animate={on ? { scale: 1 } : {}} transition={{ duration: 0.6, ease: BACK, delay: 0.2 }} />
      {RINGS.map((ring, ri) => Array.from({ length: ring.dots }, (_, i) => {
        const a = (i / ring.dots) * Math.PI * 2;
        return (
          <motion.circle
            key={`${ring.r}-${i}`}
            cx={200 + ring.r * Math.cos(a)} cy={200 + ring.r * Math.sin(a)} r={ring.size}
            className={ring.fill}
            initial={{ opacity: 0, scale: 0 }}
            animate={on ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, ease: BACK, delay: 0.55 + ri * 0.35 + i * 0.03 }}
          />
        );
      }))}
    </motion.svg>
  );
}

export default function MentorshipModel() {
  return (
    <section className="px-4 sm:px-8 py-24 lg:py-36 bg-wash">
      <div className="mx-auto max-w-[1440px] grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6">
          <SectionHead title="A model designed to multiply." intro="From shared wisdom to stronger communities: each layer reaches further than the one before it." />
          <ol className="mt-12 border-b border-adire/15">
            {MENTORSHIP_TIERS.map(t => (
              <Reveal as="li" key={t.name} className="border-t border-adire/15 py-7 grid sm:grid-cols-[1fr_12rem] gap-3">
                <div>
                  <h3 className="text-2xl font-bold text-adire wide">{t.name}</h3>
                  <p className="text-mute mt-2 measure">{t.text}</p>
                </div>
                <p className="text-sm font-semibold text-adire-2 sm:text-right">{t.reach}</p>
              </Reveal>
            ))}
          </ol>
        </div>
        <div className="lg:col-span-6"><Diagram /></div>
      </div>
    </section>
  );
}
