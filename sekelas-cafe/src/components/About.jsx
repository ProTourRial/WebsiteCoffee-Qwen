// ─── About: story, stat cards, origin marquee ───────────────────────────────
import { motion } from 'framer-motion'
import { Bean, Flame, Timer } from 'lucide-react'
import { STATS, ORIGINS } from '../data'
import { SectionLabel } from './ui'
import { fadeUp, staggerContainer } from '../motion'

const STAT_ICONS = [Bean, Flame, Timer]

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28" aria-labelledby="about-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.div variants={fadeUp}>
            <SectionLabel>ABOUT</SectionLabel>
            <h2
              id="about-heading"
              className="mt-3 text-[clamp(1.75rem,4vw,3rem)] font-bold leading-[1.1] tracking-[-0.03em]"
            >
              Small-batch. Single-origin.{' '}
              <span className="text-lime">Slow bar.</span>
            </h2>
          </motion.div>

          <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-16">
            <motion.p variants={fadeUp} className="text-base leading-relaxed text-muted">
              We source single-origin beans from small farms, roast in small batches, and brew
              with intention. Every cup is dialed in daily — because consistency is craft.
            </motion.p>
            <motion.p variants={fadeUp} className="text-base leading-relaxed text-muted">
              Our space is built for focus: Wi-Fi, power outlets, natural light, and a no-rush
              policy. Stay for one cup or the whole afternoon.
            </motion.p>
          </div>

          {/* Stat cards */}
          <motion.div variants={staggerContainer(0.12)} className="mt-12 grid gap-4 sm:grid-cols-3">
            {STATS.map(({ value, label, note }, i) => {
              const Icon = STAT_ICONS[i]
              return (
                <motion.div
                  key={label}
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="glass-card glass-card-hover p-6"
                >
                  <Icon size={18} className="text-cyan" aria-hidden="true" />
                  <p className="mt-4 text-3xl font-extrabold tracking-tight">{value}</p>
                  <p className="mt-1 text-sm font-semibold text-ink">{label}</p>
                  <p className="mt-1 font-mono text-xs text-muted">// {note}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>

      {/* Origin marquee */}
      <div
        className="relative mt-16 overflow-hidden border-y border-line bg-surface1/50 py-3"
        aria-label="Bean origins"
        role="marquee"
      >
        <div className="flex w-max animate-marquee gap-8 whitespace-nowrap motion-reduce:animate-none">
          {[...ORIGINS, ...ORIGINS, ...ORIGINS, ...ORIGINS].map((origin, i) => (
            <span key={i} className="flex items-center gap-8 font-mono text-xs uppercase tracking-[0.2em] text-muted">
              {origin} <span className="text-lime">✦</span>
            </span>
          ))}
        </div>
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-bg to-transparent" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-bg to-transparent" aria-hidden="true" />
      </div>
    </section>
  )
}
