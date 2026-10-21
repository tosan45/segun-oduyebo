/* ============================================================
   CONTENT
   Sourced from segunoduyebo.com. Anything the live site marks as
   pending verification is presented the same way here.
   ============================================================ */

const IMG = '/img/';

export const PHOTOS = {
  headshot: { src: 'headshot-studio.jpg', w: 947, h: 960, alt: 'Segun Oduyebo smiling in a navy suit and patterned tie', group: 'portraits', caption: 'Studio portrait' },
  seatedPortrait: { src: 'segun-seated-portrait.jpg', w: 900, h: 1089, alt: 'Segun Oduyebo seated against an ochre backdrop, chin resting on his hand', group: 'portraits', caption: 'Studio portrait' },
  seatedLandscape: { src: 'segun-seated-landscape.jpg', w: 1400, h: 1066, alt: 'Segun Oduyebo seated, looking off to the side against an ochre backdrop', group: 'portraits', caption: 'Studio portrait' },
  portraitBw: { src: 'segun-portrait-bw.jpg', w: 1000, h: 907, alt: 'Black and white portrait of Segun Oduyebo with arms folded', group: 'portraits', caption: 'Studio portrait' },

  teensLeadership: { src: 'teens-leadership-conference-2024.jpg', w: 720, h: 480, alt: 'Segun speaking from the floor of a hall, notes in hand', group: 'youth', caption: 'Teens’ Leadership Conference 2024' },
  keynoteBw: { src: 'keynote-monochrome.jpg', w: 720, h: 480, alt: 'Segun gesturing mid-keynote with a microphone', group: 'conferences', caption: 'Keynote address' },
  covenantStage: { src: 'covenant-conference-stage.jpg', w: 720, h: 480, alt: 'Segun preaching on a red-lit stage', group: 'faith', caption: 'Covenant Conference, Great House Christian Center' },
  covenantHall: { src: 'covenant-conference-hall.jpg', w: 720, h: 480, alt: 'A full hall seen from the stage during a conference', group: 'faith', caption: 'Covenant Conference, Great House Christian Center' },
  covenantAudience: { src: 'covenant-conference-audience.jpg', w: 720, h: 480, alt: 'Conference attendees seated and listening', group: 'faith', caption: 'Covenant Conference, Great House Christian Center' },
  covenantRear: { src: 'covenant-conference-rear.jpg', w: 720, h: 480, alt: 'The congregation seen from the back of the hall', group: 'faith', caption: 'Covenant Conference, Great House Christian Center' },
  solutionMakers: { src: 'solution-makers-competition.jpg', w: 720, h: 480, alt: 'Segun speaking at a lectern in front of a competition banner', group: 'youth', caption: 'Solution Makers Competition' },
  eveningService: { src: 'great-house-evening-service.jpg', w: 720, h: 480, alt: 'An evening service with Segun speaking from the front', group: 'faith', caption: 'Great House Christian Center' },
  graduation: { src: 'graduation-cohort.jpg', w: 720, h: 480, alt: 'A graduating class in maroon and gold gowns holding certificates', group: 'faith', caption: 'Graduating class, Great House Christian Center' },
  careerHall: { src: 'career-conference-hall.jpg', w: 720, h: 480, alt: 'Students listening in a hall under a Career Guidance banner', group: 'youth', caption: 'Career Development Conference' },
  careerLectern: { src: 'career-conference-lectern.jpg', w: 720, h: 480, alt: 'Segun at a lectern beside a Career Guidance mural', group: 'youth', caption: 'Career Development Conference' },
  careerWide: { src: 'career-conference-wide.jpg', w: 720, h: 480, alt: 'A wide view of a career development conference', group: 'youth', caption: 'Career Development Conference' },
  leverage: { src: 'leverage-conference-osun-2025.jpg', w: 720, h: 480, alt: 'Segun raising his hand as he speaks into a microphone', group: 'conferences', caption: 'Leverage Conference, Osun 2025' },
  preaching: { src: 'preaching-scripture.jpg', w: 720, h: 960, alt: 'Segun preaching in front of a projected verse from 1 Samuel 30', group: 'faith', caption: 'Teaching from 1 Samuel 30' },
  ajanakuAddress: { src: 'ajanaku-foundation-address.jpg', w: 720, h: 480, alt: 'Segun reading from notes at a foundation event', group: 'conferences', caption: 'Olaleye Ajanaku Foundation' },
  ajanakuAudience: { src: 'ajanaku-foundation-audience.jpg', w: 720, h: 480, alt: 'Families and young people standing in a hall', group: 'conferences', caption: 'Olaleye Ajanaku Foundation' },
  ddiStage: { src: 'ddi-stage-address.jpg', w: 720, h: 480, alt: 'Segun speaking in front of a Destiny Development Initiative backdrop', group: 'youth', caption: 'Destiny Development Initiative' },
  christmasService: { src: 'great-house-christmas-service.jpg', w: 720, h: 480, alt: 'Segun speaking beside a white Christmas tree', group: 'faith', caption: 'Christmas service, Great House Christian Center' },
  ddiTeam: { src: 'ddi-volunteer-team.jpg', w: 720, h: 540, alt: 'A large group of young volunteers posing together and cheering', group: 'youth', caption: 'Destiny Development Initiative team' },
  closeup: { src: 'teaching-closeup.jpg', w: 720, h: 506, alt: 'Close-up of Segun teaching with a microphone', group: 'faith', caption: 'Great House Christian Center' },
  beAMan: { src: 'be-a-man-conference-2025.jpg', w: 720, h: 478, alt: 'Segun at a lectern at the Be A Man Conference', group: 'conferences', caption: 'Be A Man Conference 2025' },
  destinyTour: { src: 'destiny-tour-students.jpg', w: 720, h: 479, alt: 'Three smiling students holding copies of Roadmap for Building a Career', group: 'youth', caption: 'Students on the Destiny Tour' },
  faithSummit: { src: 'faith-summit.jpg', w: 720, h: 576, alt: 'Segun holding a microphone on a stage with drums behind him', group: 'faith', caption: 'Faith Summit' },
  osunSpeaking: { src: 'osun-teens-conference-speaking.jpg', w: 720, h: 480, alt: 'Segun pointing as he speaks to students', group: 'youth', caption: 'Osun Teens Conference' },
  osunPledge: { src: 'osun-teens-conference-pledge.jpg', w: 720, h: 480, alt: 'Secondary school students standing with hands on their hearts', group: 'youth', caption: 'Osun Teens Conference' },
  osunAudience: { src: 'osun-teens-conference-audience.jpg', w: 720, h: 480, alt: 'A packed hall of secondary school students in uniform', group: 'youth', caption: 'Osun Teens Conference' },
  osunStage: { src: 'osun-teens-conference-stage.jpg', w: 720, h: 480, alt: 'Segun speaking in front of the Osun Teens Conference banner', group: 'youth', caption: 'Osun Teens Conference' }
};
for (const p of Object.values(PHOTOS)) p.src = IMG + p.src;

