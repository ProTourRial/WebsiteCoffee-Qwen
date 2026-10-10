// ─── Menu: category filter pills + glass item cards ─────────────────────────
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowRight,
  Coffee,
  CupSoda,
  GlassWater,
  FlaskConical,
  Leaf,
  Croissant,
  Wheat,
} from 'lucide-react'
import { MENU_CATEGORIES, MENU_ITEMS } from '../data'
import { Button, SectionLabel } from './ui'
import { fadeUp, staggerContainer } from '../motion'

const ICONS = {
  coffee: Coffee,
  'cup-soda': CupSoda,
  'glass-water': GlassWater,
  flask: FlaskConical,
  leaf: Leaf,
  croissant: Croissant,
  wheat: Wheat,
}

/* Single menu item card */
export function MenuCard({ item }) {
  const Icon = ICONS[item.icon] || Coffee
  return (
    <motion.article
      layout
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.15 } }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="glass-card glass-card-hover group flex items-start gap-4 p-5"
    >
      <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-line bg-surface2 transition-colors duration-200 group-hover:border-lime/30 group-hover:text-lime">
        <Icon size={18} className="text-muted transition-colors duration-200 group-hover:text-lime" aria-hidden="true" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="text-[1.125rem] font-bold tracking-tight">{item.name}</h3>
          <span className="font-mono text-sm font-medium text-lime">${item.price.toFixed(2)}</span>
        </div>
        <p className="mt-1 text-sm leading-relaxed text-muted">{item.desc}</p>
        <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.15em] text-zinc-600">
          {item.category}
        </p>
      </div>
    </motion.article>
  )
}

export default function Menu() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? MENU_ITEMS : MENU_ITEMS.filter((i) => i.category === active)

  return (
    <section id="menu" className="relative py-20 sm:py-28" aria-labelledby="menu-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.div variants={fadeUp}>
            <SectionLabel>MENU</SectionLabel>
            <h2
              id="menu-heading"
              className="mt-3 text-[clamp(1.75rem,4vw,3rem)] font-bold leading-[1.1] tracking-[-0.03em]"
            >
              Crafted Coffee &amp; Bakes
            </h2>
          </motion.div>

          {/* Filter pills */}
          <motion.div variants={fadeUp} role="tablist" aria-label="Menu categories" className="mt-8 flex flex-wrap gap-2">
            {MENU_CATEGORIES.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={active === cat}
                onClick={() => setActive(cat)}
                className={`rounded-full border px-4 py-2 font-mono text-xs uppercase tracking-wider transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime/60 ${
                  active === cat
                    ? 'border-lime bg-lime text-bg font-medium'
                    : 'border-line bg-surface1 text-muted hover:border-lime/40 hover:text-ink'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Grid — 1 / 2 / 3 columns */}
          <motion.div layout className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((item) => (
                <MenuCard key={item.name} item={item} />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div variants={fadeUp} className="mt-12 flex justify-center">
            <Button as="a" href="#brewlist">
              Order Ahead <ArrowRight size={16} />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
