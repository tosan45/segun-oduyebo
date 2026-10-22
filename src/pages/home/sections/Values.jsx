import { VALUES } from '../../../content.js';
import StretchText from '../../../components/motion/StretchText.jsx';

/* The four values, each widening from condensed to wide as it scrolls up */
export default function Values() {
  return (
    <section className="px-4 sm:px-8 pb-28 lg:pb-40 overflow-hidden" aria-label="Values">
      <ul className="mx-auto max-w-[1440px] text-brand">
        {VALUES.map((v, i) => (
          <li key={v} className={`flex items-baseline gap-[2vw] border-t border-brand/15 py-[1.2vw] ${i % 2 ? 'justify-end' : ''}`}>
            <StretchText className="display whitespace-nowrap leading-[.95] text-[clamp(1.9rem,8.2vw,8.75rem)]">{v}</StretchText>
            <span className="size-[1.6vw] min-w-3 min-h-3 rounded-full bg-ochre shrink-0" aria-hidden="true" />
          </li>
        ))}
      </ul>
    </section>
  );
}
