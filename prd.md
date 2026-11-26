# Product Requirements Document (PRD)
## Personal Portfolio Website

**Product Name:** Anang Ardiansyah — Personal Portfolio  
**Product Type:** Personal Portfolio Website  
**Platform:** Responsive Web Application  
**Document Version:** 1.0  
**Last Updated:** November 2026

---

## 1. Product Overview

### 1.1 Product Description
Personal Portfolio Website adalah website pribadi yang berfungsi sebagai pusat dokumentasi digital untuk menampilkan profil, pendidikan, pengalaman organisasi, skill, project teknologi dari berbagai bidang, karya visual, video, dan informasi kontak.

Website tidak dibatasi pada satu profesi, tetapi tetap menonjolkan minat profesional di bidang teknologi, terutama Quality Assurance, Frontend Development, dan Networking.

### 1.2 Product Goals
- Membangun personal branding secara profesional.
- Menampilkan project lintas bidang IT dalam satu platform yang terstruktur.
- Memudahkan recruiter, hiring manager, dan pengunjung memahami profil serta kontribusi pemilik portfolio.
- Menyediakan bukti karya melalui screenshot, video, dokumentasi, demo, dan repository.
- Mendukung pencarian peluang kerja, kolaborasi, dan networking.

### 1.3 Product Vision
Menjadi website portfolio yang representatif, mudah diperbarui, dan mampu menggambarkan perjalanan akademik, pengalaman, kemampuan, serta karya pemilik portfolio secara jelas dan autentik.

---

## 2. Target Users

| User | Needs |
|---|---|
| Recruiter / HR | Melihat profil, skill, CV, pengalaman, dan project secara cepat. |
| Hiring Manager / Team Lead | Menilai kontribusi, proses pengerjaan, dan bukti kemampuan dari project. |
| Professional / IT Community | Melihat karya, teknologi yang dipelajari, serta membuka peluang kolaborasi. |
| General Visitor | Mengenal pemilik portfolio dan menemukan karya atau kontaknya. |

---

## 3. User Problems

- Informasi profil dan karya tersebar di CV, GitHub, media sosial, video, dan file dokumentasi.
- Project sering hanya berupa repository tanpa konteks, screenshot, proses, atau hasil.
- Pengunjung membutuhkan cara cepat untuk memahami bidang yang dikuasai dan kontribusi dalam project.
- Kandidat junior perlu menunjukkan kemampuan melalui project dan aktivitas, bukan hanya pengalaman kerja formal.

---

## 4. Product Solution

Website personal dengan homepage sebagai overview dan halaman detail project untuk menjelaskan karya lebih lengkap. Website mendukung berbagai kategori project, visual media (image/video), timeline pengalaman dan pendidikan, daftar skill, sertifikat, CV, serta link eksternal.

---

## 5. Information Architecture / Sitemap

- Home
- About
- Projects
  - Quality Assurance
  - Frontend Development
  - Networking / Computer Network
  - Academic Projects
  - Other Projects
- Experience & Organization
- Skills
- Education
- Certificates & Achievements
- Gallery / Videos
- Contact
- Resume (PDF)

---

## 6. Functional Requirements

### FR-01 — Navigation
Navbar menyediakan akses ke Home, About, Projects, Experience, Skills, Education, Certificates, dan Contact. Navbar tetap mudah diakses saat scrolling; mobile menggunakan menu compact/hamburger.

### FR-02 — Home / Hero
Menampilkan nama, headline, deskripsi singkat, CTA View Projects, Download CV, dan link sosial.

### FR-03 — About
Menampilkan profil, latar belakang pendidikan, perjalanan belajar, minat, dan fokus pengembangan.

### FR-04 — Projects Listing
Menampilkan project cards berisi judul, kategori, deskripsi, thumbnail, tools/technology, dan link detail.

### FR-05 — Project Filtering
Pengunjung dapat memfilter project berdasarkan kategori: All, QA, Frontend, Networking, Academic, dan Other. Filter memperbarui daftar tanpa reload penuh.

### FR-06 — Project Detail
Setiap project memiliki detail overview, background/problem, role/contribution, process, result, technology/tools, media, dan link. Template dapat disesuaikan dengan jenis project.

### FR-07 — QA Project Details
Project QA dapat menampilkan testing scope, test approach, sample test cases, bug findings, test execution summary, evidence, dan documentation.

### FR-08 — Frontend Project Details
Project frontend dapat menampilkan overview, fitur, tech stack, screenshot UI, responsive previews, live demo, dan repository.

