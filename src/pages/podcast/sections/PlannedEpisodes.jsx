import { PODCAST_EPISODES, PODCAST_SEGMENTS } from '../../../content.js';
import SectionHead from '../../../components/shared/SectionHead.jsx';
import Reveal from '../../../components/motion/Reveal.jsx';
import Stagger, { StaggerItem } from '../../../components/motion/Stagger.jsx';

export default function PlannedEpisodes() {
  return (
    <section className="px-4 sm:px-8 py-24 lg:py-36">
      <div className="mx-auto max-w-[1440px] grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <SectionHead title="Planned episodes." intro="None are published yet. These are the first conversations in the queue." />
          <Reveal as="h3" variant="fade" className="mt-14 font-semibold text-adire-2">Recurring segments</Reveal>
          <Stagger as="ul" gap={0.05} className="mt-4 flex flex-wrap gap-2">
            {PODCAST_SEGMENTS.map(s => <StaggerItem as="li" key={s} className="rounded-full bg-wash px-4 py-2 font-semibold text-adire">{s}</StaggerItem>)}
          </Stagger>
        </div>
        <ol className="lg:col-span-6 lg:col-start-7 border-b border-adire/15">
          {PODCAST_EPISODES.map((e, i) => (
            <Reveal as="li" key={e} className="border-t border-adire/15 py-5 flex gap-6 items-baseline">
              <span className="text-adire-3 font-semibold tabular-nums w-6 shrink-0">{i + 1}</span>
              <span className="text-xl font-semibold text-adire">{e}</span>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
