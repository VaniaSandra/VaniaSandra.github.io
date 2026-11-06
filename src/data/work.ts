export type WorkFilterId = 'environmental' | 'research' | 'writing' | 'visual';
export type WorkType = 'project' | 'research' | 'presentation' | 'poster' | 'flyer' | 'article';
export type WorkContext = 'Academic' | 'Independent' | 'Professional' | 'Collaborative';

export interface WorkImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  /** Full-resolution view, for documents whose on-page preview is too small to read. */
  fullSize?: { href: string; label: string };
  /** Span the whole gallery width, for pages whose detail is lost at half-width. */
  wide?: boolean;
}

export interface WorkFact {
  label: string;
  value: string;
}

export interface WorkSection {
  heading: string;
  paragraphs: string[];
}

export interface WorkItem {
  slug: string;
  title: string;
  runTitle: string;
  h1Lines: string[];
  type: WorkType;
  context: WorkContext;
  year: number | null;
  yearLabel: string;
  organisation?: string;
  summary: string;
  cardSummary: string;
  runDescriptor: string;
  tags: WorkFilterId[];
  visibility: 'public' | 'draft' | 'private';
  featured: boolean;
  cover: WorkImage;
  images: WorkImage[];
  runImages: WorkImage[];
  facts: WorkFact[];
  sections: WorkSection[];
  note?: string;
  contentNote?: string;
  credits?: string;
  pdf?: { href: string; label: string; pages: number };
  externalUrl?: string;
  externalLabel?: string;
  order: number;
}

export const workFilters: { id: WorkFilterId | 'all'; label: string }[] = [
  { id: 'all', label: 'All work' },
  { id: 'environmental', label: 'Environmental' },
  { id: 'research', label: 'Research' },
  { id: 'writing', label: 'Writing' },
  { id: 'visual', label: 'Visual communication' },
];

const scadaTitle: WorkImage = {
  src: '/work/scada/scada-title.webp',
  alt: 'Title slide of a SCADA 2026 presentation: From AgTech to community-led climate adaptation.',
  caption: 'Title slide',
  width: 1600,
  height: 900,
};

const scadaUrgency: WorkImage = {
  src: '/work/scada/scada-urgency.webp',
  alt: 'Slide showing 17.25 million Indonesian farmers on less than 0.5 hectares and modelled 2030 yield changes.',
  caption: 'National urgency: farm structure and modelled yield risk',
  width: 1600,
  height: 900,
};

const scadaTechnology: WorkImage = {
  src: '/work/scada/scada-technology.webp',
  alt: 'Slide explaining remote sensing, proximal sensing and precision action in agriculture.',
  caption: 'Remote sensing, proximal sensing and precision action',
  width: 1600,
  height: 900,
};

const scadaPathway: WorkImage = {
  src: '/work/scada/scada-pathway.webp',
  alt: 'Slide showing a five-year pathway: understand, test and adapt, then scale what works, with continuous monitoring.',
  caption: 'A five-year pathway with continuous monitoring',
  width: 1600,
  height: 900,
};

const scadaFieldGreenhouse: WorkImage = {
  src: '/work/scada/scada-field-greenhouse.webp',
  alt: 'Course participants seen from behind inside a glasshouse, reading a banner for the Summer Course on Advances in Digital Agriculture while seedling trays line the brick floor.',
  caption: 'Glasshouse session',
  width: 960,
  height: 1280,
};

const scadaFieldVerticalFarm: WorkImage = {
  src: '/work/scada/scada-field-vertical-farm.webp',
  alt: 'Three course participants standing in a vertical-farming room between racks of LED-lit channels and seedling trays.',
  caption: 'Vertical-farming installation',
  width: 960,
  height: 1280,
};

const scadaFieldPongkor: WorkImage = {
  src: '/work/scada/scada-field-pongkor.webp',
  alt: 'Six participants in white hard hats, orange hi-vis vests and yellow rubber boots posed in front of the tunnel entrance signed Museum Tambang Pongkor.',
  caption: 'Museum Tambang Pongkor',
  width: 960,
  height: 1280,
};

const scadaFieldGroup: WorkImage = {
  src: '/work/scada/scada-field-group.webp',
  alt: 'A close group selfie of course participants seated together, wearing programme caps and lanyards.',
  caption: 'The course group',
  width: 1280,
  height: 960,
};

const scadaClosing: WorkImage = {
  src: '/work/scada/scada-field-closing.webp',
  alt: 'Vania receiving the second-best participant prize at the close of the course: a member of staff hands her a blue IPB University gift bag in front of a wall signed Soil Science and Land Resource.',
  caption: 'Second-best participant',
  width: 1600,
  height: 1066,
  wide: true,
};

const soilCover: WorkImage = {
  src: '/work/soil-carbon/soil-carbon-cover.webp',
  alt: 'Typographic cover for the essay Controls on soil organic carbon stabilization.',
  caption: 'Essay cover',
  width: 1200,
  height: 900,
};

const soilQuote: WorkImage = {
  src: '/work/soil-carbon/soil-carbon-quote.webp',
  alt: 'Quote card: higher carbon levels do not automatically indicate a healthy or well-functioning soil.',
  caption: 'A critical point from the essay',
  width: 1000,
  height: 1250,
};

const soilIndex: WorkImage = {
  src: '/work/soil-carbon/soil-carbon-index.webp',
  alt: "Index card listing the essay's themes: mineral surfaces and pH, aggregate protection, mycorrhizal networks, microbial necromass, management and climate stress.",
  caption: 'What the essay examines',
  width: 1000,
  height: 1250,
};

const tableauFull: WorkImage = {
  src: '/work/tableau/tableau-full.webp',
  alt: 'Tableau dashboard titled Environmental Impact of Food Production, with category impact, supply-chain breakdown and nutritional efficiency views.',
  caption: 'The full dashboard',
  width: 1335,
  height: 631,
};

