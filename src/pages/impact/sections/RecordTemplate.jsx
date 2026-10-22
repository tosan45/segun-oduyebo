import { motion } from 'motion/react';
import { IMPACT_FIELDS } from '../../../content.js';
import { EASE } from '../../../lib/motion.js';
import SectionHead from '../../../components/shared/SectionHead.jsx';
import Stagger, { StaggerItem } from '../../../components/motion/Stagger.jsx';

const ROW = {
  hidden: { opacity: 0, x: -24 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: EASE } }
};
const LINE = {
  hidden: { scaleX: 0 },
  show: { scaleX: 1, transition: { duration: 1.4, ease: EASE, delay: 0.3 } }
};

/* A blank programme record that fills itself in, row by row */
export default function RecordTemplate() {
  return (
    <section className="px-4 sm:px-8 py-24 lg:py-36 bg-wash">
      <div className="mx-auto max-w-[1440px] grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-4 lg:sticky lg:top-28">
          <SectionHead title="What every record will hold." intro="Seven questions, answered in order, for each programme, project and intervention." />
        </div>
        <div className="lg:col-span-7 lg:col-start-6 bg-paper rounded-md shadow-[0_30px_80px_-30px_rgb(17_92_56/.35)] p-6 sm:p-10 lg:p-14">
          <div className="flex items-center justify-between gap-4 pb-6 border-b-2 border-brand">
            <p className="display text-2xl text-brand">Programme record</p>
            <p className="text-sm font-semibold rounded-full bg-ochre-soft text-ink px-3 py-1">Template</p>
          </div>
          <Stagger as="ol" gap={0.12} amount={0.25}>
            {IMPACT_FIELDS.map((f, i) => (
              <StaggerItem as="li" key={f.name} variants={ROW} className="grid sm:grid-cols-[2.5rem_12rem_1fr] gap-x-4 gap-y-1 py-5 border-b border-brand/10">
                <span className="text-brand-3 font-semibold tabular-nums">{i + 1}</span>
                <span className="font-bold text-brand">{f.name}</span>
                <span className="text-mute">
                  {f.text}
                  <motion.span variants={LINE} className="block mt-3 h-2 rounded-full bg-wash origin-left" />
                </span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
