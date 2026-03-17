"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

type Variant = "primary" | "secondary" | "nav" | "nav-mobile";

const variantClass: Record<Variant, string> = {
  primary:
    "px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold transition-all hover:shadow-lg hover:shadow-brand-500/20",
  secondary:
    "px-6 py-3 rounded-xl bg-surface-800/60 hover:bg-surface-800 text-surface-200 font-semibold border border-surface-700/50 transition-all",
  nav: "ml-3 px-4 py-2 rounded-lg bg-brand-600 hover:bg-brand-500 text-white text-sm font-medium transition-colors",
  "nav-mobile":
    "px-4 py-2 rounded-lg bg-brand-600 hover:bg-brand-500 text-white text-sm font-medium transition-colors text-center",
};

export function JoinButton({
  label = "Join",
  variant = "primary",
  className,
  onOpen,
}: {
  label?: string;
  variant?: Variant;
  className?: string;
  onOpen?: () => void;
}) {
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen(true);
    onOpen?.();
  }

  return (
    <>
      <button onClick={handleOpen} className={className ?? variantClass[variant]}>
        {label}
      </button>

      {open && <JoinModal onClose={() => setOpen(false)} />}
    </>
  );
}

function JoinModal({ onClose }: { onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      setMounted(false);
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire up to backend / waitlist service
    setSubmitted(true);
  }

  if (!mounted) return null;

  return createPortal(
    <div className="fixed inset-0 z-[200] overflow-y-auto bg-surface-950/80 backdrop-blur-sm">
      <div
        className="flex min-h-full items-center justify-center p-4 py-24"
        onClick={(e) => e.target === e.currentTarget && onClose()}
      >
        <div className="glass rounded-2xl p-8 w-full max-w-md">
          {submitted ? (
            <SuccessState onClose={onClose} />
          ) : (
            <FormState onSubmit={handleSubmit} onClose={onClose} />
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}

function FormState({
  onSubmit,
  onClose,
}: {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onClose: () => void;
}) {
  return (
    <>
      <div className="flex items-start justify-between mb-6">
        <div>
          <h2 className="font-display text-2xl text-surface-50">
            Join CollectorFlex
          </h2>
          <p className="text-sm text-surface-400 mt-1">
            Reserve your spot. We&rsquo;ll reach out on Discord when you&rsquo;re up.
          </p>
        </div>
        <button
          onClick={onClose}
          className="text-surface-500 hover:text-surface-300 transition-colors mt-1"
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label htmlFor="profileName" className="block text-sm font-medium text-surface-300 mb-1.5">
            Profile Name
          </label>
          <input
            id="profileName"
            name="profileName"
            type="text"
            required
            placeholder="How you want to be known"
            className="w-full bg-surface-800/50 border border-surface-700 rounded-lg px-4 py-3 text-surface-100 placeholder:text-surface-600 focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500/50 transition-colors text-sm"
          />
        </div>

        <div>
          <label htmlFor="discordHandle" className="block text-sm font-medium text-surface-300 mb-1.5">
            Discord Handle
          </label>
          <input
            id="discordHandle"
            name="discordHandle"
            type="text"
            required
            placeholder="yourhandle"
            className="w-full bg-surface-800/50 border border-surface-700 rounded-lg px-4 py-3 text-surface-100 placeholder:text-surface-600 focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500/50 transition-colors text-sm font-mono"
          />
          <p className="text-xs text-surface-600 mt-1.5">
            Discord auth will be used to verify your account at launch.
          </p>
        </div>

        <button
          type="submit"
          className="w-full mt-2 px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold transition-all hover:shadow-lg hover:shadow-brand-500/20"
        >
          Request Access
        </button>
      </form>
    </>
  );
}

function SuccessState({ onClose }: { onClose: () => void }) {
  return (
    <div className="text-center py-4">
      <div className="w-14 h-14 rounded-2xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center mx-auto mb-5">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-brand-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h2 className="font-display text-2xl text-surface-50 mb-2">You&rsquo;re on the list</h2>
      <p className="text-sm text-surface-400 mb-6">
        We&rsquo;ll reach out on Discord when your spot is ready. Thanks for your interest in CollectorFlex.
      </p>
      <button
        onClick={onClose}
        className="px-6 py-2.5 rounded-xl bg-surface-800 hover:bg-surface-700 text-surface-200 text-sm font-medium transition-colors"
      >
        Close
      </button>
    </div>
  );
}
