import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getTakeById,
  getAllTakeIds,
  getRecentTakes,
  getPlatformColor,
} from "@/lib/data";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return getAllTakeIds().map((id) => ({ id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const take = getTakeById(id);
  if (!take) return {};
  return {
    title: `${take.title} — CollectorFlex`,
    description: take.excerpt,
    openGraph: {
      title: take.title,
      description: take.excerpt,
      ...(take.thumbnailUrl && { images: [{ url: take.thumbnailUrl }] }),
    },
  };
}

export default async function TakePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const take = getTakeById(id);
  if (!take) notFound();

  const related = getRecentTakes(10).filter(
    (t) => t.id !== take.id && t.collectionTag === take.collectionTag
  ).slice(0, 2);

  const paragraphs = take.content
    .split("\n\n")
    .filter((p) => p.trim().length > 0);

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      {/* ── Back ─────────────────────────────────────────── */}
      <Link
        href="/community"
        className="inline-flex items-center gap-2 text-sm text-surface-500 hover:text-brand-400 transition-colors mb-10"
      >
        &larr; All takes
      </Link>

      {/* ── Header ───────────────────────────────────────── */}
      <header className="mb-10 animate-fade-up">
        {take.collectionTag && (
          <span
            className={`inline-block text-xs px-2.5 py-1 rounded-full border mb-4 ${getPlatformColor(take.collectionTag)}`}
          >
            {take.collectionTag}
          </span>
        )}
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-surface-50 leading-tight mb-6">
          {take.title}
        </h1>

        <div className="flex items-center gap-4">
          <Link href={`/profile/${take.author.username}`}>
            <img
              src={take.author.avatar}
              alt={take.author.displayName}
              className="w-11 h-11 rounded-xl bg-surface-800 hover:ring-2 ring-brand-500/40 transition-all"
            />
          </Link>
          <div>
            <Link
              href={`/profile/${take.author.username}`}
              className="text-sm font-medium text-surface-200 hover:text-brand-400 transition-colors"
            >
              {take.author.displayName}
            </Link>
            <p className="text-xs text-surface-500 mt-0.5">
              {new Date(take.publishedAt).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}{" "}
              &middot; {take.readTime} read
            </p>
          </div>
        </div>
      </header>

      {take.thumbnailUrl && (
        <div className="mb-10 animate-fade-up stagger-1 opacity-0">
          <img
            src={take.thumbnailUrl}
            alt={take.title}
            className="w-full h-56 sm:h-72 object-cover rounded-2xl bg-surface-800"
          />
        </div>
      )}

      <div className="divider mb-10" />

      {/* ── Body ─────────────────────────────────────────── */}
      <article className="space-y-6 animate-fade-up stagger-1 opacity-0">
        {paragraphs.map((para, i) => {
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
        <Link href={`/profile/${take.author.username}`}>
          <img
            src={take.author.avatar}
            alt={take.author.displayName}
            className="w-16 h-16 rounded-2xl bg-surface-800 hover:ring-2 ring-brand-500/40 transition-all shrink-0"
          />
        </Link>
        <div className="flex-1 min-w-0">
          <p className="text-xs text-surface-500 mb-0.5">Written by</p>
          <Link
            href={`/profile/${take.author.username}`}
            className="font-display text-lg text-surface-100 hover:text-brand-400 transition-colors"
          >
            {take.author.displayName}
          </Link>
          <p className="text-sm text-surface-400 mt-1 line-clamp-2">
            {take.author.bio}
          </p>
        </div>
      </div>

      {/* ── Related takes ────────────────────────────────── */}
      {related.length > 0 && (
        <section className="mt-14 animate-fade-up stagger-3 opacity-0">
          <h2 className="font-display text-xl text-surface-200 mb-5">
            More {take.collectionTag} takes
          </h2>
          <div className="space-y-4">
            {related.map((t) => (
              <Link
                key={t.id}
                href={`/takes/${t.id}`}
                className="glass rounded-xl p-5 flex flex-col sm:flex-row gap-4 card-hover block"
              >
                <div className="flex items-center gap-3 sm:w-44 shrink-0">
                  <img
                    src={t.author.avatar}
                    alt={t.author.displayName}
                    className="w-9 h-9 rounded-lg bg-surface-800"
                  />
                  <div>
                    <p className="text-xs font-medium text-surface-300">
                      {t.author.displayName}
                    </p>
                    <p className="text-xs text-surface-500">{t.readTime} read</p>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-base text-surface-50 mb-1 hover:text-brand-400 transition-colors">
                    {t.title}
                  </h3>
                  <p className="text-xs text-surface-400 line-clamp-2">
                    {t.excerpt}
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
