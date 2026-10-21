import { useId } from 'react';

/* One labelled control. Give `options` for a select, `rows` for a textarea. */
export default function Field({ name, label, type = 'text', required = false, options, rows, auto, wide = false, placeholder }) {
  const id = useId();
  const common = { id, name, required, placeholder };
  let control;
  if (options) {
    control = (
      <select {...common} defaultValue="">
        <option value="">Choose one</option>
        {options.map(o => <option key={o}>{o}</option>)}
      </select>
    );
  } else if (rows) {
    control = <textarea {...common} rows={rows} />;
  } else {
    control = <input {...common} type={type} autoComplete={auto} />;
  }
  return (
    <div className={`field ${wide ? 'sm:col-span-2' : ''}`}>
      <label htmlFor={id}>
        {label}
        {!required && <span className="opt"> (optional)</span>}
      </label>
      {control}
    </div>
  );
}
