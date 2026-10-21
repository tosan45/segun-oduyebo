import { VALUES } from '../../../content.js';
import Frame from '../../../components/ui/Frame.jsx';
import Stagger, { StaggerItem } from '../../../components/motion/Stagger.jsx';
import { Dot } from '../../../components/ui/Mark.jsx';

const PHOTOS = ['ddiTeam', 'graduation', 'careerLectern', 'faithSummit'];

export default function PhotoRow() {
  return (
    <section className="px-4 sm:px-8 py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {PHOTOS.map((k, i) => (
          <Frame key={k} photo={k} reveal="side" caption ratio={i % 2 ? 'aspect-[4/5]' : 'aspect-[4/3]'} className={i % 2 ? 'lg:mt-20' : ''} />
        ))}
      </div>
      <Stagger as="ul" className="mx-auto max-w-[1440px] mt-16 flex flex-wrap gap-x-10 gap-y-3 justify-center text-adire">
        {VALUES.map(v => <StaggerItem as="li" key={v} className="display text-d3 flex items-center gap-3"><Dot className="size-3" />{v}</StaggerItem>)}
      </Stagger>
    </section>
  );
}
