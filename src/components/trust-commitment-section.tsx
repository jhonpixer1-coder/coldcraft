import Image from "next/image";
import styles from "./trust-commitment-section.module.css";

const commitments = [
  {
    title: "Our Mission",
    description:
      "Cold Craft Engineering Ltd. aims to exceed client expectations by offering high-performance, reliable systems, backed by advanced technology and dedicated customer support.",
    image: "/hero-technicians.jpg",
    imageAlt: "HVAC technicians working together on an air conditioning system",
    accent: "orange",
    icon: "target",
    href: "#about",
  },
  {
    title: "Our Vision",
    description:
      "To deliver innovative and environmentally conscious HVAC and refrigeration solutions that help our clients achieve operational excellence while minimizing their environmental footprint.",
    image: "/company-commitment.jpg",
    imageAlt: "Engineers collaborating on industrial equipment",
    accent: "blue",
    icon: "eye",
    href: "#products",
  },
  {
    title: "Our History",
    description:
      "With over 8 years of experience, Cold Craft Engineering Ltd. has built a legacy of trust, engineering excellence, and continuous improvement in every project delivered.",
    image: "/product-chiller.jpg",
    imageAlt: "Commercial HVAC equipment representing years of engineering work",
    accent: "green",
    icon: "shield",
    href: "#projects",
  },
] as const;

type CommitmentIconName = (typeof commitments)[number]["icon"];

function CommitmentIcon({ name }: { name: CommitmentIconName }) {
  if (name === "target") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="10.5" cy="13.5" r="7.5" />
        <circle cx="10.5" cy="13.5" r="3.5" />
        <path d="m10.5 13.5 9-9m-4 .2h3.8v3.8" />
      </svg>
    );
  }

  if (name === "eye") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M2.5 12s3.4-6 9.5-6 9.5 6 9.5 6-3.4 6-9.5 6-9.5-6-9.5-6Z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="m12 2.5 8 3v6c0 5-3.4 8.6-8 10.9-4.6-2.3-8-5.9-8-10.9v-6l8-3Z" />
      <path d="m8.8 12 2.1 2.1 4.5-4.6" />
    </svg>
  );
}

export default function TrustCommitmentSection() {
  return (
    <section className={styles.section} aria-labelledby="commitment-title">
      <span className={`${styles.dots} ${styles.dotsLeft}`} aria-hidden="true" />
      <span className={`${styles.dots} ${styles.dotsRight}`} aria-hidden="true" />
      <span className={styles.arcPattern} aria-hidden="true" />

      <div className={styles.inner}>
        <header className={styles.intro}>
          <p className={styles.eyebrow}>Let&apos;s Make a Difference, Together</p>
          <h2 className={styles.title} id="commitment-title">
            Your Trust. Our Commitment.
          </h2>
          <p className={styles.description}>
            We truly appreciate your trust in our services. Your satisfaction motivates us to continually
            enhance our offerings and deliver unmatched quality. If you have any feedback or suggestions,
            we&apos;d love to hear from you.
          </p>
        </header>

        <div className={styles.grid}>
          {commitments.map((commitment, index) => (
            <article className={styles.card} key={commitment.title} style={{ animationDelay: `${index * 100}ms` }}>
              <div className={styles.imageFrame}>
                <Image
                  src={commitment.image}
                  alt={commitment.imageAlt}
                  fill
                  sizes="(max-width: 620px) 100vw, (max-width: 920px) 50vw, 33vw"
                />
              </div>
              <span className={`${styles.icon} ${styles[commitment.accent]}`}>
                <CommitmentIcon name={commitment.icon} />
              </span>
              <div className={styles.cardBody}>
                <h3>{commitment.title}</h3>
                <span className={`${styles.rule} ${styles[`${commitment.accent}Rule`]}`} aria-hidden="true" />
                <p>{commitment.description}</p>
                <a href={commitment.href} aria-label={`Learn more: ${commitment.title}`}>
                  Learn More
                  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M2.5 10h14m-5-5 5 5-5 5" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}