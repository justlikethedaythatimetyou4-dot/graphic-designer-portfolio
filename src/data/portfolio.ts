export type Project = {
  id: string;
  number: string;
  title: string;
  client: string;
  subtitle: string;
  category: string;
  year: string;
  accent: string;
  statement: string;
  role: string;
  deliverables: string;
  images: string[];
  caseStudy: { heading: string; body: string }[];
};

export const projects: Project[] = [
  {
    id: 'mira-house',
    number: '01',
    title: 'Mira House',
    client: 'Mira House',
    subtitle: 'A New Kind of Hospitality',
    category: 'Brand Identity / Art Direction',
    year: '2026',
    accent: '#8B2A1F',
    statement: 'Hospitality,\nReimagined.',
    role: 'Art Direction / Identity / Type',
    deliverables: 'Identity / Print / Digital / Packaging',
    images: [
      'https://images.pexels.com/photos/14547139/pexels-photo-14547139.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/26729558/pexels-photo-26729558.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/9878733/pexels-photo-9878733.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/17001787/pexels-photo-17001787.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    caseStudy: [
      {
        heading: 'The Brief',
        body: 'Mira House needed a visual identity that could feel premium without becoming another predictable luxury hospitality brand. The client wanted warmth — not marble-and-gold luxury, but the kind of warmth that makes a guest feel like they have arrived somewhere with a soul.',
      },
      {
        heading: 'The Idea',
        body: 'Build an identity around warmth, rhythm and imperfect human details. Instead of a rigid monogram, the mark is a hand-drawn ligature that references the archway of the original building. The wordmark breathes — letter spacing expands and contracts across applications.',
      },
      {
        heading: 'Visual Direction',
        body: 'A palette of deep burgundy and warm cream, inspired by the terracotta floors and lime-washed walls of the property. Typography pairs a high-contrast serif for signage with a quiet sans for operational materials.',
      },
      {
        heading: 'Design System',
        body: 'A modular grid based on the building\'s arch proportions. Every piece — from the menu to the key card — sits on the same underlying structure, so the identity feels architectural rather than decorative.',
      },
      {
        heading: 'Application',
        body: 'Business cards with debossed arches, menus printed on uncoated stock with a single ink, signage cut from brass, and packaging for the in-house bakery that uses the arch motif as a window onto the product.',
      },
      {
        heading: 'Final Result',
        body: 'The identity launched across the property in early 2026. Guest feedback consistently mentions the sense of place — the brand doesn\'t feel applied, it feels like it grew out of the building.',
      },
    ],
  },
  {
    id: 'common-ground',
    number: '02',
    title: 'Common Ground Coffee',
    client: 'Common Ground Coffee',
    subtitle: 'Coffee for Everyday Rituals',
    category: 'Packaging / Branding',
    year: '2025',
    accent: '#C8A063',
    statement: 'Ritual,\nBottled.',
    role: 'Packaging / Identity / Type',
    deliverables: 'Packaging / Labels / Retail / Print',
    images: [
      'https://images.pexels.com/photos/4829068/pexels-photo-4829068.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/4829084/pexels-photo-4829084.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/4829069/pexels-photo-4829069.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/28458009/pexels-photo-28458009.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    caseStudy: [
      {
        heading: 'The Brief',
        body: 'Common Ground was preparing to launch in retail across three cities. They needed packaging that could stand out on a shelf crowded with specialty coffee brands — without resorting to the same kraft-paper-and-hand-lettering formula everyone else uses.',
      },
      {
        heading: 'The Idea',
        body: 'Treat each roast as a distinct character. Instead of a uniform label system, every varietal gets its own typographic treatment — bold and architectural for the dark roast, quiet and airy for the light roast, geometric for the house blend.',
      },
      {
        heading: 'Visual Direction',
        body: 'A restrained palette of sand, black and a single warm accent per varietal. Bags are matte uncoated stock with spot UV on the wordmark only — the rest stays flat and tactile.',
      },
      {
        heading: 'Design System',
        body: 'A flexible label template that shares a grid but allows each varietal to own its typography. Origin information, tasting notes and brew guides are typeset in a consistent hierarchy so the system stays coherent even when the letterforms change.',
      },
      {
        heading: 'Application',
        body: '12oz bags, retail display boxes, cup sleeves, barista tools and a limited run of screen-printed posters for the launch event. The retail shelf composition uses staggered heights to create rhythm.',
      },
      {
        heading: 'Final Result',
        body: 'The launch sold through its first retail run in six weeks. Buyers consistently mentioned the packaging as the reason they picked it up off the shelf.',
      },
    ],
  },
  {
    id: 'city-after-dark',
    number: '03',
    title: 'City / After Dark',
    client: 'City / After Dark',
    subtitle: 'A Visual Culture Series',
    category: 'Campaign / Poster Design',
    year: '2025',
    accent: '#3157FF',
    statement: 'The City\nWakes After\nMidnight.',
    role: 'Art Direction / Posters / Social',
    deliverables: 'Posters / Banners / Social / Event',
    images: [
      'https://images.pexels.com/photos/3964485/pexels-photo-3964485.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3964819/pexels-photo-3964819.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3964647/pexels-photo-3964647.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/17302471/pexels-photo-17302471.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    caseStudy: [
      {
        heading: 'The Brief',
        body: 'A cultural series exploring urban nightlife through visual art, music and photography. The campaign needed to feel like an event poster you would actually want to tear off a wall and keep.',
      },
      {
        heading: 'The Idea',
        body: 'Make the poster the hero. Each event in the series gets its own poster variation — same grid, same type system, but each one shifts color and crop to feel like a unique artifact rather than a template.',
      },
      {
        heading: 'Visual Direction',
        body: 'Cobalt blue and vermilion on ivory, with a high-contrast serif that references the typography of underground music flyers. The grid is intentionally tight — text bleeds off edges, letters overlap, compositions feel slightly unstable.',
      },
      {
        heading: 'Design System',
        body: 'A modular poster system where the date, venue and series title are locked, but the central visual can be photography, abstract type or illustration. This lets each event feel distinct while remaining recognizably part of the series.',
      },
      {
        heading: 'Application',
        body: 'Street posters, digital banners, social graphics, event tickets and a limited zine documenting the first season. Posters were pasted in clusters across the city to create a cumulative visual impact.',
      },
      {
        heading: 'Final Result',
        body: 'The series became a recognizable visual fixture in the city. Several posters were collected and framed by attendees — the highest compliment for a poster campaign.',
      },
    ],
  },
  {
    id: 'form-magazine',
    number: '04',
    title: 'Form / Issue 07',
    client: 'Form',
    subtitle: 'The Typography Issue',
    category: 'Editorial Design',
    year: '2025',
    accent: '#111111',
    statement: 'Form Follows\nFunction\nFollows Form.',
    role: 'Editorial / Typography / Layout',
    deliverables: 'Magazine / Spreads / Cover',
    images: [
      'https://images.pexels.com/photos/4271615/pexels-photo-4271615.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/4271611/pexels-photo-4271611.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/18936417/pexels-photo-18936417.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/18936421/pexels-photo-18936421.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    caseStudy: [
      {
        heading: 'The Brief',
        body: 'Form is an independent design magazine. Issue 07 was dedicated entirely to typography — its history, its practitioners and its future. The editor wanted a layout that would make the subject feel alive rather than academic.',
      },
      {
        heading: 'The Idea',
        body: 'Let the typography be the layout. Instead of a uniform grid, each spread adapts its structure to the content — a historical essay uses a strict column grid, an interview breaks into a two-way conversation layout, a type specimen gets a full-bleed foldout.',
      },
      {
        heading: 'Visual Direction',
        body: 'Black on cream, with a single accent of vermilion used only for pull quotes and section openers. The cover uses an oversized lowercase "f" cropped at the edge — the letterform is the entire cover concept.',
      },
      {
        heading: 'Design System',
        body: 'A 12-column grid with a 6-pixel baseline. Body text in a readable serif, captions and metadata in a compact sans, and display headlines in a high-contrast serif that shifts size dramatically across spreads.',
      },
      {
        heading: 'Application',
        body: 'Full magazine design — cover, 12 spreads, table of contents, colophon and a removable type specimen poster bound into the centerfold.',
      },
      {
        heading: 'Final Result',
        body: 'Issue 07 became the magazine\'s best-selling edition and was selected for an independent publishing award. The foldout specimen was framed by several typography studios.',
      },
    ],
  },
  {
    id: 'nova-skin',
    number: '05',
    title: 'Nova Skin',
    client: 'Nova Skin',
    subtitle: 'Skin, Considered',
    category: 'Digital Campaign / Art Direction',
    year: '2026',
    accent: '#7BA098',
    statement: 'Skin,\nConsidered.',
    role: 'Art Direction / Digital / Campaign',
    deliverables: 'Website / Social / Campaign / Product',
    images: [
      'https://images.pexels.com/photos/4841286/pexels-photo-4841286.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/8015461/pexels-photo-8015461.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/6963146/pexels-photo-6963146.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/4841493/pexels-photo-4841493.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    caseStudy: [
      {
        heading: 'The Brief',
        body: 'Nova Skin was launching a reformulated line and wanted to move away from the clinical, ingredient-list-forward aesthetic that dominates skincare. They wanted the campaign to feel like a quiet conversation about skin, not a science lesson.',
      },
      {
        heading: 'The Idea',
        body: 'Build the campaign around the idea of "considered" — every decision, from the formula to the photography to the website, is deliberate. The visual language is soft, spacious and confident, with photography that treats skin as a landscape.',
      },
      {
        heading: 'Visual Direction',
        body: 'A palette of sage, stone and warm white. Photography uses natural light and shallow depth of field. Typography is a single elegant sans, used at multiple scales — no decorative type, no gradients, no noise.',
      },
      {
        heading: 'Design System',
        body: 'A website built on a quiet grid with generous whitespace. Product pages lead with photography, not claims. Social posts use the same type system at smaller scale, maintaining the calm across touchpoints.',
      },
      {
        heading: 'Application',
        body: 'Website, social campaign across 6 weeks, product photography direction, email design and in-store launch materials.',
      },
      {
        heading: 'Final Result',
        body: 'The reformulation launch exceeded sales targets by 40%. The campaign photography was picked up by several design publications for its restraint.',
      },
    ],
  },
  {
    id: 'type-motion-form',
    number: '06',
    title: 'Type / Motion / Form',
    client: 'Personal Exploration',
    subtitle: 'Letters in Motion',
    category: 'Typography / Experimental',
    year: '2026',
    accent: '#D9FF3F',
    statement: 'Letters Are\nObjects Too.',
    role: 'Type / Motion / Experimentation',
    deliverables: 'Type / Motion / Print',
    images: [
      'https://images.pexels.com/photos/29101883/pexels-photo-29101883.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/28976797/pexels-photo-28976797.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/18759223/pexels-photo-18759223.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/38791430/pexels-photo-38791430.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    caseStudy: [
      {
        heading: 'The Brief',
        body: 'No brief. This is an ongoing personal exploration of letterforms as physical and kinetic objects — what happens when a letter is stretched, cropped, overlapped, set in motion.',
      },
      {
        heading: 'The Idea',
        body: 'Treat each letter as a sculpture. Build compositions where the letter is not communicating a word but existing as a form — its curves, its weight, its negative space are the subject.',
      },
      {
        heading: 'Visual Direction',
        body: 'Acid yellow and black on ivory. Oversized letters that crop at the frame edge. Some letters are distorted, some are overlapped, some are set in motion as short looping animations.',
      },
      {
        heading: 'Design System',
        body: 'No system — that is the point. Each experiment follows its own logic. The only constant is the commitment to treating type as form.',
      },
      {
        heading: 'Application',
        body: 'A series of printed posters, a set of looping motion experiments and a small risograph zine documenting the process.',
      },
      {
        heading: 'Final Result',
        body: 'The series became a studio favorite and led to two commissioned type-led campaigns. It remains an open project — new experiments are added as they happen.',
      },
    ],
  },
];