export const GALLERY_GROUPS = [
  { key: 'all', label: 'Everything' },
  { key: 'youth', label: 'Young people & schools' },
  { key: 'faith', label: 'Church & faith' },
  { key: 'conferences', label: 'Conferences & training' },
  { key: 'portraits', label: 'Portraits' }
];

export const NAV = [
  { group: 'Participate', links: [['community', 'Community'], ['mentorship', 'Mentorship'], ['destiny-connect', 'Destiny Connect']] },
  { group: 'Learn', links: [['research', 'Research'], ['impact', 'Impact'], ['news', 'News'], ['podcast', 'Podcast']] },
  { group: 'Engage', links: [['speaking', 'Speaking'], ['books', 'Books']] },
  { group: 'Discover', links: [['about', 'About'], ['gallery', 'Gallery'], ['', 'Home']] }
];

export const PRIMARY_NAV = [['about', 'About'], ['mentorship', 'Mentorship'], ['community', 'Community'], ['destiny-connect', 'Destiny Connect'], ['podcast', 'Podcast'], ['speaking', 'Speaking']];

export const VALUES = ['Faith', 'Character', 'Capacity', 'Responsibility'];

export const CONVICTION = 'Human transformation is the beginning of social transformation.';

export const CYCLE = [
  { name: 'Research', text: 'Understanding people, communities and problems worth solving.' },
  { name: 'Ideas', text: 'Turning evidence into useful frameworks and conversations.' },
  { name: 'Mentorship', text: 'Helping people apply ideas to life and leadership.' },
  { name: 'Community', text: 'Building relationships, accountability and collective learning.' },
  { name: 'Action', text: 'Turning learning into programmes, projects and interventions.' },
  { name: 'Impact', text: 'Measuring change, documenting learning and asking better questions.' }
];

