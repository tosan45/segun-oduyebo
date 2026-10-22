import SectionHead from '../../../components/shared/SectionHead.jsx';
import Reveal from '../../../components/motion/Reveal.jsx';
import { ExternalIcon } from '../../../components/ui/Icons.jsx';

/* Rows that flood with colour from below on hover */
export default function NewsList({ title, items, last = false }) {
  return (
    <section className={`px-4 sm:px-8 isolate ${last ? 'pb-24 lg:pb-36' : 'py-20 lg:py-28'}`}>
      <div className="mx-auto max-w-[1440px]">
        <SectionHead title={title} />
        <ul className="mt-10 border-b border-brand/15">
          {items.map(n => (
            <Reveal as="li" key={n.url} className="border-t border-brand/15">
              <a className="group relative grid md:grid-cols-12 gap-3 md:gap-8 py-8 lg:py-10 overflow-hidden" href={n.url} target="_blank" rel="noopener">
                <span className="absolute inset-0 bg-wash origin-bottom scale-y-0 transition-transform duration-700 ease-(--ease-expo) group-hover:scale-y-100 -z-10" aria-hidden="true" />
                <span className="md:col-span-3 text-sm text-mute md:pt-2 md:pl-2">{n.source}<br />{n.date}</span>
                <span className="md:col-span-8">
                  <span className="block text-d3 font-bold text-brand transition-[font-stretch] duration-700 group-hover:wide">{n.title}</span>
                  <span className="block text-read text-mute mt-3 measure">{n.text}</span>
                </span>
                <span className="md:col-span-1 md:justify-self-end md:pr-2 text-brand-2">
                  <ExternalIcon className="size-6 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" />
                </span>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
