export interface DesignItem {
  slug: string;
  title: string;
  kind: string;
  yearLabel: string;
  organisation?: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  summary: string;
  /** Confidential detail removed from the public image. */
  redacted?: string;
  /** Third-party material inside the design, or a link to the archive item it belongs to. */
  credit?: string;
  workSlug?: string;
}

export const designItems: DesignItem[] = [
  {
    slug: 'fcc-blue-economy-webinar',
    title: 'Blue Economic Challenges on Fishery and Marine in Indonesia',
    kind: 'Instagram webinar poster',
    yearLabel: '2021',
    organisation: 'Fisheries Cyber Center, Telkom Indonesia',
    src: '/work/fcc/fcc-poster.webp',
    alt: 'Webinar poster in Indonesian announcing an environmental economics session on blue economic challenges in Indonesian fisheries and marine areas, with speaker photographs, the date 6 November 2021, a Zoom link and a contact block.',
    width: 1080,
    height: 895,
    summary:
      'Event communication produced during the project management internship on the Fisheries Cyber Center, for a public environmental economics webinar.',
    redacted: 'Two phone numbers in the registration block are removed from the public image.',
    workSlug: 'fcc-blue-economy',
  },
  {
    slug: 'hmd-memorable',
    title: 'HMD Memorable',
    kind: 'Student event poster',
    yearLabel: 'February 2020',
    src: '/design/hmd-memorable.webp',
    alt: 'Tall poster on a pale background reading HMD MEMORABLE, with a save-the-date line for 14 February 2020, a coming-soon line and an illustration of two people seated together.',
    width: 1200,
    height: 1698,
    summary:
      'A save-the-date poster for a department event, built around a single illustration and a tight typographic hierarchy.',
    credit: 'The central illustration is third-party artwork and is credited on the poster itself.',
  },
  {
    slug: 'gofood-fest',
    title: 'GoFood Fest',
    kind: 'Event poster',
    yearLabel: 'December 2019',
    src: '/design/gofood-fest.webp',
    alt: 'Dark event poster for GoFood Fest with the tagline Ceritain Food and Your Story, food photography, event details and an RSVP line at the foot.',
    width: 1080,
    height: 1920,
    summary:
      'A food and storytelling event poster: photography-led layout, one accent colour, and the details stacked down the right edge.',
    redacted: 'The RSVP name and messaging handle at the foot are removed.',
    credit: 'The poster uses third-party photography.',
  },
  {
    slug: 'coming-real-soon',
    title: 'Coming Real Soon — Physics Jalan-Jalan',
    kind: 'Event poster',
    yearLabel: 'December 2019',
    src: '/design/coming-real-soon.webp',
    alt: 'Collage poster reading Coming Real Soon over a photograph of a yellow New York taxi, with a blue social-media bar along the foot carrying department handles.',
    width: 1080,
    height: 1920,
    summary:
      'A teaser poster for a physics department outing, assembled as a collage with a social bar across the foot.',
    redacted: 'The department mailbox printed on the social bar is removed.',
    credit:
      'The collage uses third-party photography and logos. Public department social handles are left in place.',
  },
  {
    slug: 'yukino-flyer',
    title: 'Yukino — Yuk, Kenalan Lebih Dekat',
    kind: 'Campus event flyer',
    yearLabel: 'November 2019',
    src: '/design/yukino-flyer.webp',
    alt: 'Illustrated campus flyer reading Yukino with the line Yuk kenalan lebih dekat, showing a walkway between university buildings with students, event dates and a registration link.',
    width: 1600,
    height: 2264,
    summary:
      'An introductory campus event flyer, built on illustrated scenery rather than photography.',
    credit: 'Produced in Canva using third-party illustration.',
  },
  {
    slug: 'physics-is-fun-merchandise',
    title: 'Physics Is Fun merchandise',
    kind: 'Merchandise promotion',
    yearLabel: '2019',
    src: '/design/merchandise-physics-1.webp',
    alt: 'Square promotional graphic reading Physics Is Fun for a t-shirt and long-sleeve line, with a moon and planet collage on a dark background, product detail and an order-now call.',
    width: 1080,
    height: 1080,
    summary:
      'A product promotion for a department merchandise run: dark space background, one headline, and the ordering detail set small across the foot.',
    redacted:
      'Two contact handles and a bank account number in the ordering block are removed from the public image.',
  },
  {
    slug: 'merchandise-package',
    title: 'Paket Komplit merchandise bundles',
    kind: 'Merchandise promotion',
    yearLabel: '2019',
    src: '/design/merchandise-physics-2.webp',
    alt: 'Square promotional graphic listing five merchandise bundles named after constellations — Pegasus, Aquila, Lyra, Phoenix and Crater — each with its contents and price, over a dark space background.',
    width: 1080,
    height: 1080,
    summary:
      'The price list that went with it: five bundles named after constellations, laid out as a readable table inside a poster format.',
    redacted:
      'The same contact handles and bank account number are removed from the public image.',
  },
  {
    slug: 'coffee-chemistry',
    title: 'Kopi: Chemical Magic in Our Life',
    kind: 'Science communication infographic',
    yearLabel: 'August 2019',
    src: '/work/coffee/coffee-chemistry.webp',
    alt: 'Full Indonesian-language A4 infographic on the chemistry of coffee, covering esterification and roasting reactions, brewing water, temperature, freshness, two reaction-rate equations and a closing panel on coffee and stomach acid.',
    width: 1132,
    height: 1600,
    summary:
      'An Indonesian-language infographic explaining the chemistry of brewing coffee, from roasting reactions to extraction rate.',
    workSlug: 'coffee-chemistry',
  },
  {
    slug: 'therafe-identity',
    title: 'THERAFÉ',
    kind: 'Brand mark',
    yearLabel: 'Date not documented',
    src: '/work/therafe/therafe-logo.webp',
    alt: 'A restrained wordmark reading THERAFÉ over a small line of supporting text, set in a light serif on a pale background.',
    width: 500,
    height: 500,
    summary:
      'A concept identity for a mental-health café: a serif wordmark, an acute accent as the only flourish, and a very quiet palette.',
    workSlug: 'therafe-identity',
  },
];
