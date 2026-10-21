import { PODCAST_THEMES } from '../../content.js';
import PageHero from '../../components/shared/PageHero.jsx';
import FormSection from '../../components/shared/FormSection.jsx';
import Button from '../../components/ui/Button.jsx';
import Themes from './sections/Themes.jsx';
import EpisodeFormat from './sections/EpisodeFormat.jsx';
import PlannedEpisodes from './sections/PlannedEpisodes.jsx';
import Resources from './sections/Resources.jsx';

const PLATFORMS = ['Spotify', 'Apple Podcasts', 'YouTube'];

const FIELDS = [
  { name: 'name', label: 'Name', required: true, auto: 'name' },
  { name: 'email', label: 'Email', type: 'email', required: true, auto: 'email' },
  { name: 'theme', label: 'Which theme matters most to you right now?', options: PODCAST_THEMES.map(t => t.name), required: true, wide: true },
  { name: 'about', label: 'A little more about you', rows: 3, wide: true }
];

export default function PodcastPage() {
  return (
    <>
      <PageHero
        page="Podcast"
        title="The Fulfillment Perspective"
        intro="Faith-rooted personal formation for purposeful African living: purpose, emotional wholeness, relationships, leadership and building Africa."
        photo="preaching"
        actions={<>
          <Button to="#notes">Get episode notes</Button>
          {PLATFORMS.map(p => (
            <span key={p} aria-disabled="true" className="btn btn-line !text-mute !shadow-[inset_0_0_0_1.5px_rgb(13_16_48/.2)] cursor-default">
              {p}<span className="text-xs font-normal">soon</span>
            </span>
          ))}
        </>}
      />
      <Themes />
      <EpisodeFormat />
      <PlannedEpisodes />
      <Resources />
      <FormSection
        id="notes"
        title="Get the episode notes."
        intro="Summaries, practical tools and reflection questions, sent when each episode is released."
        submit="Join the mailing list"
        fields={FIELDS}
      />
    </>
  );
}
