import { PODCAST_THEMES } from '../../../content.js';
import SectionHead from '../../../components/shared/SectionHead.jsx';
import Reveal from '../../../components/motion/Reveal.jsx';

export default function Themes() {
  return (
    <section className="px-4 sm:px-8 py-24 lg:py-36 bg-wash">
      <div className="mx-auto max-w-[1440px]">
        <SectionHead title="Four themes." intro="Each season returns to the same four conversations." />
        <div className="mt-16 grid md:grid-cols-2 gap-x-12 gap-y-16">
          {PODCAST_THEMES.map(t => (
            <Reveal as="article" key={t.name} className="border-t-4 border-brand pt-8">
              <h3 className="text-d3 font-bold text-brand wide">{t.name}</h3>
              <p className="text-mute mt-3 measure">{t.text}</p>
              <blockquote className="mt-8 font-serif italic text-[clamp(1.35rem,2.2vw,1.9rem)] leading-snug text-brand-2 pl-6 border-l-4 border-ochre">{t.quote}</blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
