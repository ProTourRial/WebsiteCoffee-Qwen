// ─── Style Guide: living documentation of the design system ─────────────────
import { motion } from 'framer-motion'
import { Button, Card, Input, SectionLabel } from './ui'
import { fadeUp, staggerContainer } from '../motion'

const SWATCHES = [
  { name: 'bg', hex: '#0A0A0A', cls: 'bg-bg' },
  { name: 'surface1', hex: '#111111', cls: 'bg-surface1' },
  { name: 'surface2', hex: '#151515', cls: 'bg-surface2' },
  { name: 'line', hex: '#262626', cls: 'bg-line' },
  { name: 'ink', hex: '#EDEDED', cls: 'bg-ink' },
  { name: 'muted', hex: '#A1A1AA', cls: 'bg-muted' },
  { name: 'lime', hex: '#A3E635', cls: 'bg-lime' },
  { name: 'cyan', hex: '#22D3EE', cls: 'bg-cyan' },
  { name: 'error', hex: '#F87171', cls: 'bg-error' },
  { name: 'success', hex: '#4ADE80', cls: 'bg-success' },
]

const TYPE_SCALE = [
  { label: 'hero / clamp(2.5rem,6vw,5rem)', cls: 'text-4xl font-extrabold tracking-[-0.03em] sm:text-5xl', sample: 'Brewed for focus' },
  { label: 'section / clamp(1.75rem,4vw,3rem)', cls: 'text-2xl font-bold tracking-[-0.02em] sm:text-3xl', sample: 'Crafted Coffee & Bakes' },
  { label: 'card title / 1.125rem', cls: 'text-lg font-bold', sample: 'Pour Over — V60' },
  { label: 'body / 1rem · lh 1.5', cls: 'text-base leading-relaxed', sample: 'Single-origin beans, slow bar, and a calm space to work or unwind.' },
  { label: 'mono meta / 0.75rem', cls: 'font-mono text-xs text-muted', sample: '// est. 2024 · JetBrains Mono' },
]

export default function StyleGuide() {
  return (
    <section id="styleguide" className="relative py-20 sm:py-28" aria-labelledby="sg-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div variants={staggerContainer(0.1)} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
          <motion.div variants={fadeUp}>
            <SectionLabel>STYLE GUIDE</SectionLabel>
            <h2 id="sg-heading" className="mt-3 text-[clamp(1.75rem,4vw,3rem)] font-bold leading-[1.1] tracking-[-0.03em]">
              Design System
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
              The tokens behind this page — colors, type scale, buttons, cards, and inputs. Everything here is a live component.
            </p>
          </motion.div>

          {/* Color swatches */}
          <motion.div variants={fadeUp} className="mt-12">
            <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-zinc-500">01 · color</h3>
            <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-5" role="list">
              {SWATCHES.map((s) => (
                <li key={s.name} className="glass-card overflow-hidden !p-0">
                  <div className={`h-14 w-full ${s.cls}`} style={{ boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.04)' }} />
                  <div className="p-3">
                    <p className="text-xs font-semibold">{s.name}</p>
                    <p className="font-mono text-[10px] text-zinc-600">{s.hex}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Type scale */}
          <motion.div variants={fadeUp} className="mt-12">
            <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-zinc-500">02 · typography</h3>
            <div className="glass-card mt-4 divide-y divide-line !p-0">
              {TYPE_SCALE.map((t) => (
                <div key={t.label} className="flex flex-col gap-2 p-5 sm:flex-row sm:items-baseline sm:gap-8">
                  <span className="w-56 shrink-0 font-mono text-[10px] uppercase tracking-wider text-zinc-600">{t.label}</span>
                  <span className={t.cls}>{t.sample}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Components */}
          <motion.div variants={fadeUp} className="mt-12">
            <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-zinc-500">03 · components</h3>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <Card hover={false}>
                <p className="font-mono text-[10px] uppercase tracking-wider text-zinc-600">buttons</p>
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <Button>Primary</Button>
                  <Button variant="ghost">Ghost</Button>
                </div>
                <p className="mt-4 font-mono text-[11px] text-muted">// pill radius 12px · hover scale 1.02 · active 0.98</p>
              </Card>
              <Card hover={false}>
                <p className="font-mono text-[10px] uppercase tracking-wider text-zinc-600">input + section label</p>
                <div className="mt-4 space-y-3">
                  <Input label="Style guide input demo" placeholder="you@example.com" />
                  <SectionLabel>EXAMPLE</SectionLabel>
                </div>
              </Card>
            </div>
          </motion.div>

          {/* Motion notes */}
          <motion.div variants={fadeUp} className="mt-12">
            <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-zinc-500">04 · motion</h3>
            <ul className="mt-4 grid gap-3 font-mono text-xs leading-relaxed text-muted sm:grid-cols-2 lg:grid-cols-4" role="list">
              {[
                'fade-up: y 24→0 · 600ms · ease-out',
                'stagger: 100ms between siblings',
                'hover lift: translateY -4px · 200ms',
                'typing: 80ms/char · blink cursor',
                'navbar blur: after 50px scroll',
                'menu overlay: 60ms link stagger',
                'reduced-motion: all disabled',
                'scroll: smooth, anchored sections',
              ].map((m) => (
                <li key={m} className="glass-card !p-3.5">▸ {m}</li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
