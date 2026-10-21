import SplitText from '../motion/SplitText.jsx';
import Reveal from '../motion/Reveal.jsx';
import Form from '../forms/Form.jsx';

/* Full-bleed indigo band holding a form. `id` makes it an anchor target. */
export default function FormSection({ id, title, intro, fields, submit }) {
  return (
    <section id={id} className="adire on-dark px-4 sm:px-8 py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <SplitText text={title} className="display text-d2" />
          {intro && <Reveal as="p" className="text-lede text-white/75 mt-6 measure">{intro}</Reveal>}
        </div>
        <Reveal delay={0.15} className="lg:col-span-7 lg:pl-8">
          <Form fields={fields} submit={submit} dark />
        </Reveal>
      </div>
    </section>
  );
}
