import { SPEAKING_TYPES } from '../../../content.js';
import SectionHead from '../../../components/shared/SectionHead.jsx';
import Stagger, { StaggerItem } from '../../../components/motion/Stagger.jsx';
import Photo from '../../../components/ui/Photo.jsx';

export default function EngagementTypes() {
  return (
    <section className="px-4 sm:px-8 py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px]">
        <SectionHead title="Built around your audience and purpose." />
        <Stagger as="ul" gap={0.1} className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SPEAKING_TYPES.map(t => (
            <StaggerItem as="li" key={t.name} className="group relative aspect-[3/4] overflow-hidden rounded-md bg-adire">
              <Photo photo={t.photo} className="absolute inset-0 size-full object-cover transition-transform duration-[1.2s] ease-(--ease-expo) group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-adire via-adire/30 to-transparent" />
              <h3 className="absolute inset-x-0 bottom-0 p-6 text-2xl font-bold text-white leading-tight transition-[font-stretch] duration-700 group-hover:wide">{t.name}</h3>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