### FR-09 — Networking Project Details
Project jaringan dapat menampilkan tujuan, topology diagram, perangkat/software, konfigurasi atau konsep, hasil simulasi, screenshot, dan video demo.

### FR-10 — Academic Project Details
Project akademik dapat menampilkan problem statement, objective, role, method, technology, hasil, dokumentasi, dan demo.

### FR-11 — Experience & Organization
Menampilkan pengalaman organisasi, kepanitiaan, leadership, teaching/PLP, freelance, dan aktivitas profesional dalam timeline/cards. Item memiliki posisi, organisasi, periode, deskripsi, kontribusi, dan media opsional.

### FR-12 — Skills
Skill dikelompokkan ke Software/Technology, QA, Frontend, Networking, Tools, dan soft skills. Hanya skill yang benar-benar dikuasai/dipelajari yang ditampilkan.

### FR-13 — Education
Menampilkan institusi, degree/program, periode, informasi relevan, dan final project jika sesuai.

### FR-14 — Certificates & Achievements
Menampilkan pelatihan, bootcamp, sertifikat, achievement, dan kompetisi. Sertifikat dapat dibuka sebagai gambar/PDF atau link.

### FR-15 — Gallery / Videos
Menyediakan galeri visual project dan kegiatan. Video dapat di-embed atau diarahkan ke platform video.

### FR-16 — Resume Download
CV PDF dapat diunduh melalui tombol yang tersedia di homepage/contact.

### FR-17 — Contact
Menampilkan email, LinkedIn, GitHub, dan link relevan. Email dapat memakai mailto. Contact form tidak wajib untuk MVP.

### FR-18 — Footer
Menampilkan nama, copyright, social links, dan back-to-top.

### FR-19 — Theme (Optional)
Dark/light mode dapat ditambahkan sebagai enhancement, bukan blocker MVP.

---

## 7. Project Categories & Initial Content

| Category | Example Content | Preferred Media |
|---|---|---|
| Quality Assurance | OrangeHRM manual testing; SauceDemo Cypress automation; Fake Store API testing | Test documentation, screenshots, GitHub, results |
| Frontend Development | React/Next.js websites, UI implementation, responsive design | Live demo, screenshots, GitHub |
| Networking | Network topology, configuration, simulation, troubleshooting | Topology diagrams, video, screenshots, notes |
| Academic Projects | Final project / learning media application, coursework/group projects | Demo, screenshots, documentation |
| Other | Creative work or additional technology projects | Images, videos, links |

---

## 8. Project Detail Content Model

Project detail dapat memiliki bagian berikut:
- Project Title
- Category
- Short Description
- Project Overview
- Background / Problem
- Objectives
- My Role / Contribution
- Process / Approach
- Features or Scope
- Technology / Tools
- Result / Outcome
- Images / Video / Gallery
- Links: repository, demo, documentation

Project detail content bersifat fleksibel. QA-specific fields (test cases, bug reports, execution results) hanya muncul untuk project QA. Networking-specific fields (topology, configuration, simulation) hanya muncul untuk project networking. Frontend-specific fields (UI screenshots, live demo, responsive behavior) hanya muncul untuk project frontend.

---

## 9. User Experience & Design Requirements

### 9.1 Design Direction
- Style: modern, minimalist, editorial personal portfolio.
- Profesional tetapi tetap personal; hindari tampilan seperti dashboard.
- Whitespace, readable typography, clear hierarchy, dan visual project yang kuat.
- Project cards dapat menggunakan media berbeda dengan layout yang konsisten.
- Animasi hover dan scroll dibuat subtle dan tidak mengganggu.

### 9.2 Suggested Visual System

| Element | Direction |
|---|---|
| Background | Off-white, white, atau light gray; optional dark theme |
| Primary | Navy / dark slate |
| Accent | Muted blue atau green |
| Typography | Inter, Geist, atau sans-serif modern sejenis |
| Layout | Grid, cards, timeline, editorial sections |
| Navigation | Sticky desktop nav; compact mobile nav |
| Media | Optimized images, embedded videos, project thumbnails |

### 9.3 Responsive Design
- Support desktop, laptop, tablet, dan mobile.
- Project grid menyesuaikan lebar layar.
- Navigation switches to mobile menu on narrow screens.
- Text, media, dan buttons tetap readable dan usable.
- Tidak ada unintended horizontal overflow.

---

## 10. Non-Functional Requirements

