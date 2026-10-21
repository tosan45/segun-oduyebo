import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, animate, motion, useReducedMotion } from 'motion/react';
import { EASE, EASE_IO } from '../../lib/motion.js';
import { ArrowIcon } from '../ui/Icons.jsx';
import Field from './Field.jsx';

/* Validates, then swaps itself for a confirmation.
   Not connected to a backend yet, and the confirmation says so. */
export default function Form({ fields, submit, dark = false }) {
  const reduce = useReducedMotion();
  const [sent, setSent] = useState(null);
  const [error, setError] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const bad = [...form.elements].find(el => el.willValidate && !el.checkValidity());
    if (bad) {
      const label = form.querySelector(`label[for="${CSS.escape(bad.id)}"]`).firstChild.textContent.trim();
      setError(bad.validity.typeMismatch ? `Enter a valid ${label.toLowerCase()}.` : `${label} is required.`);
      bad.focus();
      if (!reduce) animate(bad.closest('.field'), { x: [0, -10, 9, -6, 4, 0] }, { duration: 0.45 });
      return;
    }
    setError('');
    setSent({ name: (form.elements.name?.value || '').trim().split(' ')[0] });
  };

  return (
    <AnimatePresence mode="wait" initial={false}>
      {sent ? (
        <Confirmation key="sent" name={sent.name} />
      ) : (
        <motion.form key="form" noValidate onSubmit={onSubmit} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.35, ease: 'easeIn' }}>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-7">
            {fields.map(f => <Field key={f.name} {...f} />)}
            <div className="sm:col-span-2 flex flex-wrap items-center gap-5 pt-2">
              <button className={`btn ${dark ? 'btn-ochre' : 'btn-ink'}`} type="submit">{submit}<ArrowIcon /></button>
              <p className={`text-sm ${dark ? 'text-white/70' : 'text-mute'}`} role="alert">{error}</p>
            </div>
          </div>
        </motion.form>
      )}
    </AnimatePresence>
  );
}

function Confirmation({ name }) {
  const ref = useRef(null);
  useEffect(() => { ref.current?.focus(); }, []);
  return (
    <motion.div
      ref={ref}
      tabIndex={-1}
      role="status"
      className="py-6 outline-none"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: EASE }}
    >
      <svg className="size-20 text-ochre" viewBox="0 0 52 52" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
        <motion.circle cx="26" cy="26" r="24" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.7, ease: EASE_IO }} />
        <motion.path d="m15 27 7 7 15-16" strokeLinecap="round" strokeLinejoin="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.45, delay: 0.65, ease: EASE }} />
      </svg>
      <p className="display text-d3 mt-8">Thank you{name ? `, ${name}` : ''}.</p>
      <p className="text-lede opacity-75 mt-4 measure">This is a preview of the new site, so the form isn’t connected yet and nothing was sent.</p>
    </motion.div>
  );
}
