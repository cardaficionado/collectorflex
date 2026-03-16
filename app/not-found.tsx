import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-32 text-center">
      <h1 className="font-display text-6xl text-surface-50 mb-4">404</h1>
      <p className="text-lg text-surface-400 mb-8">
        This collector hasn&apos;t been found — yet.
      </p>
      <Link
        href="/"
        className="inline-flex px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}
