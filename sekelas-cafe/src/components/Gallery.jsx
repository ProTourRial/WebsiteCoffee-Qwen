// ─── Gallery: asymmetric grid of generated SVG "photos" (zero network cost) ─
import { motion } from 'framer-motion'
import { GALLERY_ITEMS } from '../data'
import { SectionLabel } from './ui'
import { fadeUp, staggerContainer } from '../motion'

/* Each scene is an inline SVG so the page ships no image bytes and loads instantly.
   Swap these for real photography via <img loading="lazy"> when assets are ready. */
function Scene({ kind }) {
  const common = { preserveAspectRatio: 'xMidYMid slice', className: 'h-full w-full' }
  switch (kind) {
    case 'art': // latte art rosetta
      return (
        <svg viewBox="0 0 400 500" {...common} aria-hidden="true">
          <rect width="400" height="500" fill="#151515" />
          <circle cx="200" cy="250" r="150" fill="#1c1917" stroke="#262626" strokeWidth="2" />
          <circle cx="200" cy="250" r="128" fill="#3b2a1e" />
          <ellipse cx="200" cy="250" rx="96" ry="96" fill="#d6c7ae" opacity="0.9" />
          {[...Array(6)].map((_, i) => (
            <path key={i} d={`M200 ${170 + i * 26} q -${34 - i * 3} ${13} 0 ${26} q ${34 - i * 3} ${13} 0 -${26}`} fill="#f5efe3" opacity={0.95 - i * 0.05} />
          ))}
          <path d="M200 160 v190" stroke="#f5efe3" strokeWidth="5" strokeLinecap="round" />
          <circle cx="200" cy="368" r="10" fill="#f5efe3" />
        </svg>
      )
    case 'pourover': // V60 setup
      return (
        <svg viewBox="0 0 400 400" {...common} aria-hidden="true">
          <rect width="400" height="400" fill="#101010" />
          <line x1="60" y1="330" x2="340" y2="330" stroke="#262626" strokeWidth="2" />
          <path d="M140 120 L260 120 L215 230 L185 230 Z" fill="#1c1917" stroke="#22D3EE" strokeOpacity="0.4" strokeWidth="2" />
          <path d="M155 135 L245 135 L212 215 L188 215 Z" fill="#3b2a1e" />
          <ellipse cx="200" cy="135" rx="60" ry="10" fill="#57402c" />
          <path d="M185 235 h30 l-6 40 h-18 Z" fill="#1c1917" stroke="#262626" />
          <rect x="176" y="278" width="48" height="52" rx="8" fill="#151515" stroke="#A3E635" strokeOpacity="0.35" strokeWidth="2" />
          <path d="M200 96 v34" stroke="#22D3EE" strokeWidth="3" strokeLinecap="round" strokeDasharray="2 10" />
          <path d="M196 80 q6 -12 0 -24 q-6 -12 0 -24" stroke="#A1A1AA" strokeWidth="2" fill="none" opacity="0.5" />
        </svg>
      )
    case 'interior': // window bench seating
      return (
        <svg viewBox="0 0 400 400" {...common} aria-hidden="true">
          <rect width="400" height="400" fill="#121212" />
          <rect x="40" y="40" width="320" height="200" rx="6" fill="#1e293b" opacity="0.35" />
          <line x1="200" y1="40" x2="200" y2="240" stroke="#262626" strokeWidth="3" />
          <line x1="40" y1="140" x2="360" y2="140" stroke="#262626" strokeWidth="3" />
          <rect x="60" y="250" width="280" height="26" rx="6" fill="#3f2f21" />
          <rect x="70" y="276" width="260" height="60" rx="4" fill="#2b2016" />
          <rect x="120" y="196" width="16" height="54" rx="3" fill="#0A0A0A" opacity="0.6" />
          <circle cx="128" cy="188" r="14" fill="#A3E635" opacity="0.18" />
          <rect x="250" y="210" width="34" height="24" rx="4" fill="#1c1917" stroke="#262626" />
          <path d="M258 210 q13 -18 26 0" fill="#EDEDED" opacity="0.12" />
        </svg>
      )
    case 'beans': // roasted beans close-up
      return (
        <svg viewBox="0 0 400 400" {...common} aria-hidden="true">
          <rect width="400" height="400" fill="#141210" />
          {[...Array(16)].map((_, i) => {
            const x = 40 + (i % 4) * 95 + ((i >> 2) % 2) * 30
            const y = 50 + Math.floor(i / 4) * 95
            const r = (i * 37) % 40 - 20
            return (
              <g key={i} transform={`translate(${x} ${y}) rotate(${r})`}>
                <ellipse rx="34" ry="24" fill="#4a3323" />
                <path d="M-30 0 q15 -12 30 0 q15 12 30 0" stroke="#241a11" strokeWidth="4" fill="none" />
              </g>
            )
          })}
          <circle cx="330" cy="70" r="40" fill="#A3E635" opacity="0.06" />
        </svg>
      )
    case 'tray': // pastry tray
      return (
        <svg viewBox="0 0 400 400" {...common} aria-hidden="true">
          <rect width="400" height="400" fill="#131313" />
          <rect x="50" y="90" width="300" height="220" rx="12" fill="#1c1917" stroke="#262626" strokeWidth="2" />
          {[...Array(3)].map((_, row) =>
            [...Array(3)].map((_, col) => (
              <g key={`${row}-${col}`} transform={`translate(${110 + col * 90} ${150 + row * 62})`}>
                <path d="M-28 8 q10 -22 28 -22 q18 0 28 22 q-14 10 -28 10 q-14 0 -28 -10Z" fill="#b98a4e" />
                <path d="M-16 2 q8 -12 16 -12 q8 0 16 12" stroke="#e6c78f" strokeWidth="3" fill="none" />
              </g>
            ))
          )}
          <rect x="50" y="90" width="300" height="18" rx="9" fill="#EDEDED" opacity="0.04" />
        </svg>
      )
    case 'neon': // neon sign
      return (
        <svg viewBox="0 0 400 500" {...common} aria-hidden="true">
          <rect width="400" height="500" fill="#0d0d0d" />
          <g fill="none" strokeLinecap="round">
            <path d="M120 180 h130 a40 40 0 0 1 0 80 h-20 a40 40 0 0 1 -40 40 h-10 a40 40 0 0 1 -40 -40 Z" stroke="#A3E635" strokeWidth="6" style={{ filter: 'drop-shadow(0 0 12px rgba(163,230,53,0.8))' }} />
            <path d="M255 200 h25 a28 28 0 0 1 0 56 h-25" stroke="#22D3EE" strokeWidth="6" style={{ filter: 'drop-shadow(0 0 12px rgba(34,211,238,0.8))' }} />
            <path d="M150 130 c0 14 -8 14 -8 28 M185 130 c0 14 -8 14 -8 28 M220 130 c0 14 -8 14 -8 28" stroke="#A3E635" strokeWidth="4" opacity="0.8" style={{ filter: 'drop-shadow(0 0 8px rgba(163,230,53,0.6))' }} />
          </g>
          <text x="200" y="360" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="15" fill="#A1A1AA">brewed.with.intention</text>
          <text x="200" y="392" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="11" fill="#52525b">▮ open source · open door</text>
        </svg>
      )
    default:
      return null
  }
}

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-20 sm:py-28" aria-labelledby="gallery-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div variants={staggerContainer(0.1)} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
          <motion.div variants={fadeUp}>
            <SectionLabel>GALLERY</SectionLabel>
            <h2 id="gallery-heading" className="mt-3 text-[clamp(1.75rem,4vw,3rem)] font-bold leading-[1.1] tracking-[-0.03em]">
              Inside the Space
            </h2>
          </motion.div>

          {/* Asymmetric grid: 2 cols mobile, 3 cols desktop; items 1 & 6 span 2 rows */}
          <motion.div variants={fadeUp} className="mt-10 grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[220px] sm:gap-4 lg:grid-cols-3">
            {GALLERY_ITEMS.map((item) => (
              <figure
                key={item.id}
                className={`group relative overflow-hidden rounded-2xl border border-line transition-colors duration-200 hover:border-lime/30 ${item.tall ? 'row-span-2' : ''}`}
              >
                <div className="h-full w-full transition-transform duration-500 ease-out group-hover:scale-105">
                  <Scene kind={item.kind} />
                </div>
                {/* Caption overlay on hover/focus */}
                <figcaption className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-bg/90 via-bg/20 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100">
                  <span className="font-mono text-xs uppercase tracking-[0.1em] text-lime">{item.caption}</span>
                </figcaption>
              </figure>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
