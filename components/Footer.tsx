export function Footer() {
  return (
    <footer className="border-t border-surface-800/50 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-surface-500">
          &copy; {new Date().getFullYear()} CollectorFlex &middot; Built for
          collectors, by collectors.
        </p>
        <div className="flex items-center gap-6 text-sm text-surface-500">
          <a href="#" className="hover:text-surface-300 transition-colors">
            About
          </a>
          <a href="#" className="hover:text-surface-300 transition-colors">
            Discord
          </a>
          <a href="#" className="hover:text-surface-300 transition-colors">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
