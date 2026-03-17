export function Footer() {
  return (
    <footer className="border-t border-surface-800/50 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-surface-500">
          CollectorFlex is created by Claude and{" "}
          <a
            href="https://x.com/CardAficionado"
            target="_blank"
            rel="noopener noreferrer"
            className="text-surface-300 hover:text-brand-400 transition-colors"
          >
            CardAficionado
          </a>
        </p>
      </div>
    </footer>
  );
}
