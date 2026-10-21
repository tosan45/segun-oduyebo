import { useEffect, useRef, useState } from 'react';
import { flushSync } from 'react-dom';
import { ROUTES, NOT_FOUND } from './routes.js';
import { useHash, resolve, scrollToId } from './lib/router.js';
import { PageReady } from './lib/motion.js';
import Header from './components/layout/Header.jsx';
import Menu from './components/layout/Menu.jsx';
import Footer from './components/layout/Footer.jsx';
import Curtain from './components/layout/Curtain.jsx';
import ScrollProgress from './components/layout/ScrollProgress.jsx';

const NOT_FOUND_KEY = '404';
const routeFor = key => (key === NOT_FOUND_KEY ? NOT_FOUND : ROUTES[key]);

export default function App() {
  const hash = useHash();
  const [shown, setShown] = useState(null);
  const [ready, setReady] = useState(false);
  const [menu, setMenu] = useState({ open: false, origin: { x: 0, y: 0 } });

  const curtain = useRef(null);
  const hashRef = useRef(hash);
  const shownRef = useRef(null);
  const running = useRef(false);
  hashRef.current = hash;

  /* Cover, swap the page, lift. Loops until the page matches the
     latest hash, so clicks during a transition aren't lost. */
  async function navigate() {
    if (running.current) return;
    running.current = true;
    try {
      for (;;) {
        const target = resolve(hashRef.current, ROUTES, shownRef.current);
        const key = target.name in ROUTES ? target.name : NOT_FOUND_KEY;
        if (key === shownRef.current) {
          if (target.anchor) scrollToId(target.anchor, true);
          break;
        }
        const first = shownRef.current === null;
        setMenu(m => ({ ...m, open: false }));
        if (first) await curtain.current.intro();
        else await curtain.current.cover(routeFor(key).label);

        flushSync(() => { setReady(false); setShown(key); });
        shownRef.current = key;
        document.title = routeFor(key).title;
        window.scrollTo({ top: 0, behavior: 'instant' });
        if (!first) document.getElementById('main')?.focus({ preventScroll: true });

        const lift = curtain.current.uncover();
        setTimeout(() => setReady(true), 250);
        await lift;
      }
    } finally {
      running.current = false;
    }
  }

  useEffect(() => { navigate(); }, [hash]);

  const openMenu = origin => setMenu({ open: true, origin });
  const closeMenu = () => setMenu(m => ({ ...m, open: false }));
  const Page = shown === null ? null : routeFor(shown).Page;

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-100 focus:bg-ochre focus:text-ink focus:px-4 focus:py-2 focus:rounded-full">
        Skip to content
      </a>
      <ScrollProgress />
      <Header current={shown} menuOpen={menu.open} onOpenMenu={openMenu} />
      <Menu open={menu.open} origin={menu.origin} onClose={closeMenu} />
      <Curtain ref={curtain} />
      <main id="main" tabIndex={-1} className="outline-none">
        <PageReady.Provider value={ready}>{Page && <Page key={shown} />}</PageReady.Provider>
      </main>
      {Page && <Footer />}
    </>
  );
}
