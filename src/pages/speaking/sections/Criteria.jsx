import { SPEAKING_CRITERIA } from '../../../content.js';
import SectionHead from '../../../components/shared/SectionHead.jsx';
import Stagger, { StaggerItem } from '../../../components/motion/Stagger.jsx';

export default function Criteria() {
  return (
    <section className="px-4 sm:px-8 py-24 lg:py-32 bg-wash">
      <div className="mx-auto max-w-[1440px] grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <SectionHead
            title="How invitations are reviewed."
            intro="Every invitation is read against four things. Past engagements and testimonials appear here only after they are verified."
          />
        </div>
        <Stagger as="dl" className="lg:col-span-6 lg:col-start-7 grid sm:grid-cols-2 gap-x-8 gap-y-10">
          {SPEAKING_CRITERIA.map(c => (
            <StaggerItem key={c.name} className="border-t-4 border-brand pt-5">
              <dt className="text-2xl font-bold text-brand wide">{c.name}</dt>
              <dd className="text-mute mt-2">{c.text}</dd>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