export const WAYS_IN = [
  { route: 'community', name: 'Community', text: 'Conversations, gatherings, reading groups and shared projects.', photo: 'ddiTeam' },
  { route: 'mentorship', name: 'Mentorship', text: 'Open conversations, structured cohorts and a growing mentor network.', photo: 'osunSpeaking' },
  { route: 'destiny-connect', name: 'Destiny Connect', text: 'Mentors, counsellors and opportunities for young people.', photo: 'destinyTour' },
  { route: 'podcast', name: 'The Fulfillment Perspective', text: 'Faith-rooted personal formation for purposeful African living.', photo: 'preaching' },
  { route: 'speaking', name: 'Speaking', text: 'Keynotes and facilitated conversations for your audience.', photo: 'covenantStage' },
  { route: 'books', name: 'Books', text: 'Leadership, responsibility, vision and discipline.', photo: 'seatedLandscape' }
];

export const ABOUT_AREAS = ['Pastoral leadership', 'Teaching', 'Personal development', 'Leadership training', 'Youth development', 'Authorship', 'Social-impact initiatives'];

export const COMMUNITY_PRACTICES = [
  ['Curiosity', 'over certainty'],
  ['Responsibility', 'over passivity'],
  ['Contribution', 'over consumption'],
  ['Growth', 'with accountability']
];

export const COMMUNITY_FORMATS = ['Member conversations', 'Monthly gatherings', 'Reading groups', 'Growth challenges', 'Accountability groups', 'Collaborative projects', 'Local chapters', 'Mentorship opportunities'];

export const MENTORSHIP_TIERS = [
  { name: 'Open mentorship', text: 'Periodic live mentorship conversations with Segun and the wider community.', reach: 'Everyone in the community' },
  { name: 'Mentorship cohorts', text: 'Structured programmes focused on defined developmental outcomes.', reach: 'Small groups, set outcomes' },
  { name: 'Mentor network', text: 'A future network of trained mentors guiding smaller groups with care and accountability.', reach: 'Many mentors, many circles' }
];

export const RESEARCH_READING = [
  { title: 'Digital Skills in Nigeria', source: 'World Bank, 2024', text: 'Covers digital skills, access and school infrastructure.', note: null },
  { title: 'Mental health of adolescents', source: 'World Health Organization, updated 1 September 2025', text: 'Global guidance on adolescent wellbeing.', note: 'Not specific to Nigeria. Mentorship does not replace professional mental health care.' }
];

export const RESEARCH_SLOTS = ['Methodology', 'Contributors', 'Evidence', 'Findings'];

export const IMPACT_FIELDS = [
  { name: 'The problem', text: 'What needed to change, and for whom.' },
  { name: 'What was known', text: 'The evidence and experience we started from.' },
  { name: 'What was tried', text: 'The programme, project or intervention itself.' },
  { name: 'Who took part', text: 'Participants, partners and facilitators.' },
  { name: 'Outcomes', text: 'What changed, measured where it can be.' },
  { name: 'Lessons', text: 'What worked, what didn’t, and why.' },
  { name: 'Next steps', text: 'The better question we ask next time.' }
];

