import SplitText from '../components/motion/SplitText.jsx';
import Reveal from '../components/motion/Reveal.jsx';
import Button from '../components/ui/Button.jsx';

export default function NotFoundPage() {
  return (
    <section className="min-h-svh px-4 sm:px-8 pt-32 pb-20 flex items-center">
      <div className="mx-auto w-full max-w-[1440px]">
        <SplitText as="h1" text="This page isn’t here." className="display text-mega text-adire" />
        <Reveal as="p" delay={0.3} className="text-lede text-mute mt-8 measure">
          The link may be old, or the page may have moved. Start from the home page or go straight to what you came for.
        </Reveal>
        <Reveal delay={0.45} className="mt-10 flex flex-wrap gap-3">
          <Button to="">Go to the home page</Button>
          <Button to="speaking" variant="line" icon={false}>Invite Segun to speak</Button>
        </Reveal>
      </div>
    </section>
  );
}
