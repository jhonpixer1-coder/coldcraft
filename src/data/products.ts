export type Product = {
  slug: string;
  title: string;
  category: string;
  location: string;
  image: string;
  imageAlt: string;
  shortDescription: string;
  description: string;
  highlights: string[];
};

export const products: Product[] = [
  {
    slug: "hvac-systems",
    title: "HVAC Systems",
    category: "Climate Control",
    location: "Bangladesh",
    image: "/hero-hvac.png",
    imageAlt: "Commercial HVAC equipment",
    shortDescription: "Efficient heating, ventilation and air conditioning solutions for optimal comfort and performance.",
    description:
      "Our HVAC systems are engineered for dependable climate control across commercial, industrial, and healthcare environments. We design, supply, and install high-performance systems to ensure comfort, energy efficiency, and long-term reliability for every project.",
    highlights: [
      "Custom air conditioning design",
      "Energy-efficient system delivery",
      "Comfort and performance assurance",
    ],
  },
  {
    slug: "fire-detection-protection-suppression",
    title: "Fire Detection, Protection & Suppression Systems",
    category: "Life Safety",
    location: "Bangladesh",
    image: "/fire.png",
    imageAlt: "Red fire-safety pipes and valves",
    shortDescription: "Advanced fire protection systems to detect threats early and safeguard people, equipment, and property.",
    description:
      "Cold Craft delivers modern fire protection systems designed around safety, redundancy, and quick response. Our solutions include alarm systems, sprinklers, suppression networks, and coordinated protection planning for industrial and commercial facilities.",
    highlights: [
      "Detection and alarm integration",
      "Suppression planning and layout",
      "Facility risk reduction",
    ],
  },
  {
    slug: "building-management-system",
    title: "BMS (Building Management System)",
    category: "Building Automation",
    location: "Bangladesh",
    image: "/bms-building-management.png",
    imageAlt: "Building management system engineer monitoring building controls",
    shortDescription: "Smart building automation to improve monitoring, control, and operational efficiency.",
    description:
      "Our Building Management Systems help operators monitor, automate, and optimize environmental and mechanical performance. From HVAC coordination to alerting and scheduling, the systems support smarter, safer, and more efficient building operations.",
    highlights: [
      "Energy and equipment monitoring",
      "Automated control logic",
      "Operational optimization",
    ],
  },
  {
    slug: "cleanroom-panels",
    title: "Cleanroom Panels",
    category: "Controlled Environments",
    location: "Bangladesh",
    image: "/product-cleanroom.jpg",
    imageAlt: "Sterile cleanroom corridor",
    shortDescription: "High-performance cleanroom panels for contamination-controlled, efficient spaces.",
    description:
      "Our cleanroom systems are built for industries where contamination control, airflow management, and structural integrity are critical. From modular panels to complete environmental solutions, we help create reliable cleanroom workflows.",
    highlights: [
      "Modular cleanroom design",
      "Contamination control support",
      "Precision-fitted wall systems",
    ],
  },
  {
    slug: "american-air-filter",
    title: "American Air Filter",
    category: "Filtration",
    location: "Bangladesh",
    image: "/filter.png",
    imageAlt: "Close-up of an air filter",
    shortDescription: "Reliable filtration products for cleaner, healthier indoor air and system protection.",
    description:
      "Our air filtration solutions help maintain indoor air quality while protecting mechanical systems from dust, contaminants, and operational stress. The result is cleaner air, better performance, and longer service life for critical systems.",
    highlights: [
      "Indoor air quality support",
      "Dust and contaminant control",
      "System protection and efficiency",
    ],
  },
  {
    slug: "industrial-air-filters",
    title: "Industrial Air Filters",
    category: "Industrial Filtration",
    location: "Bangladesh",
    image: "/industrial-air-filter.png",
    imageAlt: "Industrial air filter panels for heavy-duty filtration",
    shortDescription: "Durable air filtration solutions designed for heavy-duty industrial applications.",
    description:
      "Industrial air filters are essential for maintaining airflow quality, reducing airborne particles, and protecting plant operations. Cold Craft supplies filtration solutions engineered to meet the needs of demanding industrial environments and maintenance schedules.",
    highlights: [
      "Heavy-duty industrial filtration",
      "Reduced particulate contamination",
      "System longevity and upkeep",
    ],
  },
];