const tableauCategory: WorkImage = {
  src: '/work/tableau/tableau-category.webp',
  alt: 'Bar chart comparing total emissions by food category; animal proteins are highest.',
  caption: 'Category impact',
  width: 505,
  height: 531,
};

const tableauSupply: WorkImage = {
  src: '/work/tableau/tableau-supply-chain.webp',
  alt: 'Stacked bar chart breaking food-category emissions into supply-chain stages.',
  caption: 'Supply-chain breakdown',
  width: 820,
  height: 305,
};

const analysisSheet = (
  file: string,
  caption: string,
  alt: string,
): WorkImage => ({
  src: `/work/tableau/${file}.webp`,
  alt,
  caption,
  width: 1684,
  height: 1191,
  fullSize: {
    href: `/work/tableau/${file}.webp`,
    label: 'Open this page at 1:1 size',
  },
  wide: true,
});

const analysisSituational: WorkImage = analysisSheet(
  'analysis-situational',
  'Situational analysis: environmental impact of food demand',
  'Handwritten problem-tree diagram. A central box reads "High & Rising Green House Gases (GHG) emissions across the entire global food system", labelled core problem. Above it, an accelerating-climate-change driver leads to a primary effect of widespread freshwater depletion and acute eutrophication, and a secondary effect of long-term threats to global food security, nutrition and agricultural land viability. Below, three root causes are branched out: demand, infrastructure and agriculture.',
);

const analysisWri: WorkImage = analysisSheet(
  'analysis-wri',
  'Situational analysis: WRI-based research',
  'Handwritten problem-tree diagram. The core problem is that the global food system requires urgent transformation to feed ten billion people by 2050 without catastrophic environmental destruction. Three root causes are drawn beneath it: the food gap, the land gap and the greenhouse gas mitigation gap, each with sub-notes on agricultural land expansion, freshwater depletion and eutrophication.',
);

const analysisOptions: WorkImage = analysisSheet(
  'analysis-options',
  'Option analysis: three strategic responses',
  'Handwritten three-row table comparing strategic options against key focus areas, positives and negatives. The rows are demand-side intervention, infrastructure upgrades and ecosystem-based agricultural adoption. A margin note asks which option best addresses the drivers of eutrophication.',
);

const analysisTheory: WorkImage = analysisSheet(
  'analysis-theory-of-change',
  'Theory of change',
  'Handwritten theory-of-change diagram with four columns: inputs, activities, outputs and outcomes, each filled with bulleted notes running from datasets and financing through campaigns, farmer training and peatland restoration to a food chain with lower carbon, land, freshwater and eutrophication footprints.',
);

const fccPoster: WorkImage = {
  src: '/work/fcc/fcc-poster.webp',
  alt: 'Poster for an FCC environmental economics webinar on blue economy challenges in fisheries and marine in Indonesia.',
  caption: 'The public webinar poster',
  width: 1080,
  height: 895,
};

const fccDetail: WorkImage = {
  src: '/work/fcc/fcc-detail.webp',
  alt: 'Top section of the FCC webinar poster, with the event title and public speaker portrait.',
  caption: 'Event title and speaker',
  width: 1080,
  height: 700,
};

const bscTitle: WorkImage = {
  src: '/work/bsc/bsc-title.webp',
  alt: 'Title slide of the BSc thesis defence on copper-doped calcium sulfate thermoluminescence dosimeters.',
  caption: 'Thesis title slide',
  width: 1600,
  height: 600,
};

const bscMethod: WorkImage = {
  src: '/work/bsc/bsc-method.webp',
  alt: 'Slide showing thermoluminescence dosimeter placement and the X-ray and LINAC irradiation set-ups.',
  caption: 'Dosimeter placement and irradiation set-ups',
  width: 1600,
  height: 900,
};

const bscResults: WorkImage = {
  src: '/work/bsc/bsc-results.webp',
  alt: 'Slide comparing dosimeter response across copper concentrations and radiation energies.',
  caption: 'Response by copper concentration and energy',
  width: 1600,
  height: 900,
};

const bscConclusion: WorkImage = {
  src: '/work/bsc/bsc-conclusion.webp',
  alt: 'Slide listing the thesis conclusions on synthesis, crystal structure and dosimeter response.',
  caption: 'Thesis conclusions',
  width: 1600,
  height: 900,
};

const coffeeChemistry: WorkImage = {
  src: '/work/coffee/coffee-chemistry.webp',
  alt: 'The full Indonesian-language coffee chemistry infographic: esterification and roasting reactions, brewing water, temperature, freshness, two reaction-rate equations, and a closing panel on coffee and stomach acid.',
  caption: 'The full poster',
  width: 1132,
  height: 1600,
  fullSize: {
    href: '/work/coffee/coffee-chemistry.webp',
    label: 'Open the full poster at 1:1 size',
  },
};

const agtechCover: WorkImage = {
  src: '/work/agtech/agtech-cover.webp',
  alt: 'Typographic cover for the essay Bridging precision and place.',
  caption: 'Essay cover',
  width: 1200,
  height: 900,
};

const agtechQuote: WorkImage = {
  src: '/work/agtech/agtech-quote.webp',
  alt: 'Quote card arguing that technology should support local capacity rather than replace it.',
  caption: 'A critical point from the essay',
  width: 1000,
  height: 1250,
};

const girlupCover: WorkImage = {
  src: '/work/girlup/girlup-cover.webp',
  alt: 'Cover of the collaborative UIKIPEDIA feature GIRL UP UI: Sister(brother)hood for change.',
  caption: 'Feature cover',
  width: 1200,
  height: 1200,
};

const manusiaCover: WorkImage = {
  src: '/work/manusiaui/manusiaui-cover.webp',
  alt: 'Cover of the collaborative UIKIPEDIA feature ManusiaUI: Connecting the human dots.',
  caption: 'Feature cover',
  width: 1200,
  height: 1200,
};

