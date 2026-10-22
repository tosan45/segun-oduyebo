import { NEWS } from '../../../content.js';
import SectionHead from '../../../components/shared/SectionHead.jsx';
import Reveal from '../../../components/motion/Reveal.jsx';
import Stagger, { StaggerItem } from '../../../components/motion/Stagger.jsx';
import Button from '../../../components/ui/Button.jsx';
import { ExternalIcon } from '../../../components/ui/Icons.jsx';

const LATEST = [NEWS[0], NEWS[1], NEWS[3]];

export default function NewsStrip() {
  return (
    <section className="px-4 sm:px-8 py-28 lg:py-36">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-wrap gap-8 items-end justify-between">
          <SectionHead title="In the news and in print." />
          <Reveal><Button to="news" variant="line">All news and publications</Button></Reveal>
        </div>
        <Stagger className="mt-14 grid md:grid-cols-3 gap-px bg-brand/15 border-y border-brand/15">
          {LATEST.map(n => (
            <StaggerItem
              as="a"
              key={n.url}
              href={n.url}
              target="_blank"
              rel="noopener"
              className="group bg-white p-6 lg:p-8 flex flex-col gap-4 min-h-72 hover:bg-wash transition-colors duration-500"
            >
              <p className="text-sm text-mute">{n.source}, {n.date}</p>
              <h3 className="text-2xl font-bold text-brand leading-tight">{n.title}</h3>
              <p className="text-mute">{n.text}</p>
              <span className="mt-auto inline-flex items-center gap-2 font-semibold text-brand-2">Read on {n.source.split(',')[0]}<ExternalIcon /></span>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
