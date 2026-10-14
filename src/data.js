export const contact = {
  phone: '9779333822',
  email: 'jasleendps@gmail.com',
}

export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/products', label: 'Products' },
  { to: '/insights', label: 'Insights' },
  { to: '/contact', label: 'Contact' },
]

export const products = [
  {
    id: 'apron',
    name: 'Kids Apron',
    price: 200,
    image: '/images/apron.webp',
    color: 'var(--sky)',
    tagline: 'Small steps… big impact!',
    madeFrom: 'Leftover cloth from tailor shops',
    perfectFor: ['Cooking & baking', 'Art and craft', 'Gardening', 'A thoughtful eco gift'],
  },
  {
    id: 'bottle',
    name: 'Water Bottle Cover',
    price: 100,
    image: '/images/bottle-cover.webp',
    color: 'var(--lime)',
    tagline: 'Small change… big impact!',
    madeFrom: 'Old cloth & jute',
    perfectFor: ['School & college', 'Picnics', 'Gym bags', 'Keeping drinks cool'],
  },
  {
    id: 'mat',
    name: 'Table Mat / Lunch Mat',
    price: 150,
    image: '/images/table-mat.webp',
    color: 'var(--mustard)',
    tagline: 'Small steps… big impact!',
    madeFrom: 'Patchwork of waste fabric strips',
    perfectFor: ['Your dining table', 'Lunch boxes', 'Home décor', 'Gifting'],
  },
  {
    id: 'kit',
    name: 'Stationery Pouch',
    price: 100,
    image: '/images/stationery-kit.webp',
    color: 'var(--pink)',
    tagline: 'Small kit… big change!',
    madeFrom: 'Waste fabric, zipped & lined',
    perfectFor: ['Pencils & pens', 'Art supplies', 'Travel kits', 'Return gifts'],
  },
]

export const steps = [
  {
    n: '01',
    title: 'Tailor Shop',
    text: 'Local tailors save their offcuts for us instead of throwing them away.',
    icon: '🧵',
  },
  {
    n: '02',
    title: 'Sorting & Cleaning',
    text: 'We sort scraps by colour and fabric type, then wash and iron every piece.',
    icon: '🧺',
  },
  {
    n: '03',
    title: 'Cutting & Designing',
    text: 'We sketch patterns, match prints and cut panels so nothing goes to waste.',
    icon: '✂️',
  },
  {
    n: '04',
    title: 'Stitching',
    text: 'Panels are stitched into aprons, covers, mats and pouches — checked twice.',
    icon: '🪡',
  },
  {
    n: '05',
    title: 'Loved & Reused',
    text: 'Our creations go to homes, schools and kitchens, where they get used every day.',
    icon: '💚',
  },
]

export const founders = [
  { name: 'Master Ajit Singh', role: 'CEO of Scrap Spark' },
  { name: 'Miss Harleen Kaur', role: 'Founder of Scrap Spark' },
]

/* Lessons the student team learned while starting Scrap Spark. */
export const insights = [
  {
    no: 1,
    title: 'Start with a problem you can see',
    quote:
      'We walked past a tailor shop and saw bags of cloth being thrown out every week. That was our "aha!" moment. You don\'t need a giant idea — you need a real problem near you.',
    by: 'The Idea Team',
    tip: 'List 5 problems in your school or street. Pick the one people complain about most.',
    color: 'var(--lime)',
  },
  {
    no: 2,
    title: 'Talk to customers before you make 100 pieces',
    quote:
      'We made just three aprons first and showed them to parents and teachers. They told us kids wanted pockets. Listening early saved us cloth, time and money.',
    by: 'The Research Team',
    tip: 'Make a sample, show it to 10 people, and write down every piece of feedback.',
    color: 'var(--pink)',
  },
  {
    no: 3,
    title: 'Know your costs to the last rupee',
    quote:
      'Our fabric is free, but thread, zips, elastic and packaging are not. When we added it all up, our first price was actually a loss! Now we cost every product before we price it.',
    by: 'The Finance Team',
    tip: 'Price = Cost of materials + Cost of time + Profit. Never skip the middle one.',
    color: 'var(--mustard)',
  },
  {
    no: 4,
    title: 'A brand is a promise',
    quote:
      'Our name, our logo and "Little Hands, Big Ideas" tell people who we are before we say a word. Every product carries the same message: reuse, reduce, recycle.',
    by: 'The Design Team',
    tip: 'Pick one line that explains your business. Put it on everything.',
    color: 'var(--sky)',
  },
  {
    no: 5,
    title: 'Teamwork means clear roles',
    quote:
      'In week one, everyone wanted to stitch and nobody wanted to keep accounts. We gave each person one job — sourcing, sewing, selling or money — and things moved much faster.',
    by: 'The Operations Team',
    tip: 'Write down who owns what. One owner per task.',
    color: 'var(--peach)',
  },
  {
    no: 6,
    title: 'Mistakes are part of the plan',
    quote:
      'Our first bottle cover was too tight to fit any bottle! We laughed, measured again, and fixed it. Every mistake taught us something a textbook couldn\'t.',
    by: 'The Production Team',
    tip: 'Keep a "what went wrong" notebook. Read it before every new batch.',
    color: 'var(--lime)',
  },
  {
    no: 7,
    title: 'Purpose sells better than pressure',
    quote:
      'People don\'t just buy a table mat from us — they buy a story about cleaner landfills. When we told that story honestly, customers shared it for us.',
    by: 'The Sales Team',
    tip: 'Tell customers where your product came from, not just what it costs.',
    color: 'var(--pink)',
  },
]

/* Illustrative costing example for one apron (₹). */
export const costing = [
  { item: 'Rescued fabric', amount: 0 },
  { item: 'Thread, straps & buttons', amount: 35 },
  { item: 'Stitching time', amount: 70 },
  { item: 'Packaging & tag', amount: 15 },
]

export const canvas = [
  { k: 'Problem', v: 'Tailor shops throw away kilos of good fabric scraps every month.' },
  { k: 'Solution', v: 'Turn those scraps into useful, colourful everyday products.' },
  { k: 'Customers', v: 'Parents, students, teachers and eco-conscious gift buyers.' },
  { k: 'Channels', v: 'School fairs, word of mouth, WhatsApp and this website.' },
  { k: 'Revenue', v: 'Product sales from ₹100 to ₹200, plus bulk gift orders.' },
  { k: 'Impact', v: 'Less landfill waste and support for UN SDG 12 & 13.' },
]