const therafeLogo: WorkImage = {
  src: '/work/therafe/therafe-logo.webp',
  alt: 'THERAFÉ wordmark with a hand-drawn botanical illustration and the strapline A new way to heal mental health.',
  caption: 'Wordmark and concept',
  width: 500,
  height: 500,
};

const besindoTraining: WorkImage = {
  src: '/work/besindo/besindo-training.webp',
  alt: 'Vania standing and briefing a group of hospital staff seated at treatment-planning workstations in a training room.',
  caption: 'Application training session with hospital staff',
  width: 1280,
  height: 960,
};

const besindoHarmonyPro: WorkImage = {
  src: '/work/besindo/besindo-harmony-pro.webp',
  alt: 'Vania at the couch of an Elekta Harmony Pro linear accelerator in a blue-lit treatment room, with positioning blocks laid out ready.',
  caption: 'Elekta Harmony Pro treatment unit',
  width: 960,
  height: 1280,
};

const besindoSynergyHd: WorkImage = {
  src: '/work/besindo/besindo-synergy-hd.webp',
  alt: 'Vania standing beside an Elekta Synergy HD linear accelerator with a positioning phantom set up on the iBEAM evo couch.',
  caption: 'Elekta Synergy HD with a positioning phantom',
  width: 960,
  height: 1280,
};

const besindoJayapuraTeam: WorkImage = {
  src: '/work/besindo/besindo-jayapura-team.webp',
  alt: 'A hospital and project team photographed together in front of an Elekta linear accelerator.',
  caption: 'Handover with the hospital team',
  width: 1280,
  height: 960,
};

const besindoParikesitTeam: WorkImage = {
  src: '/work/besindo/besindo-parikesit-team.webp',
  alt: 'Five project staff and hospital colleagues standing in front of an Elekta linear accelerator with an iBEAM evo couch.',
  caption: 'Project team on site',
  width: 960,
  height: 1280,
};

const besindoMakassarTeam: WorkImage = {
  src: '/work/besindo/besindo-makassar-team.webp',
  alt: 'Six people posed beside an Elekta linear accelerator in a treatment room still under fit-out.',
  caption: 'Delivery and handover on site',
  width: 1280,
  height: 960,
};

