import CtaBand from '../../components/shared/CtaBand.jsx';
import Hero from './sections/Hero.jsx';
import ConvictionZoom from './sections/ConvictionZoom.jsx';
import ThroughLine from './sections/ThroughLine.jsx';
import Values from './sections/Values.jsx';
import LearningCycle from './sections/LearningCycle.jsx';
import WaysIn from './sections/WaysIn.jsx';
import InTheRoom from './sections/InTheRoom.jsx';
import PodcastQuotes from './sections/PodcastQuotes.jsx';
import NewsStrip from './sections/NewsStrip.jsx';
import BookShelf from './sections/BookShelf.jsx';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ConvictionZoom />
      <ThroughLine />
      <Values />
      <LearningCycle />
      <WaysIn />
      <InTheRoom />
      <PodcastQuotes />
      <NewsStrip />
      <BookShelf />
      <CtaBand />
    </>
  );
}
