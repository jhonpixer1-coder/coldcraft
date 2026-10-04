import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About Cold Craft Engineering Ltd.",
  description:
    "Learn about Cold Craft Engineering Ltd., our team, experience, and HVAC, cleanroom, fire protection, and industrial engineering expertise in Bangladesh.",
};

const capabilities = [
  {
    title: "HVAC & Refrigeration",
    description: "Comfortable, dependable climate control engineered for each site.",
    icon: "hvac",
  },
  {
    title: "Cold Storage Systems",
    description: "Temperature-controlled storage designed to protect product quality.",
    icon: "cold",
  },
  {
    title: "Cleanroom Design",
    description: "Panels and controlled environments for sensitive operations.",
    icon: "cleanroom",
  },
  {
    title: "Fire Protection",
    description: "Detection and suppression systems planned around people and assets.",
    icon: "fire",
  },
  {
    title: "Building Management",
    description: "Integrated controls for efficient, responsive building operation.",
    icon: "bms",
  },
  {
    title: "Industrial Filtration",
    description: "Air filtration solutions to support cleaner, more controlled spaces.",
    icon: "filter",
  },
] as const;

type CapabilityIconName = (typeof capabilities)[number]["icon"];

function CapabilityIcon({ name }: { name: CapabilityIconName }) {
  if (name === "hvac") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2.5v19M3.8 7.2l16.4 9.6M3.8 16.8l16.4-9.6M8.5 4.5 12 8l3.5-3.5M8.5 19.5 12 16l3.5 3.5" />
      </svg>
    );
  }

  if (name === "cold") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="m12 3 8.5 4.5v9L12 21l-8.5-4.5v-9L12 3Z" />
        <path d="m3.8 7.7 8.2 4.5 8.2-4.5M12 12.2V21m0-15v7m-3-5 3 2 3-2" />
      </svg>
    );
  }

  if (name === "cleanroom") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="4" y="3" width="16" height="18" rx="1.5" />
        <path d="M8 7h8M8 11h8M8 15h8M8 19h5" />
      </svg>
    );
  }

  if (name === "fire") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="m12 2.5 8 3v6c0 5-3.4 8.6-8 10.9-4.6-2.3-8-5.9-8-10.9v-6l8-3Z" />
        <path d="M12.5 7.5c.5 2-1.8 2.8-1.2 4.6.2.7.8 1 1.4.9.1-.8.6-1.3 1.2-1.7.7.8 1 1.7 1 2.7a3 3 0 0 1-6 0c0-1.8 1.3-2.9 2.2-4.1.6-.8 1-1.4 1.4-2.4Z" />
      </svg>
    );
  }

  if (name === "bms") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="3.5" width="18" height="13" rx="1.5" />
        <path d="M8 20.5h8M12 16.5v4M6.5 12l3-3 2.5 2 4-4" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 4h18l-7 8v6l-4 2v-8L3 4Z" />
      <path d="M7 7h10M9 10h6" />
    </svg>
  );
}

const strengths = [
  {
    title: "8+ Years of Experience",
    description: "A strong record of delivering efficient, reliable engineering projects.",
    icon: "experience",
  },
  {
    title: "Specialized Industry Knowledge",
    description: "Systems shaped for pharmaceutical, industrial, and commercial environments.",
    icon: "industry",
  },
  {
    title: "Tailored, Scalable Solutions",
    description: "Each project is designed around site requirements and future needs.",
    icon: "scale",
  },
  {
    title: "End-to-End Project Delivery",
    description: "Engineering, supply, installation, testing, and ongoing support.",
    icon: "delivery",
  },
  {
    title: "Exceptional Support",
    description: "Responsive service and practical guidance throughout the system lifecycle.",
    icon: "support",
  },
  {
    title: "Dedicated Technical Teams",
    description: "Experienced professionals focused on safety, quality, and performance.",
    icon: "team",
  },
] as const;

type StrengthIconName = (typeof strengths)[number]["icon"];

