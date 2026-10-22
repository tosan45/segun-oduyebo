import { SPEAKING_THEMES } from '../../../content.js';
import Marquee from '../../../components/motion/Marquee.jsx';
import { Dot } from '../../../components/ui/Mark.jsx';

export default function ThemesMarquee() {
  return (
    <section className="brand on-dark py-16 lg:py-20" aria-label="Themes">
      <Marquee speed={2.5}>
        <ul className="flex items-center">
          {SPEAKING_THEMES.map(t => (
            <li key={t} className="display text-d1 whitespace-nowrap px-8 flex items-center gap-16">{t}<Dot className="size-4" /></li>
          ))}
        </ul>
      </Marquee>
    </section>
  );
}
