import Image from "next/image";
import Link from "next/link";
import styles from "./engineering-hero.module.css";

const benefits = [
  {
    title: "Reliable Solutions",
    description: "Built for safety, performance & durability.",
    icon: "shield",
  },
  {
    title: "Expert Team",
    description: "Skilled professionals with proven experience.",
    icon: "gear",
  },
  {
    title: "Energy Efficient",
    description: "Smart systems for a sustainable future.",
    icon: "bolt",
  },
] as const;

type BenefitIconName = (typeof benefits)[number]["icon"];

function BenefitIcon({ name }: { name: BenefitIconName }) {
  if (name === "shield") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="m12 2.5 8 3v6c0 5-3.4 8.6-8 10.9-4.6-2.3-8-5.9-8-10.9v-6l8-3Z" />
        <path d="m8.8 12 2.1 2.1 4.5-4.6" />
      </svg>
    );
  }

  if (name === "gear") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="m9.6 2 .5 2.2a7.8 7.8 0 0 1 3.8 0l.5-2.2 2.3.9-.9 2.1a8 8 0 0 1 2.7 2.7l2.1-.9.9 2.3-2.2.5a7.8 7.8 0 0 1 0 3.8l2.2.5-.9 2.3-2.1-.9a8 8 0 0 1-2.7 2.7l.9 2.1-2.3.9-.5-2.2a7.8 7.8 0 0 1-3.8 0l-.5 2.2-2.3-.9.9-2.1a8 8 0 0 1-2.7-2.7l-2.1.9-.9-2.3 2.2-.5a7.8 7.8 0 0 1 0-3.8l-2.2-.5.9-2.3 2.1.9a8 8 0 0 1 2.7-2.7l-.9-2.1L9.6 2Z" />
        <circle cx="12" cy="11.5" r="3" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M13.2 2.5 5.5 13h5.4l-.3 8.5L18.5 11h-5.4l.1-8.5Z" />
    </svg>
  );
}

export default function EngineeringHero() {
  return (
    <section className={styles.section} aria-labelledby="hero-title">
      <div className={styles.panel}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>Engineered solutions. Reliable systems. Lasting impact.</p>
          <span className={styles.eyebrowRule} aria-hidden="true" />
          <h2
            className={styles.title}
            id="hero-title"
            aria-label="Build Your Dream with Cold Craft Engineering"
          >
            Build Your <span className={styles.orange}>Dream</span>
            <br />
            with <span className={styles.blue}>Cold Craft</span>
            <br />
            Engineering
          </h2>
          <p className={styles.description}>
            From advanced HVAC systems to complete engineering solutions,
            <br className={styles.desktopBreak} /> we deliver comfort, efficiency, and reliability you can trust.
          </p>
          <Link className={styles.contactButton} href="/contact">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M7.2 3.5H4.8a1.3 1.3 0 0 0-1.3 1.4c.8 8.3 7 14.5 15.3 15.3a1.3 1.3 0 0 0 1.4-1.3v-2.4a1.3 1.3 0 0 0-1.1-1.3l-3.2-.5a1.3 1.3 0 0 0-1.2.4l-1.4 1.4a15.2 15.2 0 0 1-5-5l1.4-1.4a1.3 1.3 0 0 0 .4-1.2l-.5-3.2a1.3 1.3 0 0 0-1.4-1.2Z" />
            </svg>
            <span>Contact Us</span>
            <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M3 10h13m-5-5 5 5-5 5" />
            </svg>
          </Link>

          <div className={styles.benefits} aria-label="Our strengths">
            {benefits.map((benefit) => (
              <article className={styles.benefit} key={benefit.title}>
                <span className={styles.benefitIcon}>
                  <BenefitIcon name={benefit.icon} />
                </span>
                <span className={styles.benefitText}>
                  <span className={styles.benefitTitle}>{benefit.title}</span>
                  <span className={styles.benefitDescription}>{benefit.description}</span>
                </span>
              </article>
            ))}
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.orbit} aria-hidden="true" />
          <div className={styles.visualDots} aria-hidden="true" />
          <Image
            className={styles.technicians}
            src="/hero-technicians.jpg"
            alt="HVAC technicians maintaining rooftop air conditioning equipment"
            fill
            priority
            sizes="(max-width: 760px) 100vw, 55vw"
          />
          <div className={styles.visualShade} aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}