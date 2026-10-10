// ─── Testimonials: three review cards ───────────────────────────────────────
import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { TESTIMONIALS } from '../data'
import { SectionLabel } from './ui'
import { fadeUp, staggerContainer } from '../motion'

export function TestimonialCard({ t }) {
  return (
    <motion.figure
      variants={fadeUp}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="glass-card glass-card-hover flex flex-col p-6"
    >
      <Quote size={20} className="text-lime/60" aria-hidden="true" />
      <blockquote className="mt-4 flex-1 text-[15px] italic leading-relaxed text-ink">
        “{t.quote}”
      </blockquote>
      <figcaption className="mt-5 border-t border-line pt-4">
        <p className="text-sm font-bold">{t.name}</p>
        <p className="mt-1 font-mono text-xs text-muted">{t.role}</p>
      </figcaption>
    </motion.figure>
  )
}

export default function Testimonials() {
  return (
    <section className="relative py-20 sm:py-28" aria-labelledby="reviews-heading">
      {/* subtle surface band */}
      <div className="absolute inset-0 bg-surface1/40" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div variants={staggerContainer(0.1)} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
          <motion.div variants={fadeUp}>
            <SectionLabel>REVIEWS</SectionLabel>
            <h2 id="reviews-heading" className="mt-3 text-[clamp(1.75rem,4vw,3rem)] font-bold leading-[1.1] tracking-[-0.03em]">
              What Regulars Say
            </h2>
          </motion.div>

          <motion.div variants={staggerContainer(0.12)} className="mt-10 grid gap-4 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <TestimonialCard key={t.name} t={t} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
