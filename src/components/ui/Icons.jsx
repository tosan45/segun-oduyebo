const base = { fill: 'none', stroke: 'currentColor', 'aria-hidden': true };

export const ArrowIcon = ({ className = 'size-4' }) => (
  <svg className={className} viewBox="0 0 20 20" strokeWidth="1.8" {...base}><path d="M3 10h13M11 4.5 16.5 10 11 15.5" /></svg>
);

export const ExternalIcon = ({ className = 'size-4' }) => (
  <svg className={className} viewBox="0 0 20 20" strokeWidth="1.8" {...base}><path d="M7 4h9v9M16 4 4 16" /></svg>
);

export const CloseIcon = ({ className = 'size-4' }) => (
  <svg className={className} viewBox="0 0 20 20" strokeWidth="1.8" {...base}><path d="M5 5l10 10M15 5 5 15" /></svg>
);

export const CheckIcon = ({ className = 'size-5' }) => (
  <svg className={className} viewBox="0 0 20 20" strokeWidth="2" {...base}><path d="m4 10.5 4 4 8-9" /></svg>
);

export const PlusIcon = ({ className = 'size-4' }) => (
  <svg className={className} viewBox="0 0 16 16" strokeWidth="2" {...base}><path d="M8 2v12M2 8h12" /></svg>
);

export const ShieldIcon = ({ className = 'size-10' }) => (
  <svg className={className} viewBox="0 0 24 24" strokeWidth="1.6" {...base}>
    <path d="M12 3 4 6v6c0 4.5 3.4 8.3 8 9 4.6-.7 8-4.5 8-9V6l-8-3Z" /><path d="m8.5 12 2.5 2.5 4.5-5" />
  </svg>
);
