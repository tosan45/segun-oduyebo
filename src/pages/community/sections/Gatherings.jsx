import { COMMUNITY_FORMATS } from '../../../content.js';
import { BACK } from '../../../lib/motion.js';
import SectionHead from '../../../components/shared/SectionHead.jsx';
import Stagger, { StaggerItem } from '../../../components/motion/Stagger.jsx';
import Frame from '../../../components/ui/Frame.jsx';

const POP = {
  hidden: { opacity: 0, scale: 0.5, rotate: -8 },
  show: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.7, ease: BACK } }
};

export default function Gatherings() {
  return (
    <section className="px-4 sm:px-8 py-24 lg:py-36">
      <div className="mx-auto max-w-[1440px] grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6">
          <SectionHead title="Many ways to take part." intro="The community is being designed for real participation, not as another broadcast group." />
          <Stagger as="ul" gap={0.06} className="mt-12 flex flex-wrap gap-3">
            {COMMUNITY_FORMATS.map(f => (
              <StaggerItem
                as="li"
                key={f}
                variants={POP}
                className="rounded-full border-[1.5px] border-brand/25 px-5 py-3 text-lg font-semibold text-brand hover:bg-brand hover:text-white hover:border-brand transition-colors duration-300"
              >
                {f}
              </StaggerItem>
            ))}
          </Stagger>
        </div>
        <div className="lg:col-span-5 lg:col-start-8 grid grid-cols-2 gap-4">
          <Frame photo="osunPledge" ratio="aspect-[3/4]" parallax={40} />
          <Frame photo="ajanakuAudience" ratio="aspect-[3/4]" parallax={70} className="mt-20" />
        </div>
      </div>
    </section>
  );
}
