import { RESEARCH_SLOTS } from '../../../content.js';
import SectionHead from '../../../components/shared/SectionHead.jsx';
import Stagger, { StaggerItem } from '../../../components/motion/Stagger.jsx';

/* Deliberately empty slots until findings can be verified */
export default function PendingFindings() {
  return (
    <section className="px-4 sm:px-8 py-24 lg:py-36">
      <div className="mx-auto max-w-[1440px] grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <SectionHead
            title="Published once verified."
            intro="Methodology, contributors, evidence and findings will appear here when they can be checked. Until then, these spaces stay empty on purpose."
          />
        </div>
        <Stagger as="ul" className="lg:col-span-6 lg:col-start-7 grid sm:grid-cols-2 gap-4">
          {RESEARCH_SLOTS.map(s => (
            <StaggerItem as="li" key={s} className="rounded-md border-2 border-dashed border-brand/25 p-6 min-h-40 flex flex-col justify-between">
              <span className="text-2xl font-bold text-brand wide">{s}</span>
              <span className="text-sm text-mute">Not yet published</span>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
