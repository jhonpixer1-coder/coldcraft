import Image from "next/image";
import styles from "./fire-products-catalog.module.css";

const fireProducts = [
  {
    title: "Horizontal Split Case Fire Pump",
    intro:
      "A dependable fire pump solution for commercial and industrial fire protection networks.",
    image: "/fire-products/horizontal-split-case-pump.png",
    features: [
      "Horizontal split-case pump configuration",
      "Designed for fire-protection water supply",
      "Service-friendly casing and component access",
      "System selection based on project demand",
    ],
  },
  {
    title: "Diesel Engine Fire Pump",
    intro:
      "A dedicated pump set for reliable fire-water delivery when independent backup power is required.",
    image: "/fire-products/diesel-engine-fire-pump.png",
    features: [
      "Diesel engine-driven pump arrangement",
      "Automatic start and monitoring options",
      "Suitable for standby fire-water systems",
      "Configured to project requirements",
    ],
  },
  {
    title: "NEO Series Fire Alarm Control Panels",
    intro:
      "Addressable fire alarm panels for monitoring devices and communicating clear system status.",
    image: "/fire-products/neo-fire-alarm-panel.png",
    features: [
      "Addressable detection and notification support",
      "Expandable system configuration",
      "Event display and system status indication",
      "Designed for coordinated building protection",
    ],
  },
  {
    title: "Simplex 4098-9733 Smoke Detectors",
    intro:
      "Smoke detection devices designed to provide early warning as part of a compatible fire alarm system.",
    image: "/fire-products/smoke-detector.png",
    features: [
      "Early smoke detection",
      "Compatible system selection and configuration",
      "Suitable for monitored building environments",
      "Installed and commissioned as part of the fire alarm design",
    ],
  },
  {
    title: "Swing-Type Fire Doors",
    intro:
      "Fire-rated door assemblies to help protect openings and support compartmentation strategies.",
    image: "/fire-products/swing-fire-door.png",
    features: [
      "Single- and double-leaf configurations",
      "Fire-rated leaf and frame assemblies",
      "Hardware options to suit site requirements",
      "Specified to applicable project requirements",
    ],
  },
  {
    title: "Glazed Fire Doors",
    intro:
      "Fire-rated glazed door solutions that combine visibility with fire compartment protection.",
    image: "/fire-products/glazed-fire-door.png",
    features: [
      "Fire-rated glazing and door assembly options",
      "Multiple frame and finish choices",
      "Suitable for selected internal openings",
      "Configuration based on project requirements",
    ],
  },
  {
    title: "Cementitious Fireproofing",
    intro:
      "Spray-applied fire protection for structural elements requiring passive fire resistance.",
    image: "/fire-products/cementitious-fireproofing.png",
    features: [
      "Applied to compatible structural substrates",
      "Supports passive fire-protection strategies",
      "Thickness selected for the required fire rating",
      "Surface preparation and installation coordination",
    ],
  },
  {
    title: "Intumescent Fireproofing Paint",
    intro:
      "A specialist coating that expands under heat to help protect structural steel during a fire.",
    image: "/fire-products/intumescent-fireproofing-paint.png",
    features: [
      "Thin-film passive fire-protection coating",
      "Suitable systems available for steel substrates",
      "Coating build-up selected for project requirements",
      "Applied with compatible primer and topcoat systems",
    ],
  },
  {
    title: "Upright, Pendent & Recessed Pendent Sprinklers",
    intro:
      "Automatic sprinkler options for different ceiling arrangements and fire-protection layouts.",
    image: "/fire-products/fire-sprinkler-heads.png",
    features: [
      "Upright, pendent, and recessed pendent styles",
      "Selection of temperature ratings and finishes",
      "Coordinated with the hydraulic sprinkler design",
      "Installation layout tailored to the space",
    ],
  },
  {
    title: "Inert Gas Fire Suppression",
    intro:
      "A clean-agent suppression option for protected spaces containing sensitive equipment.",
    image: "/fire-products/inert-gas-suppression.png",
    features: [
      "Designed for selected enclosed hazard areas",
      "Suppression system planned around room conditions",
      "Detection, control, and warning interfaces",
      "Project-specific design and commissioning",
    ],
  },
] as const;

function ContactActions({ productName }: { productName: string }) {
  const whatsappHref = `https://wa.me/8801722353205?text=${encodeURIComponent(
    `Hello, I would like to know more about ${productName}.`,
  )}`;

  return (
    <div className={styles.actions}>
      <a className={styles.contactButton} href="tel:+8801722353205">
        Call now
        <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path d="M3 10h13m-5-5 5 5-5 5" />
        </svg>
      </a>
      <a
        className={styles.contactButton}
        href={whatsappHref}
        target="_blank"
        rel="noreferrer"
      >
        WhatsApp
        <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path d="M3 10h13m-5-5 5 5-5 5" />
        </svg>
      </a>
    </div>
  );
}

export default function FireProductsCatalog() {
  return (
    <main className={styles.page}>
      <section className={styles.hero} aria-labelledby="fire-products-title">
        <div className={styles.heroBackdrop} />
        <div className={styles.heroContent}>
          <h1 id="fire-products-title">
            Fire Detection, Protection &amp; Suppression Systems
          </h1>
          <p>All Products</p>
        </div>
      </section>

      <section className={styles.catalog} aria-label="Fire protection product range">
        {fireProducts.map((product, index) => (
          <article className={styles.product} key={product.title}>
            <div className={styles.imageFrame}>
              <Image
                src={product.image}
                alt={product.title}
                fill
                sizes="(max-width: 700px) 100vw, 42vw"
              />
            </div>
            <div className={styles.productDetails}>
              <span className={styles.productNumber}>
                Product {String(index + 1).padStart(2, "0")}
              </span>
              <h2>{product.title}</h2>
              <p className={styles.intro}>{product.intro}</p>
              <h3>Features</h3>
              <ul>
                {product.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <ContactActions productName={product.title} />
            </div>
          </article>
        ))}
      </section>

      <section className={styles.more} aria-label="More fire protection products">
        <h2>And more...</h2>
        <p>Contact our team to discuss the right fire protection solution for your project.</p>
        <ContactActions productName="fire protection products" />
      </section>
    </main>
  );
}
