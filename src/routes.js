import HomePage from './pages/home/HomePage.jsx';
import AboutPage from './pages/about/AboutPage.jsx';
import CommunityPage from './pages/community/CommunityPage.jsx';
import MentorshipPage from './pages/mentorship/MentorshipPage.jsx';
import ResearchPage from './pages/research/ResearchPage.jsx';
import ImpactPage from './pages/impact/ImpactPage.jsx';
import NewsPage from './pages/news/NewsPage.jsx';
import PodcastPage from './pages/podcast/PodcastPage.jsx';
import DestinyConnectPage from './pages/destiny-connect/DestinyConnectPage.jsx';
import SpeakingPage from './pages/speaking/SpeakingPage.jsx';
import BooksPage from './pages/books/BooksPage.jsx';
import GalleryPage from './pages/gallery/GalleryPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

const suffix = ' — Segun Oduyebo';

export const ROUTES = {
  '': { Page: HomePage, label: 'Home', title: 'Segun Oduyebo — Pastor, teacher and people developer' },
  about: { Page: AboutPage, label: 'About', title: 'About' + suffix },
  community: { Page: CommunityPage, label: 'Community', title: 'Community' + suffix, anchors: ['register'] },
  mentorship: { Page: MentorshipPage, label: 'Mentorship', title: 'Mentorship' + suffix, anchors: ['waitlist'] },
  research: { Page: ResearchPage, label: 'Research', title: 'Research' + suffix },
  impact: { Page: ImpactPage, label: 'Impact', title: 'Impact' + suffix },
  news: { Page: NewsPage, label: 'News', title: 'News & publications' + suffix },
  podcast: { Page: PodcastPage, label: 'Podcast', title: 'The Fulfillment Perspective' + suffix, anchors: ['notes'] },
  'destiny-connect': { Page: DestinyConnectPage, label: 'Destiny Connect', title: 'Destiny Connect' + suffix, anchors: ['join'] },
  speaking: { Page: SpeakingPage, label: 'Speaking', title: 'Speaking' + suffix, anchors: ['speaking-form'] },
  books: { Page: BooksPage, label: 'Books', title: 'Books' + suffix },
  gallery: { Page: GalleryPage, label: 'Gallery', title: 'Gallery' + suffix }
};

export const NOT_FOUND = { Page: NotFoundPage, label: 'Not found', title: 'Page not found' + suffix };
