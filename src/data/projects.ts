import mauveHero from "@/assets/mauve-hero-2.webp";
import mauveSketches from "@/assets/mauve-sketches.webp";
import mauveTaglineTee from "@/assets/mauve-tagline-tee.webp";
import mauveLogoMark from "@/assets/mauve-logo-mark.webp";
import mauveLogoVariations from "@/assets/mauve-logo-variations.webp";
import mauvePalette from "@/assets/mauve-palette.webp";
import mauveShortsTee from "@/assets/mauve-shorts-tee.webp";
import mauveCapHoodie from "@/assets/mauve-cap-hoodie.webp";
import mauveBagHangers from "@/assets/mauve-bag-hangers.webp";
import mauvePattern from "@/assets/mauve-pattern.webp";
import amalaHero from "@/assets/amala-hero.png";
import amalaLogo from "@/assets/amala-logo.png";
import amalaColors from "@/assets/amala-colors.png";
import fadHero from "@/assets/fad-hero.png";
import fadBusinessCard from "@/assets/fad-businesscard.png";
import fadSocial from "@/assets/fad-social.png";
import fadTruck from "@/assets/fad-truck.png";
import firmlogsHero from "@/assets/firmlogs-hero-2.webp";
import firmlogsSketches from "@/assets/firmlogs-sketches.webp";
import firmlogsLogoWood from "@/assets/firmlogs-logo-wood.webp";
import firmlogsPalette from "@/assets/firmlogs-palette.webp";
import firmlogsPosters from "@/assets/firmlogs-posters.webp";
import firmlogsToteCards from "@/assets/firmlogs-tote-cards.webp";
import firmlogsLaptop from "@/assets/firmlogs-laptop.webp";
import firmlogsSignageLetterhead from "@/assets/firmlogs-signage-letterhead.webp";
import firmlogsModel from "@/assets/firmlogs-model.webp";
import firmlogsBedroomCabinet from "@/assets/firmlogs-bedroom-cabinet.webp";
import nextgenHero from "@/assets/nextgen-hero-2.webp";
import nextgenSketches from "@/assets/nextgen-sketches.webp";
import nextgenLogoMark from "@/assets/nextgen-logo-mark.webp";
import nextgenPalette from "@/assets/nextgen-palette.webp";
import nextgenBillboard from "@/assets/nextgen-billboard.webp";
import nextgenLogoGridSignage from "@/assets/nextgen-logo-grid-signage.webp";
import nextgenTeeCap from "@/assets/nextgen-tee-cap.webp";
import nextgenReceiptIdCard from "@/assets/nextgen-receipt-idcard.webp";
import nextgenBusinessCardLetterhead from "@/assets/nextgen-businesscard-letterhead.webp";
import nextgenPosters from "@/assets/nextgen-posters.webp";
import mayaLuxeHero from "@/assets/maya-luxe-hero.png";
import mayaLuxeTypography from "@/assets/maya-luxe-typography.png";
import mayaLuxeSocial from "@/assets/maya-luxe-social.png";
import okeowoHero from "@/assets/okeowo-hero.png";
import okeowoLogo from "@/assets/okeowo-logo.png";
import okeowoSocial from "@/assets/okeowo-social.png";
import okeowoTote from "@/assets/okeowo-tote.png";
import roseviewHero from "@/assets/roseview-hero.png";
import roseviewBusinessCard from "@/assets/roseview-businesscard.png";
import roseviewSocial from "@/assets/roseview-social.png";
import revionHero from "@/assets/revion-hero.png";
import revionCollage from "@/assets/revion-collage.png";
import revionAppIcon from "@/assets/revion-appicon.png";
import revionBillboard from "@/assets/revion-billboard.png";
import efficiencyLegalHero from "@/assets/efficiency-legal-hero.jpg";
import efficiencyLegalBusinessCard from "@/assets/efficiency-legal-businesscard.jpg";
import efficiencyLegalPatterns from "@/assets/efficiency-legal-patterns.png";
import efficiencyLegalEnvelope from "@/assets/efficiency-legal-envelope.png";
import alderStoneHero from "@/assets/alder-stone-hero.png";
import alderStoneLogo from "@/assets/alder-stone-logo.png";
import alderStoneColors from "@/assets/alder-stone-colors.png";
import brReformerMockup from "@/assets/br-reformer-mockup.webp";
import localrankMockup from "@/assets/localrank-mockup.webp";
import mayaMockup from "@/assets/maya-mockup.webp";
import dausalMockup from "@/assets/dausal-mockup.webp";
import geowyse from "@/assets/work-geowyse.jpg";