export const NEWS = [
  { kind: 'press', title: 'Youth development and the role of mentoring', source: 'Nigerian Tribune', date: '4 June 2024', text: 'Reports on a youth-development and oratory programme at Obafemi Awolowo University, naming Segun as president of Destiny Development Initiative.', url: 'https://tribuneonlineng.com/ngos-odidere-foundation-charge-govt-on-youths-developmental-programmes/' },
  { kind: 'press', title: 'Mentoring young women in Osun', source: 'Nigerian Tribune', date: '28 March 2024', text: 'Covers preparations for the Osun Exceptional Ladies Conference and quotes Segun on mentoring young women. It reports on the planned conference, not its outcomes.', url: 'https://tribuneonlineng.com/ezekwesili-to-deliver-lecture-at-osun-exceptional-ladies-conference/' },
  { kind: 'press', title: 'Civil society participation in Osun', source: 'The Eagle Online', date: '12 November 2020', text: 'Identifies Segun as a convener of the Network of Non Governmental Organisations in Osun, calling for civil-society participation in the state’s #EndSARS inquiry. A role as reported in 2020, not a current appointment.', url: 'https://theeagleonline.com.ng/endsars-csos-seek-inclusion-in-osun-panel-of-inquiry/' },
  { kind: 'teaching', title: 'Finding Fulfilment: Walking in God’s Purpose', source: 'YouVersion', date: 'Five-day plan', text: 'A five-day Bible reading plan on faith and purpose.', url: 'https://www.bible.com/reading-plans/65990-finding-fulfilment-walking-in-gods-purpose' },
  { kind: 'teaching', title: 'The Real Manager of Your Life', source: 'YouVersion', date: 'Five-day plan', text: 'A five-day reading plan that links to the source sermon.', url: 'https://www.bible.com/reading-plans/64843-the-real-manager-of-your-life' },
  { kind: 'teaching', title: 'Christian Discipline: Walk With God Service', source: 'YouTube, PSO Fulfilment Channel', date: '8 October 2025', text: 'A recorded sermon on Christian disciplines.', url: 'https://www.youtube.com/watch?v=welcGyrlwuA' },
  { kind: 'teaching', title: 'Wonder Prosperity: Part 1', source: 'Victory Life Ministries International', date: 'September 2025', text: 'A ministry-published teaching article.', url: 'https://victorylifeministriesinternational.org/wonder-prosperity-part-1-by-segun-oduyebo/' }
];

export const TIMELINE = [
  { when: 'November 2020', what: 'Convener, Network of Non Governmental Organisations in Osun', source: 'The Eagle Online', url: NEWS[2].url },
  { when: 'March 2024', what: 'Quoted on mentoring young women ahead of the Osun Exceptional Ladies Conference', source: 'Nigerian Tribune', url: NEWS[1].url },
  { when: 'June 2024', what: 'President, Destiny Development Initiative, at a youth oratory programme at Obafemi Awolowo University', source: 'Nigerian Tribune', url: NEWS[0].url },
  { when: 'October 2025', what: 'Sermon on Christian disciplines published on the PSO Fulfilment Channel', source: 'YouTube', url: NEWS[5].url }
];

export const PODCAST_THEMES = [
  { name: 'Purpose, process & seasons', text: 'Finding purpose, accepting process, comparison and delays, transitions, and fulfilment beyond achievement.', quote: 'Many people are not confused about purpose. They are simply unwilling to accept the process attached to it.' },
  { name: 'Emotional wholeness & healthy relationships', text: 'Healing, identity before relationships, boundaries, marriage, friendship and conflict.', quote: 'Marriage cannot repair an identity you refused to build.' },
  { name: 'Character, work & responsible leadership', text: 'Work ethic, integrity, difficult bosses, accountability, service, mentorship, and leading at home before leading publicly.', quote: 'One of the most dangerous desires is the desire for influence without the discipline of character.' },
  { name: 'Community contribution: building Africa', text: 'Citizenship, family, institutions, ownership, and moving from anger to building.', quote: 'Africa does not suffer from a shortage of passion. It suffers from a shortage of disciplined builders.' }
];

export const PODCAST_FORMAT = [
  { name: 'Tension', text: 'Name the real struggle, the way people actually live it.' },
  { name: 'Truth', text: 'What scripture and experience say about it.' },
  { name: 'Tool', text: 'One practical thing to do this week.' },
  { name: 'Transformation', text: 'What changes when the truth is practised.' }
];

