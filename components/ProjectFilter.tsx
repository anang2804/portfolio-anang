"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import type { Project, ProjectCategory } from "@/lib/types";
import { categories, categoryLabel } from "@/lib/site";

gsap.registerPlugin(useGSAP);

const marks: Record<ProjectCategory, string> = {
  qa: "M3 16h6M9 10h6M15 16h6",
  frontend: "M4 8h16M4 12h10M4 16h13",
  networking: "M5 12h4M15 12h4M9 12h6",
  academic: "M4 16V8h5l3 3h8v5",
  other: "M6 12h12",
};

export function ProjectFilter({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<(typeof categories)[number]["id"]>("all");
  const [showAll, setShowAll] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  const visible = useMemo(
    () =>
      active === "all"
        ? projects
        : projects.filter((project) => project.category === active),
    [active, projects],
  );
  const displayed = showAll ? visible : visible.slice(0, 6);

  const selectCategory = (categoryId: (typeof categories)[number]["id"]) => {
    setActive(categoryId);
    setShowAll(false);
  };

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from("[data-project-card]", {
          autoAlpha: 0,
          y: 14,
          duration: 0.45,
          stagger: 0.055,
          ease: "power2.out",
        });
      });

      return () => mm.revert();
    },
    { scope: listRef, dependencies: [active, showAll] },
  );

  return (
    <div ref={listRef}>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter proyek">
        {categories.map((category) => {
          const selected = category.id === active;
          return (
            <button
              key={category.id}
              type="button"
              aria-pressed={selected}
              onClick={() => selectCategory(category.id)}
              className={`min-h-11 border px-4 text-sm ${
                selected
                  ? "border-ink bg-ink text-paper"
                  : "border-line bg-paper text-muted hover:border-ink hover:text-ink"
              }`}
            >
              {category.label}
            </button>
          );
        })}
      </div>

      {visible.length === 0 ? (
        <p className="mt-10 max-w-xl text-muted">
          Belum ada proyek dalam kategori ini.
        </p>
      ) : (
        <>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {displayed.map((project) => (
              <li key={project.slug} data-project-card>
                <Link
                  href={`/projects/${project.slug}`}
                  className="project-link group flex h-full flex-col border border-line bg-paper"
                >
                  <div className="relative aspect-[16/9] overflow-hidden border-b border-line bg-[radial-gradient(circle_at_20%_20%,#fff4ea_0%,#fffdf8_55%)]">
                    {project.thumbnail ? (
                      <Image
                        src={project.thumbnail}
                        alt=""
                        fill
                        sizes="(min-width: 640px) 50vw, 100vw"
                        className="object-cover"
                      />
                    ) : (
                      <svg
                        aria-hidden
                        viewBox="0 0 24 24"
                        className="absolute right-5 top-5 h-16 w-16 text-accent"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.4"
                      >
                        <path d={marks[project.category]} />
                      </svg>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-xs uppercase tracking-[0.14em] text-accent">
                      {categoryLabel[project.category as ProjectCategory]}
                    </p>
                    <h3 className="mt-3 font-serif text-[1.65rem] leading-tight tracking-tight">
                      {project.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-6 text-muted">
                      {project.summary}
                    </p>
                    {project.tools.length > 0 ? (
                      <p className="mt-6 border-t border-line pt-4 text-sm text-ink">
                        {project.tools.join(" · ")}
                      </p>
                    ) : null}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          {visible.length > 6 ? (
            <div className="mt-8 flex justify-center">
              <button
                type="button"
                onClick={() => setShowAll((current) => !current)}
                className="inline-flex min-h-11 items-center border border-ink px-5 text-sm font-bold text-ink transition-colors hover:bg-ink hover:text-paper"
                aria-expanded={showAll}
              >
                {showAll ? "Tampilkan lebih sedikit" : "Lihat semua"}
              </button>
            </div>
          ) : null}
        </>
      )}
    </div>
  );
}
