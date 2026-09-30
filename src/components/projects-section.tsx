import Image from "next/image";
import styles from "./projects-section.module.css";

const projects = [
  {
    company: "Global Capsule Ltd.",
    image: "/hero-hvac.jpg",
    imageAlt: "Industrial HVAC installation project",
  },
  {
    company: "Beximco Pharmaceuticals Ltd.",
    image: "/hero-installation.jpg",
    imageAlt: "Engineering work in a pharmaceutical facility",
  },
  {
    company: "ACME Pharmaceuticals Ltd.",
    image: "/product-chiller.jpg",
    imageAlt: "Commercial mechanical systems installation",
  },
  {
    company: "Getwell Pharmaceuticals Ltd.",
    image: "/company-team.jpg",
    imageAlt: "Industrial project team in safety equipment",
  },
  {
    company: "ACME Pharmaceuticals Ltd.",
    image: "/company-commitment.jpg",
    imageAlt: "Engineers working with industrial machinery",
  },
  {
    company: "Atlas Pharmaceuticals Ltd.",
    image: "/product-cleanroom.jpg",
    imageAlt: "Cleanroom facility and controlled environment",
  },
];

function BuildingIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 21V4.5A1.5 1.5 0 0 1 5.5 3h9A1.5 1.5 0 0 1 16 4.5V21M2.5 21h19M8 7h2m3 0h2M8 11h2m3 0h2M8 15h2m3 0h2M10 21v-3.5h3V21m5-9h2.5V21" />
    </svg>
  );
}

export default function ProjectsSection() {
  return (
    <section className={styles.section} id="projects" aria-labelledby="projects-title">
      <div className={styles.inner}>
        <header className={styles.intro}>
          <p className={styles.eyebrow}>Projects Section</p>
          <h2 className={styles.title} id="projects-title">
            Our Project Portfolio
          </h2>
          <p className={styles.description}>
            We&apos;ve successfully completed HVAC and engineering projects for some of the top
            pharmaceutical and industrial companies in Bangladesh, including:
          </p>
        </header>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <a
              className={styles.projectCard}
              href={`mailto:info@cce-bd.com?subject=${encodeURIComponent(`Project enquiry: ${project.company}`)}`}
              aria-label={`Ask about the ${project.company} project`}
              key={`${project.company}-${index}`}
            >
              <div className={styles.imageFrame}>
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  sizes="(max-width: 580px) 100vw, (max-width: 900px) 50vw, 33vw"
                />
                <span className={styles.projectMark}>
                  <BuildingIcon />
                </span>
              </div>
              <div className={styles.cardFooter}>
                <h3>{project.company}</h3>
                <span className={styles.arrowCircle} aria-hidden="true">
                  <svg viewBox="0 0 20 20" fill="none">
                    <path d="M3 10h13m-5-5 5 5-5 5" />
                  </svg>
                </span>
              </div>
              <span className={styles.cardRule} aria-hidden="true" />
            </a>
          ))}
        </div>

        <a
          className={styles.viewMore}
          href="mailto:info@cce-bd.com?subject=More%20project%20information"
        >
          View More Projects
          <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M3 10h13m-5-5 5 5-5 5" />
          </svg>
        </a>
      </div>
    </section>
  );
}