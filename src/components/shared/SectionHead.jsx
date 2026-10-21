import SplitText from '../motion/SplitText.jsx';
import Reveal from '../motion/Reveal.jsx';

/* Section title with an optional intro paragraph */
export default function SectionHead({ title, intro, dark = false, className = '' }) {
  return (
    <div className={`max-w-3xl ${className}`}>
      <SplitText text={title} className={`display text-d2 ${dark ? 'text-white' : 'text-adire'}`} />
      {intro && (
        <Reveal as="p" delay={0.2} className={`text-lede mt-6 measure ${dark ? 'text-white/75' : 'text-mute'}`}>
          {intro}
        </Reveal>
      )}
    </div>
  );
}
