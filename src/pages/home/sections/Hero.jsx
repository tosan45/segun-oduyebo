import { motion } from 'motion/react';
import SplitText from '../../../components/motion/SplitText.jsx';
import Reveal from '../../../components/motion/Reveal.jsx';
import Frame from '../../../components/ui/Frame.jsx';
import Button from '../../../components/ui/Button.jsx';
import { Dot } from '../../../components/ui/Mark.jsx';

export default function Hero() {
  return (
    <section className="relative px-4 sm:px-8 pt-28 lg:pt-32 pb-20 min-h-svh flex items-center overflow-hidden">
      <div className="mx-auto w-full max-w-[1440px] grid lg:grid-cols-[1fr_minmax(0,30%)] gap-12 lg:gap-6 items-center">
        <div className="relative z-10">
          <Reveal as="p" variant="fade" className="text-brand-2 font-semibold text-lg flex items-center gap-3"><Dot />Pastor, teacher and people developer</Reveal>
          <SplitText as="h1" text={'Developing\npeople.'} className="display text-mega text-brand mt-6" />
          <Reveal as="p" delay={0.45} className="text-lede text-mute mt-8 max-w-[30em]">
            With the character, capacity and purpose to strengthen their communities. Mentor, author and community builder, rooted in faith and focused on people.
          </Reveal>
          <Reveal delay={0.6} className="mt-10 flex flex-wrap gap-3">
            <Button to="speaking" magnetic>Invite Segun to speak</Button>
            <Button to="community" variant="line" icon={false}>Join the community</Button>
          </Reveal>
        </div>
        <div className="relative max-w-[440px] w-full mx-auto lg:mx-0">
          <Reveal variant="scale" delay={0.25} aria-hidden="true" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[46%] w-[118%] aspect-square rounded-full bg-ochre" />
          <Frame photo="headshot" className="relative" ratio="aspect-[3/4]" arch parallax={30} eager />
        </div>
      </div>

      <Reveal variant="fade" delay={1} className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden lg:block">
        <a href="#conviction" className="flex flex-col items-center gap-2 text-sm text-mute">
          Scroll
          <span className="block w-px h-10 bg-mute/40 overflow-hidden">
            <motion.span className="block w-px h-4 bg-brand" animate={{ y: ['-100%', '250%'] }} transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }} />
          </span>
        </a>
      </Reveal>
    </section>
  );
}
