import Link from "next/link";
import Image from "next/image";
import { HeroMotion } from "@/components/HeroMotion";
import CradleText from "@/components/kokonutui/cradle-text";
import TypewriterTitle from "@/components/kokonutui/type-writer";
import { Portrait } from "@/components/Portrait";
import { ProjectFilter } from "@/components/ProjectFilter";
import { Folder, FolderContent } from "@/components/ui/folder";
import { certificates, education, experience, skills } from "@/lib/experience";
import { projects } from "@/lib/projects";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <main id="top">
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
                  { text: "networking", deleteAfter: false },
                ]}
                className="!justify-end !text-ink"
                textClassName="font-display !text-[clamp(2.25rem,3.6vw,3.15rem)] font-extrabold uppercase !leading-[0.86] tracking-[-0.045em]"
              />
            </div>
          </HeroMotion>

          <div className="absolute bottom-5 right-5 z-30 flex flex-col items-end gap-2 md:hidden">
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
                className="inline-flex min-h-11 items-center rounded-full border border-ink px-4 text-sm hover:bg-ink hover:text-paper"
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
           <div className="mt-8 max-w-[65ch] space-y-6 leading-[1.75] text-muted">
             <p>
               Saya memiliki ketertarikan pada dunia teknologi dan senang mengeksplorasi berbagai hal, mulai dari pengujian kualitas perangkat lunak, pengembangan frontend, hingga jaringan komputer. Melalui proyek, praktikum, dan pengalaman organisasi, saya terus mengembangkan kemampuan teknis, memperluas wawasan, serta belajar memahami dan menyelesaikan berbagai permasalahan.
             </p>
             <p>
               Portfolio ini merupakan kumpulan proses belajar, eksplorasi, dan karya yang saya kerjakan sebagai bagian dari perjalanan saya dalam berkembang di bidang teknologi.
             </p>
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

       <section id="education" className="portfolio-section border-t border-line">
        <div className="mx-auto max-w-5xl px-5 py-16">
          <div className="flex items-baseline gap-4">
            <h2 className="font-serif text-4xl tracking-[-0.04em] text-accent">
              Pendidikan
            </h2>
            <div className="h-px flex-1 bg-line" />
          </div>
          <ol className="mt-10">
            {education.map((item, index) => (
              <li key={item.school} className="grid gap-4 md:grid-cols-[9rem_1fr]">
                <p className="pt-6 font-display text-sm font-bold uppercase tracking-[-0.03em] text-accent md:text-right">
                  {item.period}
                </p>
                <div className="relative border-l border-line pb-8 pl-6">
                  <span className="absolute -left-[0.7rem] top-6 flex h-5 w-5 items-center justify-center bg-ink font-display text-[10px] font-bold text-paper">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <article className="border border-line bg-paper p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-serif text-2xl tracking-tight">{item.program}</h3>
                        <p className="mt-1 text-sm text-muted">{item.school}</p>
                      </div>
                      {item.gpa && (
                        <div className="shrink-0 border border-line bg-paper px-3 py-2 text-center">
                          <p className="font-display text-xs uppercase tracking-wider text-muted">IPK</p>
                          <p className="font-serif text-xl font-bold text-accent">{item.gpa}</p>
                        </div>
                      )}
                    </div>
                    {item.focus && item.focus.trim() && <p className="mt-4 leading-7">{item.focus}</p>}
                    {item.subjects && item.subjects.length > 0 && (
                      <ul className="mt-4 flex flex-wrap gap-2">
                        {item.subjects.map((s) => (
                          <li key={s} className="border border-line bg-paper px-2 py-1 font-display text-xs uppercase tracking-wider text-muted">
                            {s}
                          </li>
                        ))}
                      </ul>
                    )}
                    {item.thesis && (
                      <div className="mt-4 pt-2">
                        <p className="font-display text-xs uppercase tracking-wider text-accent">Tugas Akhir</p>
                        <p className="mt-1 leading-7">{item.thesis}</p>
                      </div>
                    )}
                  </article>
                </div>
              </li>
            ))}
          </ol>
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

      <section id="contact" className="portfolio-section border-t border-line">
        <div className="mx-auto grid max-w-5xl gap-6 px-5 py-16 md:grid-cols-[180px_1fr]">
          <h2 className="font-serif text-3xl tracking-tight">Kontak</h2>
          <div className="max-w-xl">
            <p className="leading-7">
              Email adalah jalur langsung. Tautan media sosial di bawah masih
              kosong sampai profil resmi tersedia.
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-6 inline-flex min-h-11 items-center bg-ink px-4 text-sm text-paper hover:bg-[#333]"
            >
              {site.email}
            </a>
            <div className="mt-6 flex gap-5 text-sm">
              <a
                href={site.links.github}
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4"
              >
                GitHub
              </a>
              <a
                href={site.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
