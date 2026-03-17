import Link from "next/link";
import { notFound } from "next/navigation";
import { getUserByUsername, getAllUsernames, getPlatformColor, getTakesByUsername } from "@/lib/data";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return getAllUsernames().map((username) => ({ username }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ username: string }>;
}): Promise<Metadata> {
  const { username } = await params;
  const user = getUserByUsername(username);
  if (!user) return {};
  return {
    title: `${user.displayName} (@${user.username}) — CollectorFlex`,
    description: user.bio,
    openGraph: {
      title: `${user.displayName} on CollectorFlex`,
      description: user.bio,
    },
  };
}

export default async function ProfilePage({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = await params;
  const user = getUserByUsername(username);
  if (!user) notFound();

  const takes = getTakesByUsername(username);

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* ── Profile Header ──────────────────────────────── */}
      <section className="glass rounded-2xl p-8 sm:p-10 mb-8 animate-fade-up">
        <div className="flex flex-col sm:flex-row gap-6 items-start">
          <img
            src={user.avatar}
            alt={user.displayName}
            className="w-24 h-24 rounded-2xl bg-surface-800 shadow-xl"
          />
          <div className="flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-1">
              <h1 className="font-display text-3xl sm:text-4xl text-surface-50">
                {user.displayName}
              </h1>
              <span className="text-sm text-surface-500 font-mono">
                @{user.username}
              </span>
            </div>
            <p className="text-surface-400 leading-relaxed mt-3 max-w-2xl">
              {user.bio}
            </p>

            {/* Stats */}
            <div className="flex gap-8 mt-6">
              <Stat label="Showcases" value={user.stats.showcases} />
              {takes.length > 0 ? (
                <a href="#takes" className="hover:opacity-75 transition-opacity">
                  <Stat label="Takes" value={user.stats.takes} />
                </a>
              ) : (
                <Stat label="Takes" value={user.stats.takes} />
              )}
            </div>
          </div>
        </div>

        {/* Platform badges */}
        {(() => {
          const seen = new Set<string>();
          const platforms = user.showcases.filter((s) => {
            if (seen.has(s.platform)) return false;
            seen.add(s.platform);
            return true;
          });
          return (
            <div className="flex flex-wrap gap-2 mt-5">
              {platforms.map((showcase) => (
                <a
                  key={showcase.platform}
                  href={`#showcase-${showcase.id}`}
                  className={`text-xs px-2.5 py-1 rounded-full border transition-all hover:brightness-125 ${getPlatformColor(showcase.platform)}`}
                >
                  {showcase.platform}
                </a>
              ))}
            </div>
          );
        })()}

        {/* Contact */}
        <div className="divider my-6" />
        <div className="flex flex-wrap gap-3">
          <span className="text-xs text-surface-500 self-center mr-2">
            Connect:
          </span>
          {user.contact.twitter && (
            <ContactBadge
              icon="𝕏"
              label={user.contact.twitter}
              href={`https://twitter.com/${user.contact.twitter.replace("@", "")}`}
            />
          )}
          {user.contact.discord && (
            <ContactBadge icon="💬" label={user.contact.discord} />
          )}
          {user.contact.email && (
            <ContactBadge
              icon="✉"
              label={user.contact.email}
              href={`mailto:${user.contact.email}`}
            />
          )}
        </div>
      </section>

      {/* ── Showcases ───────────────────────────────────── */}
      <section>
        <h2 className="font-display text-2xl text-surface-50 mb-6">
          Showcases
        </h2>

        <div className="space-y-10">
          {user.showcases.map((showcase) => (
            <div key={showcase.id} id={`showcase-${showcase.id}`} className="animate-fade-up">
              <div className="glass rounded-2xl overflow-hidden">
                <div className="relative h-40 sm:h-52">
                  <img
                    src={showcase.coverImage}
                    alt={showcase.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-950/90 via-surface-950/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="font-display text-2xl text-white">
                        {showcase.name}
                      </h3>
                      <span
                        className={`text-xs px-2.5 py-1 rounded-full border ${getPlatformColor(showcase.platform)}`}
                      >
                        {showcase.platform}
                      </span>
                    </div>
                    <p className="text-sm text-surface-300">
                      {showcase.itemCount} items
                    </p>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-surface-400 text-sm leading-relaxed mb-6">
                    {showcase.description}
                  </p>

                  {/* Showcase Items */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {showcase.items.map((item) => (
                      <div
                        key={item.id}
                        className="group rounded-xl bg-surface-900/60 border border-surface-700/30 p-5 flex flex-col gap-3 card-hover"
                      >
                        <h4 className="font-display text-base text-surface-100 group-hover:text-brand-400 transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-sm text-surface-400 leading-relaxed flex-1">
                          {item.story}
                        </p>
                        <div className="flex items-center justify-between pt-1 mt-auto">
                          <div className="flex flex-wrap gap-1.5">
                            {item.acquiredDate && (
                              <span className="text-[10px] px-2 py-0.5 rounded-full bg-surface-800 text-surface-500 border border-surface-700/40">
                                {new Date(item.acquiredDate + "-01").toLocaleDateString("en-US", { month: "short", year: "numeric" })}
                              </span>
                            )}
                            {item.tags?.map((tag) => (
                              <span
                                key={tag}
                                className="text-[10px] px-2 py-0.5 rounded-full bg-surface-800 text-surface-400 border border-surface-700/40"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <a
                            href={item.platformUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[10px] text-surface-500 hover:text-brand-400 transition-colors shrink-0 ml-3"
                          >
                            View &rarr;
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Takes ────────────────────────────────────────── */}
      {takes.length > 0 && (
        <section id="takes" className="mt-12">
          <h2 className="font-display text-2xl text-surface-50 mb-6">
            Takes
          </h2>
          <div className="space-y-4">
            {takes.map((take) => (
              <Link
                key={take.id}
                href={`/takes/${take.id}`}
                className="glass rounded-2xl p-6 card-hover flex flex-col sm:flex-row gap-5 block"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="font-display text-lg text-surface-50 hover:text-brand-400 transition-colors">
                      {take.title}
                    </h3>
                    {take.collectionTag && (
                      <span
                        className={`text-xs px-2.5 py-1 rounded-full border shrink-0 ${getPlatformColor(take.collectionTag)}`}
                      >
                        {take.collectionTag}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-surface-400 leading-relaxed line-clamp-2">
                    {take.excerpt}
                  </p>
                </div>
                <div className="flex sm:flex-col sm:items-end gap-4 sm:gap-1 shrink-0 text-xs text-surface-500">
                  <span>
                    {new Date(take.publishedAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  <span>{take.readTime} read</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* ── Member Since ────────────────────────────────── */}
      <div className="mt-12 text-center text-xs text-surface-600">
        Member since{" "}
        {new Date(user.memberSince).toLocaleDateString("en-US", {
          month: "long",
          year: "numeric",
        })}
      </div>
    </div>
  );
}

// ─── Sub-components ──────────────────────────────────────────────

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <p className="text-2xl font-display text-surface-50">{value}</p>
      <p className="text-xs text-surface-500 mt-0.5">{label}</p>
    </div>
  );
}

function ContactBadge({
  icon,
  label,
  href,
}: {
  icon: string;
  label: string;
  href?: string;
}) {
  const classes =
    "inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-800/60 border border-surface-700/40 text-sm text-surface-300 hover:text-surface-100 hover:border-surface-600 transition-colors";

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        <span>{icon}</span>
        <span>{label}</span>
      </a>
    );
  }
  return (
    <span className={classes}>
      <span>{icon}</span>
      <span>{label}</span>
    </span>
  );
}
