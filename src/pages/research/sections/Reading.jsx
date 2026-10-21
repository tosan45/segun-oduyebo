import { RESEARCH_READING } from '../../../content.js';
import SectionHead from '../../../components/shared/SectionHead.jsx';
import Stagger, { StaggerItem } from '../../../components/motion/Stagger.jsx';

export default function Reading() {
  return (
    <section className="px-4 sm:px-8 py-24 lg:py-32 bg-wash">
      <div className="mx-auto max-w-[1440px]">
        <SectionHead
          title="Selected third-party reading."
          intro="Background reading that informs the questions. These are other organisations’ findings, not Segun’s."
        />
        <Stagger as="ul" className="mt-14 grid md:grid-cols-2 gap-px bg-adire/15 border-y border-adire/15">
          {RESEARCH_READING.map(r => (
            <StaggerItem as="li" key={r.title} className="bg-wash p-6 lg:p-10">
              <p className="text-sm text-mute">{r.source}</p>
              <h3 className="text-d3 font-bold text-adire mt-3">{r.title}</h3>
              <p className="text-read text-mute mt-4">{r.text}</p>
              {r.note && <p className="mt-6 pl-4 border-l-4 border-ochre text-ink">{r.note}</p>}
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
