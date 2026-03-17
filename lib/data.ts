// Mock data — replace with Supabase queries when ready

export interface User {
  username: string;
  displayName: string;
  avatar: string;
  bio: string;
  memberSince: string;
  contact: {
    discord?: string;
    twitter?: string;
    email?: string;
  };
  collections: Collection[];
  stats: {
    collections: number;
    showcaseItems: number;
    stories: number;
  };
}

export interface Collection {
  id: string;
  name: string;
  platform: string;
  description: string;
  coverImage: string;
  itemCount: number;
  items: ShowcaseItem[];
}

export interface ShowcaseItem {
  id: string;
  title: string;
  platformUrl: string;
  story: string;
  acquiredDate?: string;
  tags?: string[];
}

export interface Story {
  id: string;
  author: User;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  collectionTag?: string;
  readTime: string;
  thumbnailUrl?: string;
}

// ─── Sample Users ────────────────────────────────────────────────

export const users: User[] = [
  {
    username: "momentshunter",
    displayName: "Marcus Chen",
    avatar: "https://api.dicebear.com/8.x/notionists/svg?seed=Marcus&backgroundColor=1e3a5f",
    bio: "Collecting NBA Top Shot moments since Series 1. I chase the plays that gave me chills watching live. It's not about the money — it's about preserving the memories of this era of basketball.",
    memberSince: "2026-01",
    contact: {
      discord: "momentshunter#4421",
      twitter: "@momentshunter",
    },
    collections: [
      {
        id: "ts-legendary",
        name: "Legendary Moments",
        platform: "NBA Top Shot",
        description: "My grail pieces. Every one of these moments stopped me in my tracks when I saw them live.",
        coverImage: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&q=80",
        itemCount: 12,
        items: [
          {
            id: "item-1",
            title: "LeBron Dunk — Cosmic Series",
            platformUrl: "https://nbatopshot.com",
            story: "The moment that got me into Top Shot. I was watching the 2021 playoffs live when this happened — one of those plays where the whole room goes quiet for a second before it erupts. I pulled up the marketplace before the quarter ended. This was the first Legendary I ever owned and it still anchors the whole collection.",
            acquiredDate: "2021-06",
            tags: ["legendary", "playoffs"],
          },
          {
            id: "item-2",
            title: "Ja Morant Block — Rising Stars",
            platformUrl: "https://nbatopshot.com",
            story: "People talk about Ja's dunks but this block is what convinced me he was different. The timing, the instinct — he had no business being in that play. My nephew is twelve and Ja is his favorite player. The day I showed him I owned this moment, he looked at me like I had a superpower.",
            acquiredDate: "2022-02",
            tags: ["rare", "defense"],
          },
          {
            id: "item-3",
            title: "Steph Curry Half-Court — Archive Set",
            platformUrl: "https://nbatopshot.com",
            story: "My dad was visiting when this game was on. He barely follows basketball but when Steph launched this shot he stood up off the couch. I have never seen my dad stand up for a basketball play in my life. I grabbed this moment the next morning and immediately called to tell him. He didn't fully understand what I was telling him, but he appreciated it.",
            acquiredDate: "2023-01",
            tags: ["legendary", "three-pointer"],
          },
        ],
      },
      {
        id: "ts-rookies",
        name: "Rookie Watch",
        platform: "NBA Top Shot",
        description: "Betting on the next generation. Every future star's first big moment on chain.",
        coverImage: "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=600&q=80",
        itemCount: 28,
        items: [
          {
            id: "item-4",
            title: "Victor Wembanyama — Debut Dunk",
            platformUrl: "https://nbatopshot.com",
            story: "I watched Wembanyama's first NBA game at a bar with about fifteen people who barely knew who he was. By the end of the first quarter they all did. There's a specific feeling of watching someone arrive — not just play well, but arrive — and I got that feeling in real time. Grabbed this two hours after the game ended.",
            acquiredDate: "2024-01",
            tags: ["rookie", "debut"],
          },
        ],
      },
    ],
    stats: { collections: 2, showcaseItems: 40, stories: 5 },
  },
  {
    username: "gridironfiles",
    displayName: "Dana Rivera",
    avatar: "https://api.dicebear.com/8.x/notionists/svg?seed=Dana&backgroundColor=243b53",
    bio: "NFL All Day collector and lifelong football nerd. I collect the moments that tell the story of a season — the turning points, the upsets, the plays that made you jump off the couch.",
    memberSince: "2026-02",
    contact: {
      twitter: "@gridironfiles",
      discord: "gridironfiles#8812",
    },
    collections: [
      {
        id: "ad-playmakers",
        name: "Playmakers Series",
        platform: "NFL All Day",
        description: "The plays that changed games. Each one has a story.",
        coverImage: "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?w=600&q=80",
        itemCount: 35,
        items: [
          {
            id: "item-5",
            title: "Mahomes No-Look TD",
            platformUrl: "https://nflallday.com",
            story: "There are throws that expand what you think a quarterback can do, and then there's this one. The no-look wasn't showing off — he had no other option and he made it look like the only option. I've watched the clip probably forty times. It doesn't get less absurd.",
            acquiredDate: "2023-11",
            tags: ["rare", "touchdown"],
          },
        ],
      },
    ],
    stats: { collections: 3, showcaseItems: 55, stories: 8 },
  },
  {
    username: "cardaficionado",
    displayName: "CardAficionado",
    avatar: "https://pbs.twimg.com/profile_images/2008205349560479744/w8mZGwLx_400x400.jpg",
    bio: "Late-stage Xer collector who does collecting as a business to keep things under control. I'm into baseball, basketball, soccer, and non-sports physical and digital collectibles.",
    memberSince: "2026-01",
    contact: {
      twitter: "@cardaficionado",
      discord: "cardaficionado",
    },
    collections: [
      {
        id: "ca-topps-vintage",
        name: "Topps NFT Vault",
        platform: "ToppsNFT",
        description: "Digital versions of the cards I grew up chasing in packs. Vintage Topps designs translated to the blockchain — the originals that started it all.",
        coverImage: "https://images.unsplash.com/photo-1612404730960-5c71577fca11?w=600&q=80",
        itemCount: 18,
        items: [
          {
            id: "ca-item-1",
            title: "1952 Topps Mickey Mantle — Digital Edition",
            platformUrl: "https://nft.topps.com",
            story: "Every collector has a Mantle story. Mine starts with my grandfather pulling a '52 Topps set out of a shoebox when I was eight years old. He didn't know what he had. Neither did I. Years later I found out what those cards were worth and by then they were long gone. This digital edition doesn't replace that memory, but it connects me back to it in a way I didn't expect.",
            acquiredDate: "2024-06",
            tags: ["vintage", "baseball", "grail"],
          },
          {
            id: "ca-item-2",
            title: "1966 Topps Batman Black Bat Series",
            platformUrl: "https://nft.topps.com",
            story: "Non-sports collecting gets overlooked and I've never understood why. The 1966 Batman set is pure American pulp — bold borders, dramatic painted artwork, the kind of graphic energy you just don't see anymore. The Black Bat variation is the hardest to find in the physical set. Owning the digital version felt like the right tribute to a card I'll probably never hold in my hands.",
            acquiredDate: "2024-09",
            tags: ["non-sports", "vintage", "batman"],
          },
        ],
      },
      {
        id: "ca-topshot",
        name: "Top Shot Essentials",
        platform: "NBA Top Shot",
        description: "Curated basketball moments across eras and players I actually watch. No floor-price chasing — just plays worth owning.",
        coverImage: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&q=80",
        itemCount: 24,
        items: [
          {
            id: "ca-item-3",
            title: "Nikola Jokić Triple-Double Highlight",
            platformUrl: "https://nbatopshot.com",
            story: "Jokić makes the impossible look like a Tuesday. I collect across a lot of platforms but basketball moments are where I go when I want to be reminded what the game can look like at its best. This triple-double game was one of those nights where every pass felt like it was made by someone who could see the floor differently than everyone else on it.",
            acquiredDate: "2023-12",
            tags: ["rare", "mvp"],
          },
        ],
      },
      {
        id: "ca-sorare-squad",
        name: "Sorare International XI",
        platform: "Sorare",
        description: "Soccer players from leagues across the world. I build around players I've followed for years — before the algorithm told me to.",
        coverImage: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=600&q=80",
        itemCount: 15,
        items: [
          {
            id: "ca-item-4",
            title: "Lamine Yamal — Super Rare",
            platformUrl: "https://sorare.com",
            story: "Picked this up early, before most people outside of Spain were paying close attention. When a 16-year-old is already the most electric player in La Liga, you don't wait for the market to catch up. The business side of collecting means knowing when to move. But I'd have grabbed this regardless — watching him play is one of the genuine pleasures of following football right now.",
            acquiredDate: "2024-08",
            tags: ["super-rare", "la-liga"],
          },
        ],
      },
      {
        id: "ca-candy",
        name: "Candy Digital Pulls",
        platform: "Candy",
        description: "MLB digital collectibles from Candy. Baseball is the sport that got me into cards — it's only right it's represented on-chain too.",
        coverImage: "https://images.unsplash.com/photo-1529768167801-9173d94c2a42?w=600&q=80",
        itemCount: 9,
        items: [
          {
            id: "ca-item-6",
            title: "Fernando Tatis Jr. — Diamond Edition",
            platformUrl: "https://candy.com",
            story: "When Tatis is healthy and locked in, there's no one more fun to watch in baseball. The combination of swagger and ability is rare — most players have one or the other. I collect across baseball and digital platforms both and this felt like the right bridge between the two. Went straight into the vault.",
            acquiredDate: "2024-05",
            tags: ["diamond", "mlb"],
          },
          {
            id: "ca-item-7",
            title: "Derek Jeter — Captain's Legacy Series",
            platformUrl: "https://candy.com",
            story: "Some players transcend their stats and Jeter is the clearest example I can think of. The October performances, the composure, the way his teammates talked about him — none of that shows up in a WAR calculation. This series is about legacy over numbers and that's exactly the kind of collecting I want to be doing.",
            acquiredDate: "2024-07",
            tags: ["legend", "yankees"],
          },
        ],
      },
      {
        id: "ca-fifa-collect",
        name: "FIFA Collect Legends",
        platform: "FIFA Collect",
        description: "The global game deserves a global collection. Focused on international legends and World Cup moments.",
        coverImage: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=600&q=80",
        itemCount: 11,
        items: [
          {
            id: "ca-item-5",
            title: "Ronaldo — 2002 World Cup Edition",
            platformUrl: "https://www.fifacollect.com",
            story: "R9 in 2002 is what peak looks like. Eight goals. A tournament he spent the better part of two years working back toward after injuries that would have ended most careers. This wasn't just a great performance — it was a statement about what it takes to come back. I was twelve watching that World Cup. It's one of the clearest sports memories I have.",
            acquiredDate: "2024-04",
            tags: ["legend", "world-cup"],
          },
        ],
      },
    ],
    stats: { collections: 5, showcaseItems: 77, stories: 4 },
  },
  {
    username: "pitchcraft",
    displayName: "Tomás Aguirre",
    avatar: "https://api.dicebear.com/8.x/notionists/svg?seed=Tomas&backgroundColor=102a43",
    bio: "Sorare manager and football obsessive. I build squads around players I believe in — not floor prices. The beautiful game deserves beautiful collections.",
    memberSince: "2026-01",
    contact: {
      twitter: "@pitchcraft_",
    },
    collections: [
      {
        id: "sorare-squad",
        name: "Main Squad",
        platform: "Sorare",
        description: "My competitive Sorare squad. Each card chosen for the player, not the price.",
        coverImage: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=600&q=80",
        itemCount: 22,
        items: [
          {
            id: "item-6",
            title: "Pedri — Rare Card",
            platformUrl: "https://sorare.com",
            story: "The heartbeat of Barcelona's midfield. Watching Pedri play is like watching someone solve a puzzle in real time — except the puzzle is eleven opponents pressing in unison and he's doing it while dribbling. Got this card early, before the injury setbacks. Held through all of it. He's back now and this is one of my most-watched players every week.",
            acquiredDate: "2024-03",
            tags: ["rare", "la-liga"],
          },
        ],
      },
    ],
    stats: { collections: 2, showcaseItems: 22, stories: 3 },
  },
];

