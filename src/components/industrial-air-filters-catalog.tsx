import Image from "next/image";
import styles from "./industrial-air-filters-catalog.module.css";

const industrialAirFilters = [
  {
    title: "Filter Roll",
    image: "/industrial-air-filters/filter-roll.png",
  },
  {
    title: "G4 Pre- FILTER",
    image: "/industrial-air-filters/g4-pre-filter.png",
  },
  {
    title: "Product Name",
    image: "/industrial-air-filters/product-name.png",
  },
  {
    title: "Bag Filter F7",
    image: "/industrial-air-filters/bag-filter-f7.png",
  },
  {
    title: "Bag Filter G4",
    image: "/industrial-air-filters/bag-filter-g4.png",
  },
  {
    title: "G4 Pre Filter",
    image: "/industrial-air-filters/g4-pre-filter-panel.png",
  },
  {
    title: "G4 Pre Filter",
    image: "/industrial-air-filters/g4-pre-filter-pocket.png",
  },
  {
    title: "G4 Pre Filter",
    image: "/industrial-air-filters/g4-pre-filter-pocket-2.png",
  },
  {
    title: "G4 Pre Filter",
    image: "/industrial-air-filters/g4-pre-filter-mesh.png",
  },
  {
    title: "G4 Pre Filter",
    image: "/industrial-air-filters/g4-pre-filter-compact.png",
  },
  {
    title: "G4 Pre Filter",
    image: "/industrial-air-filters/g4-pre-filter-grid.png",
  },
] as const;

function ContactActions({ productName }: { productName: string }) {
  const whatsappHref = `https://wa.me/8801722353205?text=${encodeURIComponent(
    `Hello, I would like to know more about ${productName}.`,
  )}`;

  return (
    <div className={styles.actions}>
      <a className={styles.contactButton} href="tel:+8801722353205">
        Call Now
      </a>
      <a
        className={styles.contactButton}
        href={whatsappHref}
        target="_blank"
        rel="noreferrer"
      >
        WhatsApp
      </a>
    </div>
  );
}

export default function IndustrialAirFiltersCatalog() {
  return (
    <main className={styles.page}>
      <section className={styles.hero} aria-labelledby="industrial-filters-title">
        <div className={styles.heroBackdrop} />
        <div className={styles.heroContent}>
          <h1 id="industrial-filters-title">Industrial Air Filters</h1>
          <p>All Products</p>
        </div>
      </section>

      <section
        className={styles.catalog}
        aria-label="Industrial air filter products"
      >
        {industrialAirFilters.map((product, index) => (
          <article className={styles.product} key={`${product.title}-${index}`}>
            <div className={styles.imageFrame}>
              <Image
                src={product.image}
                alt={product.title}
                fill
                sizes="(max-width: 700px) 100vw, 42vw"
              />
            </div>
            <div className={styles.productDetails}>
              <h2>{product.title}</h2>
              <p>Contact us to know the Details..</p>
              <ContactActions productName={product.title} />
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
