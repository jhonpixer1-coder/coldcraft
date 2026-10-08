import Image from "next/image";
import styles from "./products-section.module.css";

const products = [
  {
    slug: "hvac-systems",
    title: "HVAC Systems",
    description: "Efficient heating, ventilation & air conditioning solutions for optimal comfort.",
    image: "/hero-hvac.png",
    imageAlt: "Commercial HVAC equipment",
    icon: "snowflake",
    accent: "blue",
  },
  {
    slug: "fire-detection-protection-suppression",
    title: "Fire Detection, Protection & Suppression Systems",
    description: "Advanced fire safety systems to detect, protect and save lives.",
    image: "/fire.png",
    imageAlt: "Red fire-safety pipes and valves",
    icon: "flame",
    accent: "orange",
  },
  {
    slug: "building-management-system",
    title: "BMS (Building Management System)",
    description: "Smart building automation for efficiency, control & sustainability.",
    image: "/bms-building-management.png",
    imageAlt: "Engineer working with building systems",
    icon: "monitor",
    accent: "blue",
  },
  {
    slug: "cleanroom-panels",
    title: "Cleanroom Panels",
    description: "High-performance panels for clean, controlled & contamination-free spaces.",
    image: "/product-cleanroom.jpg",
    imageAlt: "Sterile cleanroom corridor",
    icon: "panel",
    accent: "blue",
  },
  {
    slug: "american-air-filter",
    title: "American Air Filter",
    description: "Reliable and efficient air filters for superior indoor air quality.",
    image: "/filter.png",
    imageAlt: "Close-up of an air filter",
    icon: "filter",
    accent: "green",
  },
  {
    slug: "industrial-air-filters",
    title: "Industrial Air Filters",
    description: "Durable air filtration solutions for industrial applications and environments.",
    image: "/industrial-air-filter.png",
    imageAlt: "Industrial air filter panels for heavy-duty filtration",
    icon: "industrial",
    accent: "purple",
  },
] as const;

type ProductIconName = (typeof products)[number]["icon"];

function ProductIcon({ name }: { name: ProductIconName }) {
  if (name === "snowflake") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2.5v19M3.8 7.2l16.4 9.6M3.8 16.8l16.4-9.6M8.5 4.5 12 8l3.5-3.5M8.5 19.5 12 16l3.5 3.5" />
      </svg>
    );
  }

  if (name === "flame") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2.5 20 5v6.1c0 5-3.4 8.6-8 10.9-4.6-2.3-8-5.9-8-10.9V5l8-2.5Z" />
        <path d="M12.6 7.2c.6 2.3-2.1 3.1-1.4 5.2.3.8 1 1.1 1.7 1 .1-1 .7-1.5 1.4-2 .8 1 1.2 2 1.2 3.1a3.5 3.5 0 0 1-7 0c0-2.1 1.5-3.4 2.6-4.8.7-.9 1.1-1.6 1.5-2.5Z" />
      </svg>
    );
  }

  if (name === "monitor") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="3.5" width="18" height="13" rx="1.5" />
        <path d="M8 20.5h8M12 16.5v4M6.5 7h4v3h-4zM13.5 7h4M13.5 10h4M6.5 13h11" />
      </svg>
    );
  }

  if (name === "panel") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="4" y="3" width="16" height="18" rx="1.5" />
        <path d="M8 7h8M8 11h8M8 15h8M8 19h5" />
      </svg>
    );
  }

  if (name === "filter") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="4" y="3" width="16" height="18" rx="1" />
        <path d="M8 5v14m4-14v14m4-14v14M4 8h16M4 12h16M4 16h16" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="4" width="18" height="16" rx="1.5" />
      <path d="M6.5 7.5h11v9h-11zM9 7.5v9m3-9v9m3-9v9" />
    </svg>
  );
}

export default function ProductsSection() {
  return (
    <section className={styles.section} id="products" aria-labelledby="products-title">
      <div className={styles.inner}>
        <header className={styles.intro}>
          <p className={styles.eyebrow}>Our Products</p>
          <h2 className={styles.title} id="products-title">
            Engineered Solutions for Every Need
          </h2>
          <span className={styles.titleRule} aria-hidden="true" />
          <p className={styles.description}>
            High-quality HVAC, fire safety, filtration, and cleanroom solutions
            <br className={styles.desktopBreak} /> designed for performance, safety, and sustainability.
          </p>
        </header>

        <div className={styles.grid}>
          {products.map((product) => (
            <article className={styles.card} key={product.title}>
              <div className={styles.imageFrame}>
                <Image
                  src={product.image}
                  alt={product.imageAlt}
                  fill
                  sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                />
              </div>
              <div className={styles.cardBody}>
                <span className={`${styles.icon} ${styles[product.accent]}`}>
                  <ProductIcon name={product.icon} />
                </span>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{product.title}</h3>
                  <p className={styles.cardDescription}>{product.description}</p>
                  <a
                    className={`${styles.cardLink} ${styles[`${product.accent}Link`]}`}
                    href={`/products/${product.slug}`}
                  >
                    Explore Products
                    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                      <path d="M2.5 10h14m-5-5 5 5-5 5" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}