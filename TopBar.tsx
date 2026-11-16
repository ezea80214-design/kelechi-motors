import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface TopBarProps {
  currentPage: 'landing' | 'thank-you';
  primaryActionLabel?: string;
  onNavigateLanding: (sectionId?: string) => void;
  onPrimaryAction: () => void;
}

export function TopBar({
  currentPage,
  primaryActionLabel,
  onNavigateLanding,
  onPrimaryAction,
}: TopBarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const actionText =
    primaryActionLabel ||
    (currentPage === 'landing' ? 'Get Your Free Guide' : 'Download Your Free Guide');

  const handleNavClick = (sectionId?: string) => {
    setMobileMenuOpen(false);
    onNavigateLanding(sectionId);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick();
          }}
          className="font-display text-lg font-bold tracking-tight text-[#0B1F3A] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C59B27]"
        >
          Kelechi Motors
        </a>

        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600"
        >
          <a
            href="#guide-overview"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('guide-overview');
            }}
            className="whitespace-nowrap shrink-0 transition-colors hover:text-[#0B1F3A] hover:underline hover:underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C59B27]"
          >
            The Guide
          </a>
          <a
            href="#seven-benefits"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('seven-benefits');
            }}
            className="whitespace-nowrap shrink-0 transition-colors hover:text-[#0B1F3A] hover:underline hover:underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C59B27]"
          >
            7 Mistakes
          </a>
          <a
            href="#guide-highlights"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('guide-highlights');
            }}
            className="whitespace-nowrap shrink-0 transition-colors hover:text-[#0B1F3A] hover:underline hover:underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C59B27]"
          >
            Overview
          </a>
          <a
            href="#register-guide"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('register-guide');
            }}
            className="whitespace-nowrap shrink-0 transition-colors hover:text-[#0B1F3A] hover:underline hover:underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C59B27]"
          >
            Register
          </a>
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              onPrimaryAction();
            }}
            className="hidden sm:inline-flex min-h-[40px] items-center justify-center rounded-md bg-[#0B1F3A] px-5 py-2 text-sm font-semibold text-white whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[#132C4E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C59B27]"
          >
            {actionText}
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-slate-200 text-[#0B1F3A] md:hidden hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-[#C59B27]"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 md:hidden">
          <div className="flex flex-col gap-2">
            <a
              href="#guide-overview"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('guide-overview');
              }}
              className="flex min-h-[44px] items-center rounded-md px-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-[#0B1F3A]"
            >
              The Guide
            </a>
            <a
              href="#seven-benefits"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('seven-benefits');
              }}
              className="flex min-h-[44px] items-center rounded-md px-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-[#0B1F3A]"
            >
              7 Mistakes
            </a>
            <a
              href="#register-guide"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('register-guide');
              }}
              className="flex min-h-[44px] items-center rounded-md px-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-[#0B1F3A]"
            >
              Register
            </a>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onPrimaryAction();
              }}
              className="mt-2 flex min-h-[44px] w-full items-center justify-center rounded-md bg-[#0B1F3A] px-5 py-2.5 text-sm font-semibold text-white whitespace-nowrap"
            >
              {actionText}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
