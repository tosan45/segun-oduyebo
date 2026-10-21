import PageHero from '../../components/shared/PageHero.jsx';
import FormSection from '../../components/shared/FormSection.jsx';
import Button from '../../components/ui/Button.jsx';
import Practices from './sections/Practices.jsx';
import Gatherings from './sections/Gatherings.jsx';

const FIELDS = [
  { name: 'name', label: 'Name', required: true, auto: 'name' },
  { name: 'email', label: 'Email', type: 'email', required: true, auto: 'email' },
  { name: 'draw', label: 'What draws you to this community?', rows: 3, wide: true, required: true },
  { name: 'about', label: 'A little more about you', rows: 3, wide: true }
];

export default function CommunityPage() {
  return (
    <>
      <PageHero
        page="Community"
        title="Grow with people, not just ideas."
        intro="A participatory community for people who want to deepen their character, capacity, faith, leadership and contribution."
        photo="ddiTeam"
        actions={<Button to="#register">Register your interest</Button>}
      />
      <Practices />
      <Gatherings />
      <FormSection
        id="register"
        title="Help shape the first chapter."
        intro="Membership format and fees are being finalised. Register your interest to hear what comes next."
        submit="Register your interest"
        fields={FIELDS}
      />
    </>
  );
}
