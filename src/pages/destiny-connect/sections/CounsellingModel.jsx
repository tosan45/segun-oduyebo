import { DESTINY_MODEL } from '../../../content.js';
import SectionHead from '../../../components/shared/SectionHead.jsx';
import Stagger, { StaggerItem } from '../../../components/motion/Stagger.jsx';

const TONES = ['bg-brand text-white', 'bg-white text-brand', 'bg-ochre text-ink'];

export default function CounsellingModel() {
  return (
    <section className="px-4 sm:px-8 py-24 lg:py-36 bg-wash">
      <div className="mx-auto max-w-[1440px]">
        <SectionHead title="Support where young people already are." intro="In school, or online for those outside participating schools, with volunteer mentors alongside." />
        <Stagger gap={0.12} className="mt-16 grid lg:grid-cols-3 gap-4">
          {DESTINY_MODEL.map((m, i) => (
            <StaggerItem as="article" key={m.name} whileHover={{ y: -8 }} className={`rounded-md p-8 lg:p-10 min-h-80 flex flex-col justify-between ${TONES[i]}`}>
              <h3 className="display text-d3">{m.name}</h3>
              <p className="text-lg mt-10 opacity-85">{m.text}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
