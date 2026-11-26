export const site = {
  name: "Moch. Anang Ardiansyah",
  shortName: "Moch. Anang Ardiansyah",
  display: ["MOCH. ANANG", "ARDIANSYAH"] as const,
  headline: "QA, frontend, dan jaringan komputer.",
  intro:
    "Saya mendokumentasikan hasil membangun dan menguji: quality assurance, antarmuka frontend, dan jaringan komputer.",
  email: "anang@example.com",
  links: {
    github: "https://github.com",
    linkedin: "https://www.linkedin.com",
  },
  cv: {
    href: "/documents/cv.pdf",
    ready: false,
  },
} as const;

export const categories = [
  { id: "all", label: "Semua" },
  { id: "qa", label: "QA" },
  { id: "frontend", label: "Web Development" },
  { id: "networking", label: "Jaringan" },
] as const;

export const categoryLabel: Record<string, string> = {
  qa: "Quality assurance",
  frontend: "Web Development",
  networking: "Jaringan",
  academic: "Akademik",
  other: "Lainnya",
};
