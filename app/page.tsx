import Link from "next/link";
import Image from "next/image";
import { HeroMotion } from "@/components/HeroMotion";
import CradleText from "@/components/kokonutui/cradle-text";
import TypewriterTitle from "@/components/kokonutui/type-writer";
import { Portrait } from "@/components/Portrait";
import { ProjectFilter } from "@/components/ProjectFilter";
import { ScrollMotion } from "@/components/ScrollMotion";
import { Folder, FolderContent } from "@/components/ui/folder";
import { certificates, education, experience, skills } from "@/lib/experience";
import { projects } from "@/lib/projects";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <main id="top">
      <ScrollMotion />
      <section className="relative h-[calc(100dvh-4.5rem)] min-h-[620px] overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-full bg-[radial-gradient(ellipse_at_center,_#ffe6bd_0%,_#fff2d9_39%,_#fffdf8_74%)]"
        />
        <div className="relative mx-auto h-full max-w-[1080px] px-5 md:px-8">
          <HeroMotion>
            <div
              data-hero-eyebrow
              className="absolute left-1/2 top-4 z-10 w-full -translate-x-1/2 md:top-2 lg:top-0"
            >
              <CradleText
                text="Hai, saya"
                intro
                bounce={0.97}
                className="[&>div]:font-serif [&>div]:italic [&>div]:font-normal [&>div]:text-ink [&>div]:text-[clamp(5.2rem,10vw,9rem)] [&>div]:tracking-[-0.04em] [&>div]:leading-[1.1]"
              />
            </div>

            <div data-hero-portrait className="absolute bottom-0 left-1/2 z-20 h-[70%] w-[min(82vw,400px)] -translate-x-1/2 md:h-[76%] md:w-[500px] lg:h-[82%] lg:w-[560px]">
              <Portrait />
            </div>

            <div data-hero-name className="absolute bottom-[13%] left-5 z-30 md:bottom-[10%] md:left-8 md:w-[420px]">
              <h1 className="font-display text-[clamp(1.45rem,6.5vw,2.25rem)] font-extrabold uppercase leading-[0.82] tracking-[-0.055em] text-accent md:text-[clamp(2.25rem,3.8vw,3.5rem)] md:text-ink">
                Moch.
                <br />
                Anang
                <br />
                Ardiansyah
              </h1>
            </div>

            <div
              data-hero-role
              className="absolute bottom-[14%] right-8 z-30 hidden w-[10.5ch] md:block"
            >
              <TypewriterTitle
                as="p"
                autoLoop
                naturalVariance
                typingSpeed={58}
                deleteSpeed={32}
                pauseBeforeDelete={900}
                loopDelay={700}
                sequences={[
                  { text: "QA", deleteAfter: true },
                  { text: "front-end", deleteAfter: true },
                  { text: "IT Support", deleteAfter: false },
                ]}
                className="!justify-end !text-ink"
                textClassName="font-display !text-[clamp(2.25rem,3.6vw,3.15rem)] font-extrabold uppercase !leading-[0.86] tracking-[-0.045em]"
              />
            </div>
          </HeroMotion>

          <div className="absolute bottom-5 right-5 z-30 flex flex-col items-end gap-2 md:flex-row">
            <Link
              href="/#projects"
              className="inline-flex min-h-11 items-center rounded-full bg-ink px-4 text-sm text-paper hover:bg-[#2a2a2a] active:translate-y-px"
            >
              Lihat proyek
            </Link>
            {site.cv.ready ? (
              <a
                href={site.cv.href}
                download
                className="inline-flex min-h-11 items-center rounded-full border border-ink bg-paper px-4 text-sm text-ink transition-colors hover:bg-ink hover:text-paper active:translate-y-px"
              >
                Unduh CV
              </a>
            ) : null}
          </div>
        </div>
      </section>

       <section id="about" className="portfolio-section border-t border-line">
         <div className="mx-auto max-w-5xl px-5 py-16">
           <div className="flex items-baseline gap-4">
             <h2 className="font-serif text-4xl tracking-[-0.04em] text-accent">Tentang</h2>
             <div className="h-px flex-1 bg-line/40" />
           </div>
           <div data-scroll-reveal className="mt-8 max-w-[65ch] space-y-6 leading-[1.75] text-muted">
             <p>
               Saya lulusan S1 Pendidikan Teknologi Informasi dari Universitas Negeri Surabaya. Minat utama saya adalah IT Support dan jaringan komputer. Saya memahami perencanaan dan pengalamatan jaringan, subnetting, konfigurasi perangkat jaringan, serta troubleshooting melalui praktik dan pembelajaran.
             </p>
             <p>
               Selain itu, saya memiliki pengalaman di bidang Software Quality Assurance dan Front-End Web Development melalui pelatihan dan proyek pengembangan aplikasi. Saya terbiasa menganalisis masalah, menyusun dokumentasi teknis, dan bekerja sama dalam tim. Saya terus mengembangkan kompetensi di bidang infrastruktur teknologi informasi, administrasi jaringan, dan dukungan teknis.
             </p>
           </div>
         </div>
       </section>

      <section id="education" className="portfolio-section border-t border-line">
        <div className="mx-auto max-w-5xl px-5 py-16">
          <div className="flex items-baseline gap-4">
            <h2 className="font-serif text-4xl tracking-[-0.04em] text-accent">
              Pendidikan
            </h2>
            <div className="h-px flex-1 bg-line" />
          </div>
          <div className="mt-10 space-y-12">
            {education.map((item) => (
              <article
                key={item.school}
                className="grid gap-8 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:gap-12"
              >
                <div className="relative aspect-[4/5] overflow-hidden border border-line bg-[#f7ede0]">
                  <Image
                    src="/saya.jpeg"
                    alt="Moch. Anang Ardiansyah mengenakan toga"
                    fill
                    sizes="(max-width: 1023px) 100vw, 40vw"
                    className="object-cover object-[center_60%]"
                  />
                </div>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <p className="font-display text-sm font-bold text-accent">
                      {item.period}
                    </p>
                    {item.gpa && (
                      <div className="border-l border-line pl-4">
                        <p className="text-sm text-muted">IPK</p>
                        <p className="font-serif text-xl font-bold text-accent">
                          {item.gpa}
                        </p>
                      </div>
                    )}
                  </div>
                  <h3 className="mt-5 max-w-[18ch] font-serif text-3xl leading-tight tracking-tight md:text-4xl">
                    {item.program}
                  </h3>
                  <div className="mt-6 flex items-center gap-4">
                    <div className="size-16 shrink-0">
                      <Image
                        src="/unesa.png"
                        alt="Logo Universitas Negeri Surabaya"
                        width={4096}
                        height={4096}
                        sizes="64px"
                        className="size-full object-contain"
                      />
                    </div>
                    <div>
                      <p className="font-medium">{item.school}</p>
                    </div>
                  </div>
                  {item.focus && item.focus.trim() && (
                    <p className="mt-5 leading-7">{item.focus}</p>
                  )}
                  {item.thesis && (
                    <div className="mt-6 border-t border-line pt-5">
                      <p className="text-sm font-semibold text-accent">
                        Tugas akhir
                      </p>
                      <p className="mt-2 leading-7">{item.thesis}</p>
                    </div>
                  )}
                  {item.subjects && item.subjects.length > 0 && (
                    <div className="mt-4">
                      <p className="text-sm font-semibold">Mata kuliah terkait</p>
                      <div className="mt-2 grid gap-2 sm:grid-cols-2">
                        {[
                          item.subjects.slice(
                            0,
                            Math.ceil(item.subjects.length / 2),
                          ),
                          item.subjects.slice(
                            Math.ceil(item.subjects.length / 2),
                          ),
                        ]
                          .filter((subjects) => subjects.length > 0)
                          .map((subjects, index) => (
                            <p
                              key={index}
                              className="text-sm leading-6 text-muted"
                            >
                              {subjects.join(", ")}
                            </p>
                          ))}
                      </div>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="portfolio-section border-t border-line">
        <div className="mx-auto max-w-5xl px-5 py-16">
          <div className="flex items-baseline gap-4">
            <h2 className="font-serif text-4xl tracking-[-0.04em] text-accent">
              Proyek
            </h2>
            <div className="h-px flex-1 bg-line" />
          </div>
          <p className="mt-8 max-w-xl leading-7 text-muted">
            Dua belas proyek.
          </p>
          <div className="mt-10">
            <ProjectFilter projects={projects} />
          </div>
        </div>
      </section>

      <section id="experience" className="portfolio-section border-t border-line">
        <div className="mx-auto max-w-5xl px-5 py-16">
          <div className="flex items-baseline gap-4">
            <h2 className="font-serif text-4xl tracking-[-0.04em] text-accent">
              Pengalaman
            </h2>
            <div className="h-px flex-1 bg-line" />
          </div>
          <ol className="mt-10">
            {experience.map((item, index) => (
              <li key={item.role} className="grid gap-4 md:grid-cols-[9rem_1fr]">
                <p className="pt-6 font-display text-sm font-bold uppercase tracking-[-0.03em] text-accent md:text-right">
                  {item.period}
                </p>
                <div className="relative border-l border-line pb-8 pl-6">
                  <span className="absolute -left-[0.7rem] top-6 flex h-5 w-5 items-center justify-center bg-ink font-display text-[10px] font-bold text-paper">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <article className="border border-line bg-paper p-6">
                    <h3 className="font-serif text-2xl tracking-tight">{item.role}</h3>
                    <p className="mt-1 text-sm text-muted">{item.org}</p>
                    <p className="mt-4 leading-7">{item.summary}</p>
                    <ul className="mt-4 space-y-2 border-t border-line pt-4 text-sm text-muted">
                      {item.contributions.map((line) => (
                        <li key={line} className="pl-4 before:mr-2 before:text-accent before:content-['–']">
                          {line}
                        </li>
                      ))}
                    </ul>
                  </article>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="skills" className="portfolio-section border-t border-line">
        <div className="mx-auto max-w-5xl px-5 py-16">
          <div className="flex items-baseline gap-4">
            <h2 className="font-serif text-4xl tracking-[-0.04em] text-accent">
              Keahlian
            </h2>
            <div className="h-px flex-1 bg-line" />
          </div>
          <dl className="mt-10 grid gap-px overflow-hidden border border-line bg-line lg:grid-cols-12">
            {skills.map((group, index) => (
              <div
                key={group.name}
                className={`group bg-paper p-5 sm:p-7 ${
                  index === 0
                    ? "lg:col-span-7"
                    : index === 1
                      ? "lg:col-span-5"
                      : index === 2
                        ? "lg:col-span-5"
                        : "lg:col-span-7"
                }`}
              >
                <dt className="flex items-center justify-between gap-4 border-b border-line pb-4">
                  <span className="font-serif text-2xl tracking-tight">
                    {group.name}
                  </span>
                  <span
                    aria-hidden="true"
                    className="font-display text-xs font-bold tracking-wider text-accent"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </dt>
                <dd className="mt-5">
                  <ul className="grid gap-x-6 gap-y-2 sm:grid-cols-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="border-b border-line/70 py-2 text-[0.95rem] leading-6"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="certificates" className="portfolio-section border-t border-line">
        <div className="mx-auto max-w-5xl px-5 py-16">
          <div className="flex items-baseline gap-4">
            <h2 className="font-serif text-4xl tracking-[-0.04em] text-accent">
              Sertifikat
            </h2>
            <div className="h-px flex-1 bg-line" />
          </div>
          <ol className="mt-12 grid items-end gap-x-8 gap-y-14 md:grid-cols-2">
            {certificates.map((cert) => (
              <li key={cert.title} className="min-w-0">
                <article>
                  <Folder
                    size="xxs"
                    color="hsl(37, 92%, 82%)"
                    tabColor="hsl(26, 76%, 66%)"
                    className="mx-auto"
                  >
                    <FolderContent className="overflow-hidden p-2">
                      <a
                        href={cert.images[0]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block h-full w-full bg-white"
                        aria-label={`Buka sertifikat ${cert.title}`}
                      >
                        <Image
                          src={cert.images[0]}
                          alt={`${cert.title} - ${cert.issuer}`}
                          width={1200}
                          height={850}
                          className="h-full w-full object-contain"
                        />
                      </a>
                    </FolderContent>
                  </Folder>
                  <div className="mt-4 pt-2">
                    <p className="font-display text-xs font-bold uppercase tracking-[0.12em] text-accent">
                      {cert.date} / {cert.issuer}
                    </p>
                    <h3 className="mt-1 font-serif text-xl tracking-tight">{cert.title}</h3>
                  </div>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        id="contact"
        className="portfolio-section border-t border-line"
      >
        <div className="mx-auto grid max-w-5xl items-center gap-8 px-5 py-16 md:grid-cols-[minmax(0,1fr)_280px] md:gap-12 md:px-8 md:py-20">
          <div className="max-w-xl">
            <h2 className="font-serif text-accent">Kontak</h2>
            <p className="leading-7 text-muted">
              Silakan hubungi saya melalui email atau kunjungi profil berikut.
            </p>
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(site.email)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex min-h-11 items-center bg-ink px-5 text-sm text-paper transition-colors hover:bg-[#333]"
            >
              {site.email}
            </a>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
              <a
                href={site.links.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center underline underline-offset-4 hover:text-accent"
              >
                GitHub
              </a>
              <a
                href={site.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center underline underline-offset-4 hover:text-accent"
              >
                LinkedIn
              </a>
            </div>
          </div>
          <div data-scroll-reveal className="relative aspect-[3/4] w-full max-w-[250px] justify-self-center overflow-hidden border border-line bg-[#e6dfd4] md:max-w-[280px] md:justify-self-end">
            <Image
              src="/saya2.jpeg"
              alt="Moch. Anang Ardiansyah"
              width={960}
              height={1280}
              sizes="(max-width: 767px) 100vw, 40vw"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
