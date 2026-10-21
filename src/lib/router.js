import { useSyncExternalStore } from 'react';

/* ============================================================
   HASH ROUTER
   #/speaking is a route. A plain hash such as #speaking-form is
   an in-page anchor; the page that owns it is looked up in the
   route table's `anchors`.
   ============================================================ */

const subscribe = cb => {
  addEventListener('hashchange', cb);
  return () => removeEventListener('hashchange', cb);
};

export const useHash = () => useSyncExternalStore(subscribe, () => location.hash);

export const href = route => (route.startsWith('#') ? route : `#/${route}`);

export function resolve(hash, routes, current) {
  if (hash && !hash.startsWith('#/')) {
    const id = decodeURIComponent(hash.slice(1));
    if (current !== null && document.getElementById(id)) return { name: current, anchor: id };
    const owner = Object.keys(routes).find(k => routes[k].anchors?.includes(id));
    return { name: owner ?? current ?? '', anchor: id };
  }
  return { name: hash.replace(/^#\/?/, '').split('/')[0], anchor: null };
}

export function scrollToId(id, smooth) {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.getElementById(id)?.scrollIntoView({ behavior: smooth && !reduce ? 'smooth' : 'instant', block: 'start' });
}
