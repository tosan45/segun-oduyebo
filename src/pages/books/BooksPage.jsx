import PageHero from '../../components/shared/PageHero.jsx';
import CtaBand from '../../components/shared/CtaBand.jsx';
import Library from './sections/Library.jsx';

export default function BooksPage() {
  return (
    <>
      <PageHero
        page="The bookshop"
        title="Ideas you can carry with you."
        intro="Books on leadership, responsibility, vision, discipline and personal development."
        photo="seatedLandscape"
        note="Titles are pending final catalogue, cover, price and availability verification. The covers shown are placeholders."
      />
      <Library />
      <CtaBand
        title="Bring these ideas into your organisation."
        text="Talks and training built on the same themes as the books."
      />
    </>
  );
}
