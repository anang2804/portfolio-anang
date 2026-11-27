import type { CertificateItem, EducationItem, ExperienceItem, SkillGroup } from "./types";

export const experience: ExperienceItem[] = [
  {
    role: "Praktik Lapangan Persekolahan (PLP)",
    org: "Bidang Teknik Komputer dan Jaringan (TKJ)",
    period: "Februari 2025 – Juni 2025",
    summary:
      "Melaksanakan praktik pembelajaran di lingkungan sekolah dengan berfokus pada persiapan perangkat ajar, penyampaian materi, dan kegiatan pembelajaran siswa kelas X TKJ.",
    contributions: [
      "Menyusun modul ajar sebagai panduan pelaksanaan pembelajaran.",
      "Menyiapkan materi pembelajaran sesuai bidang Teknik Komputer dan Jaringan.",
      "Melaksanakan kegiatan pembelajaran pada siswa kelas X TKJ.",
      "Membantu siswa memahami materi melalui penjelasan dan kegiatan praktik.",
      "Menyesuaikan proses pembelajaran dengan tujuan dan kebutuhan pembelajaran.",
    ],
  },
  {
    role: "Staff Team Kreatif",
    org: "Digital Media Creative Space Informatics",
    period: "Juni 2024 – Juni 2025",
    summary:
      "Terlibat dalam kegiatan komunitas dan workshop, termasuk pengelolaan persiapan acara, koordinasi tim, serta pelaksanaan kegiatan kreatif dan edukatif.",
    contributions: [
      "Terlibat dalam persiapan dan pelaksanaan kegiatan komunitas serta workshop.",
      "Menjadi Ketua Pelaksana Journeytix Workshop 2024 yang diikuti oleh 29 peserta.",
      "Mengatur jadwal kegiatan, pembagian tugas panitia, dan kebutuhan pelaksanaan acara.",
      "Berkoordinasi dengan narasumber, panitia, dan pihak terkait.",
      "Membantu dokumentasi dan memastikan rangkaian kegiatan berjalan sesuai rencana.",
    ],
  },
  {
    role: "Ketua Departemen Kewirausahaan",
    org: "HMPPTI Universitas Negeri Surabaya",
    period: "Januari 2024 – Februari 2025",
    summary:
      "Memimpin dan mengoordinasikan departemen kewirausahaan dalam menjalankan program kerja organisasi, termasuk perencanaan kegiatan, pengelolaan tim, dan penyelenggaraan kompetisi bisnis mahasiswa.",
    contributions: [
      "Memimpin dan mengoordinasikan anggota departemen dalam menjalankan program kerja kewirausahaan.",
      "Mengoordinasikan penyelenggaraan Business Plan Competition (BPC) yang diikuti oleh 45 tim.",
      "Menyusun guidebook kompetisi yang mencakup ketentuan lomba, mekanisme pendaftaran, panduan peserta, dan kriteria penilaian.",
      "Berkoordinasi dengan juri dan pihak terkait untuk mendukung proses penilaian kompetisi.",
      "Mengatur pembagian tugas anggota serta memantau persiapan dan pelaksanaan program kerja.",
      "Mengelola administrasi dan dokumentasi kegiatan departemen.",
    ],
  },
];

export const education: EducationItem[] = [
  {
    school: "Universitas Negeri Surabaya (UNESA)",
    program: "S1 Pendidikan Teknologi Informasi",
    period: "Agustus 2022 – Juli 2026",
    gpa: "3,91/4,00",
    focus: "",
    subjects: [
      "Jaringan Komputer",
      "Teknik Komputasi",
      "Sistem Digital",
      "Sistem Operasi",
      "Arsitektur dan Organisasi Komputer",
      "Sistem Temu Kembali Informasi",
      "Pemrograman Web",
      "Basis Data",
    ],
    thesis: "Pengembangan Media Pembelajaran Web Interaktif dengan Simulasi pada Materi Algoritma dan Pemrograman untuk Siswa Kelas X SMK.",
  },
];

export const skills: SkillGroup[] = [
  {
    name: "Quality Assurance",
    items: [
      "Manual Testing",
      "Test Case & Test Scenario Design",
      "Positive & Negative Testing",
      "Bug Reporting & Documentation",
      "Regression Testing",
      "API Testing (Postman)",
      "UI Automation Testing (Cypress)",
      "SQL",
    ],
  },
  {
    name: "Web Development",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Responsive Web Design",
      "REST API Integration",
    ],
  },
  {
    name: "Networking",
    items: [
      "Computer Networking Fundamentals",
      "IP Addressing & Subnetting",
      "Network Configuration",
      "Network Troubleshooting",
      "ARP",
      "Network Simulation",
    ],
  },
  {
    name: "Tools",
    items: [
      "Git & GitHub",
      "Postman",
      "Cypress",
      "Visual Studio Code",
      "Microsoft Excel",
      "Figma",
    ],
  },
];

export const certificates: CertificateItem[] = [
  {
    title: "Quality Assurance Bootcamp",
    issuer: "SanberCode",
    date: "2026",
    images: ["/sertif%20qa-1.png", "/sertif%20qa-2.png"],
  },
  {
    title: "ReactJS for Front-End Website Developer — MSIB Batch 7",
    issuer: "Hacktiv8 x Kampus Merdeka",
    date: "2024",
    images: ["/sertif%20front%20end-1.png", "/sertif%20front%20end-2.png"],
  },
  {
    title: "Microsoft Office Specialist",
    issuer: "Karirnex x PT Ebiz Karisma Internasional",
    date: "2026",
    images: ["/karirnex1.png", "/karirnex2.png"],
  },
  {
    title: "Microsoft Excel Training",
    issuer: "YEC.co.id",
    date: "2026",
    images: ["/yec1.png", "/yec2.png"],
  },
];
