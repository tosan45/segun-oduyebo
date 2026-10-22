import { NEWS } from '../../../content.js';
import SectionHead from '../../../components/shared/SectionHead.jsx';
import Stagger, { StaggerItem } from '../../../components/motion/Stagger.jsx';
import { ExternalIcon } from '../../../components/ui/Icons.jsx';

const RESOURCES = NEWS.filter(n => n.source.startsWith('YouVersion') || n.source.startsWith('YouTube'));

export default function Resources() {
  return (
    <section className="px-4 sm:px-8 pb-24 lg:pb-36">
      <div className="mx-auto max-w-[1440px]">
        <SectionHead title="Listen and read now." intro="Published teaching you can start with today. These are not podcast episodes." />
        <Stagger as="ul" className="mt-12 grid md:grid-cols-3 gap-4">
          {RESOURCES.map(r => (
            <StaggerItem as="li" key={r.url}>
              <a className="group block h-full rounded-md bg-wash p-8 hover:bg-brand hover:text-white transition-colors duration-500" href={r.url} target="_blank" rel="noopener">
                <span className="text-sm opacity-70">{r.source}</span>
                <span className="block text-2xl font-bold mt-3 leading-tight">{r.title}</span>
                <span className="block mt-3 opacity-80">{r.text}</span>
                <span className="inline-flex items-center gap-2 mt-8 font-semibold">Open<ExternalIcon /></span>
              </a>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
