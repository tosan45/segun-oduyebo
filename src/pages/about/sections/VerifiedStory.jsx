import { useRef } from 'react';
import { motion, useReducedMotion, useScroll } from 'motion/react';
import { TIMELINE } from '../../../content.js';
import SectionHead from '../../../components/shared/SectionHead.jsx';
import Reveal from '../../../components/motion/Reveal.jsx';
import { ExternalIcon } from '../../../components/ui/Icons.jsx';

/* Sourced timeline; the line fills as you read down it */
export default function VerifiedStory() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 70%', 'end 60%'] });

  return (
    <section className="adire on-dark px-4 sm:px-8 py-24 lg:py-36">
      <div className="mx-auto max-w-[1440px] grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <SectionHead
            dark
            title="A verified story."
            intro="Only what can be checked appears here. Each entry links to its source. Reports give context, not measured programme impact, and past roles are not presented as current appointments."
          />
        </div>
        <ol ref={ref} className="lg:col-span-6 lg:col-start-7 relative pl-10">
          <span className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-white/15" aria-hidden="true">
            <motion.span className="block w-full h-full bg-ochre origin-top" style={{ scaleY: reduce ? 1 : scrollYProgress }} />
          </span>
          {TIMELINE.map(t => (
            <Reveal as="li" key={t.when} className="relative pb-14 last:pb-0">
              <span className="absolute -left-10 top-1.5 size-4 rounded-full bg-ochre ring-4 ring-adire" aria-hidden="true" />
              <p className="text-ochre font-semibold">{t.when}</p>
              <p className="text-2xl lg:text-3xl font-bold leading-tight mt-2 wide">{t.what}</p>
              <a className="ulink inline-flex items-center gap-2 mt-4 text-white/75 hover:text-white" href={t.url} target="_blank" rel="noopener">
                {t.source}<ExternalIcon />
              </a>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
