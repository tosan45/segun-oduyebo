import { useState } from 'react';
import CtaBand from '../../components/shared/CtaBand.jsx';
import GalleryIntro from './sections/GalleryIntro.jsx';
import PhotoGrid from './sections/PhotoGrid.jsx';
import Lightbox from './sections/Lightbox.jsx';

export default function GalleryPage() {
  const [filter, setFilter] = useState('all');
  const [open, setOpen] = useState(null);

  return (
    <>
      <GalleryIntro filter={filter} onFilter={setFilter} />
      <PhotoGrid filter={filter} openPhoto={open} onOpen={setOpen} />
      <Lightbox filter={filter} photo={open} onChange={setOpen} onClose={() => setOpen(null)} />
      <CtaBand title="Bring the conversation to your room." />
    </>
  );
}
