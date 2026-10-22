import { DESTINY_STEPS } from '../../../content.js';
import SectionHead from '../../../components/shared/SectionHead.jsx';
import Reveal from '../../../components/motion/Reveal.jsx';
import Frame from '../../../components/ui/Frame.jsx';

export default function HowToJoin() {
  return (
    <section className="px-4 sm:px-8 pb-24 lg:pb-36">
      <div className="mx-auto max-w-[1440px] grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5"><Frame photo="osunAudience" ratio="aspect-[4/5]" arch parallax={50} caption /></div>
        <div className="lg:col-span-6 lg:col-start-7">
          <SectionHead title="How to join." intro="Everyone starts the same way. Those who serve then apply for their role." />
          <ol className="mt-12 space-y-10">
            {DESTINY_STEPS.map((s, i) => (
              <Reveal as="li" key={s.name} delay={i * 0.1} className="flex gap-6">
                <span className="display text-d2 text-ochre leading-none w-14 shrink-0">{i + 1}</span>
                <span>
                  <span className="block text-2xl font-bold text-brand">{s.name}</span>
                  <span className="block text-mute mt-1">{s.text}</span>
                </span>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
