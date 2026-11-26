import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/lib/projects";
import { categoryLabel } from "@/lib/site";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

type ProjectParams = { params: Promise<{ slug: string }> };

export const instant = false;

export async function generateMetadata(props: ProjectParams): Promise<Metadata> {
  const { slug } = await props.params;
  const project = getProject(slug);
  if (!project) return { title: "Proyek" };
  return { title: project.title, description: project.summary };
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-line py-6">
      <h2 className="text-sm uppercase tracking-wide text-accent">{title}</h2>
      <div className="mt-3 max-w-[65ch] leading-7">{children}</div>
    </section>
  );
}

export default async function ProjectPage(props: ProjectParams) {
  const { slug } = await props.params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <main className="mx-auto max-w-3xl px-5 py-12">
      <Link href="/#projects" className="text-sm text-muted hover:text-ink">
        Semua proyek
      </Link>
      <p className="mt-6 text-sm uppercase tracking-wide text-accent">
        {categoryLabel[project.category]}
      </p>
      <h1 className="mt-2 font-serif text-4xl tracking-tight md:text-5xl">{project.title}</h1>
      <p className="mt-4 text-lg leading-7 text-muted">{project.summary}</p>
      {project.tools.length > 0 ? (
        <p className="mt-4 text-sm">{project.tools.join(" · ")}</p>
      ) : null}
      {project.links.length > 0 ? (
        <div className="mt-5 flex items-center gap-3">
          {project.links.map((link) => {
            const label = link.label.toLowerCase();
            const icon = label.includes("github")
              ? "/github.png"
              : label.includes("youtube")
                ? "/yt.png"
                : "/web.png";

            return (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center border border-line bg-paper transition-colors hover:border-ink"
                aria-label={link.label}
                title={link.label}
              >
                <Image
                  src={icon}
                  alt=""
                  width={24}
                  height={24}
                  className="h-6 w-6 object-contain"
                />
              </a>
            );
          })}
        </div>
      ) : null}

      <div className="mt-10">
        <Block title="Ringkasan">{project.overview}</Block>
        <Block title="Latar belakang">{project.problem}</Block>
        <Block title="Peran">{project.role}</Block>
        <Block title="Proses">{project.process}</Block>
        <Block title="Hasil">{project.result}</Block>

        {project.qa ? (
          <Block title="Pengujian">
            <p>{project.qa.scope}</p>
            <p className="mt-3">{project.qa.approach}</p>
            <ul className="mt-3 list-disc space-y-1 pl-5">
              {project.qa.cases.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-3 text-sm text-muted">{project.qa.findings.join(" ")}</p>
          </Block>
        ) : null}

        {project.frontend ? (
          <Block title="Antarmuka">
            <ul className="list-disc space-y-1 pl-5">
              {project.frontend.features.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-3">{project.frontend.responsive}</p>
          </Block>
        ) : null}

        {project.networking ? (
          <Block title="Jaringan">
            <p>{project.networking.goal}</p>
            <p className="mt-3">{project.networking.devices.join(", ")}</p>
            <p className="mt-3">{project.networking.outcome}</p>
          </Block>
        ) : null}

        {project.academic ? (
          <Block title="Catatan akademik">
            <p>{project.academic.objective}</p>
            <p className="mt-3">{project.academic.method}</p>
          </Block>
        ) : null}

      </div>
    </main>
  );
}