export const work: WorkItem[] = [
  {
    slug: 'scada-agtech-climate-adaptation',
    title: 'From agtech to community-led climate adaptation',
    runTitle: 'From agtech to community-led adaptation',
    h1Lines: ['From agtech to', 'community-led adaptation'],
    type: 'presentation',
    context: 'Academic',
    year: 2026,
    yearLabel: '2026',
    organisation: 'SCADA 2026 Summer Course, IPB University',
    summary:
      'A field-to-policy presentation on what has to change for agricultural technology to work for Indonesian smallholders. It connects farm structure, sensor evidence, adoption capacity, farmer economics and a five-year delivery pathway.',
    cardSummary: 'Field-to-policy presentation on agtech adoption and climate adaptation.',
    runDescriptor: 'Field-to-policy presentation',
    tags: ['environmental', 'research', 'visual'],
    visibility: 'public',
    featured: true,
    cover: scadaTitle,
    images: [
      scadaTitle,
      scadaUrgency,
      scadaTechnology,
      scadaPathway,
      scadaFieldGroup,
      scadaFieldGreenhouse,
      scadaFieldVerticalFarm,
      scadaFieldPongkor,
      scadaClosing,
    ],
    runImages: [scadaUrgency, scadaTechnology, scadaFieldVerticalFarm, scadaPathway, scadaFieldPongkor],
    facts: [
      { label: 'Role', value: 'Analysis, slide design and presentation' },
      { label: 'Context', value: 'Academic · SCADA 2026 Summer Course, IPB University' },
      { label: 'Format', value: '10 slides · 10-minute talk' },
      { label: 'Evidence', value: 'National statistics and peer-reviewed studies' },
      { label: 'Recognition', value: 'Second-best participant of the course' },
      { label: 'Language', value: 'English' },
    ],
    sections: [
      {
        heading: 'The question',
        paragraphs: [
          'The presentation starts from structure, not technology. 17.25 million farmers operate on less than 0.5 hectares, or 62.05% of agricultural land users, according to the BPS Agricultural Census 2023. Small, fragmented holdings make it harder to earn a stable income from farming.',
          "The World Bank's 2030 projections used in the deck show maize yields 7.1% lower and irrigated rice 0.72% lower without countermeasures. Those figures are modelled projections, not observed national losses.",
        ],
      },
      {
        heading: 'The argument',
        paragraphs: [
          'The value of agtech is the decision it enables, not the sensor itself. The deck sets out a chain from remote sensing, which shows where to look, to proximal sensing, which checks what is happening in the field, to precision action, which changes the response.',
          'It also keeps the evidence in proportion. A 2025 East Lombok rice trial found 27% higher agronomic efficiency with sensor-based fertilisation. An IPB survey found only 2 of 83 chilli farmers, or 2.4%, using smart fertigation. Technical potential and adoption capacity are different problems.',
        ],
      },
      {
        heading: 'The pathway',
        paragraphs: [
          'The recommendation is a five-year pathway. Year one is for understanding local soil, crops, climate risks, farmer priorities and buyers. Years two and three are for testing and adapting on demonstration plots, training local operators and tracking full-season costs. Years four and five are for scaling what works.',
          'Continuous monitoring combines remote data, field samples and farmer records. The closing line is deliberate: the goal is not to deliver more technology, but to leave farmers more capable of making good decisions without it.',
        ],
      },
      {
        heading: 'On site',
        paragraphs: [
          'The programme ran as a summer course on advances in digital agriculture, and its field component took participants inside operating production systems. The photographs record three of those visits: a glasshouse with seedling trays laid along the brick floor, a vertical-farming room lit by LED racks over planted channels, and the tunnel entrance of Museum Tambang Pongkor, where the group went in hard hats, hi-vis vests and rubber boots.',
          'They are included as evidence of the field side of the work, because the deck argues from conditions on the ground rather than from technology alone. Fellow course participants appear in these photographs with their agreement.',
        ],
      },
      {
        heading: 'Recognition',
        paragraphs: [
          'The course closed with a participant award at the Department of Soil Science and Land Resource at IPB University, where I was named second-best participant.',
          'The photograph records the handover. The prize is the university-branded gift bag rather than a certificate, so this image is the record of it.',
        ],
      },
      {
        heading: 'What I bring to a role',
        paragraphs: [
          'Listen before designing; pilot before scaling; track cost, yield and adoption together; and define who operates, maintains and pays for a service after the project ends. Those are project-delivery questions as much as technical ones.',
        ],
      },
    ],
    note: 'Selected slides only. The full 10-page deck and the community case-study page are private. An AI assistant was used for drafting and editing; the analysis and final presentation are mine.',
    credits:
      'Analysis, slide design and presentation: Vania Sandra Clarissa. AI assistant used for drafting and editing.',
    pdf: {
      href: '/work/scada/scada-selected-slides.pdf',
      label: 'Open the selected slides',
      pages: 6,
    },
    order: 1,
  },
  {
    slug: 'soil-organic-carbon',
    title: 'Controls on soil organic carbon stabilization',
    runTitle: 'Controls on soil organic carbon stabilization',
    h1Lines: ['Soil organic carbon', 'and its controls'],
    type: 'article',
    context: 'Independent',
    year: 2026,
    yearLabel: '2026',
    organisation: 'Independent research essay',
    summary:
      'A literature-based essay on what actually stabilises soil organic carbon, and why a high carbon number is not the same as a healthy soil. It compares mineral, physical and biological controls.',
    cardSummary: 'Independent research essay on soil carbon and soil health.',
    runDescriptor: 'Research essay',
    tags: ['environmental', 'research', 'writing'],
    visibility: 'public',
    featured: true,
    cover: soilCover,
    images: [soilCover, soilQuote, soilIndex],
    runImages: [soilCover, soilQuote, soilIndex],
    facts: [
      { label: 'Role', value: 'Research and writing' },
      { label: 'Context', value: 'Independent' },
      { label: 'Format', value: 'Essay · 10 references' },
      { label: 'Status', value: 'Unpublished' },
      { label: 'Language', value: 'English' },
    ],
    sections: [
      {
        heading: 'The argument',
        paragraphs: [
          'Soil organic carbon is usually treated as a number. The essay treats it as a process. Carbon persistence is shaped by mineral surfaces and pH, physical protection inside aggregates, mycorrhizal networks and microbial necromass. Tough plant molecules such as lignin are not the whole story.',
        ],
      },
      {
        heading: 'Why total carbon is not enough',
        paragraphs: [
          'A high carbon reading can come from waterlogged or cold conditions that slow decomposition, from nutrient imbalances, or from inert charcoal. It does not automatically mean active cycling, good structure or a healthy soil. The essay argues for looking at the quality and context of carbon pools, not only the total.',
        ],
      },
      {
        heading: 'What the essay examines',
        paragraphs: [
          'The essay works through mineral surfaces and pH, aggregate protection, mycorrhizal networks, microbial necromass, and the effects of management and climate stress. It closes on the practical problem: no-till, cover crops and residue retention can support microbial necromass, while warming and drought can lower microbial carbon-use efficiency.',
        ],
      },
      {
        heading: 'What it shows',
        paragraphs: [
          'A literature-based synthesis with ten references, written to connect soil science to land-management decisions. It is unpublished and summarised here rather than republished.',
        ],
      },
    ],
    note: 'The full essay is not published. This page is a summary; the underlying text and references remain private.',
    order: 2,
  },
  {
    slug: 'food-production-emissions',
    title: 'Environmental impact of food production',
    runTitle: 'Environmental impact of food production',
    h1Lines: ['The environmental impact', 'of food production'],
    type: 'project',
    context: 'Independent',
    year: 2026,
    yearLabel: '2026',
    organisation: 'Independent data project',
    summary:
      'A Tableau dashboard comparing greenhouse-gas emissions, supply-chain stages and nutritional efficiency across food categories, alongside the handwritten problem-tree and theory-of-change notes that framed it: high and rising greenhouse gas emissions across the entire global food system. The dashboard is an exploratory view, not a life-cycle assessment.',
    cardSummary: 'Tableau dashboard and problem analysis on global food-system emissions.',
    runDescriptor: 'Data dashboard and problem analysis',
    tags: ['environmental', 'research', 'visual'],
    visibility: 'public',
    featured: true,
    cover: tableauFull,
    images: [
      tableauFull,
      analysisSituational,
      analysisWri,
      analysisOptions,
      analysisTheory,
      tableauCategory,
      tableauSupply,
    ],
    runImages: [tableauFull, tableauSupply],
    facts: [
      { label: 'Role', value: 'Data preparation, visualisation and problem analysis' },
      { label: 'Context', value: 'Independent' },
      { label: 'Tool', value: 'Tableau, hand-drawn analysis' },
      { label: 'Data', value: 'Public Kaggle dataset, WRI figures' },
      { label: 'Format', value: 'Three linked views and four analysis sheets' },
    ],
    sections: [
      {
        heading: 'The question',
        paragraphs: [
          'How do food categories compare on total emissions, on the stages that produce them, and on nutritional efficiency? The dashboard is built to make those comparisons visible without collapsing them into one ranking.',
        ],
      },
      {
        heading: 'What the dashboard shows',
        paragraphs: [
          'Category Impact compares total emissions across seven food categories. Animal proteins have the highest total emissions in the view; plant-based proteins, fruits and vegetables, and grains and cereals are much lower.',
          'Supply-Chain Breakdown splits each category into transport, animal feed, farm, land-use change, processing and retail. Nutritional Efficiency vs Total Emission plots emissions against a nutritional measure, with a trend line rather than a single score.',
        ],
      },
      {
        heading: 'High & Rising Greenhouse Gas Emission across the global food system',
        paragraphs: [
          'The dashboard answers a question that was written out before it was built. A companion set of handwritten notes frames it as a problem tree, with the core problem stated as high and rising greenhouse gas emissions across the entire global food system.',
          'Three root causes sit underneath it. Demand: unsustainable consumption patterns, a high-emissions diet and excessive food loss and waste. Infrastructure: inefficient supply chains still reliant on fossil fuels, high-global-warming-potential refrigerants in cold chains, and a lack of localised or circular economy solutions. Agriculture: conventional farming without nature-based solutions, and emissions-intensive practice such as poor manure storage, unmanaged enteric fermentation, continuous flooding in rice cultivation and synthetic fertiliser.',
          'The effects branch upward: freshwater depletion and eutrophication as primary effects, and long-term threats to food security, nutrition and the viability of agricultural land as a secondary effect. The notes carry a projected 30–40% increase in agriculture and land-use emissions by 2050.',
        ],
      },
      {
        heading: 'A second tree, from World Resources Institute research',
        paragraphs: [
          'The same method applied to a different source. Here the core problem is that the global food system has to transform to feed ten billion people by 2050 without catastrophic environmental damage, and the three root causes become gaps: a food gap, a land gap and a greenhouse gas mitigation gap.',
          'The figures recorded against them are a projected 56% shortfall between food produced in 2010 and demand in 2050 (a 7.4 trillion calorie deficit), a 593 million hectare land deficit driving agricultural expansion, and 11 gigatonnes of CO₂ equivalent in farmgate emissions, deforestation and inefficient supply chains. They are transcribed from the WRI-based reading in the notes, not independently verified here.',
        ],
      },
      {
        heading: 'Choosing between the options',
        paragraphs: [
          'A third sheet weighs three strategic responses against their focus areas, strengths and costs. Demand-side intervention — diet shifts, waste reduction, valorising organic waste — has the largest mitigation ceiling, up to 8 gigatonnes of CO₂ equivalent a year from diet shifts, but needs complex, large-scale behavioural and cultural change. Infrastructure upgrades offer measurable technological fixes with clear efficiency returns, but are capital-intensive and need local policy support. Ecosystem-based agricultural adoption — agroforestry, land-neutral intensification, methane-suppressing livestock feed, 4R fertiliser, restoration — tackles farmgate methane and nitrous oxide without cutting crop or livestock output, but needs capacity building and a long timeline.',
          'A note in the margin asks the question the table does not answer: which of these actually addresses the drivers of eutrophication. It is left open.',
        ],
      },
      {
        heading: 'Theory of change',
        paragraphs: [
          'The last sheet runs the reasoning forward from inputs to outcomes. Environmental impact datasets, ecosystem-based adaptation modules, investment capital, local policy support and the GlobAgri-WRR modelling methodology as activities such as urban diet campaigns, farmer training, lower-emission farm technology and peatland restoration produce shifted purchasing habits, a narrower food gap and land neutralised at scale — and, as the outcome, a food chain with lower carbon, land, freshwater and eutrophication footprints that still holds its yields, agro-biodiversity and climate resilience.',
        ],
      },
      {
        heading: 'What I practised',
        paragraphs: [
          'Structuring a multi-view dashboard, choosing chart types for different comparisons, labelling, and keeping the reading order clear. The handwritten sheets were the more useful discipline: stating a problem before measuring it, separating causes from effects, and writing down what each option costs as well as what it gains.',
        ],
      },
      {
        heading: 'Limits',
        paragraphs: [
          'The dashboard is an exploratory comparison, not a life-cycle assessment. Category definitions, system boundaries and nutritional metrics all affect the result. The scatter plot is best read as a prompt for questions, not as a precise ranking.',
          'The analysis sheets are study notes rather than a published framework. Their figures are attributed to the World Resources Institute material she was reading and are reproduced as written; the source documents are not linked here.',
        ],
      },
    ],
    note: 'Dashboard data from a public Kaggle dataset; the dataset link is not published here and the screenshot is the highest-resolution export currently available. The four analysis sheets are working notes, rotated upright for reading but otherwise unedited.',
    order: 3,
  },
  {
    slug: 'fcc-blue-economy',
    title: 'Blue economy challenges in Indonesian fisheries',
    runTitle: 'Blue economy challenges in Indonesian fisheries',
    h1Lines: ['Blue economy challenges', 'in Indonesian fisheries'],
    type: 'poster',
    context: 'Professional',
    year: 2021,
    yearLabel: '2021',
    organisation: 'Fisheries Cyber Center (FCC), Telkom Indonesia / Indonesia Telecommunication & Digital Research Institute',
    summary:
      'A public webinar poster for a session on the blue economy, fisheries and marine challenges in Indonesia, produced during my project management internship.',
    cardSummary: 'Public webinar poster on blue-economy challenges in Indonesian fisheries.',
    runDescriptor: 'Blue-economy webinar',
    tags: ['environmental', 'visual'],
    visibility: 'public',
    featured: true,
    cover: fccPoster,
    images: [fccPoster, fccDetail],
    runImages: [fccPoster, fccDetail],
    facts: [
      { label: 'Role', value: 'Project support and event communication' },
      { label: 'Context', value: 'Professional · FCC internship' },
      { label: 'Event', value: 'Environmental Economics Webinar · 6 November 2021' },
      { label: 'Format', value: 'Public webinar poster' },
      { label: 'Language', value: 'Indonesian and English' },
    ],
    sections: [
      {
        heading: 'The context',
        paragraphs: [
          'The Fisheries Cyber Center (FCC) was developed during my project management internship at Telkom Indonesia and the Indonesia Telecommunication & Digital Research Institute. The Environmental Economics Webinar on 6 November 2021 discussed blue-economy challenges in Indonesian fisheries and marine sectors.',
        ],
      },
      {
        heading: 'What the artifact shows',
        paragraphs: [
          'The poster is public-facing event communication: title, public speaker and moderator, date, registration route and media partners. It is evidence of how the project communicated an environmental-economics topic to an external audience, not a solo design credit.',
        ],
      },
      {
        heading: 'My contribution',
        paragraphs: [
          'My internship work covered project planning, cost frameworks, a proposed revenue-sharing model, partnership development, WBS and weekly reporting. The poster sits inside that project context. I do not claim sole authorship of the design.',
        ],
      },
      {
        heading: 'Why it is in the portfolio',
        paragraphs: [
          'It is the most directly environmental-adjacent professional artifact in the archive, and it shows the translation of a technical and economic topic into a public event. It is included as a project artifact, not as a delivered environmental project.',
        ],
      },
    ],
    note: 'Contact details have been removed from the public image. The original poster includes third-party logos and portraits of the public speaker, moderator and MC. The poster is a team artifact; design authorship is not claimed.',
    order: 4,
  },
  {
    slug: 'radiotherapy-projects-indonesia',
    title: 'Radiotherapy equipment projects across Indonesia',
    runTitle: 'Radiotherapy equipment projects',
    h1Lines: ['Radiotherapy equipment', 'projects across Indonesia'],
    type: 'project',
    context: 'Professional',
    year: null,
    yearLabel: '2023–2026',
    organisation: 'PT Besindo Medi Prima',
    summary:
      'Close to three years as Project Officer and Application Support on radiotherapy equipment projects: schedules, documentation, staff training and regulatory visits, working between hospital teams, vendors and consultants.',
    cardSummary:
      'Project support, documentation and training on radiotherapy equipment projects in Indonesian hospitals.',
    runDescriptor: 'Project support in medical physics',
    tags: [],
    visibility: 'public',
    featured: true,
    cover: besindoTraining,
    images: [
      besindoTraining,
      besindoHarmonyPro,
      besindoSynergyHd,
      besindoJayapuraTeam,
      besindoParikesitTeam,
      besindoMakassarTeam,
    ],
    runImages: [besindoTraining, besindoHarmonyPro, besindoSynergyHd, besindoParikesitTeam],
    facts: [
      { label: 'Role', value: 'Project Officer and Application Support' },
      { label: 'Organisation', value: 'PT Besindo Medi Prima' },
      { label: 'Period', value: 'May 2023 – Jan 2026' },
      { label: 'Context', value: 'Professional · employment' },
      { label: 'Scope', value: 'Public and private hospitals, Indonesia' },
    ],
    sections: [
      {
        heading: 'The role',
        paragraphs: [
          'From May 2023 to January 2026 I worked as Project Officer and Application Support at PT Besindo Medi Prima, a supplier of radiotherapy equipment. The role sat between the vendor side and the hospitals that operate the machines, and the photographs here are on-site documentation from that work.',
        ],
      },
      {
        heading: 'What I was responsible for',
        paragraphs: [
          'Coordinating project schedules and site visits. Keeping the project record accurate and complete: purchase orders, delivery orders, handover certificates, invoices and progress reports. Supporting application training for hospital staff. Following regulatory and inspection visits. Working day to day with hospital teams, consultants, vendors and internal departments.',
        ],
      },
      {
        heading: 'What the photographs show',
        paragraphs: [
          'Elekta linear accelerators at different stages of installation and handover, including an Elekta Harmony Pro and an Elekta Synergy HD set up with an iBEAM evo couch and a positioning phantom. One frame is an application training session with hospital staff at treatment-planning workstations; the group frames are handover moments with the hospital teams.',
        ],
      },
      {
        heading: 'Why it transfers',
        paragraphs: [
          'This is where my project discipline comes from: holding a schedule, keeping a paper trail someone else can audit, explaining a technical system to the people who have to use it the following week, and coordinating across organisations with different priorities. Those habits are what I am now directing toward environmental and community project work.',
        ],
      },
    ],
    note: 'Photographs are on-site documentation from employer projects, included with the owner’s confirmation that permission is held. Colleagues and hospital staff appear in several frames; no patient information, clinical images or treatment-planning data are visible. Individual hospital names follow the owner’s original file names and are deliberately not printed on the site. This is equipment project support, not clinical patient care, and not a certified medical physics qualification.',
    order: 5,
  },
  {
    slug: 'bsc-thermoluminescence-dosimetry',
    title: 'Copper-doped calcium sulfate for thermoluminescence dosimetry',
    runTitle: 'Copper-doped calcium sulfate dosimetry',
    h1Lines: ['A copper-doped dosimeter', 'for low-dose radiation'],
    type: 'research',
    context: 'Academic',
    year: 2022,
    yearLabel: '2022',
    organisation: 'Universitas Indonesia',
    summary:
      'An experimental physics thesis on a copper-doped calcium sulfate thermoluminescence dosimeter for low-dose radiation measurement. The selected slides show the method, response data and conclusions.',
    cardSummary: 'BSc medical physics research on a copper-doped TLD material.',
    runDescriptor: 'Medical physics research',
    tags: ['research', 'visual'],
    visibility: 'public',
    featured: false,
    cover: bscTitle,
    images: [bscTitle, bscMethod, bscResults, bscConclusion],
    runImages: [bscTitle, bscResults, bscConclusion],
    facts: [
      { label: 'Role', value: 'Experimental research and thesis defence' },
      { label: 'Context', value: 'Academic · Universitas Indonesia' },
      { label: 'Methods', value: 'Co-precipitation, XRD, SEM-EDS, TLD response' },
      { label: 'Language', value: 'Indonesian · selected slides captioned in English' },
    ],
    sections: [
      {
        heading: 'The question',
        paragraphs: [
          'Can a copper-doped calcium sulfate thermoluminescence dosimeter give a useful response at the low radiation energies used in medical imaging? The thesis tested different copper concentrations and compared the response across X-ray and linear-accelerator energies.',
        ],
      },
      {
        heading: 'Method',
        paragraphs: [
          'CaSO₄:Cu was synthesised by co-precipitation with copper at 0.1, 0.5, 1.0 and 1.5 mol%. The material was characterised by XRD and SEM-EDS. Dosimeters were irradiated at 70 kV, 90 kV, 6 MV and 10 MV, then read out to compare sensitivity.',
        ],
      },
      {
        heading: 'Findings',
        paragraphs: [
          'The 0.1 mol% sample gave the highest response. Sensitivity was best at 70 kV, and the response was better than LiF:Mg,Ti at low energy under the study conditions. The thesis notes that further calibration and linearity work would be needed before any clinical or routine use.',
        ],
      },
      {
        heading: 'What I took from it',
        paragraphs: [
          'Experimental design, sample preparation, instrument care, uncertainty and the discipline of documenting a method so someone else can follow it. It is also where I learned to present technical work to a mixed academic audience.',
        ],
      },
    ],
    note: 'Selected slides only. The full Indonesian deck and institutional materials are not published. Student ID and supervisor details have been removed from the public crops. This is academic research, not a clinical device or a certified medical physics qualification.',
    order: 6,
  },
  {
    slug: 'coffee-chemistry',
    title: 'The chemistry of coffee, illustrated',
    runTitle: 'The chemistry of coffee, illustrated',
    h1Lines: ['The chemistry of coffee', 'illustrated'],
    type: 'poster',
    context: 'Independent',
    year: 2019,
    yearLabel: '2019',
    organisation: 'Independent student work',
    summary:
      'An early science-communication infographic explaining the chemistry of coffee acidity, from esterification and roasting reactions to brewing water and storage.',
    cardSummary: 'Early infographic on the chemistry of coffee acidity.',
    runDescriptor: 'Science infographic',
    tags: ['visual'],
    visibility: 'public',
    featured: false,
    cover: coffeeChemistry,
    images: [coffeeChemistry],
    runImages: [coffeeChemistry],
    facts: [
      { label: 'Role', value: 'Research, writing and design' },
      { label: 'Context', value: 'Independent · early student work' },
      { label: 'Format', value: 'A4 infographic' },
      { label: 'Language', value: 'Indonesian' },
    ],
    sections: [
      {
        heading: 'What it explains',
        paragraphs: [
          'The infographic walks through esterification in the coffee plant, hydrolysis and Maillard browning during roasting, the effect of brewing water chemistry, temperature and freshness. It uses a pH indicator strip and a cup of coffee as visual anchors.',
        ],
      },
      {
        heading: 'What it shows',
        paragraphs: [
          'An early attempt to make chemistry visual for a general audience: a strong title, a simple reaction chain, and a layout that moves from bean to cup. The original is in Indonesian and was made in 2019.',
        ],
      },
      {
        heading: 'What I would change',
        paragraphs: [
          'Some copy and claims would be revised today, and the design would be tighter. It is included as evidence of science communication and visual range, not as current technical guidance.',
        ],
      },
    ],
    note: 'The complete 2019 poster is shown. Its closing panel reproduces a third-party vintage portrait and cites two external science websites, exactly as the original student poster did; the stomach-acid explanation is the poster as made, not current advice or health guidance.',
    order: 7,
  },
  {
    slug: 'bridging-precision-and-place',
    title: 'Bridging precision and place',
    runTitle: 'Bridging precision and place',
    h1Lines: ['Bridging precision', 'and place'],
    type: 'article',
    context: 'Independent',
    year: 2026,
    yearLabel: '2026',
    organisation: 'Independent policy essay',
    summary:
      'A policy essay comparing open-field farming, greenhouses and plant factories, and arguing for a layered strategy matched to local readiness. It closes with a recommendation for different production contexts.',
    cardSummary: 'Policy essay on agtech systems and Indonesia’s food security.',
    runDescriptor: 'Policy essay',
    tags: ['environmental', 'research', 'writing'],
    visibility: 'public',
    featured: false,
    cover: agtechCover,
    images: [agtechCover, agtechQuote],
    runImages: [agtechCover, agtechQuote],
    facts: [
      { label: 'Role', value: 'Research and writing' },
      { label: 'Context', value: 'Independent' },
      { label: 'Format', value: 'Policy essay' },
      { label: 'Status', value: 'Unpublished' },
      { label: 'Language', value: 'English' },
    ],
    sections: [
      {
        heading: 'The comparison',
        paragraphs: [
          'Open-field farming has low capital and energy needs but is exposed to climate shocks and uses more land and water. Protected cultivation buffers crops from weather and can raise productivity per square metre, but needs reliable operation. Plant factories with artificial lighting offer total control at a high capital and energy cost. Each profile fits a different geography and market.',
        ],
      },
      {
        heading: 'The argument',
        paragraphs: [
          "No single system can secure Indonesia's food future. The essay proposes a layered hybrid: plant factories for selected urban supply chains, greenhouses in peri-urban horticulture, and a stronger open-field base using low-cost precision tools, organic soil restoration and basic weather sensing.",
        ],
      },
      {
        heading: 'The condition',
        paragraphs: [
          'Technology has to match local readiness and be owned locally. The essay draws on a field visit to Garitan Village during the SCADA course, where community-led land restoration showed how social cohesion and local ownership shape whether a practice lasts.',
        ],
      },
      {
        heading: 'What it shows',
        paragraphs: [
          "Systems thinking, a comparative policy argument and a recommendation that starts from farmers' constraints rather than from the technology. It is unpublished and summarised here rather than republished.",
        ],
      },
    ],
    note: 'The full essay is not published. This page is a summary of the argument.',
    order: 8,
  },
  {
    slug: 'girl-up-sister-brotherhood',
    title: 'Sister(brother)hood for change',
    runTitle: 'Sister(brother)hood for change',
    h1Lines: ['Sister(brother)hood', 'for change'],
    type: 'article',
    context: 'Collaborative',
    year: null,
    yearLabel: 'Student years',
    organisation: 'UIKIPEDIA × Girl Up UI',
    summary:
      'A collaborative Indonesian-language feature on Girl Up UI’s campaign against gender-based violence, built around interviews and a care-first editorial approach.',
    cardSummary: 'Collaborative feature on the Girl Up UI campaign.',
    runDescriptor: 'Collaborative feature',
    tags: ['writing'],
    visibility: 'public',
    featured: false,
    cover: girlupCover,
    images: [girlupCover],
    runImages: [girlupCover],
    facts: [
      { label: 'Role', value: 'Co-writer and interviewer' },
      { label: 'Context', value: 'Collaborative · UIKIPEDIA × Girl Up UI' },
      { label: 'Format', value: 'Indonesian-language feature' },
      { label: 'Language', value: 'Indonesian' },
    ],
    sections: [
      {
        heading: 'The story',
        paragraphs: [
          "A feature on Girl Up UI's campaign for 16 Days of Activism against gender-based violence. It follows the #sisterhoodagainstviolence and #brotherhoodagainstviolence campaign, with interviews about experience, support and male allyship.",
        ],
      },
      {
        heading: 'My contribution',
        paragraphs: [
          'I worked on the interviews and writing with Robby Abdillah. The piece was edited by Rafaella and designed by Gabriella Emristy. It is collaborative work, not a sole-authored portfolio piece.',
        ],
      },
      {
        heading: 'Why it is in the archive',
        paragraphs: [
          'It shows interviewing, listening and writing about a sensitive subject with care, and it is part of the publication work I did during university. It is not environmental work.',
        ],
      },
    ],
    contentNote: 'Discusses sexual violence. Published in Indonesian; no full text is reproduced here. The original UIKIPEDIA link is currently offline.',
    note: 'Cover image only. The full text is not republished. The supplied file credits the content writers as Vania Sandra and Robby Abdillah; the site uses the owner’s full public name.',
    credits:
      'Content writers: Vania Sandra Clarissa and Robby Abdillah. Editor: Rafaella. Layout and design: Gabriella Emristy.',
    order: 9,
  },
  {
    slug: 'manusiaui-connecting-the-human-dots',
    title: 'Connecting the human dots',
    runTitle: 'Connecting the human dots',
    h1Lines: ['Connecting the human dots'],
    type: 'article',
    context: 'Collaborative',
    year: null,
    yearLabel: 'Student years',
    organisation: 'UIKIPEDIA',
    summary:
      'A collaborative Indonesian-language feature about Humans of UI and the campus community behind the account. It looks at the people, routines and perspectives inside the university.',
    cardSummary: 'Collaborative feature about Humans of UI.',
    runDescriptor: 'Collaborative feature',
    tags: ['writing'],
    visibility: 'public',
    featured: false,
    cover: manusiaCover,
    images: [manusiaCover],
    runImages: [manusiaCover],
    facts: [
      { label: 'Role', value: 'Co-writer' },
      { label: 'Context', value: 'Collaborative · UIKIPEDIA' },
      { label: 'Format', value: 'Indonesian-language feature' },
      { label: 'Language', value: 'Indonesian' },
    ],
    sections: [
      {
        heading: 'The story',
        paragraphs: [
          'A feature about Humans of UI and the campus community behind the account. It looks past the stereotype of the university to the people, routines and perspectives inside it.',
        ],
      },
      {
        heading: 'My contribution',
        paragraphs: [
          'Collaborative interviewing and writing for UIKIPEDIA. The supplied copy does not include a full credits page, so the page does not assign individual roles beyond co-writing.',
        ],
      },
      {
        heading: 'Why it is in the archive',
        paragraphs: [
          'Feature writing, listening and editing for a student publication. It is not environmental work.',
        ],
      },
    ],
    contentNote: 'Published in Indonesian; no full text is reproduced here. The original UIKIPEDIA link is currently offline.',
    note: 'Cover image only. The supplied copy does not include the full credits list.',
    order: 10,
  },
  {
    slug: 'therafe-identity',
    title: 'A speculative café identity for mental health',
    runTitle: 'A speculative café identity for mental health',
    h1Lines: ['A speculative café identity', 'for mental health'],
    type: 'project',
    context: 'Independent',
    year: null,
    yearLabel: 'Undated',
    organisation: 'Self-initiated concept',
    summary:
      'A speculative visual identity for a mental-health café concept, built around a hand-drawn botanical mark, a restrained palette and a quiet wordmark. The concept was not delivered for a client.',
    cardSummary: 'Self-initiated café identity and wordmark concept.',
    runDescriptor: 'Visual identity',
    tags: ['visual'],
    visibility: 'public',
    featured: false,
    cover: therafeLogo,
    images: [therafeLogo],
    runImages: [therafeLogo],
    facts: [
      { label: 'Role', value: 'Concept and visual identity' },
      { label: 'Context', value: 'Independent · self-initiated' },
      { label: 'Format', value: 'Logo and brand concept' },
      { label: 'Status', value: 'Speculative, not delivered' },
    ],
    sections: [
      {
        heading: 'The idea',
        paragraphs: [
          'A café concept built around low-pressure conversation and a quieter approach to mental-health framing. The identity pairs a hand-drawn botanical mark with a restrained wordmark and strapline.',
        ],
      },
      {
        heading: 'What it shows',
        paragraphs: [
          'Typography, identity and restraint at a small scale. The concept is speculative and was not delivered for a client.',
        ],
      },
      {
        heading: 'Caveat',
        paragraphs: [
          'The date and context are not documented in the supplied file. The mental-health language is part of the concept; it is not a clinical service or a health claim.',
        ],
      },
    ],
    note: 'Self-initiated concept. Not a clinical service or a delivered brand. Date not documented.',
    order: 11,
  },
];

export const publicWork = work
  .filter((item) => item.visibility === 'public')
  .sort((a, b) => a.order - b.order);

export const featuredWork = publicWork.filter((item) => item.featured);

export const workBySlug = new Map(publicWork.map((item) => [item.slug, item]));

export function countForFilter(id: WorkFilterId | 'all'): number {
  if (id === 'all') return publicWork.length;
  return publicWork.filter((item) => item.tags.includes(id)).length;
}
