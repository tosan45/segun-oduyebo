import { motion } from 'motion/react';
import { PHOTOS } from '../../content.js';

/* An <img> from the photo catalogue. `animated` makes it a motion.img
   (for motion-value styles); layoutId enables shared-element transitions. */
export default function Photo({ photo, eager = false, animated = false, layoutId, ...rest }) {
  const p = PHOTOS[photo];
  const Img = animated || layoutId ? motion.img : 'img';
  return (
    <Img
      src={p.src}
      alt={p.alt}
      width={p.w}
      height={p.h}
      decoding="async"
      {...(eager ? { fetchPriority: 'high' } : { loading: 'lazy' })}
      {...(layoutId ? { layoutId } : {})}
      {...rest}
    />
  );
}
