import mauve from "@/assets/work-mauve.jpg";
import inpay from "@/assets/work-inpay.jpg";
import kanju from "@/assets/work-kanju.jpg";
import terra from "@/assets/work-terra.jpg";
import sable from "@/assets/work-sable.jpg";
import olori from "@/assets/work-olori.jpg";
import northbank from "@/assets/work-northbank.jpg";
import verre from "@/assets/work-verre.jpg";
import adire from "@/assets/work-adire.jpg";
import lumen from "@/assets/work-lumen.jpg";
import geowyse from "@/assets/work-geowyse.jpg";
import aeris from "@/assets/work-aeris.jpg";
import harvest from "@/assets/work-harvest.jpg";
import stride from "@/assets/work-stride.jpg";
import folio from "@/assets/work-folio.jpg";
import detailProcess from "@/assets/detail-process.jpg";
import detailSystem from "@/assets/detail-system.jpg";
import detailApplications from "@/assets/detail-applications.jpg";

export type Category = "branding" | "website";

export interface CaseStudy {
  overview: string;
  challenge: string;
  discovery: string;
  strategy: string;
  logo: string;
  identity: string;
  applications: string;
  outcome: string;
  results: { label: string; value: string }[];
  lessons: string;
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
  caseStudy?: CaseStudy;
}

export const galleryImages = {
  process: detailProcess,
  system: detailSystem,
  applications: detailApplications,
};

