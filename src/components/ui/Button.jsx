import { href } from '../../lib/router.js';
import { ArrowIcon } from './Icons.jsx';
import Magnetic from '../motion/Magnetic.jsx';

/* Pill link. variant: ochre | ink | line. `to` is a route ("speaking") or an anchor ("#speaking-form"). */
export default function Button({ to, variant = 'ochre', icon = true, magnetic = false, className = '', children, ...rest }) {
  const link = (
    <a className={`btn btn-${variant} ${className}`} href={href(to)} {...rest}>
      {children}
      {icon && <ArrowIcon />}
    </a>
  );
  return magnetic ? <Magnetic>{link}</Magnetic> : link;
}
