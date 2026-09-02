import {
  GitCommit,
  ExternalLink,
  Mail,
  Link2,
  Phone,
  ArrowUpRight,
  ChevronRight,
  X,
  FileText,
} from "lucide-react";
import {
  SiCypress,
  SiFigma,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

import { useEffect, useState, useCallback } from "react";

const profilePhoto = "/saya1.png";

const TOKENS = `
  :root {
    --paper: #FFFFFF;
    --paper-2: #F4F4F4;
    --ink: #10182B;
    --ink-soft: #5A5B63;
    --line: #E6E6E6;
    --gold: #C9A227;
    --gold-soft: #E8D48A;
    --slate: #7A7A7A;
    --terminal-bg: #0E1526;
    --terminal-bg-2: #131C33;
    --terminal-text: #DCE3F0;
  }
  .pf-root {
    background: var(--paper);
    color: var(--ink);
    font-family: 'Inter', ui-sans-serif, system-ui, sans-serif;
  }
  .pf-display {
    font-family: 'Space Grotesk', ui-sans-serif, system-ui, sans-serif;
  }
  .pf-mono {
    font-family: 'JetBrains Mono', ui-monospace, SFMono-Regular, monospace;
  }
  .pf-nav {
    border-bottom: 1px solid var(--line);
    background: color-mix(in srgb, var(--paper) 88%, transparent);
    backdrop-filter: blur(6px);
  }
  .pf-panel {
    background: #F7F8F9;
    border-radius: 16px;
    border: 1px solid var(--line);
    border-top: 3px solid var(--gold);
    box-shadow: 0 16px 40px -24px rgba(16, 24, 43, 0.25);
  }
  .pf-fact-row {
    border-bottom: 1px solid var(--line);
  }
  .pf-fact-row:last-child { border-bottom: none; }
  .pf-card {
    background: #F7F8F9;
    border: 1px solid var(--line);
    border-radius: 16px;
    transition: border-color .2s ease, transform .2s ease, box-shadow .2s ease;
  }
  .pf-card:hover {
    border-color: var(--gold);
    transform: translateY(-2px);
    box-shadow: 0 14px 34px -18px rgba(16, 24, 43, 0.35);
  }
  .pf-portrait-shell {
    position: relative;
    overflow: hidden;
    border-radius: 24px;
    border: none;
    background: transparent;
    box-shadow: none;
  }
  .pf-portrait-image {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center 18%;
    filter: saturate(1.02) contrast(1.02);
  }
  .pf-portrait-overlay {
    position: absolute;
    inset: 0;
    background: transparent;
  }
  .pf-portrait-caption {
    position: absolute;
    left: 16px;
    right: 16px;
    bottom: 16px;
    padding: 14px 14px 12px;
    border-radius: 18px;
    background: rgba(247, 248, 249, 0.9);
    border: 1px solid rgba(203, 209, 216, 0.85);
    backdrop-filter: blur(10px);
    box-shadow: 0 10px 22px -18px rgba(16, 24, 43, 0.5);
  }
  .pf-portrait-frame {
    aspect-ratio: 4 / 5;
  }
  .pf-hero-photo {
    width: 100%;
    max-width: 460px;
  }
  .pf-hero-frame {
    background: transparent;
    border: none;
    border-radius: 0;
    box-shadow: none;
  }
  .pf-hero-frame-mobile {
    padding: 0;
  }
  .pf-hero-frame-desktop {
    padding: 0;
  }
  .pf-hero-panel {
    background: transparent;
    border: none;
    border-radius: 0;
    box-shadow: none;
    backdrop-filter: none;
  }
  .pf-hero-cutout {
    filter: drop-shadow(0 22px 28px rgba(16, 24, 43, 0.08));
  }
  .pf-pill {
    border: 1px solid var(--line);
    background: #F7F8F9;
    color: var(--ink-soft);
    border-radius: 999px;
    font-family: 'JetBrains Mono', monospace;
  }
  .pf-commit-line {
    border-left: 2px solid var(--line);
  }
  .pf-commit-dot {
    background: var(--paper);
    border: 2px solid var(--gold);
  }
  .pf-org-logo {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    border: 1px solid var(--line);
    background: var(--paper-2);
    overflow: hidden;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .pf-org-logo img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    padding: 4px;
  }
  .pf-org-logo-initials {
    font-family: 'Space Grotesk', ui-sans-serif, system-ui, sans-serif;
    font-weight: 600;
    font-size: 18px;
    color: var(--gold);
    text-transform: uppercase;
    letter-spacing: -0.02em;
    line-height: 1;
    user-select: none;
  }
  .pf-attachment-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 12px;
  }
  .pf-attachment-card {
    border-radius: 8px;
    overflow: hidden;
    cursor: pointer;
    border: none;
    background: none;
    padding: 0;
    display: block;
    flex-shrink: 0;
    transition: opacity .2s ease, transform .15s ease;
  }
  .pf-attachment-card:hover {
    opacity: 0.85;
    transform: translateY(-1px);
  }
  .pf-attachment-card img {
    width: auto;
    height: 110px;
    border-radius: 8px;
    display: block;
    object-fit: cover;
  }
  .pf-attachment-card-pdf {
    width: 72px;
    height: 110px;
    border-radius: 8px;
    border: 1px solid var(--line);
    background: var(--paper-2);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    transition: border-color .2s ease;
    text-decoration: none;
  }
  .pf-attachment-card-pdf:hover {
    border-color: var(--gold-soft);
  }
  @media (max-width: 480px) {
    .pf-attachment-card img {
      height: 88px;
    }
    .pf-attachment-card-pdf {
      height: 88px;
    }
  }
  .pf-modal-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(10, 14, 30, 0.82);
    backdrop-filter: blur(6px);
    z-index: 50;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
  }
  .pf-modal-box {
    background: var(--paper);
    border-radius: 16px;
    border: 1px solid var(--line);
    border-top: 3px solid var(--gold);
    box-shadow: 0 32px 80px -24px rgba(16, 24, 43, 0.5);
    max-width: min(90vw, 720px);
    max-height: 90vh;
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
  .pf-modal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 16px;
    border-bottom: 1px solid var(--line);
    flex-shrink: 0;
  }
  .pf-modal-body {
    flex: 1;
    overflow: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    background: var(--paper-2);
  }
  .pf-modal-body img {
    max-width: 100%;
    max-height: calc(90vh - 80px);
    border-radius: 8px;
    display: block;
    object-fit: contain;
  }
  .pf-modal-close {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 1px solid var(--line);
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: var(--ink);
    transition: background .15s ease, border-color .15s ease;
  }
  .pf-modal-close:hover {
    background: var(--paper-2);
    border-color: var(--gold);
  }
  @media (max-width: 480px) {
    .pf-attachment-thumb {
      width: 68px;
      height: 52px;
    }
    .pf-org-logo {
      width: 48px;
      height: 48px;
    }
  }
  .pf-status-live {
    background: #E8F2E9;
    color: #2F6B37;
    border: 1px solid #BFDDC2;
  }
  .pf-status-dev {
    background: #FBF1D9;
    color: #8A6A0F;
    border: 1px solid #E8D48A;
  }
  .pf-status-course {
    background: #E7ECF5;
    color: var(--slate);
    border: 1px solid #C6D0E5;
  }
  .pf-link-underline {
    background-image: linear-gradient(var(--gold), var(--gold));
    background-size: 0% 2px;
    background-repeat: no-repeat;
    background-position: 0 100%;
    transition: background-size .25s ease;
  }
  .pf-link-underline:hover { background-size: 100% 2px; }
  .pf-logo-loop {
    overflow: hidden;
    position: relative;
    width: 100%;
  }
  .pf-logo-loop-track {
    display: flex;
    width: max-content;
    animation: pf-logo-loop-scroll 34s linear infinite;
  }
  .pf-logo-loop:hover .pf-logo-loop-track { animation-play-state: paused; }
  .pf-logo-loop-group {
    display: flex;
    align-items: center;
    flex-shrink: 0;
  }
  .pf-logo-loop-item {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex-shrink: 0;
    color: var(--ink);
  }
  .pf-logo-loop-item svg,
  .pf-logo-loop-item img {
    width: 38px;
    height: 38px;
    object-fit: contain;
  }
  @keyframes pf-logo-loop-scroll {
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
  }
  @media (max-width: 480px) {
    .pf-logo-loop-item svg,
    .pf-logo-loop-item img {
      width: 32px;
      height: 32px;
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .pf-caret { animation: none; }
    .pf-card { transition: none; }
    .pf-logo-loop-track { animation: none; }
  }
  .pf-cert-card {
    position: relative;
    overflow: hidden;
  }
  .pf-cert-thumb-wrap {
    position: absolute;
    top: 14px;
    right: 14px;
  }
  .pf-cert-thumb-btn {
    padding: 0;
    border: none;
    background: none;
    cursor: pointer;
    display: block;
    border-radius: 6px;
    border: 1px solid var(--line);
    box-shadow: 0 2px 8px -2px rgba(16, 24, 43, 0.14);
    overflow: hidden;
    transform: rotate(-5deg);
    transition: transform .2s ease, box-shadow .2s ease;
  }
  .pf-cert-thumb-btn:hover {
    transform: rotate(-5deg) scale(1.05);
    box-shadow: 0 6px 16px -4px rgba(16, 24, 43, 0.22);
  }
  .pf-cert-thumb-btn img {
    width: 80px;
    height: 60px;
    object-fit: cover;
    display: block;
  }
  .pf-cert-thumb-pdf {
    width: 60px;
    height: 60px;
    border-radius: 6px;
    border: 1px solid var(--line);
    box-shadow: 0 2px 8px -2px rgba(16, 24, 43, 0.14);
    background: var(--paper-2);
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transform: rotate(-5deg);
    transition: transform .2s ease, box-shadow .2s ease;
  }
  .pf-cert-thumb-pdf:hover {
    transform: rotate(-5deg) scale(1.05);
    box-shadow: 0 6px 16px -4px rgba(16, 24, 43, 0.22);
  }
  @media (max-width: 640px) {
    .pf-cert-thumb-wrap {
      display: none;
    }
  }
`;

const organizationCommits = [
  {
    hash: "3b8e9a0",
    date: "Jun 2024 — Jun 2025",
    title: "Staff Team Kreatif",
    org: "Digital Media Creative Space Informatics",
    detail:
      "Mengelola produksi konten dari perencanaan hingga publikasi, dan berkolaborasi merancang konsep kreatif untuk program kerja.",
    logo: "/lpm.png",
    attachments: [
      { type: "image", src: "/lpm1.png", label: "Dokumentasi kegiatan" },
    ],
  },
  {
    hash: "a1f9c02",
    date: "Jan 2024 — Feb 2025",
    title: "Ketua Departemen Kewirausahaan",
    org: "Himpunan Mahasiswa Prodi PTI UNESA",
    detail:
      "Memimpin perencanaan dan pelaksanaan program kerja divisi, menjalin kerja sama dengan mitra sponsor eksternal, serta membimbing kinerja anggota.",
    logo: "/hmppti.png",
    attachments: [
      { type: "image", src: "/hmppti1.jpg", label: "Dokumentasi kegiatan" },
    ],
  },
  {
    hash: "e21a6f4",
    date: "Mar 2023 — Jan 2024",
    title: "Staff Departemen Kewirausahaan",
    org: "Himpunan Mahasiswa Jurusan Teknik Informatika UNESA",
    detail:
      "Membantu perencanaan program kerja divisi kewirausahaan selama satu periode kepengurusan.",
    logo: "/himti.png",
    attachments: [
      { type: "image", src: "/himti1.jpg", label: "Dokumentasi kegiatan" },
    ],
  },
];

const committeeCommits = [
  {
    hash: "6d42e17",
    date: "Jun 2024",
    title: "Ketua Pelaksana — Journeytix Workshop",
    org: "Lembaga Pers Mahasiswa Informatika (DIGITIVS)",
    detail:
      "Memimpin panitia dari konsep acara hingga hari pelaksanaan, termasuk mengelola pembicara dan kesesuaian materi.",
  },
  {
    hash: "9f18d52",
    date: "Jun — Des 2023",
    title: "Sie Acara — X-Project (Project Event)",
    org: "HIMTI UNESA",
    detail:
      "Menyusun konsep dan rundown rangkaian lomba Business Model Canvas, berkoordinasi lintas divisi panitia.",
  },
  {
    hash: "7c40b19",
    date: "Jun 2023",
    title: "Sie Acara — Bootcamp Web Dev",
    org: "HIMTI UNESA",
    detail:
      "Merancang rundown acara bootcamp dan mendukung persiapan teknis, termasuk koordinasi dengan mentor.",
  },
  {
    hash: "d5c1e3f",
    date: "Mar 2023 — Jan 2024",
    title: "Ketua Pelaksana — Lomba Business Model Canvas (BMC)",
    org: "HIMTI UNESA",
    detail:
      "Dipercaya memimpin panitia lomba BMC mulai dari perencanaan hingga hari pelaksanaan.",
  },
];

const projects = [
  {
    slug: "codin",
    name: "CODIN",
    status: "live",
    statusLabel: "deployed",
    period: "Feb — Jun 2026",
    cover: "/codin.png",
    description:
      "Media pembelajaran interaktif untuk mata pelajaran Algoritma dan Pemrograman, dirancang dengan Figma lalu dibangun sebagai proyek skripsi memakai metode ADDIE.",
    stack: [
      "Next.js",
      "TypeScript",
      "React",
      "PostgreSQL",
      "Prisma",
      "Supabase",
    ],
    link: "https://codin-ypm.vercel.app",
    linkLabel: "codin-ypm.vercel.app",
    githubUrl: "https://github.com/anang2804/Codin",
  },
  {
    slug: "suzuki-dealer-website",
    name: "Suzuki Dealer Website",
    status: "live",
    statusLabel: "deployed",
    period: "2026",
    cover: "/suzukisales.png",
    description:
      "Website marketing untuk dealer Suzuki: homepage dengan beberapa carousel, katalog produk, dan halaman detail dinamis per varian warna lengkap dengan galeri foto dan CTA WhatsApp.",
    stack: ["Next.js (App Router)", "React", "TypeScript", "Tailwind CSS"],
    link: "https://suzukisalesjatim.vercel.app",
    linkLabel: "suzukisalesjatim.vercel.app",
    githubUrl: "https://github.com/anang2804/salesweb",
  },
  {
    slug: "tomadon",
    name: "TomadOn",
    status: "kuliah",
    statusLabel: "kuliah",
    period: "Feb — Mei 2024",
    cover: "/tomadon.png",
    description:
      "Website penjualan bahan sembako, dikembangkan bersama tim sebagai proyek mata kuliah Pemrograman Website sesuai timeline yang ditetapkan.",
    stack: ["HTML", "CSS"],
    link: "https://github.com/zainiirochman/TomadOn",
    linkLabel: "github.com/zainiirochman/TomadOn",
    githubUrl: "https://github.com/zainiirochman/TomadOn",
  },
  {
    slug: "lapindo-uiux",
    name: "Lapindo — UI/UX",
    status: "kuliah",
    statusLabel: "kuliah",
    period: "Okt — Nov 2023",
    cover: "/project-lapindo.svg",
    description:
      "Analisis kebutuhan dan desain UI/UX aplikasi Lapindo untuk mata kuliah Analisis dan Perancangan Sistem, dikerjakan bersama tim hingga laporan akhir.",
    stack: ["Figma"],
    link: "https://www.figma.com/design/HZzq61YmUOWDAQzHfHNEop/Lapindo?m=auto&t=itxJfww4Be0V8z6R-6",
    linkLabel: "figma.com/design/Lapindo",
  },
  {
    slug: "cypress-orangehrm-automation",
    name: "QA Automation Testing — OrangeHRM",
    status: "dev",
    statusLabel: "in progress",
    period: "Jul 2026 — Sekarang",
    cover: "/cypress-orangehrm.png",
    description:
      "Automation testing suite untuk aplikasi HR management OrangeHRM menggunakan Cypress, mencakup skenario pengujian fungsional (login, manajemen data karyawan, dsb) untuk memastikan reliabilitas aplikasi.",
    stack: ["Cypress", "JavaScript"],
    githubUrl: "https://github.com/anang2804/cypress-orangeHRM-automation",
  },
];

function getProjectSlugFromLocation() {
  if (typeof window === "undefined") {
    return null;
  }

  const hash = window.location.hash.replace(/^#/, "");
  const match = hash.match(/^project=([^&]+)$/);
  return match ? decodeURIComponent(match[1]) : null;
}

function isAllProjectsPage() {
  if (typeof window === "undefined") {
    return false;
  }

  return window.location.hash.replace(/^#/, "") === "projects=all";
}

function getOrgInitials(org) {
  return org
    .split(/\s+/)
    .filter((w) => /^[A-Za-z]/.test(w))
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");
}

const monthMap = {
  jan: 0,
  januari: 0,
  feb: 1,
  februari: 1,
  mar: 2,
  maret: 2,
  apr: 3,
  april: 3,
  mei: 4,
  jun: 5,
  juni: 5,
  jul: 6,
  juli: 6,
  agu: 7,
  agustus: 7,
  sep: 8,
  september: 8,
  okt: 9,
  oktober: 9,
  nov: 10,
  november: 10,
  des: 11,
  desember: 11,
};

function parsePeriodToDate(period) {
  if (!period || period === "—") return new Date(0);
  const parts = period.split(/[—\-–]/).map((p) => p.trim());
  const lastPart = parts[parts.length - 1];
  const tokens = lastPart.split(/\s+/);
  let year = 1970;
  let month = 0;
  for (const token of tokens) {
    const num = parseInt(token, 10);
    if (!isNaN(num) && num >= 1900 && num <= 2100) {
      year = num;
    } else {
      const lower = token.toLowerCase().replace(/\./g, "");
      if (monthMap[lower] !== undefined) {
        month = monthMap[lower];
      }
    }
  }
  return new Date(year, month, 1);
}

function getSortedProjects() {
  return [...projects].sort((a, b) => {
    const aInProgress = a.statusLabel === "in progress";
    const bInProgress = b.statusLabel === "in progress";
    if (aInProgress !== bInProgress) return bInProgress - aInProgress;

    const dateA = parsePeriodToDate(a.period);
    const dateB = parsePeriodToDate(b.period);
    return dateB - dateA;
  });
}

function ProjectCard({ project, onOpenDetail }) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => onOpenDetail(project.slug)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onOpenDetail(project.slug);
        }
      }}
      className="pf-card p-6 flex flex-col cursor-pointer focus:outline-none focus:ring-2 focus:ring-[color:var(--gold)] focus:ring-offset-2"
    >
      <div>
        <h3 className="pf-display text-xl font-semibold">{project.name}</h3>
      </div>
      <p
        className="mt-3 text-sm leading-relaxed flex-1"
        style={{ color: "var(--ink-soft)" }}
      >
        {project.description}
      </p>
      <div className="flex flex-wrap gap-1.5 mt-4">
        {project.stack.map((stackItem) => (
          <span key={stackItem} className="pf-pill px-2 py-1 text-[10px]">
            {stackItem}
          </span>
        ))}
      </div>
      <div
        className="mt-5 pt-4 border-t"
        style={{ borderColor: "var(--line)" }}
      >
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              onOpenDetail(project.slug);
            }}
            className="pf-mono text-xs inline-flex items-center gap-1.5 pf-link-underline"
            style={{ color: "var(--ink)" }}
          >
            Lihat detail <ChevronRight size={12} />
          </button>
          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              onClick={(event) => event.stopPropagation()}
              className="pf-mono text-xs inline-flex items-center gap-1.5 pf-link-underline"
              style={{ color: "var(--ink)" }}
            >
              {project.linkLabel} <ExternalLink size={12} />
            </a>
          ) : (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                onOpenDetail(project.slug);
              }}
              className="pf-mono text-xs inline-flex items-center gap-1.5 pf-link-underline"
              style={{ color: "var(--ink)" }}
            >
              Detail project <ChevronRight size={12} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function LogoLoop({ logos, gap = 40 }) {
  const renderGroup = (groupKey) => (
    <div className="pf-logo-loop-group" key={groupKey} aria-hidden={groupKey === "duplicate"}>
      {logos.map((logo) => (
        <div
          className="pf-logo-loop-item"
          key={`${groupKey}-${logo.title}`}
          style={{ marginRight: gap }}
          title={logo.title}
        >
          {logo.node}
          <span className="pf-mono text-[10px] mt-2 whitespace-nowrap">
            {logo.title}
          </span>
        </div>
      ))}
    </div>
  );

  return (
    <div className="pf-logo-loop" aria-label="Tools yang digunakan">
      <div className="pf-logo-loop-track">
        {renderGroup("primary")}
        {renderGroup("duplicate")}
      </div>
    </div>
  );
}

