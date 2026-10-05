import Image from "next/image";
import styles from "./hvac-products-catalog.module.css";

const hvacProducts = [
  {
    title: "DCLC-M — Prometheus Magnetic Bearing Centrifugal Chiller",
    capacity: "Cooling capacity: 75–1,000 RT (264–3,517 kW)",
    image: "/hero-hvac.png",
    imageAlt: "Industrial chiller equipment in a commercial HVAC installation",
    features: [
      "Magnetic bearing technology",
      "Inverter-driven, dual-stage compressor",
      "Oil-free operation with reduced maintenance",
      "Low-noise operation and compact footprint",
      "High efficiency across varying loads",
    ],
  },
  {
    title: "DCLC-D — Hercules Centrifugal Chiller",
    capacity: "Cooling capacity: 300–3,000 RT (1,055–10,550 kW)",
    image: "/product-chiller.jpg",
    imageAlt: "Industrial mechanical equipment for a chilled-water system",
    features: [
      "Dual-stage, high-efficiency compressors",
      "Flooded shell-and-tube evaporator and condenser",
      "Advanced microprocessor controller",
      "Colour touchscreen display",
      "Optional variable-frequency drive",
    ],
  },
  {
    title: "WCFX-E — Poseidon Water-Cooled Screw Chiller",
    capacity: "Cooling capacity: 60–1,000 RT (211–3,517 kW)",
    image: "/acme-pharmaceuticals-ltd-2.png",
    imageAlt: "HVAC equipment and ductwork in an industrial facility",
    features: [
      "High-efficiency vertical screw compressors",
      "Flooded shell-and-tube evaporator and condenser",
      "Advanced controller with touchscreen display",
      "Suitable for chilled-water and thermal-storage applications",
    ],
  },
  {
    title: "Central Station Air Handling Units",
    capacity: "EC53 / ECS53 series",
    image: "/product-cleanroom.jpg",
    imageAlt: "Cleanroom corridor served by a central air-handling system",
    features: [
      "Modular industrial construction",
      "Rugged structural design",
      "Double-skinned panels with PU insulation",
      "Flexible accessories and configuration options",
    ],
  },
  {
    title: "Chilled Water Air Handling Units",
    capacity: "VCB / HCB series",
    image: "/product-cleanroom.jpg",
    imageAlt: "Controlled indoor environment supported by chilled-water air handling",
    features: [
      "Heavy-gauge steel sheet construction",
      "Epoxy powder-coated casing",
      "Quiet operation",
      "Options to suit project requirements",
    ],
  },
  {
    title: "ACM-AE — Athena Air-Cooled Magnetic Bearing Chiller",
    capacity: "Cooling capacity: 17–507 RT (60–1,785 kW)",
    image: "/hero-hvac.png",
    imageAlt: "Commercial chiller equipment for an air-conditioning system",
    features: [
      "Oil-free magnetic bearing technology",
      "Inverter-driven compressor",
      "Low-noise operation",
      "Advanced microprocessor controller",
      "High-efficiency performance",
    ],
  },
  {
    title: "AVX-A — Achelous Air-Cooled Screw Chiller",
    capacity: "Cooling capacity: 56–518 RT (198–1,820 kW)",
    image: "/hero-installation.jpg",
    imageAlt: "Rooftop air-conditioning equipment during installation",
    features: [
      "High-efficiency screw compressors",
      "Flooded shell-and-tube evaporator",
      "Advanced microprocessor controller",
      "Designed for demanding ambient conditions",
    ],
  },
  {
    title: "Horizontal Blower Fan Coil Units",
    capacity: "CC series",
    image: "/product-fire.jpg",
    imageAlt: "Mechanical services and pipework in a building",
    features: [
      "High-static-pressure applications",
      "Epoxy powder-coated casing",
      "Low-noise blowers",
      "Belt drive with adjustable pulley",
    ],
  },
  {
    title: "CR Series — Fan Coil Units",
    capacity: "Multiple configurations available",
    image: "/product-filter.jpg",
    imageAlt: "Air filtration and circulation equipment",
    features: [
      "Low- to high-static-pressure applications",
      "Low-noise blower options",
      "Return-air plenum box options",
      "Ceiling-exposed, floor-standing, cassette, and wall-mounted types",
    ],
  },
  {
    title: "High-Efficiency Fan Coil Units",
    capacity: "CR-CF series",
    image: "/industrial-air-filter.png",
    imageAlt: "Industrial air-handling equipment for efficient indoor climate control",
    features: [
      "Three-speed or variable-speed DC motor",
      "Low- to medium-static-pressure applications",
      "Return-air plenum box options",
      "Quiet operation",
    ],
  },
] as const;

function ProductContactActions({ productName }: { productName: string }) {
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

export default function HvacProductsCatalog() {
  return (
    <main className={styles.page}>
      <section className={styles.hero} aria-labelledby="hvac-title">
        <div className={styles.heroBackdrop} />
        <div className={styles.heroContent}>
          <h1 id="hvac-title">HVAC Systems</h1>
          <p>All Products</p>
        </div>
      </section>

      <section className={styles.catalog} aria-label="HVAC product range">
        {hvacProducts.map((product, index) => (
          <article className={styles.product} key={product.title}>
            <div className={styles.imageFrame}>
              <Image
                src={product.image}
                alt={product.imageAlt}
                fill
                sizes="(max-width: 700px) 100vw, 42vw"
              />
            </div>
            <div className={styles.productDetails}>
              <span className={styles.productNumber}>
                Product {String(index + 1).padStart(2, "0")}
              </span>
              <h2>{product.title}</h2>
              <p className={styles.capacity}>{product.capacity}</p>
              <h3>Features</h3>
              <ul>
                {product.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <ProductContactActions productName={product.title} />
            </div>
          </article>
        ))}
      </section>

      <section className={styles.more} aria-label="More HVAC products">
        <h2>And more...</h2>
        <p>Contact our team to discuss the right solution for your project.</p>
        <ProductContactActions productName="HVAC products" />
      </section>
    </main>
  );
}
