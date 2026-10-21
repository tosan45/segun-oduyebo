# Segun Oduyebo — Website Prototype

A working front-end prototype for **segunoduyebo.com**: a personal-brand and speaking site built around a substantial body of writing, presented as a living library rather than a blog bolted onto a profile page.

Every link in the prototype works. It is a design and architecture reference, not a production build — see **What this prototype is not** at the bottom before you start estimating.

---

## Running it

The development site uses Vite and Tailwind CSS 4. Install the dependencies and start the local server:

```sh
npm install
npm run dev
```

Create and preview a production build with:

```sh
npm run build
npm run preview
```

`prototype-single-file.html` is a standalone copy with the images inlined as base64. Use it for sharing; use the Vite app for development.

---

## Files

```
index.html                  Markup for all 27 routes
css/site.css                Design system + Tailwind CSS theme and utilities
js/site.js                  Content model, renderers, hash router
img/                        The three supplied photographs of Segun
vite.config.js              Vite and Tailwind CSS plugin configuration
prototype-single-file.html  Portable build — everything inlined, for sending to clients
SHOT-LIST.md                The 78 image slots still needing photography
```

The existing editorial styles remain in `css/site.css`; Tailwind utilities are available alongside them. The package scripts provide local development, production builds, and build previews.

---

## Design system

All tokens are CSS custom properties at the top of `site.css`.

### Colour

| Token | Value | Use |
|---|---|---|
| `--ink` | `#0B0B0B` | Body text, footer background |
| `--paper` | `#FFFFFF` | Default surface |
| `--paper-2` | `#F7F6F2` | Alternating editorial band (`.tint`) |
| `--forest` | `#052A1C` | Dark sections, hero fields |
| `--forest-2` | `#0A3B28` | Secondary dark |
| `--green` | `#116A47` | Signature accent — links, buttons, rules |
| `--green-bright` | `#1E9C68` | Accent on dark surfaces |
| `--sage` | `#E7EFE9` | Green tint blocks |

One accent colour, used sparingly. The photography carries the colour; the interface stays out of the way.

### Typography

| Role | Family | Notes |
|---|---|---|
| Display | Fraunces | Headlines, article titles, pull quotes |
| Reading | Source Serif 4 | Article body, ledes — set for long-form comfort |
| Interface | Inter | Nav, meta, buttons, labels, filters |

Loaded from Google Fonts. If you self-host for production, the site degrades gracefully to system serif/sans.

Scale classes: `.d1`–`.d5`, `.lede`, `.body`, `.eyebrow`, `.kicker`, `.meta`. All use `clamp()`, so the site is fluid rather than breakpoint-stepped. There are only two real breakpoints: **1080px** (nav collapses to the full-screen menu) and **760/640px** (grids collapse, rails become horizontal scrollers).

### Layout primitives

- `.wrap` — max 1360px container
- `.split` / `.split.rev` — the alternating image-and-text sections
- `.grid.g2/.g3/.g4` — card grids
- `.rail` — a grid that becomes a snap-scrolling horizontal rail under 760px
- `.ph` — image slot. See **Photography** below
- `.dark`, `.tint`, `.tint-green` — surface variants; nested type recolours automatically

---

## Routing

Hash-based, handled by `route()` in `site.js`. Static pages are `<section class="page" data-route="...">` in the markup; detail pages are rendered from data into a template.

| Pattern | Example |
|---|---|
| `#/` | Homepage |
| `#/about` `#/speaking` `#/consulting` `#/programmes` `#/publications` `#/video` `#/library` `#/collections` `#/series` `#/archives` `#/newsletter` `#/contact` `#/privacy` | Static pages |
| `#/article/:slug` | `#/article/leadership-before-title` |
| `#/topic/:slug` | `#/topic/education` |
| `#/collection/:slug` | `#/collection/faith` |
| `#/series/:slug` | `#/series/notes-on-leadership` |
| `#/programme/:slug` | `#/programme/rising-generation` |
| anything else | 404 page |

**The homepage renders without JavaScript.** `.page[data-route="home"]` is visible by default in CSS; the script adds a `.js` class to `<html>` which hands control to the router. This exists because some preview environments block inline scripts, and a blank page is a worse failure than a static one.

---

## Content model

`site.js` defines the content as plain objects. These map directly onto CMS collections — the brief is explicit that not everything should be a generic "post":

