import { BOOKS } from '../../../content.js';
import { SPRING } from '../../../lib/motion.js';
import SectionHead from '../../../components/shared/SectionHead.jsx';
import Reveal from '../../../components/motion/Reveal.jsx';
import Stagger, { StaggerItem } from '../../../components/motion/Stagger.jsx';
import Button from '../../../components/ui/Button.jsx';

export const SPINE_TONES = {
  adire: 'bg-adire text-white',
  ochre: 'bg-ochre text-ink',
  wash: 'bg-wash text-adire ring-1 ring-inset ring-adire/15',
  ink: 'bg-ink text-ochre',
  'adire-2': 'bg-adire-2 text-white',
  'adire-3': 'bg-adire-3 text-white'
};

const HEIGHTS = [86, 92, 78, 90, 82, 88];
const RISE = { hidden: { y: '110%' }, show: { y: '0%', transition: SPRING } };

/* Book spines slide up onto a shelf; hovering lifts one out */
export default function BookShelf() {
  return (
    <section className="px-4 sm:px-8 pb-28 lg:pb-36">
      <div className="mx-auto max-w-[1440px] grid lg:grid-cols-12 gap-12 items-end">
        <div className="lg:col-span-5">
          <SectionHead title="Ideas you can carry with you." intro="Books on leadership, responsibility, vision, discipline and personal development." />
          <Reveal className="mt-8"><Button to="books" variant="ink">Browse the books</Button></Reveal>
        </div>
        <Stagger gap={0.08} amount={0.3} className="lg:col-span-7 flex items-end gap-2 sm:gap-3 h-[22rem] sm:h-[26rem] border-b-4 border-adire overflow-x-auto overflow-y-hidden">
          {BOOKS.map((b, i) => (
            <StaggerItem
              as="a"
              key={b.title}
              href="#/books"
              variants={RISE}
              whileHover={{ y: -18 }}
              style={{ height: `${HEIGHTS[i]}%` }}
              className={`spine shrink-0 w-14 sm:w-[4.5rem] rounded-t-sm px-3 py-4 flex items-center justify-between font-bold wide text-sm sm:text-base leading-tight ${SPINE_TONES[b.tone]}`}
            >
              <span>{b.title}</span>
              <span className="text-xs font-semibold narrow opacity-70">S. Oduyebo</span>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