export const projects: Project[] = [
  {
    slug: "mauve",
    name: "Mauve",
    client: "Mauve Skin Co.",
    description: "A restrained identity for a skincare label built around clinical honesty.",
    category: "branding",
    year: "2025",
    image: mauve,
    alt: "Matte black Mauve skincare box with an embossed silver monogram held in warm light",
    services: ["Brand strategy", "Identity", "Packaging"],
    caseStudy: {
      overview:
        "Mauve formulates a nine-product skincare range sold direct to customers in Lagos and Abuja. They came in with a good formula, a loyal WhatsApp customer base, and packaging that looked like everyone else on the shelf. I handled positioning, the identity system, and the primary and secondary packaging.",
      challenge:
        "Their customers trusted the products but couldn't describe the brand to a friend. In a market where every competitor promises glow, Mauve needed to be recognisable at arm's length in a shop, and to stop competing on the same three adjectives.",
      discovery:
        "I sat in on twelve customer calls and read four months of order messages. The recurring phrase wasn't about glow — it was 'it actually did what it said'. That sentence became the brief. I also photographed twenty competitor boxes on a shelf; almost all were white, glossy, and pastel.",
      strategy:
        "Position Mauve as the honest one: no promises the formula can't keep. Visually, that meant going the opposite direction from the category — matte black instead of white, ingredient percentages on the front of the box, and a tone of voice that states facts and stops.",
      logo: "The wordmark is a modified grotesque with the stems squared off, drawn so it holds at 6mm on a sample sachet. The monogram is two overlapping planes — the layered barrier the range is built to protect. It survives a single-colour deboss, which was the real test.",
      identity:
        "One black, one bone, one graphite, and a percentage-driven type system. Ingredient data is set in the same size as the product name — a deliberate hierarchy decision that tells the customer what the brand thinks matters.",
      applications:
        "Primary cartons, sachets, unboxing insert cards, courier tape, and a set of shot templates so their in-house team could keep the photography consistent after handover.",
      outcome:
        "A brand that reads as a laboratory rather than a lifestyle. Every surface uses the same two typefaces and three colours, which made the retail rollout cheap to produce.",
      results: [
        { label: "Repeat purchase rate", value: "+34%" },
        { label: "Retail stockists gained", value: "18" },
        { label: "Rollout time", value: "7 weeks" },
      ],
      lessons:
        "The strongest positioning line came from a customer, not a workshop. I now read support transcripts before I open a sketchbook.",
    },
  },
  {
    slug: "inpay",
    name: "Inpay",
    client: "Inpay Technologies",
    description: "A fintech identity that reads as infrastructure, not a startup.",
    category: "branding",
    year: "2025",
    image: inpay,
    alt: "Two matte black Inpay cards resting on textured concrete under dramatic light",
    services: ["Identity", "Design system", "Collateral"],
    caseStudy: {
      overview:
        "Inpay moves payouts for businesses paying contractors across West Africa. Their audience is finance leads, not consumers. I rebuilt the identity ahead of their seed raise and enterprise sales push.",
      challenge:
        "The previous brand was bright, rounded and friendly — which made procurement teams treat them like a side project. The work was to look older than the company is, without looking like a bank from 1996.",
      discovery:
        "I interviewed six of their customers' finance managers. None of them cared about speed claims; all of them asked, unprompted, who else uses it. Credibility, not innovation, was the buying trigger.",
      strategy:
        "Design for the second meeting, not the first impression. Restrained palette, dense information design, and collateral built around evidence: settlement times, uptime, named customers.",
      logo: "A tight monoline wordmark with a single ligature between the n and p, referencing a completed transfer. No icon — a symbol would have needed explaining, and the name is short enough to carry the brand alone.",
      identity:
        "Near-black and cold grey with one signal blue reserved for state changes in product. A two-weight type system, generous tabular figures, and a strict 8pt grid across every document.",
      applications:
        "Pitch template, one-pagers, the card programme, API documentation styling, and a signage system for their Lagos office.",
      outcome:
        "A brand that survives being printed in black and white and faxed — which, for enterprise finance, is a real requirement.",
      results: [
        { label: "Enterprise demos booked", value: "2.1×" },
        { label: "Sales cycle", value: "-19 days" },
        { label: "Deliverables shipped", value: "40+" },
      ],
      lessons:
        "Restraint reads as confidence in finance. Every element I removed made the brand feel more established.",
    },
  },
  {
    slug: "kanju",
    name: "Kanju",
    client: "Kanju Furniture",
    description: "Identity and packaging for a made-to-order furniture workshop.",
    category: "branding",
    year: "2024",
    image: kanju,
    alt: "Kraft Kanju packaging bag resting on a wooden chair in warm window light",
    services: ["Identity", "Packaging", "Art direction"],
    caseStudy: {
      overview:
        "Kanju is a four-person workshop building custom furniture in Ibadan. They had a waiting list and no way to explain their prices. I built the identity, the packaging, and the photography direction.",
      challenge:
        "Customers were comparing hand-joined oak to flat-pack pricing. The brand had to make the labour visible before the quote arrived.",
      discovery:
        "I spent two days in the workshop. The most persuasive thing there wasn't a finished chair — it was the jig wall, the offcuts, the pencil marks. None of it appeared anywhere in their marketing.",
      strategy:
        "Sell the process, not the product. Every touchpoint shows evidence of hand-work: uncoated stock, visible construction, and a maker's mark burned into each piece.",
      logo: "A wordmark cut from a single stroke weight with a joinery notch in the K — a dovetail read at small sizes. Drawn to burn cleanly into end grain without filling in.",
      identity:
        "Kraft, walnut brown, and off-black. One typeface at two weights. Every printed piece uses uncoated stock so it feels like the workshop it came from.",
      applications:
        "Swing tags, quote documents, delivery packaging, the branding iron, and a warm, single-source photography direction.",
      outcome:
        "A brand that justifies its price before a salesperson speaks. Average order value moved without a price-list change.",
      results: [
        { label: "Average order value", value: "+41%" },
        { label: "Quote-to-order", value: "+22%" },
        { label: "Pieces branded", value: "300+" },
      ],
      lessons:
        "The most convincing asset was already in the room. Research is often just looking at what the client stopped noticing.",
    },
  },
  {
    slug: "terra-roast",
    name: "Terra Roast",
    client: "Terra Roast Coffee",
    description: "A single-origin coffee brand designed to be read across a counter.",
    category: "branding",
    year: "2024",
    image: terra,
    alt: "Terra Roast coffee bag with a minimal typographic label on a dark wooden table",
    services: ["Identity", "Packaging", "Naming"],
    caseStudy: {
      overview:
        "Terra Roast roasts Nigerian and Ethiopian beans for cafés and home subscribers. I named the sub-ranges, designed the identity, and built a packaging system that scales to new origins without a redesign.",
      challenge:
        "Every new origin meant a new bag design and a new print run. They needed a system, not artwork.",
      discovery:
        "Baristas, not drinkers, decide which bag faces out. I asked eight of them what they look for: origin, roast date, and tasting notes — in that order, from two metres away.",
      strategy:
        "Make the label a data card. Fixed layout, variable content. One plate change per origin instead of a full redesign.",
      logo: "A stencil-influenced wordmark referencing the jute sacks beans arrive in, with a horizon rule that doubles as the divider on every label.",
      identity:
        "Kraft base with a single origin-coded ink. Origin sits largest, roast date second, notes third — the barista's own order of priority.",
      applications:
        "250g and 1kg bags, café-facing cards, subscription inserts, and a label template their roaster fills in himself.",
      outcome:
        "Nine origins have shipped on the system since launch, none of which required me.",
      results: [
        { label: "New origins on system", value: "9" },
        { label: "Packaging cost", value: "-27%" },
        { label: "Wholesale accounts", value: "+12" },
      ],
      lessons:
        "Designing the template is worth more to a small brand than designing the artwork.",
    },
  },
  {
    slug: "sable",
    name: "Sable",
    client: "Sable Architecture Studio",
    description: "A quiet identity for an architecture practice that hates logos.",
    category: "branding",
    year: "2024",
    image: sable,
    alt: "Sable architecture studio stationery on concrete under raking daylight",
    services: ["Identity", "Editorial system"],
    caseStudy: {
      overview:
        "Sable is a six-person residential practice. Their brief was blunt: they wanted an identity that never appears in front of the buildings.",
      challenge:
        "A practice that publishes project books, tender documents, and site signage still needs a system — it just can't rely on a mark to hold it together.",
      discovery:
        "I reviewed three years of their documents. The consistent element was the way they set drawing captions: small, sentence case, hung to the left of the image. That was already their identity.",
      strategy:
        "Formalise the typographic habits they already had, and let photography do the rest. The system is a grid and a caption style, not a logo.",
      logo: "A letterspaced wordmark used once per document, at 9pt, in the footer. It is deliberately the smallest element on any page.",
      identity:
        "Concrete grey, paper white, near-black. One typeface, three sizes, a 12-column grid with a wide left margin reserved for captions.",
      applications:
        "Project monographs, tender submissions, site hoarding, and an InDesign template library the studio maintains itself.",
      outcome:
        "Their documents now look like one practice made them. Nothing on the page competes with the buildings.",
      results: [
        { label: "Documents templated", value: "14" },
        { label: "Competition shortlists", value: "3" },
        { label: "Studio-run updates", value: "100%" },
      ],
      lessons:
        "Sometimes the job is to notice the system a client already has and give it rules.",
    },
  },
  {
    slug: "olori",
    name: "Olori",
    client: "Olori Botanics",
    description: "Warm, sunlit identity for a botanical body-care range.",
    category: "branding",
    year: "2023",
    image: olori,
    alt: "Amber Olori Botanics bottles on a sand-coloured plinth in raking sunlight",
    services: ["Identity", "Packaging", "Art direction"],
    caseStudy: {
      overview:
        "Olori makes small-batch body oils from West African botanicals. The founder wanted the brand to feel like her grandmother's house, not a spa.",
      challenge:
        "Heritage brands in this category slide into pattern and ornament fast. The work was to feel rooted without decorating.",
      discovery:
        "We built a reference wall of the founder's family photographs. What carried across all of them was light — late afternoon, hard shadows, warm walls. Not pattern.",
      strategy:
        "Let light be the brand asset. Fix the photography rule first, then design packaging that behaves well under it.",
      logo: "A humanist wordmark with a raised terminal on the i, drawn to sit comfortably on a curved amber bottle without distortion.",
      identity:
        "Amber glass, bone label stock, terracotta ink. A single photographic rule: one hard light source, long shadow, no fill.",
      applications:
        "Bottle labels, gift sets, market stall signage, and a photography guide with lighting diagrams.",
      outcome:
        "The range is recognisable in a customer's own photo, which is where most of it now gets seen.",
      results: [
        { label: "Instagram saves", value: "3.4×" },
        { label: "Market stall conversion", value: "+29%" },
        { label: "SKUs in system", value: "11" },
      ],
      lessons:
        "Deciding how a brand is photographed is often a bigger decision than how it is drawn.",
    },
  },
  {
    slug: "northbank",
    name: "Northbank",
    client: "Northbank Capital",
    description: "A deliberately conservative identity for an investment firm.",
    category: "branding",
    year: "2023",
    image: northbank,
    alt: "Deep navy Northbank Capital annual report on dark marble with window shadows",
    services: ["Identity", "Report design"],
    caseStudy: {
      overview:
        "Northbank manages capital for family offices. Their audience is small, wealthy, and sceptical of anything that looks new.",
      challenge:
        "Rebrand without signalling change. Their clients read a fresh look as instability.",
      discovery:
        "In three client interviews, the word that came up each time was 'steady'. The existing brand wasn't wrong — it was inconsistently applied across twelve document types.",
      strategy:
        "Evolve, don't replace. Keep the navy, tighten the wordmark, and put the real effort into the annual report, which is the one thing every client actually reads.",
      logo: "The existing serif wordmark redrawn: consistent stroke contrast, corrected spacing, and a version that holds at 8mm on a document spine.",
      identity:
        "Deep navy, warm paper, and a serif-and-grotesque pairing built for dense tables. Figures are tabular everywhere, without exception.",
      applications:
        "Annual report, quarterly letters, pitch books, and a chart library with fixed rules for axis, label, and rounding.",
      outcome:
        "Clients did not comment on the rebrand, which the managing partner called the best possible outcome.",
      results: [
        { label: "Document types unified", value: "12" },
        { label: "Report production time", value: "-40%" },
        { label: "Client complaints", value: "0" },
      ],
      lessons:
        "Not every brand needs to be noticed. Some need to be trusted, which is quieter work.",
    },
  },
  {
    slug: "verre",
    name: "Verre",
    client: "Verre Eyewear",
    description: "A monogram-led identity for an independent eyewear label.",
    category: "branding",
    year: "2023",
    image: verre,
    alt: "Verre eyewear case and monogrammed cloth pouch on a warm studio backdrop",
    services: ["Identity", "Packaging"],
    caseStudy: {
      overview:
        "Verre sells hand-finished frames online and through three opticians. Almost every customer meets the brand at unboxing.",
      challenge:
        "The frames are excellent and the packaging was a plain courier box. The gap between the two was costing them referrals.",
      discovery:
        "I read 60 reviews. Customers described the frames as 'jewellery' and the delivery as 'fine'. That gap was the whole project.",
      strategy:
        "Design the twelve seconds of unboxing as the primary brand experience, and let everything else inherit from it.",
      logo: "A circular monogram with the V and E sharing a stem, set inside a hairline rule — legible foil-blocked at 12mm on a cloth pouch.",
      identity:
        "Bone, graphite, and a single blind-deboss texture. No colour, so the frames are the only thing with any.",
      applications:
        "Hard case, microfibre pouch, prescription card, outer carton, and a care leaflet folded to reveal one instruction at a time.",
      outcome:
        "Unboxing became the most-shared part of the brand. Referral traffic overtook paid within two quarters.",
      results: [
        { label: "Referral traffic", value: "+58%" },
        { label: "Unboxing posts", value: "4.7×" },
        { label: "Returns", value: "-11%" },
      ],
      lessons:
        "Find the moment the customer is paying most attention, and spend the budget there.",
    },
  },
  {
    slug: "adire-co",
    name: "Adire & Co.",
    client: "Adire & Co.",
    description: "A contemporary identity for a traditional indigo textile house.",
    category: "branding",
    year: "2022",
    image: adire,
    alt: "Indigo adire textile folded beside a letterpress swing tag on dark wood",
    services: ["Identity", "Naming", "Packaging"],
    caseStudy: {
      overview:
        "Adire & Co. works with dyers in Abeokuta and sells finished cloth to designers abroad. I built the identity and the labelling system that travels with each piece.",
      challenge:
        "Buyers wanted provenance — who dyed this, where, and when — and the studio had no way to provide it that didn't look like a craft-fair sticker.",
      discovery:
        "Every buyer I spoke to asked the same three questions before purchase. The identity's job was to answer them on the tag.",
      strategy:
        "Treat provenance as the design. The tag carries dyer name, workshop, and dye date; the identity is the frame that makes that data feel considered rather than folksy.",
      logo: "A high-contrast wordmark with a resist-dye break in the counters — a nod to the technique that only reveals itself close up.",
      identity:
        "Indigo, undyed cotton, and black letterpress. Tags are printed on one plate with a hand-filled field for each maker.",
      applications:
        "Swing tags, wholesale line sheets, shipping wraps, and a stamp set the workshop uses for dye-date marking.",
      outcome:
        "Provenance moved from a conversation to an object that ships with the cloth.",
      results: [
        { label: "Export accounts", value: "+9" },
        { label: "Wholesale reorder rate", value: "+31%" },
        { label: "Makers credited", value: "23" },
      ],
      lessons:
        "Giving credit is a design decision. It changed how buyers valued the cloth.",
    },
  },
  {
    slug: "lumen-clinic",
    name: "Lumen Clinic",
    client: "Lumen Dental",
    description: "A calm identity for a dental clinic built to lower anxiety.",
    category: "branding",
    year: "2022",
    image: lumen,
    alt: "Lumen Clinic letterhead in soft mint and white photographed from above",
    services: ["Identity", "Signage", "Environment"],
    caseStudy: {
      overview:
        "Lumen is a two-chair clinic in Lekki. The brief came from a real problem: patients were cancelling appointments they had already paid for.",
      challenge:
        "The brand had to reduce dread. That is an environmental and behavioural problem before it is a graphic one.",
      discovery:
        "I sat in the waiting room across three afternoons. The stress points were the sound from the treatment room, an unclear check-in, and no sense of how long anything takes.",
      strategy:
        "Design for the waiting room first. Clear wayfinding, an honest visual timeline of each procedure, and a palette that avoids clinical white.",
      logo: "A soft-cornered wordmark with an open aperture in the u — space, not a tooth. Deliberately unliteral.",
      identity:
        "Pale mint, warm white, and slate. Rounded geometry throughout, and an illustration style used only for procedure timelines.",
      applications:
        "Reception signage, appointment cards, procedure timeline posters, uniforms, and SMS reminder copy.",
      outcome:
        "The timeline posters turned out to be the highest-impact piece — patients could see the end of the appointment from the chair.",
      results: [
        { label: "Late cancellations", value: "-36%" },
        { label: "Return bookings", value: "+24%" },
        { label: "Touchpoints designed", value: "20" },
      ],
      lessons:
        "Sitting in the room the work is for beats any amount of desk research.",
    },
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
    services: ["Web design", "Copy structure", "Build"],
    url: "https://example.com/geowyse",
  },
  {
    slug: "aeris-studio",
    name: "Aeris Studio",
    client: "Aeris Studio",
    description: "A typographic one-page site for a motion design studio.",
    category: "website",
    year: "2025",
    image: aeris,
    alt: "Laptop on a dark desk showing the Aeris Studio website with large white typography",
    services: ["Web design", "Motion direction"],
    url: "https://example.com/aeris",
  },
  {
    slug: "harvest",
    name: "Harvest",
    client: "Harvest Agritech",
    description: "A bright marketing site for an agricultural supply platform.",
    category: "website",
    year: "2024",
    image: harvest,
    alt: "Desktop monitor by a window showing the bright Harvest Agritech website",
    services: ["Web design", "Design system"],
    url: "https://example.com/harvest",
  },
  {
    slug: "stride",
    name: "Stride",
    client: "Stride Fitness",
    description: "A product-led landing page for a strength training app.",
    category: "website",
    year: "2024",
    image: stride,
    alt: "Two phones on a dark backdrop showing the Stride fitness app landing page",
    services: ["Web design", "Product marketing"],
    url: "https://example.com/stride",
  },
  {
    slug: "folio",
    name: "Folio",
    client: "Folio Editorial",
    description: "An editorial publishing site built around long-form reading.",
    category: "website",
    year: "2023",
    image: folio,
    alt: "Laptop and tablet on a white table showing the Folio editorial website",
    services: ["Web design", "Typography system"],
    url: "https://example.com/folio",
  },
];

export const brandingProjects = projects.filter((p) => p.category === "branding");
export const websiteProjects = projects.filter((p) => p.category === "website");

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
