import PageHero from '../../components/shared/PageHero.jsx';
import CtaBand from '../../components/shared/CtaBand.jsx';
import RecordTemplate from './sections/RecordTemplate.jsx';

export default function ImpactPage() {
  return (
    <>
      <PageHero
        page="Impact"
        title="Measuring change. Documenting learning."
        intro="A documentation framework is in development. Every programme will be recorded the same way, so results can be compared and lessons carried forward."
        photo="graduation"
      />
      <RecordTemplate />
      <CtaBand
        title="Work on a programme with us."
        text="Schools, churches and organisations who want to run, measure and learn from a programme together."
        label="Start a conversation"
      />
    </>
  );
}
