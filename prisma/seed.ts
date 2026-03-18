import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");

  // ─── Users ───────────────────────────────────────────────────────

  const marcus = await prisma.user.upsert({
    where: { username: "momentshunter" },
    update: {},
    create: {
      username: "momentshunter",
      displayName: "Marcus Chen",
      image: "https://api.dicebear.com/8.x/notionists/svg?seed=Marcus&backgroundColor=1e3a5f",
      bio: "Collecting NBA Top Shot moments since Series 1. I chase the plays that gave me chills watching live. It's not about the money — it's about preserving the memories of this era of basketball.",
      contactDiscord: "momentshunter#4421",
      contactTwitter: "@momentshunter",
    },
  });

  const dana = await prisma.user.upsert({
    where: { username: "gridironfiles" },
    update: {},
    create: {
      username: "gridironfiles",
      displayName: "Dana Rivera",
      image: "https://api.dicebear.com/8.x/notionists/svg?seed=Dana&backgroundColor=243b53",
      bio: "NFL All Day collector and lifelong football nerd. I collect the moments that tell the story of a season — the turning points, the upsets, the plays that made you jump off the couch.",
      contactTwitter: "@gridironfiles",
      contactDiscord: "gridironfiles#8812",
    },
  });

  const cardAficionado = await prisma.user.upsert({
    where: { username: "cardaficionado" },
    update: {},
    create: {
      username: "cardaficionado",
      displayName: "CardAficionado",
      image: "https://pbs.twimg.com/profile_images/2008205349560479744/w8mZGwLx_400x400.jpg",
      bio: "Late-stage Xer collector who does collecting as a business to keep things under control. I'm into baseball, basketball, soccer, and non-sports physical and digital collectibles.",
      contactTwitter: "@cardaficionado",
      contactDiscord: "cardaficionado",
    },
  });

  const tomas = await prisma.user.upsert({
    where: { username: "pitchcraft" },
    update: {},
    create: {
      username: "pitchcraft",
      displayName: "Tomás Aguirre",
      image: "https://api.dicebear.com/8.x/notionists/svg?seed=Tomas&backgroundColor=102a43",
      bio: "Sorare manager and football obsessive. I build squads around players I believe in — not floor prices. The beautiful game deserves beautiful collections.",
      contactTwitter: "@pitchcraft_",
    },
  });

  // ─── Showcases + Items ───────────────────────────────────────────

  await prisma.showcase.upsert({
    where: { id: "ts-legendary" },
    update: {},
    create: {
      id: "ts-legendary",
      name: "Legendary Moments",
      platform: "NBA Top Shot",
      description: "My grail pieces. Every one of these moments stopped me in my tracks when I saw them live.",
      coverImage: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&q=80",
      sortOrder: 0,
      userId: marcus.id,
      items: {
        create: [
          {
            id: "item-1",
            title: "LeBron Dunk — Cosmic Series",
            platformUrl: "https://nbatopshot.com",
            story: "The moment that got me into Top Shot. I was watching the 2021 playoffs live when this happened — one of those plays where the whole room goes quiet for a second before it erupts. I pulled up the marketplace before the quarter ended. This was the first Legendary I ever owned and it still anchors the whole collection.",
            acquiredDate: "2021-06",
            tags: ["legendary", "playoffs"],
            sortOrder: 0,
          },
          {
            id: "item-2",
            title: "Ja Morant Block — Rising Stars",
            platformUrl: "https://nbatopshot.com",
            story: "People talk about Ja's dunks but this block is what convinced me he was different. The timing, the instinct — he had no business being in that play. My nephew is twelve and Ja is his favorite player. The day I showed him I owned this moment, he looked at me like I had a superpower.",
            acquiredDate: "2022-02",
            tags: ["rare", "defense"],
            sortOrder: 1,
          },
          {
            id: "item-3",
            title: "Steph Curry Half-Court — Archive Set",
            platformUrl: "https://nbatopshot.com",
            story: "My dad was visiting when this game was on. He barely follows basketball but when Steph launched this shot he stood up off the couch. I have never seen my dad stand up for a basketball play in my life. I grabbed this moment the next morning and immediately called to tell him. He didn't fully understand what I was telling him, but he appreciated it.",
            acquiredDate: "2023-01",
            tags: ["legendary", "three-pointer"],
            sortOrder: 2,
          },
        ],
      },
    },
  });

  await prisma.showcase.upsert({
    where: { id: "ts-rookies" },
    update: {},
    create: {
      id: "ts-rookies",
      name: "Rookie Watch",
      platform: "NBA Top Shot",
      description: "Betting on the next generation. Every future star's first big moment on chain.",
      coverImage: "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=600&q=80",
      sortOrder: 1,
      userId: marcus.id,
      items: {
        create: [
          {
            id: "item-4",
            title: "Victor Wembanyama — Debut Dunk",
            platformUrl: "https://nbatopshot.com",
            story: "I watched Wembanyama's first NBA game at a bar with about fifteen people who barely knew who he was. By the end of the first quarter they all did. There's a specific feeling of watching someone arrive — not just play well, but arrive — and I got that feeling in real time. Grabbed this two hours after the game ended.",
            acquiredDate: "2024-01",
            tags: ["rookie", "debut"],
            sortOrder: 0,
          },
        ],
      },
    },
  });

  await prisma.showcase.upsert({
    where: { id: "ad-playmakers" },
    update: {},
    create: {
      id: "ad-playmakers",
      name: "Playmakers Series",
      platform: "NFL All Day",
      description: "The plays that changed games. Each one has a story.",
      coverImage: "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?w=600&q=80",
      sortOrder: 0,
      userId: dana.id,
      items: {
        create: [
          {
            id: "item-5",
            title: "Mahomes No-Look TD",
            platformUrl: "https://nflallday.com",
            story: "There are throws that expand what you think a quarterback can do, and then there's this one. The no-look wasn't showing off — he had no other option and he made it look like the only option. I've watched the clip probably forty times. It doesn't get less absurd.",
            acquiredDate: "2023-11",
            tags: ["rare", "touchdown"],
            sortOrder: 0,
          },
        ],
      },
    },
  });

  await prisma.showcase.upsert({
    where: { id: "ca-topps-vintage" },
    update: {},
    create: {
      id: "ca-topps-vintage",
      name: "Topps NFT Vault",
      platform: "ToppsNFT",
      description: "Digital versions of the cards I grew up chasing in packs. Vintage Topps designs translated to the blockchain — the originals that started it all.",
      coverImage: "https://images.unsplash.com/photo-1612404730960-5c71577fca11?w=600&q=80",
      sortOrder: 0,
      userId: cardAficionado.id,
      items: {
        create: [
          {
            id: "ca-item-1",
            title: "1952 Topps Mickey Mantle — Digital Edition",
            platformUrl: "https://nft.topps.com",
            story: "Every collector has a Mantle story. Mine starts with my grandfather pulling a '52 Topps set out of a shoebox when I was eight years old. He didn't know what he had. Neither did I. Years later I found out what those cards were worth and by then they were long gone. This digital edition doesn't replace that memory, but it connects me back to it in a way I didn't expect.",
            acquiredDate: "2024-06",
            tags: ["vintage", "baseball", "grail"],
            sortOrder: 0,
          },
          {
            id: "ca-item-2",
            title: "1966 Topps Batman Black Bat Series",
            platformUrl: "https://nft.topps.com",
            story: "Non-sports collecting gets overlooked and I've never understood why. The 1966 Batman set is pure American pulp — bold borders, dramatic painted artwork, the kind of graphic energy you just don't see anymore. The Black Bat variation is the hardest to find in the physical set. Owning the digital version felt like the right tribute to a card I'll probably never hold in my hands.",
            acquiredDate: "2024-09",
            tags: ["non-sports", "vintage", "batman"],
            sortOrder: 1,
          },
        ],
      },
    },
  });

  await prisma.showcase.upsert({
    where: { id: "ca-topshot" },
    update: {},
    create: {
      id: "ca-topshot",
      name: "Top Shot Essentials",
      platform: "NBA Top Shot",
      description: "Curated basketball moments across eras and players I actually watch. No floor-price chasing — just plays worth owning.",
      coverImage: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&q=80",
      sortOrder: 1,
      userId: cardAficionado.id,
      items: {
        create: [
          {
            id: "ca-item-3",
            title: "Nikola Jokić Triple-Double Highlight",
            platformUrl: "https://nbatopshot.com",
            story: "Jokić makes the impossible look like a Tuesday. I collect across a lot of platforms but basketball moments are where I go when I want to be reminded what the game can look like at its best. This triple-double game was one of those nights where every pass felt like it was made by someone who could see the floor differently than everyone else on it.",
            acquiredDate: "2023-12",
            tags: ["rare", "mvp"],
            sortOrder: 0,
          },
        ],
      },
    },
  });

  await prisma.showcase.upsert({
    where: { id: "ca-sorare-squad" },
    update: {},
    create: {
      id: "ca-sorare-squad",
      name: "Sorare International XI",
      platform: "Sorare",
      description: "Soccer players from leagues across the world. I build around players I've followed for years — before the algorithm told me to.",
      coverImage: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=600&q=80",
      sortOrder: 2,
      userId: cardAficionado.id,
      items: {
        create: [
          {
            id: "ca-item-4",
            title: "Lamine Yamal — Super Rare",
            platformUrl: "https://sorare.com",
            story: "Picked this up early, before most people outside of Spain were paying close attention. When a 16-year-old is already the most electric player in La Liga, you don't wait for the market to catch up. The business side of collecting means knowing when to move. But I'd have grabbed this regardless — watching him play is one of the genuine pleasures of following football right now.",
            acquiredDate: "2024-08",
            tags: ["super-rare", "la-liga"],
            sortOrder: 0,
          },
        ],
      },
    },
  });

  await prisma.showcase.upsert({
    where: { id: "ca-candy" },
    update: {},
    create: {
      id: "ca-candy",
      name: "Candy Digital Pulls",
      platform: "Candy",
      description: "MLB digital collectibles from Candy. Baseball is the sport that got me into cards — it's only right it's represented on-chain too.",
      coverImage: "https://images.unsplash.com/photo-1529768167801-9173d94c2a42?w=600&q=80",
      sortOrder: 3,
      userId: cardAficionado.id,
      items: {
        create: [
          {
            id: "ca-item-6",
            title: "Fernando Tatis Jr. — Diamond Edition",
            platformUrl: "https://candy.com",
            story: "When Tatis is healthy and locked in, there's no one more fun to watch in baseball. The combination of swagger and ability is rare — most players have one or the other. I collect across baseball and digital platforms both and this felt like the right bridge between the two. Went straight into the vault.",
            acquiredDate: "2024-05",
            tags: ["diamond", "mlb"],
            sortOrder: 0,
          },
          {
            id: "ca-item-7",
            title: "Derek Jeter — Captain's Legacy Series",
            platformUrl: "https://candy.com",
            story: "Some players transcend their stats and Jeter is the clearest example I can think of. The October performances, the composure, the way his teammates talked about him — none of that shows up in a WAR calculation. This series is about legacy over numbers and that's exactly the kind of collecting I want to be doing.",
            acquiredDate: "2024-07",
            tags: ["legend", "yankees"],
            sortOrder: 1,
          },
        ],
      },
    },
  });

  await prisma.showcase.upsert({
    where: { id: "ca-fifa-collect" },
    update: {},
    create: {
      id: "ca-fifa-collect",
      name: "FIFA Collect Legends",
      platform: "FIFA Collect",
      description: "The global game deserves a global collection. Focused on international legends and World Cup moments.",
      coverImage: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=600&q=80",
      sortOrder: 4,
      userId: cardAficionado.id,
      items: {
        create: [
          {
            id: "ca-item-5",
            title: "Ronaldo — 2002 World Cup Edition",
            platformUrl: "https://www.fifacollect.com",
            story: "R9 in 2002 is what peak looks like. Eight goals. A tournament he spent the better part of two years working back toward after injuries that would have ended most careers. This wasn't just a great performance — it was a statement about what it takes to come back. I was twelve watching that World Cup. It's one of the clearest sports memories I have.",
            acquiredDate: "2024-04",
            tags: ["legend", "world-cup"],
            sortOrder: 0,
          },
        ],
      },
    },
  });

  await prisma.showcase.upsert({
    where: { id: "sorare-squad" },
    update: {},
    create: {
      id: "sorare-squad",
      name: "Main Squad",
      platform: "Sorare",
      description: "My competitive Sorare squad. Each card chosen for the player, not the price.",
      coverImage: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=600&q=80",
      sortOrder: 0,
      userId: tomas.id,
      items: {
        create: [
          {
            id: "item-6",
            title: "Pedri — Rare Card",
            platformUrl: "https://sorare.com",
            story: "The heartbeat of Barcelona's midfield. Watching Pedri play is like watching someone solve a puzzle in real time — except the puzzle is eleven opponents pressing in unison and he's doing it while dribbling. Got this card early, before the injury setbacks. Held through all of it. He's back now and this is one of my most-watched players every week.",
            acquiredDate: "2024-03",
            tags: ["rare", "la-liga"],
            sortOrder: 0,
          },
        ],
      },
    },
  });

  // ─── Takes ───────────────────────────────────────────────────────

  await prisma.take.upsert({
    where: { id: "story-1" },
    update: {},
    create: {
      id: "story-1",
      title: "Why I Stopped Chasing Floor Prices",
      excerpt: "Six months ago I was refreshing marketplaces every hour. Then I remembered why I started collecting in the first place.",
      content: `Six months ago I had a spreadsheet. It tracked floor prices across every set I owned, updated twice a day. I had alerts set on Discord. I knew the ask depth on my top holdings better than I knew my own schedule.

I told myself it was smart collecting. Staying informed. Knowing the market. But if I'm being honest, I had turned something I loved into a second job — and a stressful one.

The breaking point was a Thursday night in November. The Celtics were playing. Tatum went off for 40 and I didn't watch a single minute of it. I was too busy watching the marketplace to see if a Tatum Legendary I'd been tracking would dip below its 30-day average. It didn't. I missed the game. I missed the moment that moment was actually about.

I closed the spreadsheet that night and didn't open it again.

What I came back to was simpler. I went through my collection and asked one question for each moment: do I remember where I was when this happened? If the answer was yes, the moment stayed. If the answer was "I bought it because the serial looked good," I started thinking about moving it.

What's left is smaller. But every single piece has a story attached to it that has nothing to do with price. The Steph half-court shot — I was at a bar with my dad watching that game. He doesn't follow basketball closely but even he jumped out of his seat. The Ja block — I texted three friends immediately after it happened. Those texts are still in my phone.

Floor prices change. Memories don't. That's what I'm actually collecting.`,
      publishedAt: new Date("2026-03-05"),
      collectionTag: "NBA Top Shot",
      readTime: "4 min",
      thumbnailUrl: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=80",
      authorId: marcus.id,
    },
  });

  await prisma.take.upsert({
    where: { id: "story-2" },
    update: {},
    create: {
      id: "story-2",
      title: "The Play That Made Me a Collector",
      excerpt: "It was a random Thursday night game. Fourth quarter. Nobody was watching. But that one play changed how I think about owning sports history.",
      content: `The game had no business being memorable. Week 11, mid-November, two teams fighting for a wild card spot that neither of them would end up getting. It was on a Thursday night, which means the national broadcast treated it like an obligation. The announcers sounded like they were somewhere else entirely.

I almost turned it off at halftime.

Fourth quarter, two-minute warning. Third and eight. The offense had been flat all night, the kind of flat where you can feel the season starting to slip. And then the quarterback — not a star, not someone on anyone's fantasy team that year — scrambled out of a collapsing pocket, bought himself three full seconds where there were none, and hit a crossing route on a throw that had no business being accurate under that kind of pressure.

It was the kind of play that doesn't make the highlight shows because the team didn't win the Super Bowl. It doesn't get remembered. The player who made it retired quietly two years later. Nobody has a poster of that moment.

That's exactly why it stuck with me.

I started collecting NFL All Day about a month after that game. Not because I was looking for an investment. I was looking for a way to hold onto plays like that one — the ones that happen in the middle of games nobody's watching, the ones that show you what a player is actually made of when there's nothing to gain from it.

My collection is full of moments that don't have obvious explanations. The Mahomes no-look throw. A pass breakup in overtime by a linebacker most people can't name. A catch made by a receiver in his second season who played hard every single week and retired without a ring.

These are the plays I want to still be able to find in twenty years. Not because they'll be worth something. Because they happened, and someone should remember that they happened.`,
      publishedAt: new Date("2026-03-02"),
      collectionTag: "NFL All Day",
      readTime: "6 min",
      thumbnailUrl: "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?w=800&q=80",
      authorId: dana.id,
    },
  });

  await prisma.take.upsert({
    where: { id: "story-3" },
    update: {},
    create: {
      id: "story-3",
      title: "Building a Sorare Squad With Your Heart",
      excerpt: "Everyone talks about expected points and analytics. Here's my case for collecting players you actually love watching.",
      content: `Every Sorare forum I've ever been in eventually becomes the same conversation. Expected points per game. Ownership percentages. Injury risk scores. Which players are underpriced relative to their xG. Which captain picks are statistically optimal this gameweek.

All of it is fine. Some of it is genuinely useful. But at some point I realized I was spending three hours a week optimizing a squad of players I had no feelings about whatsoever, and then watching their matches with the same emotional investment I give to checking a stock ticker.

That's not why I got into football.

I grew up watching Barcelona when they were doing something that felt genuinely unrepeatable. Not just winning — playing a style of football that made you feel like you were watching something invented for the first time. Xavi and Iniesta weren't just midfielders. They were the proof that football could be something closer to art than competition.

So when I rebuilt my Sorare squad last year, I started with one rule: I have to actually want to watch this player play. Not because of their stats. Because of how they move, how they think, what they do with the ball when they have a half-second and two defenders closing.

Pedri was the first pick. If you watch him and you feel nothing, we probably don't experience football the same way. He's 21 and already playing like someone who's been doing this for fifteen years. Getting his card felt right in a way that optimizing for expected points never did.

My scores are worse now, probably. I've stopped checking the leaderboards closely enough to know. But I watch every match my players are in, start to finish, actually watching. That feels like the point.`,
      publishedAt: new Date("2026-02-28"),
      collectionTag: "Sorare",
      readTime: "5 min",
      thumbnailUrl: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800&q=80",
      authorId: cardAficionado.id,
    },
  });

  await prisma.take.upsert({
    where: { id: "story-4" },
    update: {},
    create: {
      id: "story-4",
      title: "My Top 5 Moments — And the Real Stories Behind Them",
      excerpt: "These aren't my most expensive moments. They're the ones that mean the most. Each one is tied to a real memory.",
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
      publishedAt: new Date("2026-02-20"),
      collectionTag: "NBA Top Shot",
      readTime: "7 min",
      thumbnailUrl: "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=800&q=80",
      authorId: marcus.id,
    },
  });

  await prisma.take.upsert({
    where: { id: "story-5" },
    update: {},
    create: {
      id: "story-5",
      title: "The Serial Number as Digital Condition",
      excerpt: "On NBA TopShot, every Moment in an edition is the same video with the same metadata. The only distinguishing feature is the mint number — and it's become the primary value lever, creating pricing hierarchies that can range from 2x to 100x above floor.",
      content: `On NBA TopShot, every Moment within an edition is the same video highlight with the same metadata. The only distinguishing feature is the mint number — the sequential order in which each was created on the blockchain. This single number has become the primary value lever for differentiating among identical editions, creating a pricing hierarchy that can range from 2x to 100x or more above a floor-priced copy.

The market has organically developed a clear tiering system.

**Tier 1 — The Trophy Serials**

Serial #1 and the player's jersey number. These are the Gem Mint PSA 10 equivalent of the digital world. A #1 serial LeBron James Moment once sold for over $71,000 while copies with unremarkable serials traded for a fraction of that. Jersey number matches — #23 for LeBron, #30 for Curry — create a narrative connection between the number and the player that collectors find deeply compelling.

**Tier 2 — Single Digits**

Serials #2 through #9. Only nine exist per edition, creating mathematical scarcity within scarcity. The premium here is driven by the same logic as low-number limited prints in art — proximity to the origin.

**Tier 3 — Low Doubles and Triples**

Serials in the double-digit and triple-digit ranges follow a logarithmic premium curve — each additional digit roughly reduces the premium by an order of magnitude.

**Tier 4 — Narrative Serials**

Numbers with personal significance beyond the jersey number: birth year, draft position, career stat milestones, championship years. These require specialized knowledge to spot and value, creating opportunities for informed collectors.

**Tier 5 — Perfect and Last Serials**

The final serial in an edition (e.g., #10000/10000) and "perfect" matches (e.g., #100/100). These bookend serials carry their own collector appeal.

Sorare follows a similar pattern. While the platform's fantasy game utility is the primary value driver, the first minted card of each edition consistently commands a premium. Cards where the serial matches the player's squad number carry collector premiums completely disconnected from game utility.

This hierarchy is strikingly similar to how physical card grading works, just mapped onto a different axis. Where PSA gives you a 1-10 scale based on physical attributes, the digital market has created an informal scale based on positional attributes. The underlying psychology is the same: collectors want verifiable differentiation, and they'll pay for it.

**The Set Registry Is Already Here**

Here's something most people outside the TopShot community haven't noticed: NBA TopShot has already built the embryonic version of a PSA Set Registry — and serial numbers are the grading mechanism.

When a collector completes a set on TopShot, the platform now calculates and displays their "Lowest Average Serial" — the mean of the lowest serial number they own from each edition in the set. Complete the 2025-26 Marquee set with all #1 serials? Your average is 1. Complete it with a mix of #3s, #47s, and #812s? Your average reflects that. The number becomes a composite quality score for the entire set, visible to every other collector.

This is functionally identical to what PSA's Set Registry does with grade point averages. PSA established their registry in 2001 and it ranks collectors' sets by weighted GPA — the average grade across all cards, weighted by each card's relative rarity. The registry turned set building from a private hobby into a competitive leaderboard sport. Collectors started buying higher-graded copies specifically to improve their registry ranking, which drove demand for top-graded cards across the board.

TopShot's version substitutes serial number for condition grade, but the structural incentives are identical. Competition drives upgrading: once collectors can see they rank #47 on a set's leaderboard, the impulse to improve that ranking is powerful. Leaderboard rewards compound the effect — TopShot already distributes exclusive airdrops to top-ranked collectors, and when serial-based set rankings carry similar reward structures, the economic motivation to hold low serials intensifies dramatically.

Set completionism also changes the demand curve. Nobody pays a premium for serial #3 of a mid-tier role player's Common Moment in isolation. But if that #3 is the difference between ranking #1 and #5 on a set leaderboard? Suddenly, low serials on every card in the set carry marginal value — the same dynamic PSA registries created for physical cards.

The infrastructure for competitive, serial-ranked set collecting isn't speculative. It's already deployed. The question is just how far and how fast the platforms push it.`,
      publishedAt: new Date("2026-03-10"),
      collectionTag: "NBA Top Shot",
      readTime: "8 min",
      thumbnailUrl: "https://images.unsplash.com/photo-1612404730960-5c71577fca11?w=800&q=80",
      authorId: cardAficionado.id,
    },
  });

  await prisma.take.upsert({
    where: { id: "story-6" },
    update: {},
    create: {
      id: "story-6",
      title: "The Digital Sports Collectibles Landscape, Early 2026",
      excerpt: "Digital sports collectibles emerged as a mainstream phenomenon in early 2021 and then corrected hard. Here's where the surviving platforms actually stand — the numbers, the risks, and what comes next.",
      content: `Digital sports collectibles emerged as a mainstream phenomenon in early 2021 when NBA TopShot surged to over $200,000 single-Moment sales and monthly volumes exceeding $225 million. The subsequent correction was severe but not fatal. As of early 2026, the ecosystem has consolidated around a small number of licensed platforms, each with distinct value propositions — and distinct risks.

**NBA TopShot (NBA)**

Video Moments with Fast Break fantasy integration. Monthly volumes have consolidated in the low seven-figure range post-bubble, but August 2025 saw the highest monthly transaction count in over three years. Dapper Labs is refocusing on rookie scarcity — fewer than 5,000 Cooper Flagg or Wembanyama rookie collectibles will ever exist — and digital autograph inscriptions for the 2025-26 season. The scarcity thesis is coherent. Execution is what's left to prove.

**Sorare (Soccer, NBA, MLB)**

Fantasy card game with real-stakes rewards on Ethereum. 2M+ total users. 2024 revenue was approximately $50 million. Monthly volumes dipped to $2.7 million in June 2025 after the removal of ETH threshold rewards, then rebounded sharply to $20M+ in August 2025 after the introduction of "hot streak" mechanics — a clean demonstration of how sensitive engagement is to incentive design. Cash reserves have declined from $230M in 2023 to an estimated $41M by end of 2025, making the next strategic phase critical. A potential migration from Ethereum L2 Starkware to Solana could bring in meaningful new revenue.

**Panini Blockchain (NBA, NFL, WNBA, FIFA, MLB, UFC, WWE)**

Digital trading cards mirroring physical Panini brands — Prizm, National Treasures, Kaboom. The breakout story of 2025. Annual sales volume trajectory of $60-70M, up from $13.5M in 2024 and smashing the prior record of $31.8M in 2022. Record single sale of $175,000 for a Caitlin Clark Green Kaboom 1/1. Average transaction price climbed from under $30 through most of 2022-2024 to over $99 by September 2025.

The platform faces existential licensing risk: NBA license expired October 2025, NFL license expires April 2026. The private blockchain requires ongoing Panini investment to operate. An option to remint select assets to Ethereum is coming in 2026 — a meaningful step toward collector ownership security.

**FIFA Collect**

Blockchain-powered platform launched September 2022 by FIFA, now on the Avalanche blockchain. Panini partnership drops celebrating World Cup history began March 2025, connecting decades of physical sticker album tradition to digital. The institutional backing here is real, but engagement depth remains to be demonstrated.

**ToppsNFT (MLB, Bundesliga)**

Platform shut down in 2025. Assets were migrated to the Polygon blockchain with true self-custody contracts — but unopened packs could not be transferred. The closure illustrates platform risk clearly. It also removed supply from the active market, which may benefit remaining holders long-term.

**Candy Digital (MLB, NASCAR, WWE)**

Founded 2021, raised $100M at a $1.5B valuation. Fanatics divested its 60% stake in January 2023, citing an "imploding NFT market." Now led by Galaxy Digital. Futureverse acquired Candy in 2025 and then went into receivership a few months later. Reduced activity, uncertain future.

**What the landscape tells us**

The platforms that are growing share common traits: real utility beyond speculation (fantasy mechanics, set registry competition), institutional licensing with depth, and active supply management. The ones that failed or stagnated leaned too heavily on speculative demand without building durable engagement loops.

For collectors, the platform risk lesson from ToppsNFT and Candy is worth internalizing: the asset is only as permanent as the infrastructure supporting it. Self-custody and blockchain migration options aren't nice-to-haves. They're the difference between owning something and renting access to it.`,
      publishedAt: new Date("2026-03-08"),
      collectionTag: "ToppsNFT",
      readTime: "9 min",
      thumbnailUrl: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80",
      authorId: cardAficionado.id,
    },
  });

  console.log("Seed complete.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
