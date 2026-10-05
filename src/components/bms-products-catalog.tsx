import Image from "next/image";
import styles from "./bms-products-catalog.module.css";

const bmsProducts = [
  {
    title: "DDC Controller",
    intro:
      "Freely programmable automation controllers for HVAC and building service plants.",
    image: "/bms-products/ddc-controller.png",
    features: [
      "Alarm, scheduling, trending, and access-protection functions",
      "Freely programmable control logic",
      "Supports BACnet/IP and building-system integration",
      "Flexible inputs and outputs for connected equipment",
    ],
  },
  {
    title: "Siemens QBM81.5 Differential Pressure Monitor",
    intro:
      "A differential pressure monitor for dependable monitoring in building systems.",
    image: "/bms-products/differential-pressure-monitor.png",
    features: [
      "Monitors differential pressure in air systems",
      "Clear local indication",
      "Suitable for HVAC monitoring applications",
      "Contact us for product selection and system compatibility",
    ],
  },
  {
    title: "Valves and Actuators",
    intro:
      "Siemens valves and actuators for precise control of heating and cooling circuits.",
    image: "/bms-products/valves-and-actuators.png",
    features: [
      "Valve and actuator options for HVAC applications",
      "Supports modulating control of heating and cooling",
      "Selection based on the required flow and system",
      "Coordinates with building automation controls",
    ],
  },
  {
    title: "Siemens QBE61.3-DP10 Differential Pressure Sensor",
    intro:
      "Pressure measurement for liquids and gases in building services and plant systems.",
    image: "/bms-products/differential-pressure-sensor.png",
    features: [
      "Measures differential pressure in compatible systems",
      "Designed for liquids and gases",
      "Enclosure suited to mechanical-room installation",
      "Integrates with compatible monitoring and control equipment",
    ],
  },
  {
    title: "Sensors",
    intro:
      "A selection of sensors for monitoring building conditions and supporting responsive control.",
    image: "/bms-products/sensors.png",
    features: [
      "Options for common HVAC measurement needs",
      "Supports monitoring of building and plant conditions",
      "Selected to suit the application and control system",
      "Available for coordinated building automation",
    ],
  },
  {
    title: "Siemens QAE2112.010 Immersion Temperature Sensor",
    intro:
      "An immersion temperature sensor for measuring water temperature in HVAC pipework.",
    image: "/bms-products/immersion-temperature-sensor.png",
    features: [
      "Designed for immersion temperature measurement",
      "Suitable for compatible heating and cooling circuits",
      "Helps provide temperature feedback to control systems",
      "Installed with a suitable thermowell and system arrangement",
    ],
  },
  {
    title: "Siemens TXM1.6R.6 Relay Output Module",
    intro:
      "A relay output module for switching and controlling connected building equipment.",
    image: "/bms-products/relay-output-module.png",
    features: [
      "Relay outputs for building automation applications",
      "DIN-rail installation",
      "Supports control of compatible field equipment",
      "Integrated with a compatible Siemens control system",
    ],
  },
  {
    title: "Damper Actuator",
    intro:
      "Compact actuators for controlling ventilation dampers in building air systems.",
    image: "/bms-products/damper-actuator.png",
    features: [
      "Modulating damper control",
      "Options for different torque and control requirements",
      "Position indication and adjustable mechanical end stop",
      "Suitable for integration with building controls",
    ],
  },
  {
    title: "ACHX-C — Helios Air-Cooled Screw Chiller (High Ambient)",
    intro:
      "A high-ambient air-cooled screw chiller for commercial and industrial cooling applications.",
    image: "/bms-products/air-cooled-screw-chiller.png",
    features: [
      "Air-cooled screw chiller configuration",
      "Intended for high-ambient operating conditions",
      "Selected to meet project cooling requirements",
      "Contact us for capacity and application details",
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

export default function BmsProductsCatalog() {
  return (
    <main className={styles.page}>
      <section className={styles.hero} aria-labelledby="bms-title">
        <div className={styles.heroBackdrop} />
        <div className={styles.heroContent}>
          <h1 id="bms-title">BMS (Building Management System)</h1>
          <p>All Products</p>
        </div>
      </section>

      <section className={styles.catalog} aria-label="BMS product range">
        {bmsProducts.map((product, index) => (
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

      <section className={styles.more} aria-label="More BMS products">
        <h2>And more...</h2>
        <p>
          Contact our team to discuss the right building management solution
          for your project.
        </p>
        <ContactActions productName="BMS products" />
      </section>
    </main>
  );
}
