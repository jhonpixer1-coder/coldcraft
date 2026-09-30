import Image from "next/image";
import styles from "./company-profile.module.css";

const values = [
  {
    title: "Quality First",
    description: "Delivering the highest standards in every project.",
    icon: "shield",
    accent: "blue",
  },
  {
    title: "Innovation",
    description: "Integrating modern technology for better solutions.",
    icon: "bulb",
    accent: "orange",
  },
  {
    title: "Customer Focus",
    description: "Building strong relationships through trust and satisfaction.",
    icon: "people",
    accent: "blue",
  },
  {
    title: "Cost Effective",
    description: "Providing reliable solutions that ensure long-term value.",
    icon: "target",
    accent: "orange",
  },
] as const;

type ProfileIconName = (typeof values)[number]["icon"] | "team" | "gear";

function ProfileIcon({ name }: { name: ProfileIconName }) {
  if (name === "shield") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="m12 2.5 8 3v6c0 5-3.4 8.6-8 10.9-4.6-2.3-8-5.9-8-10.9v-6l8-3Z" />
        <path d="m8.8 12 2.1 2.1 4.5-4.6" />
      </svg>
    );
  }

  if (name === "bulb") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M9 18h6m-5 3h4m-2-19a7 7 0 0 0-4.4 12.4c.9.8 1.4 1.5 1.4 2.6h6c0-1.1.5-1.8 1.4-2.6A7 7 0 0 0 12 2Z" />
        <path d="m12 6 .7 2 2.1.1-1.6 1.3.5 2-1.7-1.1-1.7 1.1.5-2-1.6-1.3 2.1-.1L12 6Z" />
      </svg>
    );
  }

  if (name === "people" || name === "team") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="9" cy="8" r="3" />
        <circle cx="17" cy="9" r="2.3" />
        <path d="M3.5 20v-1a5.5 5.5 0 0 1 11 0v1h-11Zm12.2-6a4.5 4.5 0 0 1 5.2 4.4v1.1h-4.2" />
      </svg>
    );
  }

  if (name === "target") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="11" cy="13" r="7.5" />
        <circle cx="11" cy="13" r="3.5" />
        <path d="m11 13 9-9m-4 .2h3.8V8" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="m9.6 2 .5 2.2a7.8 7.8 0 0 1 3.8 0l.5-2.2 2.3.9-.9 2.1a8 8 0 0 1 2.7 2.7l2.1-.9.9 2.3-2.2.5a7.8 7.8 0 0 1 0 3.8l2.2.5-.9 2.3-2.1-.9a8 8 0 0 1-2.7 2.7l.9 2.1-2.3.9-.5-2.2a7.8 7.8 0 0 1-3.8 0l-.5 2.2-2.3-.9.9-2.1a8 8 0 0 1-2.7-2.7l-2.1.9-.9-2.3 2.2-.5a7.8 7.8 0 0 1 0-3.8l-2.2-.5.9-2.3 2.1.9a8 8 0 0 1 2.7-2.7l-.9-2.1L9.6 2Z" />
      <circle cx="12" cy="11.5" r="3" />
    </svg>
  );
}

export default function CompanyProfile() {
  return (
    <section className={styles.section} id="about" aria-labelledby="about-title">
      <div className={styles.layout}>
        <div className={styles.content}>
          <header className={styles.intro}>
            <p className={styles.eyebrow}>Company Profile</p>
            <span className={styles.eyebrowRule} aria-hidden="true" />
            <h2 className={styles.title} id="about-title">
              Who We Are
            </h2>
            <span className={styles.titleRule} aria-hidden="true" />
            <p className={styles.description}>
              <strong>Cold Craft Engineering Ltd.</strong> is a leading engineering company in Bangladesh,
              specializing in state-of-the-art HVAC systems, cleanroom technologies, and industrial
              engineering solutions. With a commitment to innovation, quality, and customer satisfaction,
              we continue to serve diverse industries with reliable, cost-effective solutions.
            </p>
          </header>

          <div className={styles.values} aria-label="Our values">
            {values.map((value) => (
              <article className={styles.value} key={value.title}>
                <span className={`${styles.valueIcon} ${styles[value.accent]}`}>
                  <ProfileIcon name={value.icon} />
                </span>
                <h3 className={`${styles.valueTitle} ${styles[`${value.accent}Text`]}`}>
                  {value.title}
                </h3>
                <p className={styles.valueDescription}>{value.description}</p>
              </article>
            ))}
          </div>

          <div className={styles.proofCards}>
            <article className={styles.proofCard}>
              <div className={styles.proofImage}>
                <Image
                  src="/company-team.jpg"
                  alt="Industrial workers in safety gear"
                  fill
                  sizes="(max-width: 600px) 100vw, 28vw"
                />
              </div>
              <div className={styles.proofBody}>
                <span className={styles.proofIcon}>
                  <ProfileIcon name="team" />
                </span>
                <div>
                  <h3>Our Team</h3>
                  <p>Experienced professionals dedicated to excellence in every project.</p>
                </div>
              </div>
            </article>

            <article className={styles.proofCard}>
              <div className={styles.proofImage}>
                <Image
                  src="/company-commitment.jpg"
                  alt="Engineers collaborating on industrial machinery"
                  fill
                  sizes="(max-width: 600px) 100vw, 28vw"
                />
              </div>
              <div className={styles.proofBody}>
                <span className={styles.proofIcon}>
                  <ProfileIcon name="gear" />
                </span>
                <div>
                  <h3>Our Commitment</h3>
                  <p>Committed to safety, quality, and sustainable engineering practices.</p>
                </div>
              </div>
            </article>
          </div>

          <a className={styles.contactButton} href="mailto:info@cce-bd.com">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M7.5 3.5H5.3a1.4 1.4 0 0 0-1.4 1.4c.8 8 6.9 14.1 14.9 14.9a1.4 1.4 0 0 0 1.4-1.4v-2.2a1.4 1.4 0 0 0-1.2-1.4l-3-.5a1.4 1.4 0 0 0-1.3.4l-1.3 1.3a14.8 14.8 0 0 1-5-5l1.3-1.3a1.4 1.4 0 0 0 .4-1.3l-.5-3a1.4 1.4 0 0 0-1.4-1.2Z" />
            </svg>
            Contact Us
            <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M2.5 10h14m-5-5 5 5-5 5" />
            </svg>
          </a>
        </div>

        <div className={styles.visual} aria-label="Our cleanroom solutions">
          <span className={styles.blueBlock} aria-hidden="true" />
          <span className={styles.orangeBlock} aria-hidden="true" />
          <span className={styles.dots} aria-hidden="true" />
          <div className={styles.mainImage}>
            <Image
              src="/product-cleanroom.jpg"
              alt="Bright cleanroom corridor with controlled environment panels"
              fill
              sizes="(max-width: 950px) 90vw, 42vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}