| Area | Requirement |
|---|---|
| Performance | Optimize images/video embeds, lazy-load media where appropriate, minimize unnecessary libraries. |
| Accessibility | Semantic HTML, adequate contrast, alt text, keyboard navigation, visible focus states. |
| SEO | Page title, meta description, Open Graph, semantic headings, favicon. |
| Security | Do not expose secrets or sensitive personal information; secure external link behavior. |
| Maintainability | Reusable components and structured project data; easy content updates. |
| Reliability | No broken navigation, media, or download links. |
| Compatibility | Support current major desktop/mobile browsers. |

---

## 11. Technical Recommendations

| Layer | Recommendation |
|---|---|
| Framework | Next.js |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Icons | Lucide |
| Animation | Framer Motion (optional) |
| Hosting | Vercel |
| Version Control | GitHub |
| Media | Optimized images; embed video from a hosting platform as appropriate |

### 11.1 Suggested Folder Structure

```text
src/
├── app/
│   ├── page.tsx
│   ├── projects/
│   │   └── [slug]/page.tsx
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── ProjectCard.tsx
│   ├── ProjectFilter.tsx
│   ├── Projects.tsx
│   ├── Experience.tsx
│   ├── Skills.tsx
│   ├── Education.tsx
│   ├── Certificates.tsx
│   ├── Gallery.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── data/
│   ├── projects.ts
│   ├── experience.ts
│   └── skills.ts
└── public/
    ├── images/
    ├── videos/
    └── documents/
```

---

## 12. User Flow

1. Visitor opens the portfolio homepage.
2. Visitor reads introduction and profile overview.
3. Visitor browses featured projects or uses category filters.
4. Visitor opens a project detail page.
5. Visitor reviews project context, contribution, process, media, and result.
6. Visitor opens repository, demo, video, or documentation if available.
7. Visitor explores experience, skills, education, and certificates.
8. Visitor downloads CV or contacts the portfolio owner.

---

## 13. Acceptance Criteria

- Homepage presents clear name, headline, intro, and primary actions.
- All navigation links work and lead to correct sections/pages.
- Projects are displayed with category and useful summary information.
- Project filtering works for available categories.
- Project detail pages support content/media appropriate to their category.
- QA, frontend, networking, and academic projects can each show relevant details.
- Videos and images are viewable or linked without broken assets.
- Experience/organization items display position, organization, dates, and description.
- CV downloads successfully.
- Contact and external links work.
- Website is responsive on desktop, tablet, and mobile.
- No broken links or unintended horizontal scrolling.
- Website is deployed to a public URL.

---

## 14. MVP Scope & Roadmap

| Phase | Scope |
|---|---|
| MVP | Homepage, About, Projects listing, project category filter, project details, Skills, Experience/Organization, Education, Contact, CV download, responsive design, deployment. |
| Phase 2 | Certificates preview, video/gallery improvements, richer project media, SEO enhancements, animations. |
| Phase 3 | Dark mode, project search, blog/technical notes, analytics (privacy-conscious). |
| Future / Optional | CMS/admin content editing, contact form backend, multilingual support. |

---

## 15. Priority Matrix

| Priority | Features |
|---|---|
| P0 — Must Have | Hero, About, Project listing, category filter, project detail, Experience, Skills, Education, Contact, CV, responsive, deployment. |
| P1 — Should Have | Video embeds, image gallery, certificate preview, SEO, improved project evidence. |
| P2 — Nice to Have | Dark mode, advanced animations, project search, blog, analytics. |

---

## 16. Success Metrics

- A recruiter can understand the owner’s profile and primary interests within approximately 30 seconds.
- Featured project details are accessible within two clicks from the homepage.
- Every displayed project has at least a description and one meaningful evidence/media/link.
- All primary links and CV downloads function correctly.
- Website is usable on mobile without layout issues.
- The owner can add a new project by updating content/data without redesigning the website.

---

## 17. Risks & Considerations

| Risk | Mitigation |
|---|---|
| Too many projects make the homepage crowded | Use featured projects, categories, and dedicated detail pages. |
| Project evidence is incomplete | Publish only available evidence and add more as projects are documented. |
| Videos slow down the website | Use external video embeds or click-to-load previews instead of loading all videos immediately. |
| Portfolio feels unfocused | Keep a clear personal headline and prioritize technology projects while preserving cross-discipline categories. |
| Content becomes outdated | Use centralized data files and periodic content review. |

---

## 18. Final Product Definition

The final product is a responsive personal portfolio website that showcases the owner’s identity, academic background, technology interests, projects across QA, frontend development, networking, academic work, organizational experience, skills, certificates, and media. The website should communicate professional identity through clear content, credible evidence, and easy navigation, while remaining flexible enough to grow as new projects and experiences are added.
