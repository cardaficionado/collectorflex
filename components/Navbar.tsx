"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { JoinButton } from "./JoinButton";

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <img
            src="/cf-badge.png"
            alt="CollectorFlex"
            className="w-9 h-9 rounded-lg shadow-lg shadow-brand-500/20 group-hover:shadow-brand-500/40 transition-shadow"
          />
          <span className="font-display text-xl font-bold text-surface-100">
            Collector<span className="text-brand-400">Flex</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden sm:flex items-center gap-1">
          <NavLink href="/" active={pathname === "/"}>
            Home
          </NavLink>
          <NavLink href="/community" active={pathname === "/community"}>
            Community
          </NavLink>
          <NavLink href="/about" active={pathname === "/about"}>
            About
          </NavLink>
          <JoinButton label="Join" variant="nav" />
        </div>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden p-2 rounded-lg text-surface-300 hover:text-surface-100 hover:bg-surface-800/50 transition-colors"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="sm:hidden border-t border-surface-800/50 px-6 py-4 flex flex-col gap-2">
          <NavLink href="/" active={pathname === "/"} onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>
          <NavLink href="/community" active={pathname === "/community"} onClick={() => setMenuOpen(false)}>
            Community
          </NavLink>
          <NavLink href="/about" active={pathname === "/about"} onClick={() => setMenuOpen(false)}>
            About
          </NavLink>
          <JoinButton label="Join" variant="nav-mobile" onOpen={() => setMenuOpen(false)} />
        </div>
      )}
    </header>
  );
}

function NavLink({
  href,
  active,
  onClick,
  children,
}: {
  href: string;
  active: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
        active
          ? "text-brand-400 bg-brand-500/10"
          : "text-surface-300 hover:text-surface-100 hover:bg-surface-800/50"
      }`}
    >
      {children}
    </Link>
  );
}
