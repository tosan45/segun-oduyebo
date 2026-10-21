import { PHOTOS } from '../../../content.js';
import SectionHead from '../../../components/shared/SectionHead.jsx';
import Reveal from '../../../components/motion/Reveal.jsx';
import Marquee from '../../../components/motion/Marquee.jsx';
import Button from '../../../components/ui/Button.jsx';
import Photo from '../../../components/ui/Photo.jsx';

const ROW_A = ['osunAudience', 'covenantStage', 'destinyTour', 'careerLectern', 'graduation', 'beAMan', 'ddiTeam', 'faithSummit'];
const ROW_B = ['osunPledge', 'keynoteBw', 'covenantHall', 'leverage', 'ajanakuAudience', 'solutionMakers', 'christmasService', 'careerHall'];

const Row = ({ photos }) => photos.map(k => (
  <figure key={k} className="w-[62vw] sm:w-[34vw] lg:w-[24vw] shrink-0 pr-4">
    <div className="aspect-[3/2] overflow-hidden rounded-md"><Photo photo={k} className="size-full object-cover" /></div>
    <figcaption className="mt-2 text-sm text-white/60">{PHOTOS[k].caption}</figcaption>
  </figure>
));

/* Two tilted ribbons of event photos running in opposite directions */
export default function InTheRoom() {
  return (
    <section className="adire on-dark py-24 lg:py-32 overflow-hidden">
      <div className="px-4 sm:px-8 mx-auto max-w-[1440px] flex flex-wrap gap-8 items-end justify-between mb-14">
        <SectionHead title="In the room." intro="Churches, schools, universities and conference halls across Osun and beyond." dark />
        <Reveal><Button to="gallery" variant="line">See the gallery</Button></Reveal>
      </div>
      <div className="space-y-4 -rotate-2 scale-105">
        <Marquee speed={1.8}><Row photos={ROW_A} /></Marquee>
        <Marquee speed={1.8} direction={-1}><Row photos={ROW_B} /></Marquee>
      </div>
    </section>
  );
}
