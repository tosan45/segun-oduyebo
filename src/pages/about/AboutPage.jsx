import PageHero from '../../components/shared/PageHero.jsx';
import CtaBand from '../../components/shared/CtaBand.jsx';
import Button from '../../components/ui/Button.jsx';
import ThroughLine from './sections/ThroughLine.jsx';
import AreasOfWork from './sections/AreasOfWork.jsx';
import VerifiedStory from './sections/VerifiedStory.jsx';
import PhotoRow from './sections/PhotoRow.jsx';

export default function AboutPage() {
  return (
    <>
      <PageHero
        page="About"
        title="A life committed to developing people."
        intro="Segun Oduyebo is a Nigerian pastor, teacher, mentor, author, leadership and personal-development facilitator, and social-impact practitioner."
        photo="seatedPortrait"
        actions={<>
          <Button to="speaking">Invite Segun to speak</Button>
          <Button to="mentorship" variant="line" icon={false}>Explore mentorship</Button>
        </>}
      />
      <ThroughLine />
      <AreasOfWork />
      <VerifiedStory />
      <PhotoRow />
      <CtaBand />
    </>
  );
}
