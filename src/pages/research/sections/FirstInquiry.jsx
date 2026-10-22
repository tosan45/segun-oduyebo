import Reveal from '../../../components/motion/Reveal.jsx';
import ScrubText from '../../../components/motion/ScrubText.jsx';

export default function FirstInquiry() {
  return (
    <section className="brand on-dark px-4 sm:px-8 py-28 lg:py-40">
      <div className="mx-auto max-w-[1440px]">
        <Reveal as="h2" variant="fade" className="text-ochre font-semibold">The first inquiry</Reveal>
        <ScrubText className="display text-d1 mt-8 max-w-[18ch]" text="What developmental support do emerging leaders actually need?" />
      </div>
    </section>
  );
}
