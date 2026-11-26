import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-5 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          {site.name}. 2026.
        </p>
        <div className="flex items-center gap-5">
          <a href={site.links.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={site.links.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <Link href="#top">Kembali ke atas</Link>
        </div>
      </div>
    </footer>
  );
}
