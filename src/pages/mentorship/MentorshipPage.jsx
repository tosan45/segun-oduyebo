import PageHero from '../../components/shared/PageHero.jsx';
import FormSection from '../../components/shared/FormSection.jsx';
import Button from '../../components/ui/Button.jsx';
import MentorshipModel from './sections/MentorshipModel.jsx';

const FIELDS = [
  { name: 'name', label: 'Name', required: true, auto: 'name' },
  { name: 'email', label: 'Email', type: 'email', required: true, auto: 'email' },
  { name: 'stage', label: 'Current role or stage', required: true, wide: true, placeholder: 'For example: final-year student, new manager, youth pastor' },
  { name: 'develop', label: 'What would you like to develop?', rows: 3, wide: true, required: true },
  { name: 'about', label: 'A little more about you', rows: 3, wide: true }
];

export default function MentorshipPage() {
  return (
    <>
      <PageHero
        page="Mentorship"
        title="Growth needs proximity."
        intro="Mentorship is structured to create depth without depending on unlimited personal access to one individual."
        photo="osunSpeaking"
        actions={<Button to="#waitlist">Join the waitlist</Button>}
      />
      <MentorshipModel />
      <FormSection
        id="waitlist"
        title="Structured around real developmental needs."
        intro="Cohort themes, dates, curriculum and application criteria will be published when confirmed. Joining the waitlist does not guarantee access to Segun personally."
        submit="Join the mentorship waitlist"
        fields={FIELDS}
      />
    </>
  );
}
