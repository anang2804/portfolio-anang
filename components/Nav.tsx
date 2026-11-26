"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/lib/site";

const links = [
  { href: "/#about", label: "Tentang" },
  { href: "/#projects", label: "Proyek" },
  { href: "/#experience", label: "Pengalaman" },
  { href: "/#skills", label: "Keahlian" },
  { href: "/#education", label: "Pendidikan" },
  { href: "/#certificates", label: "Sertifikat" },
  { href: "/#contact", label: "Kontak" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-paper/95 backdrop-blur-sm">
      <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between px-5 md:px-8">
        <Link
          href="/"
          className="relative z-10 min-w-0 max-w-[calc(100%-4.5rem)] truncate whitespace-nowrap font-serif text-[1.35rem] italic tracking-tight text-ink md:max-w-none md:text-[1.65rem]"
        >
          {site.shortName}.
        </Link>
        <nav
          className="hidden items-center gap-7 text-[0.95rem] text-ink md:flex"
          aria-label="Navigasi utama"
        >
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-accent">
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/#contact"
          className="hidden min-h-11 items-center rounded-full bg-ink px-5 text-sm text-paper hover:bg-[#2a2a2a] active:translate-y-px md:inline-flex"
        >
          Kontak
        </Link>
        <button
          type="button"
          className="relative z-20 inline-flex h-11 shrink-0 items-center px-3 text-sm md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Tutup" : "Menu"}
        </button>
      </div>
      {open ? (
        <nav
          id="mobile-menu"
          className="mx-5 rounded-2xl border border-line bg-paper px-5 py-3 shadow-sm md:hidden"
          aria-label="Navigasi seluler"
        >
          <ul className="flex flex-col">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="flex min-h-11 items-center text-base"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
