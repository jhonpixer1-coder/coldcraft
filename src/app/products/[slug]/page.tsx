import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import { products } from "@/data/products";
import styles from "./page.module.css";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return { title: "Product Not Found | Cold Craft Engineering Ltd." };
  }

  return {
    title: `${product.title} | Cold Craft Engineering Ltd.`,
    description: product.shortDescription,
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <SiteHeader activePage="Products" />
      <main className={styles.page}>
        <section className={styles.hero} aria-labelledby="product-title">
          <div className={styles.heroBackdrop} />
          <div className={styles.heroContent}>
            <p className={styles.kicker}>Product Detail</p>
            <h1 id="product-title">{product.title}</h1>
            <nav aria-label="Breadcrumb" className={styles.breadcrumbs}>
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <Link href="/products">Products</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{product.title}</span>
            </nav>
          </div>
        </section>

        <section className={styles.detailSection}>
          <div className={styles.contentGrid}>
            <div className={styles.imagePanel}>
              <div className={styles.imageFrame}>
                <Image
                  src={product.image}
                  alt={product.imageAlt}
                  fill
                  sizes="(max-width: 800px) 100vw, 52vw"
                />
              </div>
            </div>

            <div className={styles.infoPanel}>
              <div className={styles.metaRow}>
                <span className={styles.metaPill}>{product.category}</span>
                <span className={styles.metaPill}>{product.location}</span>
              </div>

              <h2>{product.title}</h2>
              <p className={styles.lead}>{product.description}</p>

              <ul className={styles.highlights}>
                {product.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className={styles.actions}>
                <Link href="/products" className={styles.secondaryButton}>
                  Back to Products
                </Link>
                <a href="mailto:info@cce-bd.com?subject=Product%20Enquiry%20-%20Cold%20Craft%20Engineering" className={styles.primaryButton}>
                  Request a quote
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
