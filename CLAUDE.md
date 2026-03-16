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

**CollectorFlex** is a Next.js 14 App Router application for digital sports collectors (NBA Top Shot, NFL All Day, Sorare, UFC Strike). It is currently static/mock-data only — no backend or auth yet.

### Routing

```
/                        → app/page.tsx
/community               → app/community/page.tsx
/profile/[username]      → app/profile/[username]/page.tsx  (statically generated)
```

Profile pages use `generateStaticParams()` + `generateMetadata()` for SSG and SEO.

### Data Layer

`lib/data.ts` is the single source of truth for all data. It contains:
- TypeScript interfaces: `User`, `Collection`, `ShowcaseItem`, `Story`
- Mock data (3 sample users)
- Helper functions: `getUserByUsername`, `getAllUsernames`, `getRecentStories`, `getPlatformColor`

**Phase 2 plan**: replace helper functions with Supabase/PlanetScale queries — interfaces already match the target SQL schema.

### Styling

Tailwind CSS with a custom design system defined in `tailwind.config.js`:
- **Fonts**: Plus Jakarta Sans (display), Outfit (body), JetBrains Mono (mono)
- **Colors**: `brand` (amber/gold for actions), `surface` (blue-gray for backgrounds)
- **Animations**: fade-in, fade-up, slide-in with `.stagger-1`–`.stagger-6` delay classes

Custom utility classes in `app/globals.css`: `.glass` (frosted glass), `.card-hover`, `.text-gradient`, `.divider`.

### Image Handling

`next.config.js` allows remote images from any HTTPS domain (`hostname: "**"`). No image hosting — external URLs only (Unsplash, DiceBear avatars).

### Client vs Server Components

Only `components/Navbar.tsx` is a client component (`"use client"`) — needed for active route detection via `usePathname`. All pages and other components are server components.
