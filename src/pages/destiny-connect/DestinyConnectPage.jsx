import PageHero from '../../components/shared/PageHero.jsx';
import FormSection from '../../components/shared/FormSection.jsx';
import Button from '../../components/ui/Button.jsx';
import CounsellingModel from './sections/CounsellingModel.jsx';
import RolePortals from './sections/RolePortals.jsx';
import HowToJoin from './sections/HowToJoin.jsx';
import Safeguarding from './sections/Safeguarding.jsx';

const FIELDS = [
  { name: 'name', label: 'Name', required: true, auto: 'name' },
  { name: 'email', label: 'Email', type: 'email', required: true, auto: 'email' },
  { name: 'role', label: 'I am joining as', options: ['A young person', 'A school counsellor', 'An online counsellor', 'A mentor', 'A coordinator', 'A parent or school'], required: true, wide: true },
  { name: 'about', label: 'Anything we should know?', rows: 3, wide: true }
];

export default function DestinyConnectPage() {
  return (
    <>
      <PageHero
        page="Destiny Connect"
        title="Mentors, counsellors and opportunities for young people."
        intro="Destiny Connect connects young people with mentors, counsellors, development resources and opportunities. A Destiny Coach Network platform proposed by Segun Oduyebo."
        photo="destinyTour"
        actions={<Button to="#join">Get started</Button>}
      />
      <CounsellingModel />
      <RolePortals />
      <HowToJoin />
      <Safeguarding />
      <FormSection
        id="join"
        title="Get started with Destiny Connect."
        intro="Tell us who you are and how you’d like to take part. We’ll let you know when your portal opens."
        submit="Register interest"
        fields={FIELDS}
      />
      <hr className="text-[#8ab888] h-2" />
    </>
  );
}