export const testimonials = [
  {
    quote:
      'Ananya took what was essentially a collection of ideas and turned it into a brand that finally felt like us.',
    name: 'Meera Shah',
    title: 'Founder, Mira House',
  },
  {
    quote:
      "She doesn't just make things look good. She creates a visual logic that the whole team can actually use.",
    name: 'Rahul Menon',
    title: 'Creative Director',
  },
  {
    quote:
      'Working with Ananya changed how we think about our own brand. Every decision now has a reason behind it.',
    name: 'Aditya Verma',
    title: 'Co-founder, Common Ground',
  },
];

export const clients = [
  'Mira House',
  'Common Ground',
  'Nova Skin',
  'Form',
  'Northstar',
  'Kairo',
  'Orbit',
];

export const experience = [
  { year: '2018', role: 'Junior Designer', company: 'Studio Eight' },
  { year: '2020', role: 'Designer', company: 'Common Practice' },
  { year: '2023', role: 'Senior Designer', company: 'Northstar Creative' },
  { year: '2025', role: 'Independent Designer', company: 'Ananya Rao Studio' },
  { year: '2026', role: 'Graphic Designer & Art Director', company: 'Independent' },
];

export const tools = [
  'Adobe Illustrator',
  'Photoshop',
  'InDesign',
  'After Effects',
  'Figma',
  'Blender',
];