function OrgLogo({ logo, org }) {
  if (logo) {
    return (
      <div className="pf-org-logo">
        <img src={logo} alt={`Logo ${org}`} />
      </div>
    );
  }
  return (
    <div className="pf-org-logo">
      <span className="pf-org-logo-initials">{getOrgInitials(org)}</span>
    </div>
  );
}

function AttachmentModal({ attachment, onClose }) {
  const handleBackdropClick = useCallback(
    (e) => {
      if (e.target === e.currentTarget) onClose();
    },
    [onClose],
  );

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!attachment) return null;

  return (
    <div
      className="pf-modal-backdrop"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-label={attachment.label}
    >
      <div className="pf-modal-box">
        <div className="pf-modal-header">
          <span className="pf-mono text-xs" style={{ color: "var(--slate)" }}>
            {attachment.label}
          </span>
          <button
            type="button"
            className="pf-modal-close"
            onClick={onClose}
            aria-label="Tutup preview"
          >
            <X size={14} />
          </button>
        </div>
        <div className="pf-modal-body">
          <img src={attachment.src} alt={attachment.label} />
        </div>
      </div>
    </div>
  );
}

function AttachmentThumbs({ attachments, onPreview }) {
  if (!attachments || attachments.length === 0) return null;
  return (
    <div className="pf-attachment-grid">
      {attachments.map((att, i) => {
        if (att.type === "pdf") {
          return (
            <a
              key={i}
              href={att.src}
              target="_blank"
              rel="noreferrer"
              className="pf-attachment-card-pdf"
              title={att.label}
            >
              <FileText size={28} style={{ color: "var(--gold)" }} />
            </a>
          );
        }
        return (
          <button
            key={i}
            type="button"
            className="pf-attachment-card"
            title={att.label}
            onClick={() => onPreview(att)}
          >
            <img src={att.src} alt={att.label} />
          </button>
        );
      })}
    </div>
  );
}