function StrengthIcon({ name }: { name: StrengthIconName }) {
  if (name === "experience") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 6.5v5.8l3.5 2" />
      </svg>
    );
  }

  if (name === "industry") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 21V9l6 3V8l6 4V4h6v17H3Z" />
        <path d="M7 17h2m3 0h2m3 0h2M17 8h1" />
      </svg>
    );
  }

  if (name === "scale") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 19h16M6 16V9m6 7V5m6 11v-4M4 7l3-3 3 2 5-4 3 2 2-1" />
      </svg>
    );
  }

  if (name === "delivery") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="4" width="7" height="6" rx="1" />
        <rect x="14" y="14" width="7" height="6" rx="1" />
        <path d="M10 7h4a3 3 0 0 1 3 3v4M14 11l3 3 3-3" />
      </svg>
    );
  }

  if (name === "support") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 13v-2a8 8 0 0 1 16 0v2m-16 0v4a2 2 0 0 0 2 2h2v-7H6a2 2 0 0 0-2 1Zm16 0v4a2 2 0 0 1-2 2h-2v-7h2a2 2 0 0 1 2 1Zm-4 6a4 4 0 0 1-4 2h-2" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 20v-1a5.5 5.5 0 0 1 11 0v1h-11Zm12-11a2.5 2.5 0 1 1 0 5m2.2 2a4.5 4.5 0 0 1 2.8 4v1h-3.5" />
    </svg>
  );
}

