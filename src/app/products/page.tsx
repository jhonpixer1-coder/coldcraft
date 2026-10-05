import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import { products } from "@/data/products";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Products | Cold Craft Engineering Ltd.",
  description:
    "Explore Cold Craft Engineering Ltd. solutions including HVAC, fire protection, BMS, cleanroom panels, and industrial filtration products.",
};

export default function ProductsPage() {
  return (
    <>
      <SiteHeader activePage="Products" />
      <main className={styles.page}>
        <section className={styles.hero} aria-labelledby="products-page-title">
          <div className={styles.heroBackdrop} />
          <div className={styles.heroContent}>
            <p className={styles.kicker}>Our Solutions</p>
            <h1 id="products-page-title">Products</h1>
            <nav aria-label="Breadcrumb" className={styles.breadcrumbs}>
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Products</span>
            </nav>
          </div>
        </section>

        <section className={styles.productsSection} aria-label="Product portfolio">
          <div className={styles.productsGrid}>
            {products.map((product) => (
              <article className={styles.productCard} key={product.slug}>
                <div className={styles.imageFrame}>
                  <Image
                    src={product.image}
                    alt={product.imageAlt}
                    fill
                    sizes="(max-width: 700px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <span className={styles.productBadge}>{product.category}</span>
                </div>

                <div className={styles.cardBody}>
                  <div className={styles.cardMeta}>
                    <span>{product.location}</span>
                  </div>
                  <h2>{product.title}</h2>
                  <p>{product.shortDescription}</p>
                  <Link href={`/products/${product.slug}`} className={styles.readMore}>
                    <span>All product</span>
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
