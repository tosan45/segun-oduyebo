/* The SO monogram in an arch */
export default function Mark({ className = 'size-10 bg-brand text-ochre' }) {
  return (
    <span className={`grid place-items-center font-bold wide text-[.8rem] leading-none ${className}`} style={{ borderRadius: '999px 999px 6px 6px' }} aria-hidden="true">
      SO
    </span>
  );
}

/* Small ochre dot used beside page names and list items */
export const Dot = ({ className = 'size-2.5' }) => <span className={`inline-block shrink-0 rounded-full bg-ochre ${className}`} aria-hidden="true" />;