export const PODCAST_SEGMENTS = ['Monday Perspective', 'Whole Before Two', 'Faith at Work', 'Build Africa Friday', 'Segun Responds'];

export const PODCAST_EPISODES = [
  'Why Purpose Sometimes Feels Like You Are Falling Behind',
  'What Nobody Tells You About Purpose',
  'The Process You Are Trying to Escape',
  'Why Some People Enter Relationships Before They Have Built an Identity',
  'The Boundaries That Protect Love',
  'How to Work Under Difficult People',
  'Character Before Influence',
  'From Protest to Production'
];

export const DESTINY_MODEL = [
  { name: 'In school', text: 'Physical counselling in schools. The platform handles reporting, monitoring, referrals and programme management.' },
  { name: 'Online', text: 'Teenagers and young people outside participating schools book secure sessions with qualified online counsellors.' },
  { name: 'Volunteer mentorship', text: 'Verified mentors in education, career, entrepreneurship, leadership, tech and more support young people.' }
];

export const DESTINY_PORTALS = [
  { name: 'Young people', items: ['Book online counselling', 'Request a mentor', 'Set goals', 'Explore learning and opportunities'] },
  { name: 'School counsellors', items: ['Log physical sessions using student references', 'Schedule follow-ups', 'Record referrals', 'Submit termly reports'] },
  { name: 'Online counsellors', items: ['Accept counselling requests', 'Schedule sessions', 'Keep private progress notes'] },
  { name: 'Mentors', items: ['Apply and get verified', 'Accept mentees', 'Track progress across sessions'] },
  { name: 'Coordinators', items: ['View reach, sessions and referrals', 'See safeguarding alerts', 'Work at national, state, zonal and LGA level'] }
];

export const DESTINY_STEPS = [
  { name: 'Create your account', text: 'Everyone starts with a young person’s account.' },
  { name: 'Apply for a role if you serve', text: 'Counsellors, mentors and coordinators apply for their role.' },
  { name: 'Get verified and begin', text: 'Access opens once your role is verified.' }
];

export const DESTINY_SAFEGUARDING = [
  'School records use student reference codes, never names.',
  'Coordinators see totals only, never individual records.',
  'If a young person is in immediate danger, contact local emergency services.'
];

export const SPEAKING_TYPES = [
  { name: 'Keynotes & conferences', photo: 'beAMan' },
  { name: 'Churches & Christian organisations', photo: 'covenantStage' },
  { name: 'Corporate & institutional training', photo: 'leverage' },
  { name: 'Schools, universities & youth organisations', photo: 'osunStage' }
];

export const SPEAKING_THEMES = ['Leadership', 'Personal transformation', 'Purpose', 'Responsibility', 'Soft skills', 'Faith and society', 'Human development'];

export const SPEAKING_CRITERIA = [
  { name: 'Audience fit', text: 'Who will be in the room, and what they need.' },
  { name: 'Purpose', text: 'What the gathering is meant to change.' },
  { name: 'Timing', text: 'Dates, travel and preparation time.' },
  { name: 'Format', text: 'Keynote, conversation or learning experience.' }
];

export const SPEAKING_FAQ = [
  { q: 'What formats are available?', a: 'Keynotes, facilitated conversations and longer learning experiences such as workshops and training sessions. Tell us about your audience and we’ll suggest the format that suits it.' },
  { q: 'Is every invitation accepted?', a: 'No. Each invitation is reviewed for audience fit, purpose, timing and format before a reply is sent.' }
];

export const BOOKS = [
  { title: 'Emotional Intelligence', tone: 'adire' },
  { title: 'Positioning Yourself Strategically for Impact', tone: 'ochre' },
  { title: 'Catch a Vision', tone: 'wash' },
  { title: 'Dynamics of Leadership', tone: 'ink' },
  { title: 'Dynamics of Responsibility', tone: 'adire-2' },
  { title: 'Celebration of Discipline', tone: 'adire-3' }
];
