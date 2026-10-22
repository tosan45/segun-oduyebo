import Reveal from '../../../components/motion/Reveal.jsx';
import ScrubText from '../../../components/motion/ScrubText.jsx';
import Button from '../../../components/ui/Button.jsx';

export default function ThroughLine() {
  return (
    <section className="px-4 sm:px-8 py-28 lg:py-40">
      <div className="mx-auto max-w-[1440px] grid lg:grid-cols-12 gap-10">
        <Reveal as="h2" variant="fade" className="lg:col-span-3 text-brand-2 font-semibold">The through-line</Reveal>
        <div className="lg:col-span-9">
          <ScrubText
            className="font-serif text-[clamp(1.6rem,3.2vw,3rem)] leading-[1.22] text-brand"
            text="Segun’s work isn’t organised around titles. It is organised around a single question: what helps people become capable of living and leading well? Personal growth should reach further, into families, organisations, communities and public life."
          />
          <Reveal className="mt-12"><Button to="about" variant="line">Read Segun’s story</Button></Reveal>
        </div>
      </div>
    </section>
  );
}