function ProjectDetailPage({ project, onBack }) {
  return (
    <div className="pf-root min-h-screen">
      <style>{TOKENS}</style>

      <nav className="pf-nav sticky top-0 z-20">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
          <div className="pf-mono text-sm" style={{ color: "var(--gold)" }}>
            &gt; anang<span style={{ color: "var(--ink)" }}>_ardiansyah</span>
          </div>
          <button
            type="button"
            onClick={onBack}
            className="pf-mono text-xs px-4 py-2 rounded-full pf-card"
            style={{ color: "var(--ink)" }}
          >
            Kembali ke portfolio
          </button>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 py-10 sm:py-14">
        <button
          type="button"
          onClick={onBack}
          className="pf-mono text-xs mb-6 inline-flex items-center gap-2 pf-link-underline"
          style={{ color: "var(--ink)" }}
        >
          <ChevronRight size={14} className="rotate-180" />
          Lihat semua project
        </button>

        <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] items-start">
          <div className="space-y-5">
            <div className="pf-card overflow-hidden">
              <img
                src={project.cover}
                alt={`Cover project ${project.name}`}
                className="w-full h-auto block"
                loading="eager"
                decoding="async"
              />
            </div>
            <div className="pf-card p-6 sm:p-7">
              <div>
                <div>
                  <p
                    className="pf-mono text-xs"
                    style={{ color: "var(--slate)" }}
                  >
                    PROJECT DETAIL
                  </p>
                  <h1 className="pf-display text-3xl sm:text-4xl font-semibold mt-2">
                    {project.name}
                  </h1>
                </div>
              </div>
              <p
                className="mt-4 text-base leading-relaxed"
                style={{ color: "var(--ink-soft)" }}
              >
                {project.description}
              </p>
            </div>
          </div>

          <aside className="space-y-5 lg:sticky lg:top-28">
            <div className="pf-card p-6 sm:p-7">
              <p
                className="pf-mono text-xs tracking-wider"
                style={{ color: "var(--slate)" }}
              >
                STACK
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="pf-pill px-3 py-1.5 text-xs">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="pf-card p-6 sm:p-7">
              <p
                className="pf-mono text-xs tracking-wider"
                style={{ color: "var(--slate)" }}
              >
                AKSI
              </p>
              <div className="mt-4 space-y-3">
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full pf-display text-sm font-medium"
                    style={{ background: "var(--ink)", color: "var(--paper)" }}
                  >
                    Buka website project <ExternalLink size={14} />
                  </a>
                ) : null}
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full pf-display text-sm font-medium pf-card"
                    style={{ color: "var(--ink)" }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23A11.52 11.52 0 0 1 12 6.803c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    Lihat repository
                  </a>
                ) : null}
                <button
                  type="button"
                  onClick={onBack}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full pf-display text-sm font-medium pf-card"
                  style={{ color: "var(--ink)" }}
                >
                  Kembali ke daftar project
                </button>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}