export const services = [
  { name: 'Identity', project: 'Mira House', image: 'https://images.pexels.com/photos/9878733/pexels-photo-9878733.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { name: 'Art Direction', project: 'City / After Dark', image: 'https://images.pexels.com/photos/3964485/pexels-photo-3964485.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { name: 'Packaging', project: 'Common Ground', image: 'https://images.pexels.com/photos/4829068/pexels-photo-4829068.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { name: 'Editorial', project: 'Form / Issue 07', image: 'https://images.pexels.com/photos/4271615/pexels-photo-4271615.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { name: 'Campaigns', project: 'Nova Skin', image: 'https://images.pexels.com/photos/4841286/pexels-photo-4841286.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { name: 'Digital', project: 'Nova Skin', image: 'https://images.pexels.com/photos/8015461/pexels-photo-8015461.jpeg?auto=compress&cs=tinysrgb&w=800' },
];

export const colorStudies = [
  {
    project: 'Mira House',
    colors: [
      { name: 'Burgundy', hex: '#8B2A1F' },
      { name: 'Cream', hex: '#F9F6F0' },
      { name: 'Charcoal', hex: '#2B2622' },
    ],
  },
  {
    project: 'Common Ground',
    colors: [
      { name: 'Sand', hex: '#C8A063' },
      { name: 'Black', hex: '#111111' },
      { name: 'Ivory', hex: '#F4F0E8' },
    ],
  },
  {
    project: 'City / After Dark',
    colors: [
      { name: 'Cobalt', hex: '#3157FF' },
      { name: 'Vermilion', hex: '#F04A32' },
      { name: 'Ivory', hex: '#F4F0E8' },
    ],
  },
  {
    project: 'Nova Skin',
    colors: [
      { name: 'Sage', hex: '#7BA098' },
      { name: 'Stone', hex: '#D8D3C8' },
      { name: 'Warm White', hex: '#F9F6F0' },
    ],
  },
];

export const designProcess = [
  'Research',
  'Concept',
  'Art Direction',
  'Design',
  'Refine',
  'Deliver',
];

export const identityProcess = [
  'Sketch',
  'Concept',
  'Type',
  'Color',
  'System',
  'Application',
];