export type Category = "branding" | "website";

export interface CaseStudy {
  industry: string;
  overview: string;
  challenge: string;
  solution: string;
  designExploration?: string;
  logoConcept?: { image: string; note: string };
  colorPalette?: { image: string; note: string };
  gallery: string[];
}

export interface Project {
  slug: string;
  name: string;
  client: string;
  description: string;
  category: Category;
  year: string;
  image: string;
  alt: string;
  services: string[];
  url?: string;
  comingSoon?: boolean;
  caseStudy?: CaseStudy;
  featured?: boolean;
  spotlight?: boolean;
}

export const projects: Project[] = [
  {
    slug: "mauve",
    name: "Mauve",
    client: "Mauve",
    description: "A confident identity for a premium activewear label built around movement and simplicity.",
    category: "branding",
    year: "2025",
    featured: true,
    image: mauveHero,
    alt: "The Mauve wave-form logo mark glowing against a dark background",
    services: ["Brand strategy", "Identity", "Packaging"],
    caseStudy: {
      industry: "Activewear & Performance Apparel",
      overview:
        "Mauve makes performance apparel, shorts, tees, and accessories, for people who train seriously but don't want to look like they're wearing a jersey. I built the full identity and packaging system.",
      challenge:
        "Activewear is crowded with brands shouting logos across the chest. Mauve needed to feel premium and minimal, closer to fashion than sportswear, without losing performance credibility.",
      solution:
        "A wave-form 'M' mark abstracted from motion, paired with a dusty, mauve-led palette pulled from the brand's own name, and a wordmark built with soft, rounded geometry that stays confident at the size of a hem tag.",
      designExploration: mauveSketches,
      logoConcept: {
        image: mauveLogoMark,
        note: "The mark is a repeating wave, three connected strokes reading as an M while suggesting motion and rhythm, simple enough to work stitched, embroidered, or printed at any scale.",
      },
      colorPalette: {
        image: mauvePalette,
        note: "Deep Plum, Lavender Mist, Dusty Rose, and Misty Blue, a palette that traces back to the mauve dye first drawn from the mallow plant.",
      },
      gallery: [
        mauveTaglineTee,
        mauveLogoVariations,
        mauveShortsTee,
        mauveCapHoodie,
        mauveBagHangers,
        mauvePattern,
      ],
    },
  },
  {
    slug: "amala-on-the-go",
    name: "Amala On The Go",
    client: "Amala On The Go",
    description: "A complete identity for a Nigerian food brand serving customers in Toronto.",
    category: "branding",
    year: "2025",
    image: amalaHero,
    alt: "Two bowls of amala and stew beside the Amala On The Go logo mark",
    services: ["Identity", "Brand guidelines", "Social assets"],
    caseStudy: {
      industry: "Food & Beverage",
      overview:
        "Amala On The Go brings Nigerian food to customers across Toronto. I built the logo, the full identity, and the guidelines that keep it consistent.",
      challenge:
        "The food was authentic, but the brand didn't yet look like it belonged next to the city's established restaurants.",
      solution:
        "A visual system built around the colour and warmth of the food itself, applied consistently across packaging, social, and print.",
      gallery: [amalaLogo, amalaColors],
    },
  },
  {
    slug: "fad-global-resources",
    name: "FAD Global Resources",
    client: "FAD Global Resources Ltd",
    description: "An established, dependable identity for a logistics and business resources company.",
    category: "branding",
    year: "2024",
    featured: true,
    spotlight: true,
    image: fadHero,
    alt: "Branded T-shirt on a mannequin showing the FAD Global Resources logo",
    services: ["Identity", "Brand guidelines", "Stationery"],
    caseStudy: {
      industry: "Logistics & Business Resources",
      overview:
        "FAD Global Resources moves goods and manages business resourcing across Nigeria. The brand needed to carry the same weight on the side of a haulage truck as it does on a boardroom proposal.",
      challenge:
        "Their existing materials were inconsistent from one document, and one truck, to the next, which made the business look smaller and less established than it was.",
      solution:
        "A tightened monogram built to read at a glance from a moving vehicle, a confident red-and-cream palette, and a stationery system built to be used correctly without a designer in the room.",
      gallery: [fadTruck, fadSocial, fadBusinessCard],
    },
  },
  {
    slug: "firmlogs",
    name: "Firmlogs Designs",
    client: "Firmlogs Designs",
    description: "A refined identity for a custom furniture design studio.",
    category: "branding",
    year: "2024",
    featured: true,
    spotlight: true,
    image: firmlogsHero,
    alt: "Dark wood-panelled hallway with the Firmlogs Designs gold logo mark",
    services: ["Identity", "Brand guidelines", "Social assets"],
    caseStudy: {
      industry: "Furniture & Interior Design",
      overview:
        "Firmlogs Designs is a premium furniture and interior design company specialising in bespoke furniture, interior styling, and space transformation, built around exceptional craftsmanship and carefully selected materials.",
      challenge:
        "The previous identity relied on a complex visual structure with multiple graphic elements, which limited scalability and reduced recognition across modern applications.",
      solution:
        "A cleaner, more distinctive mark that reflects the brand's premium positioning, paired with a walnut-and-sandstone palette pulled from the materials the studio actually works with.",
      designExploration: firmlogsSketches,
      logoConcept: {
        image: firmlogsLogoWood,
        note: "The mark started as a sketch built from the brand's own words, firm, logs, wood, before resolving into a single F monogram with a soft, organic curve.",
      },
      colorPalette: {
        image: firmlogsPalette,
        note: "Rich Walnut, Soft Ivory, Warm Sandstone, and Heritage Cedar, pulled straight from the materials the studio builds with.",
      },
      gallery: [
        firmlogsPosters,
        firmlogsToteCards,
        firmlogsLaptop,
        firmlogsSignageLetterhead,
        firmlogsModel,
        firmlogsBedroomCabinet,
      ],
    },
  },
  {
    slug: "next-generation-builders",
    name: "Next Generation Builders",
    client: "Next Generation Builders",
    description: "A bold, structured identity for a construction firm built on trust and long-term thinking.",
    category: "branding",
    year: "2024",
    featured: true,
    spotlight: true,
    image: nextgenHero,
    alt: "Next-Generation Builders logo and wordmark on a dark blue background",
    services: ["Identity", "Signage", "Print collateral"],
    caseStudy: {
      industry: "Construction & Real Estate Development",
      overview:
        "Next-Generation Builders Ltd delivers high-quality, well-planned residential and commercial developments, built on a vision of creating spaces that meet today's needs while preparing for the future through thoughtful planning, quality craftsmanship, and dependable execution.",
      challenge:
        "The company serves everyone from first-time buyers to corporate investors, which meant the identity needed to read as bold and architectural without losing the trust a family looks for when buying their first home.",
      solution:
        "A bold architectural ‘N’ built from a fortified tower silhouette, symbolising strength and stability, paired with a navy-and-blue palette, mint accents, and the line ‘Where Innovation Meets Shelter.’",
      designExploration: nextgenSketches,
      logoConcept: {
        image: nextgenLogoMark,
        note: "The mark reads as an N built like a fortified tower, its crenellated top signalling strength and permanence, with a diagonal cut suggesting forward motion.",
      },
      colorPalette: {
        image: nextgenPalette,
        note: "Dark Blue, Pure White, Blue, Mint Green, and Mint Purple, a confident palette built for a brand that wants to feel established and forward-looking at once.",
      },
      gallery: [
        nextgenBillboard,
        nextgenLogoGridSignage,
        nextgenTeeCap,
        nextgenReceiptIdCard,
        nextgenBusinessCardLetterhead,
        nextgenPosters,
      ],
    },
  },
  {
    slug: "maya-luxe-homes",
    name: "Maya Luxe Homes",
    client: "Maya Luxe Homes",
    description: "A warm, elevated identity for an interior design studio.",
    category: "branding",
    year: "2023",
    image: mayaLuxeHero,
    alt: "Warm, dimly lit living room interior with the Maya Luxe Homes logo",
    services: ["Identity", "Art direction"],
    caseStudy: {
      industry: "Interior Design",
      overview:
        "Maya Luxe Homes designs residential interiors in Abuja, covering everything from space planning to styling. The brand needed to feel as considered as the rooms it designs.",
      challenge:
        "Interior design brands tend to default to the same gold-and-serif look, which made Maya hard to tell apart from every other studio online.",
      solution:
        "A warm neutral palette pulled from the studio's own material choices, a quiet serif wordmark, and a photography direction built around low, ambient light.",
      gallery: [mayaLuxeTypography, mayaLuxeSocial],
    },
  },
  {
    slug: "okeowo-threads",
    name: "Okeowo Threads",
    client: "Okeowo Threads",
    description: "A refined identity for a Nigerian fashion label built around craftsmanship and provenance.",
    category: "branding",
    year: "2023",
    featured: true,
    spotlight: true,
    image: okeowoHero,
    alt: "Model in a patterned dress and hat beneath the Okeowo Threads logo",
    services: ["Identity", "Packaging", "Naming"],
    caseStudy: {
      industry: "Fashion & Textiles",
      overview:
        "Okeowo Threads works with traditional Nigerian textiles reimagined for modern fashion, sold in-store and online. I built the identity and the tagging system that travels with each piece.",
      challenge:
        "Buyers wanted to know the story behind the fabric, and the brand had no consistent way to tell it at the point of sale.",
      solution:
        "A circular gold-on-teal mark drawn to feel like a woven motif, a tagging system that carries maker and fabric details, and packaging built to feel considered at a boutique price point.",
      gallery: [okeowoLogo, okeowoSocial, okeowoTote],
    },
  },
  {
    slug: "roseview-realty",
    name: "Roseview Realty",
    client: "Roseview Realty",
    description: "A confident identity for a residential real estate agency.",
    category: "branding",
    year: "2023",
    image: roseviewHero,
    alt: "Roseview Realty logo sign mounted on a building corner against the sky",
    services: ["Identity", "Signage", "Listing templates"],
    caseStudy: {
      industry: "Real Estate",
      overview:
        "Roseview Realty sells and lets residential property in a competitive local market. The brand needed to stand out on a listing page without shouting.",
      challenge:
        "Most agencies in the area use the same rounded logo and blue-and-white palette, so nothing stood out at a glance.",
      solution:
        "A structural wordmark with a distinct silhouette, and a palette that photographs well against real listing photography instead of fighting it.",
      gallery: [roseviewBusinessCard, roseviewSocial],
    },
  },
  {
    slug: "revion",
    name: "Revion",
    client: "Revion",
    description: "A vibrant, digital-first identity for a product analytics platform.",
    category: "branding",
    year: "2023",
    image: revionHero,
    alt: "Tote bag with the colourful gradient Revion logo mark in warm light",
    services: ["Identity", "App icon", "Design system"],
    caseStudy: {
      industry: "Technology & Product Analytics",
      overview:
        "Revion is a product analytics app built around speed and clarity for teams making fast decisions. The brand needed to feel energetic without losing precision.",
      challenge:
        "Analytics tools tend to land either sterile and corporate or loud and consumer-facing, and Revion needed to sit convincingly between the two.",
      solution:
        "A gradient-led mark designed for a small app icon first and scaled up from there, with a voice built around three words: clarity, speed, intelligence.",
      gallery: [revionCollage, revionBillboard, revionAppIcon],
    },
  },
  {
    slug: "efficiency-legal",
    name: "Efficiency Legal",
    client: "Efficiency Legal",
    description: "A calm, precise identity for a legal practice built to modernise how trust is communicated.",
    category: "branding",
    year: "2022",
    featured: true,
    image: efficiencyLegalHero,
    alt: "Efficiency Legal signage mounted on the exterior of an office building",
    services: ["Identity", "Document templates"],
    caseStudy: {
      industry: "Legal Services",
      overview:
        "Efficiency Legal advises individuals and small businesses in Nigeria. Clients often meet a lawyer at a stressful moment, and the brand needed to earn trust fast without leaning on legal cliché.",
      challenge:
        "Legal branding defaults to navy, gold, and Latin mottos, which reads as expensive and distant rather than dependable.",
      solution:
        "A scales-of-justice mark reduced to its simplest geometric form, a warm gold-and-black palette, and a consistent stationery system, from envelopes to signage, that reads as precise rather than intimidating.",
      gallery: [efficiencyLegalBusinessCard, efficiencyLegalPatterns, efficiencyLegalEnvelope],
    },
  },
  {
    slug: "alder-stone",
    name: "Alder & Stone",
    client: "Alder & Stone",
    description: "A material-led identity for a furniture and interiors studio.",
    category: "branding",
    year: "2022",
    image: alderStoneHero,
    alt: "Dark, moody armchair photography with the Alder & Stone wordmark",
    services: ["Identity", "Packaging", "Art direction"],
    caseStudy: {
      industry: "Furniture & Interiors",
      overview:
        "Alder & Stone designs furniture around the materials it's built from. The brand needed to put that material honesty front and centre.",
      challenge: "Furniture brands often photograph beautifully but say very little about why a piece is worth its price.",
      solution:
        "A textural identity system built from the studio's own material swatches, with a wordmark restrained enough to stay out of the way of the work.",
      gallery: [alderStoneLogo, alderStoneColors],
    },
  },
  {
    slug: "br-reformer-studios",
    name: "BR Reformer Studios",
    client: "BR Reformer Studios",
    description: "Identity and website for a London-based reformer Pilates studio.",
    category: "website",
    year: "2026",
    featured: true,
    spotlight: true,
    image: brReformerMockup,
    alt: "Laptop on a purple couch showing the BR Reformer Studios website homepage",
    services: ["Web design", "Booking system"],
    url: "https://brreformerstudios.com",
  },
  {
    slug: "localrank",
    name: "LocalRank",
    client: "LocalRank",
    description: "A marketing site for a local visibility and SEO platform.",
    category: "website",
    year: "2025",
    featured: true,
    spotlight: true,
    image: localrankMockup,
    alt: "Laptop on someone's lap showing the LocalRank website homepage",
    services: ["Web design", "Product marketing"],
    url: "https://localrank.yusufmayowa.com",
  },
  {
    slug: "maya",
    name: "Maya",
    client: "Maya Luxe Homes",
    description: "Website design and build for an interior design studio in Abuja.",
    category: "website",
    year: "2025",
    featured: true,
    image: mayaMockup,
    alt: "Laptop on a burnt-orange chair showing the Maya Luxe Homes website homepage",
    services: ["Web design"],
    url: "https://maya.yusufmayowa.com",
  },
  {
    slug: "dausal",
    name: "Dausal",
    client: "Dausal",
    description: "A conversion-focused site for an auto repair and maintenance shop in Lagos.",
    category: "website",
    year: "2025",
    featured: true,
    image: dausalMockup,
    alt: "Laptop on a dark table showing the Dausal auto repair website homepage",
    services: ["Web design"],
    url: "https://dausal.yusufmayowa.com",
  },
  {
    slug: "geowyse",
    name: "GeoWyse Consult",
    client: "GeoWyse Consult",
    description: "A dark, evidence-led site for a geotechnical consultancy.",
    category: "website",
    year: "2025",
    image: geowyse,
    alt: "Laptop on a linen sofa showing the dark GeoWyse Consult website homepage",
    services: ["Web design", "Copy structure"],
    url: "https://geowyse.yusufmayowa.com",
    comingSoon: true,
  },
];

