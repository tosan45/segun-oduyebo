import SplitText from '../motion/SplitText.jsx';
import Reveal from '../motion/Reveal.jsx';
import Frame from '../ui/Frame.jsx';
import { Dot } from '../ui/Mark.jsx';

/* Inner-page opening: title on the left, arched photo on an ochre disc to the right */
export default function PageHero({ page, title, intro, photo, actions, note }) {
  return (
    <section className="relative px-4 sm:px-8 pt-32 lg:pt-40 pb-16 lg:pb-24 overflow-hidden">
      <div className="mx-auto max-w-[1440px] grid lg:grid-cols-12 gap-10 lg:gap-8 items-end">
        <div className="lg:col-span-7 relative z-10">
          <Reveal as="p" variant="fade" className="text-adire-2 font-semibold mb-6 flex items-center gap-3"><Dot />{page}</Reveal>
          <SplitText as="h1" text={title} className="display text-d1 text-adire" />
          {intro && <Reveal as="p" delay={0.25} className="text-lede text-mute mt-8 measure">{intro}</Reveal>}
          {actions && <Reveal delay={0.4} className="mt-10 flex flex-wrap gap-3">{actions}</Reveal>}
          {note && <Reveal as="p" variant="fade" delay={0.5} className="mt-6 text-sm text-mute measure">{note}</Reveal>}
        </div>
        <div className="lg:col-span-5 relative">
          <Reveal variant="scale" delay={0.2} aria-hidden="true" className="absolute -right-24 -top-10 size-[min(70vw,520px)] rounded-full bg-ochre/90" />
          <Frame photo={photo} className="relative max-w-[440px] ml-auto" arch parallax={40} caption eager />
        </div>
      </div>
    </section>
  );
}
