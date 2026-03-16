# CollectorFlex

**The collector's hub.** Build your profile, showcase your collections, and share the stories behind what you collect.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

```bash
npx vercel
```

Or connect the GitHub repo to Vercel for automatic deploys.

## Project Structure

```
collectorflex/
├── app/
│   ├── layout.tsx              # Root layout (nav, footer, fonts)
│   ├── page.tsx                # Landing page / homepage
│   ├── not-found.tsx           # 404 page
│   ├── globals.css             # Tailwind + custom styles
│   ├── community/
│   │   └── page.tsx            # Community feed + collector directory
│   └── profile/
│       └── [username]/
│           └── page.tsx        # Individual collector profile
├── components/
│   ├── Navbar.tsx
│   └── Footer.tsx
├── lib/
│   └── data.ts                 # Mock data + types (replace with DB)
└── public/
```

## Architecture Decisions

- **Static-first rendering** — profiles are statically generated for fast loads and shareability. When you add a database, switch to ISR (Incremental Static Regeneration) for dynamic profiles.
- **No image hosting** — all media is linked via URLs. Users point to images hosted on Twitter, marketplace sites, IPFS gateways, etc.
- **Mock data layer** — `lib/data.ts` contains sample data and types. The types are your future database schema. When ready, replace the helper functions with Supabase/PlanetScale queries.

## Phase 2 Roadmap (when ready)

1. **Auth** — Add NextAuth.js or Supabase Auth (Discord OAuth recommended)
2. **Database** — Supabase (Postgres + auth + realtime) or PlanetScale
3. **Profile editing** — Authenticated users can edit their own profile
4. **Story writing** — Markdown editor for longer-form posts
5. **Search** — Full-text search across profiles and collections

## Data Model (for future DB)

```sql
-- Users
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  username TEXT UNIQUE NOT NULL,
  display_name TEXT NOT NULL,
  avatar_url TEXT,
  bio TEXT,
  contact_discord TEXT,
  contact_twitter TEXT,
  contact_email TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Collections
CREATE TABLE collections (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  name TEXT NOT NULL,
  platform TEXT NOT NULL,
  description TEXT,
  cover_image_url TEXT,
  item_count INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Showcase Items
CREATE TABLE showcase_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  collection_id UUID REFERENCES collections(id),
  title TEXT NOT NULL,
  media_url TEXT,
  description TEXT,
  acquired_date TEXT,
  tags TEXT[],
  sort_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Stories
CREATE TABLE stories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  title TEXT NOT NULL,
  excerpt TEXT,
  content TEXT,
  collection_tag TEXT,
  published_at TIMESTAMPTZ DEFAULT now()
);
```

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Fonts**: DM Serif Display + DM Sans + JetBrains Mono
- **Hosting**: Vercel
- **Future DB**: Supabase or PlanetScale