const stack = [
  { name: "Next.js", icon: "nextdotjs", color: "000000" },
  { name: "React", icon: "react", color: "61DAFB" },
  { name: "TypeScript", icon: "typescript", color: "3178C6" },
  { name: "Tailwind CSS", icon: "tailwindcss", color: "06B6D4" },
  { name: "Supabase", icon: "supabase", color: "3FCF8E" },
  { name: "Figma", icon: "figma", color: "F24E1E" },
  { name: "Cypress", icon: "cypress", color: "17202C" },
  {
    name: "Jam.dev",
    icon: "jamdotdev",
    color: "F8B84E",
    image: "https://img.icons8.com/color/96/jam.png",
  },
  {
    name: "Microsoft Excel",
    icon: "microsoftexcel",
    color: "217346",
    image: "https://img.icons8.com/color/96/microsoft-excel-2019.png",
  },
  {
    name: "Microsoft Word",
    icon: "microsoftword",
    color: "2B579A",
    image: "https://img.icons8.com/color/96/microsoft-word-2019.png",
  },
  {
    name: "Microsoft PowerPoint",
    icon: "microsoftpowerpoint",
    color: "D24726",
    image: "https://img.icons8.com/color/96/microsoft-powerpoint-2019.png",
  },
  { name: "JavaScript", icon: "javascript", color: "F7DF1E" },
];