// ─── Sample Stories ──────────────────────────────────────────────

export const stories: Story[] = [
  {
    id: "story-1",
    author: users[0],
    title: "Why I Stopped Chasing Floor Prices",
    excerpt:
      "Six months ago I was refreshing marketplaces every hour. Then I remembered why I started collecting in the first place.",
    content: `Six months ago I had a spreadsheet. It tracked floor prices across every set I owned, updated twice a day. I had alerts set on Discord. I knew the ask depth on my top holdings better than I knew my own schedule.

I told myself it was smart collecting. Staying informed. Knowing the market. But if I'm being honest, I had turned something I loved into a second job — and a stressful one.

The breaking point was a Thursday night in November. The Celtics were playing. Tatum went off for 40 and I didn't watch a single minute of it. I was too busy watching the marketplace to see if a Tatum Legendary I'd been tracking would dip below its 30-day average. It didn't. I missed the game. I missed the moment that moment was actually about.

I closed the spreadsheet that night and didn't open it again.

What I came back to was simpler. I went through my collection and asked one question for each moment: do I remember where I was when this happened? If the answer was yes, the moment stayed. If the answer was "I bought it because the serial looked good," I started thinking about moving it.

What's left is smaller. But every single piece has a story attached to it that has nothing to do with price. The Steph half-court shot — I was at a bar with my dad watching that game. He doesn't follow basketball closely but even he jumped out of his seat. The Ja block — I texted three friends immediately after it happened. Those texts are still in my phone.

Floor prices change. Memories don't. That's what I'm actually collecting.`,
    publishedAt: "2026-03-05",
    collectionTag: "NBA Top Shot",
    readTime: "4 min",
    thumbnailUrl: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=80",
  },
  {
    id: "story-2",
    author: users[1],
    title: "The Play That Made Me a Collector",
    excerpt:
      "It was a random Thursday night game. Fourth quarter. Nobody was watching. But that one play changed how I think about owning sports history.",
    content: `The game had no business being memorable. Week 11, mid-November, two teams fighting for a wild card spot that neither of them would end up getting. It was on a Thursday night, which means the national broadcast treated it like an obligation. The announcers sounded like they were somewhere else entirely.

I almost turned it off at halftime.

Fourth quarter, two-minute warning. Third and eight. The offense had been flat all night, the kind of flat where you can feel the season starting to slip. And then the quarterback — not a star, not someone on anyone's fantasy team that year — scrambled out of a collapsing pocket, bought himself three full seconds where there were none, and hit a crossing route on a throw that had no business being accurate under that kind of pressure.

It was the kind of play that doesn't make the highlight shows because the team didn't win the Super Bowl. It doesn't get remembered. The player who made it retired quietly two years later. Nobody has a poster of that moment.

That's exactly why it stuck with me.

I started collecting NFL All Day about a month after that game. Not because I was looking for an investment. I was looking for a way to hold onto plays like that one — the ones that happen in the middle of games nobody's watching, the ones that show you what a player is actually made of when there's nothing to gain from it.

My collection is full of moments that don't have obvious explanations. The Mahomes no-look throw. A pass breakup in overtime by a linebacker most people can't name. A catch made by a receiver in his second season who played hard every single week and retired without a ring.

These are the plays I want to still be able to find in twenty years. Not because they'll be worth something. Because they happened, and someone should remember that they happened.`,
    publishedAt: "2026-03-02",
    collectionTag: "NFL All Day",
    readTime: "6 min",
    thumbnailUrl: "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?w=800&q=80",
  },
  {
    id: "story-3",
    author: users[2],
    title: "Building a Sorare Squad With Your Heart",
    excerpt:
      "Everyone talks about expected points and analytics. Here's my case for collecting players you actually love watching.",
    content: `Every Sorare forum I've ever been in eventually becomes the same conversation. Expected points per game. Ownership percentages. Injury risk scores. Which players are underpriced relative to their xG. Which captain picks are statistically optimal this gameweek.

All of it is fine. Some of it is genuinely useful. But at some point I realized I was spending three hours a week optimizing a squad of players I had no feelings about whatsoever, and then watching their matches with the same emotional investment I give to checking a stock ticker.

That's not why I got into football.

I grew up watching Barcelona when they were doing something that felt genuinely unrepeatable. Not just winning — playing a style of football that made you feel like you were watching something invented for the first time. Xavi and Iniesta weren't just midfielders. They were the proof that football could be something closer to art than competition.

So when I rebuilt my Sorare squad last year, I started with one rule: I have to actually want to watch this player play. Not because of their stats. Because of how they move, how they think, what they do with the ball when they have a half-second and two defenders closing.

Pedri was the first pick. If you watch him and you feel nothing, we probably don't experience football the same way. He's 21 and already playing like someone who's been doing this for fifteen years. Getting his card felt right in a way that optimizing for expected points never did.

My scores are worse now, probably. I've stopped checking the leaderboards closely enough to know. But I watch every match my players are in, start to finish, actually watching. That feels like the point.`,
    publishedAt: "2026-02-28",
    collectionTag: "Sorare",
    readTime: "5 min",
    thumbnailUrl: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800&q=80",
  },
  {
    id: "story-4",
    author: users[0],
    title: "My Top 5 Moments — And the Real Stories Behind Them",
    excerpt:
      "These aren't my most expensive moments. They're the ones that mean the most. Each one is tied to a real memory.",
    content: `People always want to know which moments in my collection are the most valuable. I never know how to answer that honestly, because the ones worth the most to me aren't the ones that would move the needle at auction. So here's a different list — my top five, ranked by what they actually mean.

**5. Victor Wembanyama — Debut Dunk**

I watched Wembanyama's first NBA game at a sports bar with about fifteen other people who barely knew who he was. By the end of the first quarter they all did. There's a specific feeling of watching someone arrive — not just play well, but arrive — and I got that feeling in real time. I grabbed this moment two hours after the game ended. It will be in my collection for a long time.

**4. Ja Morant Block — Rising Stars**

My nephew is twelve and just started following basketball. Ja is his guy. The moment I showed him I owned this, his eyes went wide in a way that had nothing to do with what it's worth. That reaction is worth more than the card.

**3. Steph Curry Half-Court — Archive Set**

My dad was visiting when this game was on. He watches sports casually, maybe a few times a year. When Steph launched this shot, my dad stood up. I have never in my life seen my dad stand up for a basketball play. That's the story behind this one.

**2. LeBron Dunk — Cosmic Series**

This was the first Legendary I ever owned. I had been collecting for about four months and I was still figuring out what I was doing and why. Acquiring this moment made it feel real — like I was actually building something instead of just buying things. I still feel that when I look at it.

**1. A moment I'm not listing**

There's one in my collection I've never shown anyone. It's from a game my brother and I watched together the year before he moved across the country. We haven't lived in the same city since. The moment isn't from a famous play. The player involved isn't a star. But every time I open my collection and see it, I think about that night and I'm glad I have it.

That's what this is all about, for me.`,
    publishedAt: "2026-02-20",
    collectionTag: "NBA Top Shot",
    readTime: "7 min",
    thumbnailUrl: "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=800&q=80",
  },
];

