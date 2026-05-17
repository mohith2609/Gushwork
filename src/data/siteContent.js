const ASSET = "/site-assets";

// Shared asset paths used by the template sections.
export const assets = {
  logo: `${ASSET}/brand/mangalam-logo.png`,
  navChevron: `${ASSET}/brand/nav-chevron.svg`,
  arrow: `${ASSET}/icon-arrow-right.svg`,
  caret: `${ASSET}/icon-caret-right.svg`,
  check: `${ASSET}/icon-check.svg`,
  quote: `${ASSET}/icon-quote.svg`,
  phone: `${ASSET}/icon-phone.svg`,
  downloadPrimary: `${ASSET}/icon-download-primary.png`,
  downloadFile: `${ASSET}/icon-download-file.png`,
  location: `${ASSET}/icon-location.svg`,
  mail: `${ASSET}/icon-mail.svg`,
  support: `${ASSET}/icon-support.svg`,
  linkedin: `${ASSET}/icon-linkedin.svg`,
  x: `${ASSET}/icon-x.svg`,
  instagram: `${ASSET}/icon-instagram.svg`,
  bis: `${ASSET}/certification-bis.svg`,
  isi: `${ASSET}/certification-isi.svg`,
  ce: `${ASSET}/certification-ce.svg`,
  partner: `${ASSET}/partner-euroflex.png`,
  product: `${ASSET}/product-worksite-netting.png`,
  factory: `${ASSET}/factory-floor-specialist.jpg`,
  engineers: `${ASSET}/plant-engineers-review.jpg`,
  featureFlex: `${ASSET}/feature-flexibility.jpg`,
  featureFusion: `${ASSET}/feature-fusion-welding.jpg`,
  featureLife: `${ASSET}/feature-long-life.jpg`,
};

// Reused process-card copy keeps each step aligned with the Figma content.
const processCopy = {
  title: "High-Grade Raw Material Selection",
  text: "Vacuum sizing tanks ensure precise outer diameter while internal pressure maintains perfect roundness and wall thickness uniformity.",
  points: ["PE100 grade material", "Optimal molecular weight distribution"],
};

