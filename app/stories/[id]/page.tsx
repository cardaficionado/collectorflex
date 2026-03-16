import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getStoryById,
  getAllStoryIds,
  getRecentStories,
  getPlatformColor,
} from "@/lib/data";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return getAllStoryIds().map((id) => ({ id }));
}

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const story = getStoryById(params.id);
  if (!story) return {};
  return {
    title: `${story.title} — CollectorFlex`,
    description: story.excerpt,
    openGraph: {
      title: story.title,
      description: story.excerpt,
    },
  };
}

export default function StoryPage({ params }: { params: { id: string } }) {
  const story = getStoryById(params.id);
  if (!story) notFound();

  const related = getRecentStories(10).filter(
    (s) => s.id !== story.id && s.collectionTag === story.collectionTag
  ).slice(0, 2);

  const paragraphs = story.content
    .split("\n\n")
    .filter((p) => p.trim().length > 0);

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      {/* ── Back ─────────────────────────────────────────── */}
      <Link
        href="/community"
        className="inline-flex items-center gap-2 text-sm text-surface-500 hover:text-brand-400 transition-colors mb-10"
      >
        &larr; All stories
      </Link>

      {/* ── Header ───────────────────────────────────────── */}
      <header className="mb-10 animate-fade-up">
        {story.collectionTag && (
          <span
            className={`inline-block text-xs px-2.5 py-1 rounded-full border mb-4 ${getPlatformColor(story.collectionTag)}`}
          >
            {story.collectionTag}
          </span>
        )}
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-surface-50 leading-tight mb-6">
          {story.title}
        </h1>

        <div className="flex items-center gap-4">
          <Link href={`/profile/${story.author.username}`}>
            <img
              src={story.author.avatar}
              alt={story.author.displayName}
              className="w-11 h-11 rounded-xl bg-surface-800 hover:ring-2 ring-brand-500/40 transition-all"
            />
          </Link>
          <div>
            <Link
              href={`/profile/${story.author.username}`}
              className="text-sm font-medium text-surface-200 hover:text-brand-400 transition-colors"
            >
              {story.author.displayName}
            </Link>
            <p className="text-xs text-surface-500 mt-0.5">
              {new Date(story.publishedAt).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}{" "}
              &middot; {story.readTime} read
            </p>
          </div>
        </div>
      </header>

      <div className="divider mb-10" />

      {/* ── Body ─────────────────────────────────────────── */}
      <article className="space-y-6 animate-fade-up stagger-1 opacity-0">
        {paragraphs.map((para, i) => {
          // Render bold markdown (**text**) as <strong>
          const isBold = para.startsWith("**") && para.includes("**", 2);
          if (isBold) {
            const boldMatch = para.match(/^\*\*(.+?)\*\*\n?([\s\S]*)/);
            if (boldMatch) {
              return (
                <div key={i}>
                  <h3 className="font-display text-lg text-surface-100 mb-2">
                    {boldMatch[1]}
                  </h3>
                  {boldMatch[2].trim() && (
                    <p className="text-surface-300 leading-relaxed text-[1.0625rem]">
                      {boldMatch[2].trim()}
                    </p>
                  )}
                </div>
              );
            }
          }
          return (
            <p
              key={i}
              className="text-surface-300 leading-relaxed text-[1.0625rem]"
            >
              {para}
            </p>
          );
        })}
      </article>

      {/* ── Author card ──────────────────────────────────── */}
      <div className="mt-14 glass rounded-2xl p-6 flex items-center gap-5 animate-fade-up stagger-2 opacity-0">
        <Link href={`/profile/${story.author.username}`}>
          <img
            src={story.author.avatar}
            alt={story.author.displayName}
            className="w-16 h-16 rounded-2xl bg-surface-800 hover:ring-2 ring-brand-500/40 transition-all shrink-0"
          />
        </Link>
        <div className="flex-1 min-w-0">
          <p className="text-xs text-surface-500 mb-0.5">Written by</p>
          <Link
            href={`/profile/${story.author.username}`}
            className="font-display text-lg text-surface-100 hover:text-brand-400 transition-colors"
          >
            {story.author.displayName}
          </Link>
          <p className="text-sm text-surface-400 mt-1 line-clamp-2">
            {story.author.bio}
          </p>
        </div>
      </div>

      {/* ── Related stories ──────────────────────────────── */}
      {related.length > 0 && (
        <section className="mt-14 animate-fade-up stagger-3 opacity-0">
          <h2 className="font-display text-xl text-surface-200 mb-5">
            More {story.collectionTag} stories
          </h2>
          <div className="space-y-4">
            {related.map((s) => (
              <Link
                key={s.id}
                href={`/stories/${s.id}`}
                className="glass rounded-xl p-5 flex flex-col sm:flex-row gap-4 card-hover block"
              >
                <div className="flex items-center gap-3 sm:w-44 shrink-0">
                  <img
                    src={s.author.avatar}
                    alt={s.author.displayName}
                    className="w-9 h-9 rounded-lg bg-surface-800"
                  />
                  <div>
                    <p className="text-xs font-medium text-surface-300">
                      {s.author.displayName}
                    </p>
                    <p className="text-xs text-surface-500">{s.readTime} read</p>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-base text-surface-50 mb-1 hover:text-brand-400 transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-xs text-surface-400 line-clamp-2">
                    {s.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