| Object | Becomes |
|---|---|
| `ARTICLES` | Article, Essay, Reflection, Teaching, Letter, Note, Commentary, Speech, Interview — the `format` field drives the filters |
| `TOPICS` | The eight taxonomy terms |
| `SERIES` | Recurring writing series |
| `COLLECTIONS` | Curated cross-format collections |
| `PROGRAMMES` | Programme records with participant story + outcome number |
| `PUBLICATIONS` | Books, manuals, booklets, papers |
| `VIDEOS` | Video records |
| `QUOTES` | The verified quotation database |
| `ARCHIVE` | Dated milestone entries |

An article record:

```js
{
  slug: 'leadership-before-title',
  title: 'Leadership Begins Long Before the Title',
  dek: 'One-sentence standfirst.',
  topic: 'leadership',        // key into TOPICS
  format: 'Essay',            // drives the format filter
  year: 2026,
  date: '12 August 2026',
  read: '9 min',
  series: 'notes-on-leadership',  // or null
  img: 'Feature image description',
  cap: 'Caption.',
  body: `<p>…</p>`            // HTML: h2, p, .pull, ol, .note
}
```

Adding an article to `ARTICLES` makes it appear in Insights, its topic page, its series page, the Library search, and the related-content rails automatically. Nothing else needs touching.

The Library search (`libraryItems()`) deliberately searches across *all* content types at once — an author searching "leadership" should find essays, a keynote, a programme and a quotation together. That cross-format search is the point of the Library, and it is the piece most likely to be underestimated in a production build.

---

## Photography

An image slot is a `.ph` element with a `data-label` describing the photograph that belongs there:

```html
<figure class="ph r-land" data-label="Teachers in a training workshop"></figure>
```

Until a real image exists it renders as a labelled tonal block, so the design never shows a broken image and the client can see exactly what is missing.

**To drop in a real photograph**, either:

```html
<figure class="ph r-land has-img" style="background-image:url(assets/img/teachers.jpg)"></figure>
```

or set `data-src` and let `applyImages()` handle it. The `has-img` class removes the texture overlay and the label.

Aspect classes: `.r-hero` `.r-wide` `.r-land` `.r-sq` `.r-port` `.r-tall` `.r-pano`. All collapse sensibly on mobile — `.r-pano` becomes 4:3 rather than a letterbox sliver.

**78 slots are still placeholders.** `SHOT-LIST.md` lists every one with its location — hand it to the photographer.

---

## What is placeholder and must be replaced

Treat all of the following as fiction written to make the prototype demonstrable:

- **The biography.** Dates, institutions, qualifications, ordinations, board roles — all invented.
- **Programme statistics.** "4,200+ participants", "860 businesses", "68% survival at five years" — invented.
- **Participant stories.** Ayo, Mrs Nwosu, Mrs Adeyemi — invented composites.
- **Article text.** Five pieces are written in full to demonstrate the reading experience; the rest carry a visible "prototype text" marker. All of it should be replaced with Segun's actual writing.
- **Publications, testimonials, contact details, dates.** All invented.

Nothing here should survive into production without verification.

---

## What this prototype is not

Points to resolve before or during the production build:

1. **Hash routing is a prototype convenience.** A publication that wants to be found needs real URLs (`/insights/leadership-before-title`), server-rendered or statically generated, with per-page titles, meta descriptions and Open Graph images. This is the single biggest structural change between here and production.
2. **No CMS.** Content lives in a JS file. The brief calls for distinct content types, series, collections and filters — that is a real content-modelling job in whatever CMS is chosen.
3. **Forms do nothing.** Speaking enquiries, contact and newsletter forms display a confirmation state and send nothing.
4. **Images are unoptimised.** Production needs responsive `srcset`, modern formats, and lazy loading — the site is deliberately image-heavy and will be slow without it.
5. **Search is a substring match** over an in-memory array. At real archive scale the Library needs proper indexing.
6. **Accessibility needs a pass.** Semantics and contrast are sound and reduced-motion is respected, but focus management on route change, skip links and a full keyboard audit have not been done.
7. **No analytics, no cookie consent, no legal pages.** `#/privacy` is a stub.

---

## The intent, in one line

The site should not read as a speaker's website with a blog attached. It should read as the digital home of a body of work — which is why the Library, the collections and the article typography deserve more attention than the marketing pages.
