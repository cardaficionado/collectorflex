import Link from "next/link";
import { users, getRecentStories, getPlatformColor } from "@/lib/data";

export default function HomePage() {
  const recentStories = getRecentStories(3);

  return (
    <div className="relative">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-950/40 via-surface-950 to-surface-950" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/[0.04] rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOCAxOC04LjA1OSAxOC0xOC04LjA1OS0xOC0xOC0xOHptMCAyYzguODM3IDAgMTYgNy4xNjMgMTYgMTZzLTcuMTYzIDE2LTE2IDE2LTE2LTcuMTYzLTE2LTE2IDcuMTYzLTE2IDE2LTE2eiIgZmlsbD0iI2ZmZiIvPjwvZz48L3N2Zz4=')]" />

        <div className="relative max-w-6xl mx-auto px-6 pt-16 pb-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

            {/* Logo — left on desktop */}
            <div className="animate-fade-up shrink-0 w-full max-w-xs lg:max-w-sm xl:max-w-md">
              <img
                src="/cf-logo-full.png"
                alt="CollectorFlex — Digital & Physical Collector Hub"
                className="w-full"
              />
            </div>

            {/* Text — right on desktop */}
            <div className="flex-1 min-w-0">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-sm font-medium mb-8 animate-fade-in">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse" />
                Now in early access
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-surface-50 leading-[1.1] tracking-tight animate-fade-up stagger-1 opacity-0">
                Your collections.
                <br />
                <span className="text-gradient">Your stories.</span>
                <br />
                One place.
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-surface-400 max-w-xl leading-relaxed animate-fade-up stagger-2 opacity-0">
                The home for digital sports collectors to build their profile,
                showcase what they collect, and share the stories behind every
                piece.
              </p>
              <div className="mt-10 flex flex-wrap gap-4 animate-fade-up stagger-3 opacity-0">
                <Link
                  href="/community"
                  className="px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold transition-all hover:shadow-lg hover:shadow-brand-500/20"
                >
                  Explore Collectors
                </Link>
                <Link
                  href="#"
                  className="px-6 py-3 rounded-xl bg-surface-800/60 hover:bg-surface-800 text-surface-200 font-semibold border border-surface-700/50 transition-all"
                >
                  Claim Your Profile
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Featured Collectors ───────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="font-display text-3xl text-surface-50">
              Featured Collectors
            </h2>
            <p className="mt-2 text-surface-400">
              Meet the people building collections worth talking about.
            </p>
          </div>
          <Link
            href="/community"
            className="text-sm text-brand-400 hover:text-brand-300 font-medium transition-colors hidden sm:block"
          >
            View all &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {users.map((user, i) => (
            <Link
              key={user.username}
              href={`/profile/${user.username}`}
              className={`group glass rounded-2xl p-6 card-hover animate-fade-up opacity-0 stagger-${i + 1}`}
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={user.avatar}
                  alt={user.displayName}
                  className="w-14 h-14 rounded-xl bg-surface-800"
                />
                <div>
                  <h3 className="font-display text-lg text-surface-50 group-hover:text-brand-400 transition-colors">
                    {user.displayName}
                  </h3>
                  <p className="text-sm text-surface-500">
                    @{user.username}
                  </p>
                </div>
              </div>
              <p className="text-sm text-surface-400 leading-relaxed line-clamp-3 mb-5">
                {user.bio}
              </p>
              <div className="flex flex-wrap gap-2">
                {user.collections.map((c) => (
                  <span
                    key={c.id}
                    className={`text-xs px-2.5 py-1 rounded-full border ${getPlatformColor(c.platform)}`}
                  >
                    {c.platform}
                  </span>
                ))}
              </div>
              <div className="divider my-5" />
              <div className="flex gap-6 text-xs text-surface-500">
                <span>
                  <strong className="text-surface-300">
                    {user.stats.collections}
                  </strong>{" "}
                  collections
                </span>
                <span>
                  <strong className="text-surface-300">
                    {user.stats.showcaseItems}
                  </strong>{" "}
                  items
                </span>
                <span>
                  <strong className="text-surface-300">
                    {user.stats.stories}
                  </strong>{" "}
                  stories
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Recent Stories ─────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="font-display text-3xl text-surface-50">
              Latest Stories
            </h2>
            <p className="mt-2 text-surface-400">
              Why we collect, in our own words.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {recentStories.map((story) => (
            <Link
              key={story.id}
              href={`/stories/${story.id}`}
              className="glass rounded-2xl p-6 card-hover flex flex-col sm:flex-row gap-6 block"
            >
              <div className="flex items-center gap-3 sm:w-48 shrink-0">
                <img
                  src={story.author.avatar}
                  alt={story.author.displayName}
                  className="w-10 h-10 rounded-lg bg-surface-800"
                />
                <div>
                  <p className="text-sm font-medium text-surface-200">
                    {story.author.displayName}
                  </p>
                  <p className="text-xs text-surface-500">
                    {story.readTime} read
                  </p>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="font-display text-lg text-surface-50 truncate">
                    {story.title}
                  </h3>
                  {story.collectionTag && (
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full border shrink-0 ${getPlatformColor(story.collectionTag)}`}
                    >
                      {story.collectionTag}
                    </span>
                  )}
                </div>
                <p className="text-sm text-surface-400 line-clamp-2">
                  {story.excerpt}
                </p>
              </div>
              <time className="text-xs text-surface-600 shrink-0 self-center hidden lg:block">
                {new Date(story.publishedAt).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })}
              </time>
            </Link>
          ))}
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="rounded-3xl bg-gradient-to-br from-surface-900/80 to-surface-800/40 border border-brand-500/15 p-12 text-center">
          <h2 className="font-display text-3xl sm:text-4xl text-surface-50 mb-4">
            Ready to show off what you collect?
          </h2>
          <p className="text-surface-400 max-w-lg mx-auto mb-8">
            Join a growing community of digital sports collectors. Build your
            profile, curate your showcase, and tell your story.
          </p>
          <Link
            href="#"
            className="inline-flex px-8 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold transition-all hover:shadow-lg hover:shadow-brand-500/20"
          >
            Claim Your Profile
          </Link>
        </div>
      </section>
    </div>
  );
}
