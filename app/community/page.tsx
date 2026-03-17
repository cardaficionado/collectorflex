"use client";

import Link from "next/link";
import { useState } from "react";
import { users, getRecentStories, getPlatformColor } from "@/lib/data";
import { JoinButton } from "@/components/JoinButton";

const ALL_PLATFORMS = [
  "Candy",
  "FIFA Collect",
  "NBA Top Shot",
  "NFL All Day",
  "NHL Breakaway",
  "Panini Blockchain",
  "Sorare",
  "Topps on Wax",
  "ToppsNFT",
  "VeVe",
];

export default function CommunityPage() {
  const stories = getRecentStories(10);
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);

  const filteredStories = selectedPlatform
    ? stories.filter((s) => s.collectionTag === selectedPlatform)
    : stories;

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="mb-12 animate-fade-up">
        <h1 className="font-display text-4xl sm:text-5xl text-surface-50">
          Community
        </h1>
        <p className="mt-3 text-lg text-surface-400 max-w-xl">
          Collectors sharing what they love and why they love it.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* ── Stories Feed ──────────────────────────────── */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="font-display text-xl text-surface-200 mb-4">
            Recent Stories
          </h2>
          {filteredStories.length > 0 ? (
            filteredStories.map((story) => (
              <article
                key={story.id}
                className="glass rounded-2xl p-6 card-hover"
              >
                <div className="flex gap-5">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-4">
                      <Link href={`/profile/${story.author.username}`}>
                        <img
                          src={story.author.avatar}
                          alt={story.author.displayName}
                          className="w-10 h-10 rounded-lg bg-surface-800 hover:ring-2 ring-brand-500/40 transition-all"
                        />
                      </Link>
                      <div>
                        <Link
                          href={`/profile/${story.author.username}`}
                          className="text-sm font-medium text-surface-200 hover:text-brand-400 transition-colors"
                        >
                          {story.author.displayName}
                        </Link>
                        <p className="text-xs text-surface-500">
                          {new Date(story.publishedAt).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}{" "}
                          &middot; {story.readTime} read
                        </p>
                      </div>
                    </div>

                    <h3 className="font-display text-xl text-surface-50 mb-2">
                      {story.title}
                    </h3>
                    <p className="text-sm text-surface-400 leading-relaxed mb-4">
                      {story.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      {story.collectionTag && (
                        <span
                          className={`text-xs px-2.5 py-1 rounded-full border ${getPlatformColor(story.collectionTag)}`}
                        >
                          {story.collectionTag}
                        </span>
                      )}
                      <Link
                        href={`/stories/${story.id}`}
                        className="text-xs text-surface-500 hover:text-brand-400 transition-colors"
                      >
                        Read more &rarr;
                      </Link>
                    </div>
                  </div>

                  {story.thumbnailUrl && (
                    <Link href={`/stories/${story.id}`} className="shrink-0">
                      <img
                        src={story.thumbnailUrl}
                        alt={story.title}
                        className="w-24 h-24 sm:w-32 sm:h-32 rounded-xl object-cover bg-surface-800 hover:brightness-110 transition-all"
                      />
                    </Link>
                  )}
                </div>
              </article>
            ))
          ) : (
            <div className="glass rounded-2xl p-10 text-center">
              <p className="text-surface-400 text-sm">
                No stories for{" "}
                <span className="text-surface-200">{selectedPlatform}</span> yet.
              </p>
            </div>
          )}
        </div>

        {/* ── Sidebar: Collectors Directory ──────────────── */}
        <aside className="space-y-6">
          <div>
            <h2 className="font-display text-xl text-surface-200 mb-4">
              Collectors
            </h2>
            <div className="space-y-3">
              {users.map((user) => (
                <Link
                  key={user.username}
                  href={`/profile/${user.username}`}
                  className="flex items-center gap-3 glass rounded-xl p-4 card-hover group"
                >
                  <img
                    src={user.avatar}
                    alt={user.displayName}
                    className="w-12 h-12 rounded-lg bg-surface-800"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-surface-200 group-hover:text-brand-400 transition-colors truncate">
                      {user.displayName}
                    </p>
                    <p className="text-xs text-surface-500 truncate">
                      {user.collections.map((c) => c.platform).join(" · ")}
                    </p>
                  </div>
                  <span className="text-xs text-surface-600">
                    {user.stats.showcaseItems} items
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Platforms */}
          <div className="glass rounded-xl p-5">
            <h3 className="font-display text-base text-surface-200 mb-3">
              Platforms
            </h3>
            <div className="flex flex-wrap gap-2">
              {ALL_PLATFORMS.map((platform) => {
                const isActive = selectedPlatform === platform;
                return (
                  <button
                    key={platform}
                    onClick={() =>
                      setSelectedPlatform(isActive ? null : platform)
                    }
                    className={`text-xs px-3 py-1.5 rounded-full border transition-all ${getPlatformColor(platform)} ${
                      isActive
                        ? "ring-2 ring-offset-1 ring-offset-surface-900 ring-current brightness-125"
                        : "opacity-60 hover:opacity-100"
                    }`}
                  >
                    {platform}
                  </button>
                );
              })}
            </div>
            {selectedPlatform && (
              <button
                onClick={() => setSelectedPlatform(null)}
                className="mt-3 text-xs text-surface-500 hover:text-surface-300 transition-colors"
              >
                Clear filter &times;
              </button>
            )}
          </div>

          {/* Join CTA */}
          <div className="rounded-xl bg-gradient-to-br from-surface-900/60 to-surface-800/40 border border-brand-500/15 p-5 text-center">
            <p className="font-display text-lg text-surface-100 mb-2">
              Want to be listed?
            </p>
            <p className="text-xs text-surface-400 mb-4">
              Claim your profile and join the community.
            </p>
            <JoinButton label="Join CollectorFlex" variant="primary" className="inline-flex px-5 py-2 rounded-lg bg-brand-600 hover:bg-brand-500 text-white text-sm font-medium transition-colors" />
          </div>
        </aside>
      </div>
    </div>
  );
}