// Main page copy and section data. Templates read from here instead of hard-coding text.
export const siteContent = {
  nav: {
    links: ["About Us"],
    products: [
      { label: "Two For One Twister", path: "/product1" },
      { label: "Two For One Twister", path: "/product2" },
      { label: "Two For One Twister", path: "/product3" },
    ],
  },
  product: {
    breadcrumb: "Two For One Twister",
    title: "Premium HDPE Pipes & Coils for Modern Infrastructure",
    certifications: [
      { icon: assets.bis, label: "BIS Certified" },
      { icon: assets.isi, label: "ISO Certified" },
      { icon: assets.ce, label: "CE Certified" },
    ],
    highlights: [
      "Leak-Proof Fusion Joints",
      "Chemical Resistance",
      "50+ Year Service Life",
      "Flexible Installation",
      "Flexible Installation",
    ],
    gallery: [assets.product, assets.factory, assets.engineers, assets.product, assets.factory, assets.engineers],
    price: {
      range: "&#8377;4,80,000 - 7,90,000",
      shipping: "Shipping: 6-12 days",
      returns: "Returns: If returned within 7 days",
      note: "Certifications: ISO Certified, BIS Certified",
    },
  },
  specs: {
    title: "Technical Specifications at a Glance",
    subtitle: "Comprehensive performance data demonstrating our commitment to quality and engineering excellence.",
    rows: [
      ["Pipe Diameter Range", "20mm to 1600mm (1/4&quot; to 63&quot;)"],
      ["Pressure Ratings", "PN 2.5, PN 4, PN 6, PN 8, PN 10, PN 12.5, PN 16"],
      ["Standard Dimension Ratio", "SDR 33, SDR 26, SDR 21, SDR 17, SDR 13.6, SDR 11"],
      ["Operating Temperature", "-40&deg; to +60&deg;C (-40&deg; to +140&deg;F)"],
      ["Service Life", "50+ Years (at 20 degrees C, PN 10)"],
      ["Material Density", "0.95 - 0.96 g/cm&sup3;"],
      ["Certification Standards", "IS 5834, ISO 4427, ASTM D3035"],
      ["Joint Type", "Butt fusion, Electrofusion, Mechanical"],
      ["Coil Lengths", "Up to 500mm (for smaller diameters)"],
    ],
  },
  benefits: {
    title: "Built to Last. Engineered to Perform.",
    subtitle: "From municipal water lines to industrial transport, Mangalam delivers durable HDPE piping solutions for long-term infrastructure projects.",
    description: "HDPE pipes resist a wide range of chemicals, acids, and alkalis. Unlike metal pipes, they won't corrode or rust, ensuring pure water quality and extended service life in aggressive environments.",
    cards: [
      { title: "Superior Chemical Resistance", icon: "bag" },
      { title: "Exceptional Flexibility & Durability", image: assets.featureFlex },
      { title: "Leak-Proof Fusion Welding", image: assets.featureFusion },
      { title: "Cost-Effective Long-Term Solution", image: assets.featureLife },
      { title: "Environmentally Sustainable", image: assets.featureLife },
      { title: "Certified Quality Assurance", image: assets.featureLife },
    ],
  },
  faq: {
    titleA: "Frequently ",
    titleB: "Asked Questions",
    answer: "It is designed to cut various types of sheet metal with precision, allowing for intricate designs and shapes that are essential in manufacturing processes.",
    questions: [
      "What is the purpose of a laser cutter for sheet metal?",
      "What are the benefits of using aluminum tubing in manufacturing?",
      "How is aluminum tubing produced?",
      "What are the common applications of aluminum tubing?",
      "Can aluminum tubing be customized?",
    ],
  },
  applications: {
    title: "Versatile Applications Across Industries",
    subtitle: "From technical textiles to packaging materials, our precision-engineered machinery delivers superior performance across diverse applications.",
    cardTitle: "Fishnet Manufacturing",
    cardText: "High-performance twisting solutions for packaging yarn, strapping materials, and reinforcement threads used in modern packaging applications.",
    images: [assets.product, assets.factory, assets.engineers, assets.product],
  },
  process: {
    title: "Manufacturing Process That Ensures Excellence",
    subtitle: "Our state-of-the-art production technology ensures consistent quality, optimal material properties, and dimensional accuracy in every pipe we manufacture.",
    steps: [
      { id: "raw-material", label: "Raw Material", image: assets.product, ...processCopy },
      { id: "extrusion", label: "Extrusion", image: assets.factory, ...processCopy },
      { id: "cooling", label: "Cooling", image: assets.engineers, ...processCopy },
      { id: "sizing", label: "Sizing", image: assets.product, ...processCopy },
      { id: "quality-control", label: "Quality Control", image: assets.engineers, ...processCopy },
      { id: "marking", label: "Marking", image: assets.product, ...processCopy },
      { id: "cutting", label: "Cutting", image: assets.factory, ...processCopy },
      { id: "packaging", label: "Packaging", image: assets.engineers, ...processCopy },
    ],
  },
  testimonials: {
    title: "Trusted Performance. Proven Results.",
    subtitle: "Infrastructure teams rely on Mangalam HDPE pipes for consistent quality, certified manufacturing, and dependable field performance.",
    cards: [
      ["Revolutionized our FIBC production efficiency!", "Meera Industries' TFO machines have revolutionized our FIBC production efficiency. The precision engineering delivers the consistent yarn strength critical for our bulk container applications.", "Johann Mueller", "Production Director"],
      ["Revolutionized our FIBC production efficiency!", "Meera Industries' TFO machines have revolutionized our FIBC production efficiency. The precision engineering delivers the consistent yarn strength critical for our bulk container applications.", "Johann Mueller", "Production Director"],
      ["Excellent support for specialized applications.", "Their pipe quality and delivery reliability have made project planning smoother for our installation teams.", "Carlos Mendoza", "Operations Manager"],
      ["Excellent support for specialized applications.", "Their pipe quality and delivery reliability have made project planning smoother for our installation teams.", "Carlos Mendoza", "Operations Manager"],
      ["Provides the exact specifications we need!", "For our technical textile applications, Meera's specialized machinery provides the exact specifications we need. Their understanding of automotive textile requirements is exceptional.", "Rajesh Kumar", "Manufacturing Head"],
      ["Provides the exact specifications we need!", "For our technical textile applications, Meera's specialized machinery provides the exact specifications we need. Their understanding of automotive textile requirements is exceptional.", "Rajesh Kumar", "Manufacturing Head"],
    ],
  },
  solutions: [
    ["HDPE Fittings & Accessories", "Complete range of electrofusion and butt fusion fittings, including elbows, tees, reducers, and couplers for seamless pipe connections.", assets.factory],
    ["Professional Installation Services", "Expert installation and fusion welding services ensuring optimal system performance, compliance with standards, and long-term reliability.", assets.engineers],
    ["PE-RT Heating Pipes", "Polyethylene of Raised Temperature resistance pipes ideal for underfloor heating, radiator connections, and hot water applications.", assets.factory],
  ],
};
