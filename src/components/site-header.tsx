"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type NavItem = {
  label: string;
  href: string;
};

type SiteHeaderProps = {
  monogram: string;
  navItems: NavItem[];
};

export function SiteHeader({ monogram, navItems }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full border px-5 py-3 transition-all duration-300 ${
          scrolled
            ? "border-[#d8cbbd] bg-[#fbf7f2]/90 shadow-lg shadow-[#6f5b451a] backdrop-blur"
            : "border-[#ffffff9a] bg-[#fffcf8cc] shadow-sm backdrop-blur"
        }`}
      >
        <a href="#home" className="text-sm font-semibold tracking-[0.24em] text-[#513e2e]">
          {monogram}
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-[#645241] transition hover:text-[#2f2116]">
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="md:hidden"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className="block h-0.5 w-6 bg-[#4b3c2f]" />
          <span className="mt-1.5 block h-0.5 w-6 bg-[#4b3c2f]" />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mx-auto mt-3 flex max-w-6xl flex-col gap-3 rounded-3xl border border-[#e4d8ca] bg-[#fffdfa] p-5 shadow-lg shadow-[#56412b14] md:hidden"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-[#594838]"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
