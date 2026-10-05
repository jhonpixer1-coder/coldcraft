import Image from "next/image";
import styles from "./cleanroom-products-catalog.module.css";

const cleanroomProducts = [
  {
    title: "50mm Metal Cleanroom Panel Handmade, Rock Wool, Customizable",
    image: "/cleanroom-products/rock-wool-panel.png",
    specifications: [
      ["Coating", "PE, PVDF, Antistatic, Stainless Steel, HDP And PVC Coating etc."],
      ["Panel Frame", "0.8mm, Galvanized Steel"],
      ["Corner Connection", "1.0mm, Galvanized Steel"],
      ["Fire Resistance", "1.0h"],
      ["Connection Type", "Aluminum Joint Type, Continuous Type"],
      ["Lead Time", "15 Days After Design Confirmed"],
      ["Shipment Method", "By Sea"],
      ["Payment Term", "TT/LC, CAD, Cash"],
    ],
  },
  {
    title: "100mm Clip Cleanroom Panel Handmade, Gypsum Board",
    image: "/cleanroom-products/gypsum-board-clip-panel.png",
    specifications: [
      ["Coating", "PE, PVDF, Antistatic, Stainless Steel HDP And PVC Coating Etc."],
      ["Panel Frame", "1.2mm"],
      ["Fire Resistance", "1.0h/4.0h"],
      ["Connection Type", "Keel Construction, Spring Buckle"],
      ["Lead Time", "15 Days After Design Confirmed"],
      ["Shipment Method", "By Sea"],
      ["Payment Term", "TT/LC, CAD, Cash"],
    ],
  },
  {
    title: "Cleanroom Steel Door",
    image: "/cleanroom-products/cleanroom-steel-door.png",
    specifications: [
      ["Door Frame", "1.5mm Galvanized Steel"],
      ["Door Leaf", "1.0-1.2mm Galvanized Steel"],
      ["Insulation Material", "Paper Honeycomb/Alu. Honeycomb / Rockwool"],
      [
        "Window On The Door",
        "Double Layered With Square Or Round Corner;\nWindow Size: 500*800mm, Customizable;\nWindow Color: Black Or White;\nGlass: 5+5mm Tempered Glass (Can Be Fireproof);\nN2 Gas And Desiccant Inside",
      ],
      [
        "Applications",
        "Pharmaceuticals, Semiconductor Industry, Research Laboratories,\n\nAssembly And Testing Facilities, Food And Beverage Industry",
      ],
      ["Lead Time", "15 Days After Design Confirmed"],
      ["Shipment Method", "By Sea"],
      ["Payment Term", "TT/LC, CAD, Cash"],
    ],
  },
  {
    title: "50mm Metal Cleanroom Panel Machine Made",
    image: "/cleanroom-products/machine-made-panel.png",
    details: [["Coating", "PE"]],
  },
  {
    title: "Cleanroom Window",
    image: "/cleanroom-products/cleanroom-window.png",
    specifications: [
      ["Thickness", "50mm / 75mm / 100mm (Other Size Available)"],
      ["Glass Type", "Tempered Glass, Fireproof Glass"],
      ["Protection", "Nitrogen Gas with Desiccant"],
      ["Lead Time", "15 Days After Design Confirmed"],
      ["Shipment Method", "By Sea"],
      ["Payment Term", "TT/LC, CAD, Cash"],
    ],
  },
  {
    title: "Handmade Sandwich 304 Stainless Steel Panel",
    image: "/cleanroom-products/stainless-steel-panel.png",
    details: [
      ["Coating:", "Stainless Steels"],
      [
        "Insulation material:",
        "Rock Wool/Paper Honeycomb/Aluminium Honeycomb/EPS-PU/PIR",
      ],
    ],
  },
  {
    title: "50mm Metal Cleanroom Panel Handmade, PU/EPS/PIR",
    image: "/cleanroom-products/pu-eps-pir-panel.png",
    details: [
      [
        "Coating:",
        "PE, PVDF, Antistatic, Stainless Steel, HDP And PVC Coating etc.",
      ],
      ["Panel Frame:", "0.8mm, Galvanized Steel"],
      ["Corner Connection:", "1.0mm, Galvanized Steel"],
      ["Fire Resistance:", "30 minutes"],
      ["Connection Type:", "Aluminum Joint Type, Continuous Type"],
    ],
  },
  {
    title: "Air Shower for Personnel / for Material",
    image: "/cleanroom-products/personnel-material-air-shower.png",
    description:
      "Air shower for personnel / for material series products are a purification equipment with strong versatility. They are generally installed between cleanroom and non-cleanroom. They are the passages for people or materials to enter the cleanroom. The clean air that is blown out can remove the dust carried by people and materials, and it can effectively block or reduce the dust source from entering the clean area. The front and rear doors of the air shower for personnel / for material are equipped with interlocks, which can also act as an air lock to prevent unpurified air from entering the clean area. The equipment is widely used in the fields of food, medicine, biological engineering and microelectronics, etc.",
  },
  {
    title: "Class A Laminar Air Flow",
    image: "/cleanroom-products/class-a-laminar-air-flow.png",
    description:
      "Class A laminar air flow is an air purification equipment that provides Class A unidirectional flow and creates a local high cleanliness environment. Its working principle is to pass the air through the HEPA filter at a certain wind speed, and the pressure is equalized by the unidirectional membrane so that the clean air is unidirectionally flowed to the working area.\n\nClass A laminar air flow can be used singly or in combination. The working area of Class A laminar air flow is the core sterile area, the operators need to open the equipment from the class-B area environment according to the defined SOP to carry out process operation and intervention. These actions need to be formulated according to the risk of the product. The operator should avoid contacting with the core sterile areas. If contact is needed, it should be done through isolation gloves or body suit.",
  },
  {
    title: "50mm Metal Cleanroom Panel Handmade, Magnesium Oxysulfide",
    image: "/cleanroom-products/magnesium-oxysulfide-panel.png",
    details: [
      [
        "Coating:",
        "PE, PVDF, Antistatic, Stainless Steel, HDP And PVC Coating etc.",
      ],
      ["Panel Frame:", "0.8mm, Galvanized Steel"],
      ["Corner Connection:", "1.0mm, Galvanized Steel"],
      ["Fire Resistance:", "1.0 h"],
      ["Connection Type:", "Aluminum Joint Type, Continuous Type"],
    ],
  },
  {
    title: "100mm Metal Cleanroom Panel Handmade, Gypsum Board",
    image: "/cleanroom-products/gypsum-board-panel.png",
    specifications: [
      ["Coating", "PE, PVDF, Antistatic, Stainless Steel HDP And PVC Coating Etc."],
      ["Panel Frame", "1.0mm"],
      ["Corner Connection", "1.0mm, Galvanized Steel"],
      ["Connection Type", "Aluminum Joint Type"],
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

export default function CleanroomProductsCatalog() {
  return (
    <main className={styles.page}>
      <section className={styles.hero} aria-labelledby="cleanroom-title">
        <div className={styles.heroBackdrop} />
        <div className={styles.heroContent}>
          <h1 id="cleanroom-title">Cleanroom Panels</h1>
          <p>All Products</p>
        </div>
      </section>

      <section className={styles.catalog} aria-label="Cleanroom Panels products">
        {cleanroomProducts.map((product) => (
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
              <h2>{product.title}</h2>
              {"specifications" in product && (
                <table className={styles.specifications}>
                  <tbody>
                    {product.specifications.map(([label, value]) => (
                      <tr key={label}>
                        <th scope="row">{label}</th>
                        <td>{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
              {"details" in product && (
                <dl className={styles.details}>
                  {product.details.map(([label, value]) => (
                    <div key={label}>
                      <dt>{label}</dt>
                      <dd>{value}</dd>
                    </div>
                  ))}
                </dl>
              )}
              {"description" in product && (
                <p className={styles.description}>{product.description}</p>
              )}
              <ContactActions productName={product.title} />
            </div>
          </article>
        ))}
      </section>

      <section className={styles.more} aria-label="More Cleanroom products">
        <h2>And More...</h2>
        <p>Contact Us to know more.</p>
      </section>
    </main>
  );
}
