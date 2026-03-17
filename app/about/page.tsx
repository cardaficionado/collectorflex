import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — CollectorFlex",
  description:
    "CollectorFlex is the home for digital sports collectors to build their profile, showcase what they own, and share the stories behind every piece.",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <div className="mb-12 animate-fade-up">
        <h1 className="font-display text-4xl sm:text-5xl text-surface-50">
          About
        </h1>
        <p className="mt-3 text-lg text-surface-400 max-w-xl">
          Why we built this, and who it&rsquo;s for.
        </p>
      </div>

      <div className="space-y-10 animate-fade-up stagger-1 opacity-0">

        <section className="glass rounded-2xl p-8">
          <h2 className="font-display text-2xl text-surface-100 mb-4">What is CollectorFlex?</h2>
          <p className="text-surface-300 leading-relaxed">
            CollectorFlex is a community platform for digital sports collectors. Whether you&rsquo;re
            collecting NBA Top Shot moments, building a Sorare squad, or hunting for rare Panini
            Blockchain cards, this is the place to build your profile, curate your showcase, and
            share the stories behind what you own.
          </p>
          <p className="text-surface-300 leading-relaxed mt-4">
            Digital collecting is still a young space, and the communities around each platform
            tend to live in silos. CollectorFlex is built to bring collectors together across
            platforms — because the passion for owning a piece of sports history is the same
            whether the asset lives on Flow, Ethereum, WAX, or anywhere else.
          </p>
        </section>

        <section className="glass rounded-2xl p-8">
          <h2 className="font-display text-2xl text-surface-100 mb-4">The story behind the piece</h2>
          <p className="text-surface-300 leading-relaxed">
            Most NFT platforms show you what something is worth. We&rsquo;re more interested in
            why you own it.
          </p>
          <p className="text-surface-300 leading-relaxed mt-4">
            Every collector has a moment that got them started, a card they held through a bad
            market because they couldn&rsquo;t imagine selling it, or a player they believed in
            before anyone else did. Those stories are what make a collection a collection — not
            just an inventory.
          </p>
          <p className="text-surface-300 leading-relaxed mt-4">
            CollectorFlex gives you a place to tell those stories, and a community of people
            who actually want to read them.
          </p>
        </section>

        <section className="glass rounded-2xl p-8">
          <h2 className="font-display text-2xl text-surface-100 mb-4">Platforms we support</h2>
          <p className="text-surface-300 leading-relaxed mb-5">
            CollectorFlex is platform-agnostic. We currently support collectors from:
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-surface-400">
            {[
              "NBA Top Shot",
              "NFL All Day",
              "Sorare",
              "NHL Breakaway",
              "Panini Blockchain",
              "Topps on Wax",
              "ToppsNFT",
              "FIFA Collect",
              "VeVe",
              "Candy",
            ].map((platform) => (
              <li key={platform} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-400 shrink-0" />
                {platform}
              </li>
            ))}
          </ul>
          <p className="text-surface-500 text-sm mt-5">
            More platforms coming as the community grows.
          </p>
        </section>

        <section className="glass rounded-2xl p-8">
          <h2 className="font-display text-2xl text-surface-100 mb-4">Who made this</h2>
          <p className="text-surface-300 leading-relaxed">
            CollectorFlex is created by{" "}
            <a
              href="https://x.com/CardAficionado"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-400 hover:text-brand-300 transition-colors"
            >
              CardAficionado
            </a>{" "}
            and Claude — a collector who wanted a better home for the hobby, and an AI that
            helped build it.
          </p>
        </section>

      </div>
    </div>
  );
}
