# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server at http://localhost:3000
npm run build     # Production build
npm run lint      # Run Next.js linter
npm start         # Run production server
```

No test framework is configured.

## Architecture

**CollectorFlex** is a Next.js 14 App Router application — a curated showcase and publishing platform for digital sports collectors. It is currently static/mock-data only, ready for Supabase + auth in Phase 2.

**Core concept**: collectors curate a small number of meaningful pieces (Showcases) with per-item writing, and publish longer-form opinion/analysis (Takes). The emphasis is storytelling over inventory.

### Routing

```
/                        → app/page.tsx
/community               → app/community/page.tsx  (client component — platform filter)
/profile/[username]      → app/profile/[username]/page.tsx  (statically generated)
/takes/[id]              → app/takes/[id]/page.tsx  (statically generated)
/about                   → app/about/page.tsx
```

All dynamic pages use `generateStaticParams()` + `generateMetadata()`. The `params` prop is typed as `Promise<{...}>` and must be awaited — Next.js 15 pattern already in use.

### Data Layer

`lib/data.ts` is the single source of truth. Key interfaces:

- **`User`** — profile with `showcases: Showcase[]` and `stats: { showcases, showcaseItems, takes }`
- **`Showcase`** — a curated collection with `items: ShowcaseItem[]`, `platform`, `coverImage`
- **`ShowcaseItem`** — individual piece with `platformUrl` (link to source platform), `story` (per-item write-up), `tags`, `acquiredDate`
- **`Take`** — long-form piece with `content` (prose, supports `**bold**` section headers), `excerpt`, `thumbnailUrl?`, `collectionTag?`

Helper functions: `getUserByUsername`, `getAllUsernames`, `getRecentTakes`, `getTakeById`, `getAllTakeIds`, `getTakesByUsername`, `getPlatformColor`

**Phase 2**: replace helpers with Supabase queries. The database schema is in `README.md`. Target DB is Supabase (Postgres + RLS + Storage). Auth via NextAuth.js + Discord OAuth.

### Key Terminology

| Term | Meaning |
|---|---|
| **Showcase** | A collector's curated grouping of pieces (replaces "Collection") |
| **Take** | A long-form piece — opinion, analysis, personal essay (replaces "Story") |
| **Item story** | The per-item write-up on a `ShowcaseItem` (field: `item.story`) |

### Styling

Tailwind CSS with custom design system in `tailwind.config.js`:
- **Fonts**: Plus Jakarta Sans (display), Outfit (body), JetBrains Mono (mono)
- **Colors**: `brand` (emerald — `#10b981` range), `surface` (blue-navy — base `#0d1f35`)
- **Animations**: fade-in, fade-up, slide-in with `.stagger-1`–`.stagger-6` delay classes

Custom utility classes in `app/globals.css`: `.glass` (frosted glass), `.card-hover`, `.text-gradient`, `.divider`.

### Client vs Server Components

- `components/Navbar.tsx` — client component (`usePathname`, `useState`)
- `components/JoinButton.tsx` — client component; renders a modal with a join/waitlist form. Form submission is stubbed (`TODO: wire to backend`). Used across multiple pages via `<JoinButton variant="primary|secondary|nav|nav-mobile" label="..." />`
- `app/community/page.tsx` — client component (`useState` for platform filter)
- All other pages — server components

### Platform Colors

Defined in `getPlatformColor()` in `lib/data.ts`. Supported platforms: NBA Top Shot, NFL All Day, Sorare, UFC Strike, ToppsNFT, Candy, FIFA Collect, NHL Breakaway, Topps on Wax, Panini Blockchain, VeVe.

### Content Rendering

Takes support simple markdown-style bold headers (`**Header text**`) rendered as `<h3>` elements in `app/takes/[id]/page.tsx`. Content is split on `\n\n` into paragraphs. No markdown library — plain string parsing only.

### Image Handling

`next.config.js` allows remote images from any HTTPS domain (`hostname: "**"`). No image hosting — external URLs only. Logo files are in `public/` (`cf-logo-full.png`, `cf-badge.png`), both with transparent backgrounds.