export const brandingProjects = projects.filter((p) => p.category === "branding");
export const websiteProjects = projects.filter((p) => p.category === "website");
export const featuredBrandingProjects = brandingProjects.filter((p) => p.featured);
export const featuredWebsiteProjects = websiteProjects.filter((p) => p.featured);
export const spotlightBrandingProjects = featuredBrandingProjects.filter((p) => p.spotlight);
export const spotlightWebsiteProjects = featuredWebsiteProjects.filter((p) => p.spotlight);

/**
 * Interleaves branding and website projects proportionally so a mixed view
 * reads as one curated feed instead of two grouped blocks.
 */
function interleave(branding: Project[], website: Project[]): Project[] {
  const groups: Record<Category, Project[]> = { branding, website };
  const counts: Record<Category, number> = { branding: 0, website: 0 };
  const totals: Record<Category, number> = { branding: branding.length, website: website.length };
  const result: Project[] = [];

  for (let i = 0; i < branding.length + website.length; i++) {
    let best: Category | null = null;
    let bestScore = Infinity;
    for (const category of Object.keys(groups) as Category[]) {
      if (counts[category] >= totals[category]) continue;
      const score = (counts[category] + 1) / totals[category];
      if (score < bestScore) {
        bestScore = score;
        best = category;
      }
    }
    if (!best) break;
    result.push(groups[best][counts[best]]);
    counts[best] += 1;
  }

  return result;
}

export function getMixedProjects(): Project[] {
  return interleave(brandingProjects, websiteProjects);
}

/**
 * The 10 published projects (6 branding, 4 website) shown on the Works
 * archive, interleaved so the grid reads as one curated feed.
 */
export function getFeaturedProjects(): Project[] {
  return interleave(featuredBrandingProjects, featuredWebsiteProjects);
}

/**
 * The 6 strongest projects (4 branding, 2 website) spotlighted on the
 * homepage, interleaved so the grid reads as one curated feed.
 */
export function getSpotlightProjects(): Project[] {
  return interleave(spotlightBrandingProjects, spotlightWebsiteProjects);
}

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getCaseStudyNeighbours(slug: string) {
  const list = brandingProjects;
  const i = list.findIndex((p) => p.slug === slug);
  if (i === -1) return { next: undefined, related: [] as Project[] };
  return {
    next: list[(i + 1) % list.length],
    related: [list[(i + 1) % list.length], list[(i + 2) % list.length]],
  };
}
