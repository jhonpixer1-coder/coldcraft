import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import { projects } from "@/data/projects";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Projects | Cold Craft Engineering Ltd.",
  description:
    "Explore Cold Craft Engineering Ltd. project portfolio covering HVAC, refrigeration, cleanroom, fire protection, and industrial systems across Bangladesh.",
};

export default function ProjectsPage() {
  return (
    <>
      <SiteHeader activePage="Projects" />
      <main className={styles.page}>
        <section className={styles.hero} aria-labelledby="projects-page-title">
          <div className={styles.heroBackdrop} />
          <div className={styles.heroContent}>
            <p className={styles.kicker}>Return</p>
            <h1 id="projects-page-title">Our Projects</h1>
            <nav aria-label="Breadcrumb" className={styles.breadcrumbs}>
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Our Projects</span>
            </nav>
          </div>
        </section>

        <section className={styles.projectsSection} aria-label="Project portfolio">
          <div className={styles.projectsGrid}>
            {projects.map((project) => (
              <article className={styles.projectCard} key={project.slug}>
                <div className={styles.imageFrame}>
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 700px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <span className={styles.projectBadge}>{project.category}</span>
                </div>

                <div className={styles.cardBody}>
                  <div className={styles.cardMeta}>
                    <span>{project.location}</span>
                  </div>
                  <h2>{project.title}</h2>
                  <p>{project.shortDescription}</p>
                  <Link href={`/projects/${project.slug}`} className={styles.readMore}>
                    <span>Read more</span>
                    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                      <path d="M3.5 10h12m-5-5 5 5-5 5" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