const toolIconMap = {
  nextdotjs: SiNextdotjs,
  react: SiReact,
  typescript: SiTypescript,
  tailwindcss: SiTailwindcss,
  supabase: SiSupabase,
  figma: SiFigma,
  cypress: SiCypress,
  javascript: SiJavascript,
};

const techLogos = stack.map((tool) => {
  const ToolIcon = toolIconMap[tool.icon];
  return {
    title: tool.name,
    node: ToolIcon ? (
      <ToolIcon color={`#${tool.color}`} aria-hidden="true" />
    ) : (
      <img src={tool.image} alt="" aria-hidden="true" loading="lazy" />
    ),
  };
});

const certifications = [
  {
    title: "ReactJS For Front End Website Developer",
    org: "Hacktiv8 (MSIB) Angkatan 7",
    date: "Sep — Des 2024",
    certificateFile: { type: "image", src: "/setif studpen hacktiv.jpg" },
  },
  {
    title: "Kelas Dasar Microsoft Excel Administrasi Perkantoran",
    org: "YEC.co.id",
    date: "Jul 2026",
    certificateFile: { type: "image", src: "/yec.jpg" },
  },
];

const achievements = [
  {
    title: "Juara 1 Business Model Canvas Competition",
    org: "BEM FKH UGM",
    date: "2024",
  },
  {
    title: "Finalis Business Plan Competition",
    org: "BEM FEB UPN \u201cVeteran\u201d Jakarta",
    date: "2024",
  },
];

