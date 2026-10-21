import { ABOUT_AREAS } from '../../../content.js';
import SectionHead from '../../../components/shared/SectionHead.jsx';
import Reveal from '../../../components/motion/Reveal.jsx';
import Frame from '../../../components/ui/Frame.jsx';

export default function AreasOfWork() {
  return (
    <section className="px-4 sm:px-8 py-24 lg:py-36">
      <div className="mx-auto max-w-[1440px] grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5 lg:sticky lg:top-28">
          <SectionHead title="Depth before decoration." intro="Seven strands of work, held together by the same commitment to people." />
          <div className="grid grid-cols-2 gap-4 mt-12">
            <Frame photo="preaching" ratio="aspect-[3/4]" parallax={30} />
            <Frame photo="osunStage" ratio="aspect-[3/4]" parallax={50} className="mt-16" />
          </div>
        </div>
        <ul className="lg:col-span-6 lg:col-start-7 border-b border-adire/15">
          {ABOUT_AREAS.map(a => (
            <Reveal as="li" key={a} className="border-t border-adire/15 py-6 lg:py-8 group">
              <span className="display stretch-row text-[clamp(1.6rem,3.2vw,3rem)] leading-none text-adire">{a}</span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
