import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import { projects } from "@/data/projects";
import styles from "./page.module.css";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found | Cold Craft Engineering Ltd.",
    };
  }

  return {
    title: `${project.title} | Cold Craft Engineering Ltd.`,
    description: project.shortDescription,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <SiteHeader activePage="Projects" />
      <main className={styles.page}>
        <section className={styles.hero} aria-labelledby="project-title">
          <div className={styles.heroBackdrop} />
          <div className={styles.heroContent}>
            <p className={styles.kicker}>Project Detail</p>
            <h1 id="project-title">{project.title}</h1>
            <nav aria-label="Breadcrumb" className={styles.breadcrumbs}>
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <Link href="/projects">Projects</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{project.title}</span>
            </nav>
          </div>
        </section>

        <section className={styles.detailSection}>
          <div className={styles.contentGrid}>
            <div className={styles.imagePanel}>
              <div className={styles.imageFrame}>
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  sizes="(max-width: 800px) 100vw, 52vw"
                />
              </div>
            </div>

            <div className={styles.infoPanel}>
              <div className={styles.metaRow}>
                <span className={styles.metaPill}>{project.category}</span>
                <span className={styles.metaPill}>{project.location}</span>
              </div>

              <h2>{project.title}</h2>
              <p className={styles.lead}>{project.description}</p>

              <ul className={styles.highlights}>
                {project.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className={styles.actions}>
                <Link href="/projects" className={styles.secondaryButton}>
                  Back to Projects
                  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M3 10h13m-5-5 5 5-5 5" />
                  </svg>
                </Link>
                <Link href="/contact" className={styles.primaryButton}>
                  Request a quote
                  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M3 10h13m-5-5 5 5-5 5" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