export default function AboutPage() {
  return (
    <>
      <SiteHeader activePage="About" />
      <main className={styles.page}>
        <section className={styles.hero} aria-labelledby="about-page-title">
          <Image
            className={styles.heroImage}
            src="/company-team.jpg"
            alt="Cold Craft project team working together on site"
            fill
            priority
            sizes="100vw"
          />
          <div className={styles.heroOverlay} />
          <div className={styles.heroContent}>
            <p>Company Profile</p>
            <h1 id="about-page-title">About</h1>
            <nav aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">About</span>
            </nav>
          </div>
        </section>

        <section className={styles.overview} aria-labelledby="overview-title">
          <div className={styles.overviewImage}>
            <Image
              src="/product-cleanroom.jpg"
              alt="Modern cleanroom corridor with controlled environment panels"
              fill
              sizes="(max-width: 760px) 100vw, 34vw"
            />
          </div>
          <div className={styles.overviewCopy}>
            <p className={styles.eyebrow}>Who We Are</p>
            <h2 id="overview-title">About Cold Craft Engineering Ltd.</h2>
            <h3>Trusted Engineering Solutions for HVAC, Cold Storage, Cleanroom, and Industrial Systems</h3>
            <p>
              With over 8 years of industry expertise, Cold Craft Engineering Ltd. stands as a premier provider of innovative, high-performance engineering solutions in Bangladesh. We specialize in HVAC systems, industrial refrigeration, cleanroom technology, fire protection, and building management systems tailored for pharmaceutical, food processing, garment, and logistics sectors.
            </p>
            <p>
              As a trusted name in cold storage and HVAC system design, we deliver end-to-end services, from project consultation to design, installation, and maintenance.
            </p>
            <div className={styles.quickStats}>
              <div><strong>8+</strong><span>Years of experience</span></div>
              <div><strong>345+</strong><span>Total employees</span></div>
              <div><strong>65+</strong><span>Completed projects</span></div>
            </div>
          </div>
        </section>

        <section className={styles.team} aria-labelledby="team-title">
          <div className={styles.teamHeader}>
            <h2 id="team-title">Meet our<br />leadership team</h2>
            <p>The people behind Cold Craft&apos;s HVAC, fire protection and building automation work.</p>
          </div>

          <div className={styles.leadershipGrid}>
            <article className={styles.leaderCard}>
              <div className={styles.memberPortrait} data-tone="blue">
                <span>SI</span>
              </div>
              <div className={styles.memberDetails}>
                <h3>Md. Sadequl Islam</h3>
                <p className={styles.role}>Chairman</p>
                <p>
                  We are proud to lead a team driven by excellence, innovation and integrity. Our legacy of cutting-edge engineering is built on collaboration, trust and purpose, and we will keep shaping a sustainable future through engineering brilliance.
                </p>
              </div>
            </article>

            <article className={styles.leaderCard}>
              <div className={styles.memberPortrait} data-tone="sky">
                <span>AR</span>
              </div>
              <div className={styles.memberDetails}>
                <h3>Md. Azizur Rahman</h3>
                <p className={styles.role}>Managing Director</p>
                <p>
                  From design to maintenance, we deliver advanced HVAC solutions with precision and care. Driven by innovation and best practices, we strive to exceed expectations and create long-lasting, high-performance environments for every client we serve.
                </p>
              </div>
            </article>
          </div>

          <div className={styles.directorsWrap}>
            <p className={styles.directorsLabel}>Directors</p>
            <div className={styles.directorGrid}>
              <article className={styles.directorCard}>
                <div className={styles.memberPortraitSmall} data-tone="sand">
                  <span>MH</span>
                </div>
                <div className={styles.directorMeta}>
                  <h3>Md. Mehedi Hasan</h3>
                  <p>Director, Accounts</p>
                </div>
              </article>

              <article className={styles.directorCard}>
                <div className={styles.memberPortraitSmall} data-tone="green">
                  <span>PS</span>
                </div>
                <div className={styles.directorMeta}>
                  <h3>Engr. Proloy Sarker</h3>
                  <p>Director, Fire Detection, Protection &amp; Suppression System</p>
                </div>
              </article>

              <article className={styles.directorCard}>
                <div className={styles.memberPortraitSmall} data-tone="charcoal">
                  <span>MR</span>
                </div>
                <div className={styles.directorMeta}>
                  <h3>Mahmudur Rahman Rasel</h3>
                  <p>Director, BMS System</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className={styles.expertise} aria-labelledby="expertise-title">
          <header className={styles.sectionHeading}>
            <p className={styles.eyebrow}>Our Capabilities</p>
            <h2 id="expertise-title">The People Behind Every System</h2>
            <p>Integrated engineering expertise, delivered by people who understand the work on site.</p>
          </header>
          <div className={styles.capabilityGrid}>
            {capabilities.map((capability) => (
              <article className={styles.capabilityCard} key={capability.title}>
                <span className={styles.capabilityIcon}>
                  <CapabilityIcon name={capability.icon} />
                </span>
                <div className={styles.capabilityBody}>
                  <h3>{capability.title}</h3>
                  <p>{capability.description}</p>
                </div>
                <span className={styles.capabilityArrow} aria-hidden="true">
                  <svg viewBox="0 0 20 20" fill="none">
                    <path d="M5 15 15 5M6 5h9v9" />
                  </svg>
                </span>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.why} aria-labelledby="why-title">
          <div className={styles.whyLayout}>
            <div className={styles.whyContent}>
              <p className={styles.eyebrow}>The Cold Craft Difference</p>
              <h2 id="why-title">Why Choose Cold Craft Engineering Ltd.?</h2>
              <span className={styles.whyRule} aria-hidden="true" />
              <div className={styles.strengthGrid}>
                {strengths.map((strength) => (
                  <article className={styles.strength} key={strength.title}>
                    <span className={styles.strengthIcon}><StrengthIcon name={strength.icon} /></span>
                    <span>
                      <h3>{strength.title}</h3>
                      <p>{strength.description}</p>
                    </span>
                  </article>
                ))}
              </div>
            </div>
            <div className={styles.whyImage}>
              <Image
                src="/hero-hvac.jpg"
                alt="HVAC project installation by Cold Craft engineers"
                fill
                sizes="(max-width: 850px) 100vw, 30vw"
              />
              <div className={styles.imageBadge}>
                <span>Cold Craft</span>
                <strong>Engineering Ltd.</strong>
                <small>Serving the Nation</small>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.contactCta} aria-labelledby="about-cta-title">
          <div>
            <p className={styles.eyebrow}>Let&apos;s Build Something Reliable</p>
            <h2 id="about-cta-title">Engineering comfort, together.</h2>
            <p>Talk with our team about your next HVAC, cleanroom, or industrial project.</p>
          </div>
          <a href="tel:+8801722353205">Contact Our Team <span aria-hidden="true">→</span></a>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}