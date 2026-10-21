import { DESTINY_SAFEGUARDING } from '../../../content.js';
import Reveal from '../../../components/motion/Reveal.jsx';
import { ShieldIcon } from '../../../components/ui/Icons.jsx';
import { Dot } from '../../../components/ui/Mark.jsx';

export default function Safeguarding() {
  return (
    <section className="px-4 sm:px-8 pb-24 lg:pb-36">
      <Reveal className="mx-auto max-w-[1440px] rounded-md bg-ink text-white p-8 sm:p-12 lg:p-16 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-4 flex items-start gap-4">
          <ShieldIcon className="size-10 text-ochre shrink-0" />
          <h2 className="display text-d3">Safeguarding comes first.</h2>
        </div>
        <ul className="lg:col-span-8 space-y-4 text-lg">
          {DESTINY_SAFEGUARDING.map(s => <li key={s} className="flex gap-3"><Dot className="size-2 mt-2.5" />{s}</li>)}
        </ul>
      </Reveal>
    </section>
  );
}
