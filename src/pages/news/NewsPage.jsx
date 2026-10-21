import { NEWS } from '../../content.js';
import PageHero from '../../components/shared/PageHero.jsx';
import CtaBand from '../../components/shared/CtaBand.jsx';
import NewsList from './sections/NewsList.jsx';

export default function NewsPage() {
  return (
    <>
      <PageHero
        page="News & publications"
        title="Coverage and published teaching."
        intro="Third-party reports and Segun’s published teaching, each linked to its source."
        photo="keynoteBw"
        note="Press coverage does not imply endorsement. Past roles and events are not presented as current appointments or measured outcomes."
      />
      <NewsList title="In the news." items={NEWS.filter(n => n.kind === 'press')} />
      <NewsList title="Published teaching." items={NEWS.filter(n => n.kind === 'teaching')} last />
      <CtaBand />
    </>
  );
}
