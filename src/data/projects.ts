export type Project = {
  slug: string;
  title: string;
  location: string;
  category: string;
  image: string;
  imageAlt: string;
  shortDescription: string;
  description: string;
  highlights: string[];
};

export const projects: Project[] = [
  {
    slug: "united-medical-college-hospital",
    title: "United Medical College Hospital Ltd.",
    location: "Dhaka, Bangladesh",
    category: "Healthcare HVAC",
    image: "/product-cleanroom.jpg",
    imageAlt: "Clean corridor and HVAC installation in a medical facility",
    shortDescription: "Advanced HVAC and controlled-environment engineering for a modern academic hospital setting.",
    description:
      "This hospital project required a carefully designed ventilation and climate control system to support patient comfort, staff efficiency, and operational reliability. Cold Craft delivered a coordinated solution covering air management, ducting, and clean corridor coordination for a high-performance healthcare environment.",
    highlights: [
      "Health facility HVAC integration",
      "Clean corridor planning",
      "Energy-efficient air distribution",
    ],
  },
  {
    slug: "acme-pharmaceuticals-primary-project",
    title: "ACME Pharmaceuticals Ltd.",
    category: "Pharmaceutical HVAC",
    location: "Bangladesh",
    image: "/acme-pharmaceuticals-ltd.png",
    imageAlt: "HVAC duct installation at ACME Pharmaceuticals facility",
    shortDescription: "Primary project installation focusing on clean, reliable air handling and process support.",
    description:
      "The ACME Pharmaceuticals project involved the supply and installation of robust HVAC systems to support environmental control and process integrity. Our team focused on system reliability, thermal efficiency, and consistent airflow performance for a regulated manufacturing environment.",
    highlights: [
      "Pharma-grade air systems",
      "Duct installation and balancing",
      "Operational reliability",
    ],
  },
  {
    slug: "incepta-pharmaceuticals",
    title: "Incepta Pharmaceuticals Ltd.",
    category: "Pharmaceutical Systems",
    location: "Bangladesh",
    image: "/acme-pharmaceuticals-ltd-2.png",
    imageAlt: "Industrial HVAC installation and ductwork in a pharmaceutical project",
    shortDescription: "Large-scale pharmaceutical installation delivering durable, precision-controlled systems.",
    description:
      "Incepta Pharmaceuticals required a high-capacity system that could support production continuity while maintaining strict quality standards. Cold Craft designed and installed an integrated HVAC and ventilation solution that balanced operational performance with long-term durability.",
    highlights: [
      "Industrial ventilation design",
      "Process support systems",
      "Cleanroom-ready coordination",
    ],
  },
  {
    slug: "material-bank",
    title: "Material Bank",
    category: "Industrial Air Management",
    location: "Bangladesh",
    image: "/product-filter.jpg",
    imageAlt: "Industrial HVAC and filtration system components in a material bank facility",
    shortDescription: "Efficient ventilation and filtration engineering for a technical material handling environment.",
    description:
      "This project focused on suitable air handling and filtration for a multi-zone material-handling environment. The installed design improves climate control, reduces airborne contaminants, and supports seamless operational continuity within the facility.",
    highlights: [
      "Ventilation planning",
      "Air filtration support",
      "Operational continuity",
    ],
  },
  {
    slug: "pg-hospital",
    title: "PG Hospital",
    category: "Healthcare Engineering",
    location: "Bangladesh",
    image: "/hero-hvac.jpg",
    imageAlt: "Hospital HVAC installation and system integration work",
    shortDescription: "Hospital infrastructure modernization with robust HVAC and ventilation support.",
    description:
      "Cold Craft supported a healthcare upgrade with a reliable ventilation and air distribution layout built for comfort, hygiene, and energy efficiency. The project delivered refined temperature control and smoother operation for a busy hospital environment.",
    highlights: [
      "Healthcare ventilation design",
      "Temperature and airflow control",
      "Sustainable system operation",
    ],
  },
  {
    slug: "global-capsule",
    title: "Global Capsule Ltd.",
    category: "Industrial HVAC",
    location: "Bangladesh",
    image: "/global-capsule-ltd.png",
    imageAlt: "Global Capsule industrial project with HVAC equipment and ducting work",
    shortDescription: "Industrial HVAC and process ventilation systems designed for smooth production performance.",
    description:
      "Global Capsule required durable, well-integrated system support for an industrial environment. Our work included design coordination, supply, and installation of industrial ventilation and HVAC components to improve operating efficiency and reliability across the facility.",
    highlights: [
      "Industrial process ventilation",
      "Mechanical supply and fit-out",
      "Production performance support",
    ],
  },
  {
    slug: "beximco-pharmaceuticals",
    title: "Beximco Pharmaceuticals Ltd.",
    category: "Pharmaceutical Engineering",
    location: "Bangladesh",
    image: "/beximco-pharmaceuticals-ltd.png",
    imageAlt: "Pharmaceutical plant HVAC installation and controlled environment work",
    shortDescription: "Pharmaceutical facility infrastructure with reliable temperature and airflow control.",
    description:
      "This project involved the installation of HVAC and temperature control systems in a demanding production environment. We delivered a solution focused on operational dependability, hygiene standards, and long-term facility performance.",
    highlights: [
      "Pharma environment control",
      "Energy-conscious design",
      "System performance assurance",
    ],
  },
  {
    slug: "getwell-pharmaceuticals",
    title: "Getwell Pharmaceuticals Ltd.",
    category: "Pharmaceutical HVAC",
    location: "Bangladesh",
    image: "/getwell-pharmaceuticals-ltd.png",
    imageAlt: "Mechanical installation project at Getwell Pharmaceuticals",
    shortDescription: "Support systems for a modern pharmaceutical environment focused on clean airflow and efficiency.",
    description:
      "The Getwell Pharmaceuticals work demanded an installation strategy suited to controlled environments and production continuity. Our team delivered an efficient mechanical solution aligned with the site requirements and long-term support objectives.",
    highlights: [
      "Airflow control",
      "Mechanical installation",
      "Continuity-focused design",
    ],
  },
  {
    slug: "acme-pharmaceuticals-ventilation",
    title: "ACME Pharmaceuticals Ltd.",
    category: "Ventilation Systems",
    location: "Bangladesh",
    image: "/atlas-pharmaceuticals-ltd.png",
    imageAlt: "ACME industrial air handling installation and system setup",
    shortDescription: "Integrated ventilation and air-handling solution for an industrial pharma workflow.",
    description:
      "This ACME installation focused on effective ventilation and air movement across a dedicated production area. The completed layout improves process reliability and creates a safer, more consistent working environment for operators and systems alike.",
    highlights: [
      "Air handling support",
      "Process efficiency",
      "System visibility and control",
    ],
  },
  {
    slug: "atlas-pharmaceuticals",
    title: "Atlas Pharmaceuticals Ltd.",
    category: "HVAC & Refrigeration",
    location: "Bangladesh",
    image: "/product-chiller.jpg",
    imageAlt: "Atlas Pharmaceuticals HVAC and refrigeration project work",
    shortDescription: "Mechanical systems support for a modern pharmaceutical and processing environment.",
    description:
      "Atlas Pharmaceuticals required specialized engineering support that would handle both process requirements and environmental comfort. Cold Craft delivered a coordinated installation focused on long-term performance and dependable operation.",
    highlights: [
      "Mechanical system integration",
      "Temperature control",
      "Reliable operation",
    ],
  },
  {
    slug: "alien-pharmaceuticals",
    title: "Alien Pharmaceuticals Ltd.",
    category: "Cleanroom Support",
    location: "Bangladesh",
    image: "/product-fire.jpg",
    imageAlt: "Industrial facility installation and process air control work",
    shortDescription: "Comprehensive engineering support for a specialized pharmaceutical production environment.",
    description:
      "This project combined HVAC, process support, and operational planning to deliver a working environment better suited to controlled pharmaceutical manufacturing. Our recommendation and installation package balanced efficiency with site-specific operational requirements.",
    highlights: [
      "Specialized production support",
      "Controlled air management",
      "Performance-driven delivery",
    ],
  },
];
