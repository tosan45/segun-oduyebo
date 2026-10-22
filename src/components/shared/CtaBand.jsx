import SplitText from '../motion/SplitText.jsx';
import Reveal from '../motion/Reveal.jsx';
import Button from '../ui/Button.jsx';

/* Closing call to action shared by most pages */
export default function CtaBand({
  title = 'Bring the conversation to your audience.',
  text = 'Keynotes, facilitated conversations and learning experiences on leadership, purpose, responsibility and faith.',
  to = 'speaking',
  label = 'Invite Segun to speak'
}) {
  return (
    <section className="px-4 sm:px-8 py-24 lg:py-36 bg-wash relative overflow-hidden">
      <Reveal variant="scale" aria-hidden="true" className="absolute -left-40 -bottom-56 size-[34rem] rounded-full border-[3.5rem] border-ochre/70" />
      <div className="relative mx-auto max-w-[1440px] grid lg:grid-cols-12 gap-10 items-end">
        <SplitText text={title} className="lg:col-span-8 display text-d1 text-brand" />
        <div className="lg:col-span-4">
          <Reveal as="p" className="text-lede text-mute">{text}</Reveal>
          <Reveal delay={0.15} className="mt-8"><Button to={to} magnetic>{label}</Button></Reveal>
        </div>
      </div>
    </section>
  );
}