// ─── Helpers ─────────────────────────────────────────────────────

export function getUserByUsername(username: string): User | undefined {
  return users.find((u) => u.username === username);
}

export function getAllUsernames(): string[] {
  return users.map((u) => u.username);
}

export function getRecentStories(limit: number = 10): Story[] {
  return stories.slice(0, limit);
}

export function getStoryById(id: string): Story | undefined {
  return stories.find((s) => s.id === id);
}

export function getAllStoryIds(): string[] {
  return stories.map((s) => s.id);
}

export function getStoriesByUsername(username: string): Story[] {
  return stories.filter((s) => s.author.username === username);
}

export function getPlatformColor(platform: string): string {
  const colors: Record<string, string> = {
    "NBA Top Shot":      "bg-amber-500/10 text-amber-400 border-amber-500/20",
    "NFL All Day":       "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    Sorare:              "bg-sky-500/10 text-sky-400 border-sky-500/20",
    "NHL Breakaway":     "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    ToppsNFT:            "bg-red-500/10 text-red-400 border-red-500/20",
    "Topps on Wax":      "bg-orange-500/10 text-orange-400 border-orange-500/20",
    "Panini Blockchain": "bg-blue-500/10 text-blue-400 border-blue-500/20",
    "FIFA Collect":      "bg-violet-500/10 text-violet-400 border-violet-500/20",
    VeVe:                "bg-purple-500/10 text-purple-400 border-purple-500/20",
    Candy:               "bg-pink-500/10 text-pink-400 border-pink-500/20",
  };
  return colors[platform] || "bg-surface-700/30 text-surface-300 border-surface-600/30";
}
