import Reveal from '../../../components/motion/Reveal.jsx';
import ScrubText from '../../../components/motion/ScrubText.jsx';

export default function ThroughLine() {
  return (
    <section className="px-4 sm:px-8 py-24 lg:py-36 bg-wash">
      <div className="mx-auto max-w-[1440px] grid lg:grid-cols-12 gap-10">
        <Reveal as="h2" variant="fade" className="lg:col-span-3 text-adire-2 font-semibold">The through-line</Reveal>
        <ScrubText
          className="lg:col-span-9 font-serif text-[clamp(1.5rem,3vw,2.75rem)] leading-[1.25] text-adire"
          text="His work is organised around one question rather than a list of titles: what helps people become capable of living and leading well? Faith informs it in a practical way, with weight on character, responsibility, capacity, community and meaningful contribution."
        />
      </div>
    </section>
  );
}