export default function Portfolio() {
  const [activeProjectSlug, setActiveProjectSlug] = useState(
    getProjectSlugFromLocation,
  );
  const [allProjectsPage, setAllProjectsPage] = useState(isAllProjectsPage);
  const [modalAttachment, setModalAttachment] = useState(null);

  useEffect(() => {
    const handleHashChange = () => {
      setActiveProjectSlug(getProjectSlugFromLocation());
      setAllProjectsPage(isAllProjectsPage());
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const activeProject = projects.find(
    (project) => project.slug === activeProjectSlug,
  );

  const openProjectDetail = (slug) => {
    window.location.assign(`#project=${slug}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openAllProjects = () => {
    window.location.assign("#projects=all");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const backToPortfolioProjects = () => {
    window.location.assign("#projects");
  };

  const closeProjectDetail = () => {
    window.history.pushState(
      {},
      "",
      `${window.location.pathname}${window.location.search}`,
    );
    setActiveProjectSlug(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const portfolioPage = (
    <div className="pf-root min-h-screen">
      <style>{TOKENS}</style>

      {/* NAV */}
      <nav className="pf-nav sticky top-0 z-20">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="pf-mono text-sm" style={{ color: "var(--gold)" }}>
            &gt; anang<span style={{ color: "var(--ink)" }}>_ardiansyah</span>
          </div>
          <div
            className="hidden sm:flex items-center gap-6 pf-mono text-xs"
            style={{ color: "var(--ink-soft)" }}
          >
            <a href="#about" className="pf-link-underline pb-0.5">
              about
            </a>
            <a href="#projects" className="pf-link-underline pb-0.5">
              projects
            </a>
            <a href="#log" className="pf-link-underline pb-0.5">
              log
            </a>
            <a href="#contact" className="pf-link-underline pb-0.5">
              contact
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header className="max-w-5xl mx-auto px-6 pt-14 pb-16 sm:pt-20 sm:pb-24">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.03fr)_0.97fr] lg:gap-16 items-center">
          <div className="max-w-2xl">
            <div
              className="inline-flex items-center gap-2 pf-mono text-[11px] tracking-[0.22em] uppercase"
              style={{ color: "var(--gold)" }}
            >
              FRESH GRADUATE
            </div>
            <div className="mt-4 h-px w-16 bg-[color:var(--gold)]" />
            <div className="mt-5 flex items-start gap-4 sm:gap-5">
              <h1 className="pf-display text-4xl sm:text-5xl lg:text-[4.9rem] font-semibold leading-[0.9] tracking-[-0.05em] flex-1 max-w-xl">
                Moch. Anang
                <br />
                Ardiansyah
              </h1>
            </div>
            <div className="mt-6 lg:hidden flex justify-center">
              <div
                className="pf-hero-frame pf-hero-frame-mobile"
                style={{ width: "min(78vw, 310px)" }}
              >
                <div className="pf-portrait-shell pf-portrait-frame pf-hero-photo">
                  <img
                    src={profilePhoto}
                    alt="Potret Moch. Anang Ardiansyah"
                    className="pf-portrait-image"
                    loading="eager"
                    decoding="async"
                    style={{ objectPosition: "center 18%" }}
                  />
                </div>
              </div>
            </div>
            <div
              className="mt-6 max-w-xl text-base sm:text-[1.05rem] leading-relaxed"
              style={{ color: "var(--ink-soft)" }}
            >
              lulusan S1 Pendidikan Teknologi Informasi Universitas Negeri
              Surabaya yang memiliki minat dalam pengembangan teknologi dan
              solusi digital. Saya membangun website yang responsif, interaktif,
              dan mudah digunakan, dengan fokus pada detail visual dan
              pengalaman pengguna.
            </div>
            <div
              className="mt-5 flex flex-wrap gap-2 text-xs pf-mono"
              style={{ color: "var(--slate)" }}
            >
              <span className="px-0 py-0">Front-End Developer</span>
              <span className="text-[color:var(--line)]">/</span>
              <span className="px-0 py-0">Organizational Leader</span>
              <span className="text-[color:var(--line)]">/</span>
              <span className="px-0 py-0">Sidoarjo, Jawa Timur</span>
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="/CV%20ATS%20MOCH.%20ANANG%20ARDIANSYAH.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full pf-display text-sm font-medium"
                style={{ background: "var(--ink)", color: "var(--paper)" }}
              >
                Lihat CV <ChevronRight size={16} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full pf-display text-sm font-medium pf-card"
              >
                Hubungi saya
              </a>
            </div>
          </div>
          <div className="hidden lg:flex justify-end self-center pr-0 xl:pr-2 -mt-2 xl:-mt-4">
            <div className="pf-hero-frame pf-hero-frame-desktop pf-hero-cutout">
              <div className="pf-portrait-shell pf-portrait-frame pf-hero-photo">
                <img
                  src={profilePhoto}
                  alt="Potret Moch. Anang Ardiansyah"
                  className="pf-portrait-image"
                  loading="eager"
                  decoding="async"
                  style={{
                    objectPosition: "center bottom",
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ABOUT / TOOLS */}
      <section
        id="about"
        className="max-w-5xl mx-auto px-6 py-14 border-t"
        style={{ borderColor: "var(--line)" }}
      >
        <div className="space-y-10">
          <div>
            <p
              className="pf-mono text-xs tracking-wider mb-3"
              style={{ color: "var(--slate)" }}
            >
              ABOUT
            </p>
            <p
              className="text-base leading-relaxed"
              style={{ color: "var(--ink-soft)" }}
            >
              Halo, saya Moch. Anang Ardiansyah, lulusan S-1 Pendidikan
              Teknologi Informasi Universitas Negeri Surabaya yang memiliki
              minat dalam pengembangan teknologi dan solusi digital. Saya
              memiliki pengalaman sebagai Front-End Developer dalam membangun
              website dan aplikasi web yang interaktif, responsif, serta mudah
              digunakan.
            </p>
            <p
              className="mt-4 text-base leading-relaxed"
              style={{ color: "var(--ink-soft)" }}
            >
              Saya senang belajar hal baru, berkolaborasi dalam tim, dan
              menciptakan solusi yang memberikan manfaat bagi pengguna.
            </p>
          </div>
          <div>
            <p
              className="pf-mono text-xs tracking-wider mb-3"
              style={{ color: "var(--slate)" }}
            >
              TOOLS
            </p>
            <LogoLoop logos={techLogos} speed={70} direction="left" logoHeight={38} gap={34} hoverSpeed={0} scaleOnHover />
          </div>
        </div>
      </section>

      {/* ORGANISASI */}
      <section
        id="log"
        className="max-w-5xl mx-auto px-6 py-14 border-t"
        style={{ borderColor: "var(--line)" }}
      >
        <p
          className="pf-mono text-xs tracking-wider mb-8"
          style={{ color: "var(--slate)" }}
        >
          LOG — organisasi
        </p>
        <div className="space-y-0">
          {organizationCommits.map((c) => (
            <div
              key={c.hash}
              className="pf-commit-line pl-6 relative pb-9 last:pb-0"
            >
              <span className="pf-commit-dot absolute -left-[7px] top-1 w-3 h-3 rounded-full" />
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span
                  className="pf-mono text-xs"
                  style={{ color: "var(--gold)" }}
                >
                  <GitCommit size={12} className="inline -mt-0.5 mr-1" />
                  {c.hash}
                </span>
                <span
                  className="pf-mono text-xs"
                  style={{ color: "var(--ink-soft)" }}
                >
                  {c.date}
                </span>
              </div>
              <div className="flex items-start gap-3 mt-1.5">
                <OrgLogo logo={c.logo} org={c.org} />
                <div className="flex-1 min-w-0">
                  <h4 className="pf-display text-lg font-semibold leading-snug">
                    {c.title}
                  </h4>
                  <p
                    className="pf-mono text-xs mt-0.5"
                    style={{ color: "var(--slate)" }}
                  >
                    {c.org}
                  </p>
                  <p
                    className="text-sm mt-2 leading-relaxed max-w-2xl"
                    style={{ color: "var(--ink-soft)" }}
                  >
                    {c.detail}
                  </p>
                  <AttachmentThumbs
                    attachments={c.attachments}
                    onPreview={setModalAttachment}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* KEPANITIAAN */}
      <section
        className="max-w-5xl mx-auto px-6 py-14 border-t"
        style={{ borderColor: "var(--line)" }}
      >
        <p
          className="pf-mono text-xs tracking-wider mb-8"
          style={{ color: "var(--slate)" }}
        >
          LOG — kepanitiaan
        </p>
        <div className="space-y-0">
          {committeeCommits.map((c) => (
            <div
              key={c.hash}
              className="pf-commit-line pl-6 relative pb-9 last:pb-0"
            >
              <span className="pf-commit-dot absolute -left-[7px] top-1 w-3 h-3 rounded-full" />
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span
                  className="pf-mono text-xs"
                  style={{ color: "var(--gold)" }}
                >
                  <GitCommit size={12} className="inline -mt-0.5 mr-1" />
                  {c.hash}
                </span>
                <span
                  className="pf-mono text-xs"
                  style={{ color: "var(--ink-soft)" }}
                >
                  {c.date}
                </span>
              </div>
              <h4 className="pf-display text-lg font-semibold mt-1.5">
                {c.title}
              </h4>
              <p
                className="pf-mono text-xs mt-0.5"
                style={{ color: "var(--slate)" }}
              >
                {c.org}
              </p>
              <p
                className="text-sm mt-2 leading-relaxed max-w-2xl"
                style={{ color: "var(--ink-soft)" }}
              >
                {c.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="max-w-5xl mx-auto px-6 py-14 border-t"
        style={{ borderColor: "var(--line)" }}
      >
        <p
          className="pf-mono text-xs tracking-wider mb-6"
          style={{ color: "var(--slate)" }}
        >
          PROJECTS
        </p>
        <div className="grid sm:grid-cols-2 gap-5">
          {getSortedProjects()
            .slice(0, 4)
            .map((p) => (
              <ProjectCard
                key={p.name}
                project={p}
                onOpenDetail={openProjectDetail}
              />
            ))}
        </div>
        <div className="mt-8 text-center">
          <button
            type="button"
            onClick={openAllProjects}
            className="pf-mono text-xs inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full pf-card"
            style={{ color: "var(--ink)" }}
          >
            Lihat semua project <ChevronRight size={12} />
          </button>
        </div>
      </section>

      {/* CREDENTIALS */}
      <section
        className="max-w-5xl mx-auto px-6 py-14 border-t"
        style={{ borderColor: "var(--line)" }}
      >
        <p
          className="pf-mono text-xs tracking-wider mb-6"
          style={{ color: "var(--slate)" }}
        >
          SERTIFIKASI
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {certifications.map((c) => (
            <div key={c.title} className="pf-card pf-cert-card p-5">
              <div style={{ paddingRight: c.certificateFile ? "80px" : "0" }}>
                <div className="flex items-start justify-between gap-3">
                  <h4 className="pf-display text-base font-semibold leading-snug">
                    {c.title}
                  </h4>
                  <span
                    className="pf-mono text-[10px] whitespace-nowrap mt-1"
                    style={{ color: "var(--gold)" }}
                  >
                    {c.date}
                  </span>
                </div>
                <p
                  className="text-sm mt-2"
                  style={{ color: "var(--ink-soft)" }}
                >
                  {c.org}
                </p>
              </div>
              {c.certificateFile && (
                <div className="pf-cert-thumb-wrap">
                  {c.certificateFile.type === "image" ? (
                    <button
                      type="button"
                      className="pf-cert-thumb-btn"
                      title="Lihat sertifikat"
                      onClick={() =>
                        setModalAttachment({
                          src: c.certificateFile.src,
                          label: c.title,
                        })
                      }
                    >
                      <img
                        src={c.certificateFile.src}
                        alt={`Sertifikat ${c.title}`}
                      />
                    </button>
                  ) : (
                    <a
                      href={c.certificateFile.src}
                      target="_blank"
                      rel="noreferrer"
                      className="pf-cert-thumb-pdf"
                      title="Buka sertifikat PDF"
                    >
                      <FileText size={22} style={{ color: "var(--gold)" }} />
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section
        className="max-w-5xl mx-auto px-6 py-14 border-t"
        style={{ borderColor: "var(--line)" }}
      >
        <p
          className="pf-mono text-xs tracking-wider mb-6"
          style={{ color: "var(--slate)" }}
        >
          PRESTASI
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {achievements.map((c) => (
            <div key={c.title} className="pf-card p-5">
              <div className="flex items-start justify-between gap-3">
                <h4 className="pf-display text-base font-semibold leading-snug">
                  {c.title}
                </h4>
                <span
                  className="pf-mono text-[10px] whitespace-nowrap mt-1"
                  style={{ color: "var(--gold)" }}
                >
                  {c.date}
                </span>
              </div>
              <p className="text-sm mt-2" style={{ color: "var(--ink-soft)" }}>
                {c.org}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="max-w-5xl mx-auto px-6 py-16 border-t"
        style={{ borderColor: "var(--line)" }}
      >
        <div className="pf-panel p-8 sm:p-10 text-center">
          <p
            className="pf-mono text-xs tracking-wider"
            style={{ color: "var(--slate)" }}
          >
            CONTACT
          </p>
          <h3 className="pf-display text-2xl sm:text-3xl font-semibold mt-3">
            Terbuka untuk kolaborasi &amp; peluang kerja
          </h3>
          <div className="mt-6 flex flex-wrap justify-center gap-3 pf-mono text-sm">
            <a
              href="mailto:mochanangardiansyah@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
              style={{ background: "var(--ink)", color: "var(--paper)" }}
            >
              <Mail size={14} /> mochanangardiansyah@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/anang28/"
              target="_blank"
              rel="noreferrer"
              className="pf-card inline-flex items-center gap-2 px-4 py-2 rounded-full"
            >
              <Link2 size={14} /> linkedin.com/in/anang28
            </a>
            <a
              href="https://wa.me/6289514312154"
              target="_blank"
              rel="noreferrer"
              className="pf-card inline-flex items-center gap-2 px-4 py-2 rounded-full"
            >
              <Phone size={14} /> 0895-1431-2154
            </a>
          </div>
        </div>
        <p
          className="text-center pf-mono text-[11px] mt-8"
          style={{ color: "var(--ink-soft)" }}
        >
          built with <ArrowUpRight size={10} className="inline" /> React &amp;
          Tailwind
        </p>
      </section>

      {modalAttachment && (
        <AttachmentModal
          attachment={modalAttachment}
          onClose={() => setModalAttachment(null)}
        />
      )}
    </div>
  );

  const allProjectsPageView = (
    <div className="pf-root min-h-screen">
      <style>{TOKENS}</style>

      <nav className="pf-nav sticky top-0 z-20">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
          <div className="pf-mono text-sm" style={{ color: "var(--gold)" }}>
            &gt; anang<span style={{ color: "var(--ink)" }}>_ardiansyah</span>
          </div>
          <button
            type="button"
            onClick={backToPortfolioProjects}
            className="pf-mono text-xs px-4 py-2 rounded-full pf-card"
            style={{ color: "var(--ink)" }}
          >
            Kembali ke portfolio
          </button>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 py-10 sm:py-14">
        <button
          type="button"
          onClick={backToPortfolioProjects}
          className="pf-mono text-xs mb-6 inline-flex items-center gap-2 pf-link-underline"
          style={{ color: "var(--ink)" }}
        >
          <ChevronRight size={14} className="rotate-180" />
          Kembali ke portfolio
        </button>
        <p
          className="pf-mono text-xs tracking-wider mb-2"
          style={{ color: "var(--slate)" }}
        >
          PROJECTS
        </p>
        <h1 className="pf-display text-3xl sm:text-4xl font-semibold mb-8">
          Semua Project
        </h1>
        <div className="grid sm:grid-cols-2 gap-5">
          {getSortedProjects().map((project) => (
            <ProjectCard
              key={project.name}
              project={project}
              onOpenDetail={openProjectDetail}
            />
          ))}
        </div>
      </main>
    </div>
  );

  if (activeProject) {
    return (
      <ProjectDetailPage project={activeProject} onBack={closeProjectDetail} />
    );
  }

  if (allProjectsPage) {
    return allProjectsPageView;
  }

  return portfolioPage;
}
