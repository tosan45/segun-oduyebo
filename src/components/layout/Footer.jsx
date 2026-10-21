import { NAV, VALUES } from '../../content.js';
import { href } from '../../lib/router.js';
import Button from '../ui/Button.jsx';
import { Dot } from '../ui/Mark.jsx';
import StretchText from '../motion/StretchText.jsx';

/* Site footer: closing line and CTAs, grouped links, a faint wordmark, values and copyright */
export default function Footer() {
  return (
    <footer className="adire on-dark px-4 sm:px-8 pt-24 pb-10 overflow-hidden">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid lg:grid-cols-12 gap-12 pb-16">
          <div className="lg:col-span-5">
            <p className="text-lede text-white/80 measure">Developing people who can strengthen communities, institutions and society.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button to="speaking">Invite Segun to speak</Button>
              <Button to="community" variant="line" icon={false}>Join the community</Button>
            </div>
          </div>
          <nav className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-8" aria-label="Footer">
            {NAV.map(group => (
              <div key={group.group}>
                <p className="text-ochre font-semibold mb-4">{group.group}</p>
                <ul className="space-y-2.5">
                  {group.links.map(([route, label]) => (
                    <li key={label}><a className="ulink text-white/85 hover:text-white" href={href(route)}>{label}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <StretchText
          as="p"
          end="end end"
          aria-hidden="true"
          className="display whitespace-nowrap leading-[.85] text-white/10 text-[clamp(2rem,6vw,5.5rem)]"
        >
          Segun Oduyebo
        </StretchText>

        <div className="mt-8 pt-6 border-t border-white/15 flex flex-col sm:flex-row gap-4 justify-between text-sm text-white/60">
          <ul className="flex flex-wrap gap-x-5 gap-y-1">
            {VALUES.map(v => <li key={v} className="flex items-center gap-2"><Dot className="size-1.5" />{v}</li>)}
          </ul>
          <p>© {new Date().getFullYear()} Segun Oduyebo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
