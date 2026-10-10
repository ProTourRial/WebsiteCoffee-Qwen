// ─── SEKELAS CAFE · content & configuration ────────────────────────────────

export const CAFE = {
  name: 'SEKELAS CAFE',
  tagline: 'Brewed with intention.',
  est: 'est. 2024',
  address: '123 Bean Street, Your City',
  phone: '+1 (555) 010-2024',
  email: 'hello@sekelas.cafe',
  hours: [
    { days: 'Mon – Fri', time: '7:00 – 19:00', open: 7, close: 19, daysNum: [1, 2, 3, 4, 5] },
    { days: 'Sat – Sun', time: '8:00 – 20:00', open: 8, close: 20, daysNum: [6, 0] },
  ],
}

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Visit', href: '#visit' },
  { label: 'Contact', href: '#contact' },
]

export const TYPING_WORDS = ['espresso', 'pour over', 'cold brew', 'matcha', 'flat white']

export const STATS = [
  { value: '12+', label: 'Single Origins', note: 'rotating seasonally' },
  { value: 'Daily', label: 'Roasted', note: 'small-batch, on site' },
  { value: '8hr', label: 'Avg. Stay', note: 'no-rush policy' },
]

export const ORIGINS = ['ETHIOPIA', 'COLOMBIA', 'GUATEMALA', 'KENYA', 'BRAZIL']

export const MENU_CATEGORIES = ['All', 'Espresso', 'Brew Bar', 'Not Coffee', 'Pastries']

export const MENU_ITEMS = [
  { name: 'Espresso', price: 3.0, category: 'Espresso', desc: 'Double shot, house blend', icon: 'coffee' },
  { name: 'Americano', price: 3.5, category: 'Espresso', desc: 'Espresso + hot water', icon: 'coffee' },
  { name: 'Latte', price: 4.5, category: 'Espresso', desc: 'Silky microfoam, 12oz', icon: 'cup-soda' },
  { name: 'Cappuccino', price: 4.5, category: 'Espresso', desc: 'Equal parts, dry foam', icon: 'cup-soda' },
  { name: 'Cold Brew', price: 5.0, category: 'Brew Bar', desc: '18hr steep, served over ice', icon: 'glass-water' },
  { name: 'Pour Over', price: 5.5, category: 'Brew Bar', desc: 'Single origin, V60', icon: 'flask' },
  { name: 'Matcha Latte', price: 5.0, category: 'Not Coffee', desc: 'Ceremonial grade, oat milk', icon: 'leaf' },
  { name: 'Croissant', price: 3.5, category: 'Pastries', desc: 'Butter, laminated, baked daily', icon: 'croissant' },
  { name: 'Banana Bread', price: 4.0, category: 'Pastries', desc: 'Toasted, salted butter', icon: 'wheat' },
]

export const GALLERY_ITEMS = [
  { id: 1, caption: 'Latte art · rosetta pull', hue: 'lime', kind: 'art', tall: true },
  { id: 2, caption: 'Pour over · V60 station', hue: 'cyan', kind: 'pourover', tall: false },
  { id: 3, caption: 'Interior · window bench', hue: 'warm', kind: 'interior', tall: false },
  { id: 4, caption: 'Beans · Ethiopia Guji', hue: 'amber', kind: 'beans', tall: false },
  { id: 5, caption: 'Pastry tray · 6:40 am', hue: 'warm', kind: 'tray', tall: false },
  { id: 6, caption: 'Neon · brewed with intention', hue: 'cyan', kind: 'neon', tall: true },
]

export const TESTIMONIALS = [
  {
    quote: 'Best flat white in the city. I get more done here than at my office.',
    name: 'Maya R.',
    role: '@mayabuilds · regular, 2 yrs',
  },
  {
    quote: 'The pour over flight changed how I think about coffee.',
    name: 'Daniel K.',
    role: '@dk_tastes · first visit, then every week',
  },
  {
    quote: 'Cozy, quiet, and the banana bread is dangerous.',
    name: 'Priya S.',
    role: '@priyawrites · remote worker #47',
  },
]

export const SOCIALS = [
  { label: 'Instagram', handle: '@sekelas.cafe', href: '#' },
  { label: 'Twitter / X', handle: '@sekelascafe', href: '#' },
  { label: 'TikTok', handle: '@sekelas.cafe', href: '#' },
]
