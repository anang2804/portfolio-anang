export type ProjectCategory =
  | "qa"
  | "frontend"
  | "networking"
  | "academic"
  | "other";

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  thumbnail?: string;
  summary: string;
  overview: string;
  problem: string;
  role: string;
  process: string;
  result: string;
  tools: string[];
  links: ProjectLink[];
  qa?: {
    scope: string;
    approach: string;
    cases: string[];
    findings: string[];
  };
  frontend?: {
    features: string[];
    responsive: string;
  };
  networking?: {
    goal: string;
    devices: string[];
    outcome: string;
  };
  academic?: {
    objective: string;
    method: string;
  };
};

export type ExperienceItem = {
  role: string;
  org: string;
  period: string;
  summary: string;
  contributions: string[];
};

export type EducationItem = {
  school: string;
  program: string;
  period: string;
  gpa?: string;
  focus?: string;
  subjects?: string[];
  thesis?: string;
};

export type SkillGroup = {
  name: string;
  items: string[];
};

export type CertificateItem = {
  title: string;
  issuer: string;
  date: string;
  images: string[];
  link?: string;
};
