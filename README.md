# Segun Oduyebo — Website

Front-end for **segunoduyebo.com**. The content mirrors the live site (Community, Mentorship, Research, Impact, News, Podcast, Destiny Connect, Speaking, Books, About), plus a photo gallery built from event photography.

## Running it

```sh
npm install
npm run dev       # local development
npm run build     # production build into dist/
npm run preview   # preview the build
```

Stack: React 19, Vite 7, Tailwind CSS 4 (`@tailwindcss/vite`), and [Motion](https://motion.dev) 13 (`motion/react`, formerly Framer Motion) for all animation.

## Structure

```
index.html                     Mount point (#root) and fonts
src/main.jsx                   Boots React inside <MotionConfig reducedMotion="user">
src/App.jsx                    Page shell and hash router: curtain transitions, menu state
src/routes.js                  Route table: page, label, title, in-page anchors
src/content.js                 All copy and data, plus the photo catalogue with alt text
src/style.css                  Tailwind theme tokens, type scale, component styles
src/lib/                       motion.js (easings, PageReady), router.js, useMediaQuery.js

src/components/
  layout/                      Header, Menu, Footer, Curtain, ScrollProgress
  shared/                      PageHero, SectionHead, CtaBand, FormSection
  motion/                      Reveal, Stagger, SplitText, ScrubText, StretchText,
                               Parallax, Magnetic, Marquee
  ui/                          Button, Frame, Photo, Icons, Mark
  forms/                       Field, Form

src/pages/<page>/
  <Page>Page.jsx               Composes the page from its sections
  sections/*.jsx               One component per section

public/img/                    Photographs, named by event
```

To change the footer, edit `src/components/layout/Footer.jsx`. To change a home-page section, edit the matching file in `src/pages/home/sections/`.

## Design

- **Palette**: adire indigo `#161C4F` (Yoruba resist-dyed cloth), ochre `#EFA23A` (the backdrop in Segun's studio portraits), indigo wash `#ECEEF7`, ink `#0D1030`.
- **Type**: Archivo variable for display and UI. Its width axis is animated as the site's signature. Newsreader for reading text and quotes.
- **Motifs**: arch-shaped portrait frames, and an adire *oniko* (tied-circle) pattern on dark sections.

## Motion components

| Component | Effect |
|---|---|
| `<Reveal variant="up\|fade\|line\|scale">` | Entrance on first view |
| `<Stagger>` + `<StaggerItem>` | Children enter in sequence |
| `<SplitText text="...">` | Headline words rise out of a mask (`\n` for a line break) |
| `<ScrubText>` | Words light up as you scroll past |
| `<StretchText>` / `<StretchIn>` | Archivo width and weight grow on scroll / on view |
| `<Frame>` | Photo wipes in, optional parallax and arch shape |
| `<Magnetic>` | Leans toward the pointer |
| `<Marquee>` | Endless ribbon that speeds up with scroll velocity |

Entrances wait for the page curtain to lift: they read `PageReady` through `useEnter()`. Page-specific sequences, such as the home zoom-out, learning cycle, podcast format track, role tabs (`layoutId` pill) and gallery lightbox (shared `layoutId` image), live in their section files. Visitors who prefer reduced motion get a still version.

## Routing

Hash routes (`#/speaking`). A plain hash such as `#speaking-form` is an in-page anchor. Pages declare the anchors they own in `src/routes.js`, so the link works from anywhere.

## Before production

1. **Forms send nothing.** They validate and show a confirmation that says so. Wire them to an inbox or CRM.
2. **Hash routing** should become real URLs with per-page metadata for search and sharing.
3. **Photos are 720px wide** (exported from Facebook). Get originals for full-bleed sections and add responsive `srcset`.
4. **Book covers are placeholders**, and titles are pending verification, as on the live site.
5. `prototype-single-file.html` and `SHOT-LIST.md` belong to the previous design and are out of date.
