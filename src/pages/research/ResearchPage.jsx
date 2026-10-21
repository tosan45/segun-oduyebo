import PageHero from '../../components/shared/PageHero.jsx';
import CtaBand from '../../components/shared/CtaBand.jsx';
import Button from '../../components/ui/Button.jsx';
import FirstInquiry from './sections/FirstInquiry.jsx';
import PendingFindings from './sections/PendingFindings.jsx';
import Reading from './sections/Reading.jsx';

export default function ResearchPage() {
  return (
    <>
      <PageHero
        page="Research"
        title="Understanding people before trying to change things."
        intro="Research is where the learning cycle begins: understanding people, communities and problems worth solving. The programme is in development."
        photo="careerWide"
        actions={<Button to="community" variant="ink">Hear when findings are published</Button>}
      />
      <FirstInquiry />
      <PendingFindings />
      <Reading />
      <CtaBand
        title="Help shape the questions."
        text="The community is where research questions are tested against real lives."
        to="community"
        label="Join the community"
      />
    </>
  );
}
