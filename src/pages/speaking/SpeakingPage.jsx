import { SPEAKING_TYPES } from '../../content.js';
import PageHero from '../../components/shared/PageHero.jsx';
import FormSection from '../../components/shared/FormSection.jsx';
import Button from '../../components/ui/Button.jsx';
import EngagementTypes from './sections/EngagementTypes.jsx';
import ThemesMarquee from './sections/ThemesMarquee.jsx';
import Criteria from './sections/Criteria.jsx';
import Faq from './sections/Faq.jsx';

const FIELDS = [
  { name: 'name', label: 'Name', required: true, auto: 'name' },
  { name: 'email', label: 'Email', type: 'email', required: true, auto: 'email' },
  { name: 'organisation', label: 'Organisation', required: true, auto: 'organization' },
  { name: 'phone', label: 'Phone', type: 'tel', auto: 'tel' },
  { name: 'event', label: 'Event name', required: true },
  { name: 'date', label: 'Event date', type: 'date', required: true },
  { name: 'location', label: 'Location', required: true },
  { name: 'audience', label: 'Expected audience size', options: ['Under 50', '50–200', '200–500', '500–1,000', 'Over 1,000'], required: true },
  { name: 'type', label: 'Engagement type', options: SPEAKING_TYPES.map(t => t.name), required: true },
  { name: 'budget', label: 'Budget range', options: ['To be discussed', 'Honorarium only', 'Travel and accommodation covered', 'Full speaking fee'] },
  { name: 'info', label: 'Additional information', rows: 4, wide: true }
];

export default function SpeakingPage() {
  return (
    <>
      <PageHero
        page="Speaking & facilitation"
        title="Bring the conversation to your audience."
        intro="Keynotes, facilitated conversations and learning experiences for organisations working on leadership, responsibility, purpose, faith and human development."
        photo="keynoteBw"
        actions={<Button to="#speaking-form" magnetic>Send a speaking enquiry</Button>}
      />
      <EngagementTypes />
      <ThemesMarquee />
      <Criteria />
      <Faq />
      <FormSection
        id="speaking-form"
        title="Tell us about the room you are building."
        intro="Share as much as you know. You’ll hear back once the invitation has been reviewed."
        submit="Submit speaking enquiry"
        fields={FIELDS}
      />
    </>
  );
}
