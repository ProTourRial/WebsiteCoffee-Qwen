// ─── Visit: hours, address, amenities + dark map placeholder ────────────────
import { motion } from 'framer-motion'
import { MapPin, Phone, Navigation, Wifi, Plug, PawPrint, Clock } from 'lucide-react'
import { CAFE } from '../data'
import { Button, SectionLabel } from './ui'
import { fadeUp, staggerContainer, useOpenStatus } from '../motion'

/* Dark-styled map illustration (swap for a real iframe embed in production) */
function MapPlaceholder() {
  return (
    <svg viewBox="0 0 480 360" className="h-full w-full" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
      <rect width="480" height="360" fill="#101010" />
      {/* streets */}
      {[70, 150, 240, 310].map((y) => (
        <line key={`h${y}`} x1="0" y1={y} x2="480" y2={y} stroke="#1f1f1f" strokeWidth="10" />
      ))}
      {[90, 200, 300, 410].map((x) => (
        <line key={`v${x}`} x1={x} y1="0" x2={x} y2="360" stroke="#1f1f1f" strokeWidth="10" />
      ))}
      {/* blocks */}
      {[[110, 80], [320, 160], [120, 250], [330, 320]].map(([x, y], i) => (
        <rect key={i} x={x - 20} y={y - 20} width="70" height="50" rx="4" fill="#161616" stroke="#262626" />
      ))}
      {/* park */}
      <rect x="380" y="40" width="80" height="90" rx="8" fill="#14231a" stroke="#1d3325" />
      {/* route pulse */}
      <path d="M90 310 L200 310 L200 240 L300 240" stroke="#22D3EE" strokeWidth="2.5" strokeDasharray="6 6" fill="none" opacity="0.6" />
      {/* pin */}
      <g transform="translate(300 240)">
        <circle r="26" fill="#A3E635" opacity="0.12" />
        <path d="M0 -18 c-8 0 -14 6 -14 14 c0 10 14 22 14 22 s14 -12 14 -22 c0 -8 -6 -14 -14 -14Z" fill="#A3E635" />
        <circle cy="-4" r="5" fill="#0A0A0A" />
      </g>
      <text x="24" y="342" fontFamily="JetBrains Mono, monospace" fontSize="11" fill="#52525b">42.3601° N, 71.0589° W · sekelas.cafe</text>
    </svg>
  )
}

export default function Visit() {
  const { isOpen, today } = useOpenStatus(CAFE.hours)

  return (
    <section id="visit" className="relative py-20 sm:py-28" aria-labelledby="visit-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div variants={staggerContainer(0.1)} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
          <motion.div variants={fadeUp}>
            <SectionLabel>VISIT</SectionLabel>
            <h2 id="visit-heading" className="mt-3 text-[clamp(1.75rem,4vw,3rem)] font-bold leading-[1.1] tracking-[-0.03em]">
              Come Through
            </h2>
          </motion.div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {/* Left — info column */}
            <motion.div variants={fadeUp} className="glass-card p-6 sm:p-8">
              <ul className="space-y-5" role="list">
                <li className="flex gap-4">
                  <Clock size={18} className="mt-0.5 shrink-0 text-lime" aria-hidden="true" />
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wide text-ink">Hours</h3>
                    <dl className="mt-2 space-y-1 font-mono text-sm text-muted">
                      {CAFE.hours.map((h) => (
                        <div key={h.days} className="flex justify-between gap-6">
                          <dt>{h.days}</dt>
                          <dd className="text-ink">{h.time}</dd>
                        </div>
                      ))}
                    </dl>
                    <span
                      className={`mt-2 inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-[10px] uppercase ${
                        isOpen ? 'border-success/40 text-success' : 'border-error/40 text-error'
                      }`}
                    >
                      <span className={`h-1.5 w-1.5 rounded-full ${isOpen ? 'bg-success' : 'bg-error'}`} />
                      {isOpen ? 'open now' : 'closed'} · {today?.time ?? ''}
                    </span>
                  </div>
                </li>

                <li className="flex gap-4">
                  <MapPin size={18} className="mt-0.5 shrink-0 text-lime" aria-hidden="true" />
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wide text-ink">Address</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{CAFE.address}</p>
                    <p className="mt-1 font-mono text-xs text-zinc-600">// two doors from the blue line station</p>
                  </div>
                </li>

                <li className="flex gap-4">
                  <Wifi size={18} className="mt-0.5 shrink-0 text-cyan" aria-hidden="true" />
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wide text-ink">Wi-Fi</h3>
                    <p className="mt-1 font-mono text-sm text-muted">network: sekelas_5G · pass: brewfocus</p>
                  </div>
                </li>

                <li className="flex gap-4">
                  <Plug size={18} className="mt-0.5 shrink-0 text-cyan" aria-hidden="true" />
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wide text-ink">Power</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">Outlets at every seat. Long tables built for laptops.</p>
                  </div>
                </li>
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-lime/30 bg-lime/10 px-3 py-1 font-mono text-xs text-lime">
                  <PawPrint size={13} /> pet-friendly
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface2 px-3 py-1 font-mono text-xs text-muted">
                  no-rush policy
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface2 px-3 py-1 font-mono text-xs text-muted">
                  natural light
                </span>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button as="a" href="https://maps.google.com/?q=123+Bean+Street" target="_blank" rel="noopener noreferrer">
                  <Navigation size={16} /> Get Directions
                </Button>
                <Button as="a" variant="ghost" href={`tel:${CAFE.phone.replace(/[^+\d]/g, '')}`}>
                  <Phone size={16} /> Call Us
                </Button>
              </div>
            </motion.div>

            {/* Right — map */}
            <motion.div
              variants={fadeUp}
              className="glass-card overflow-hidden !p-0 min-h-[320px]"
              aria-label={`Map showing ${CAFE.name} at ${CAFE.address}`}
            >
              <div className="relative h-full min-h-[320px]">
                <MapPlaceholder />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl border border-line bg-bg/80 px-4 py-3 backdrop-blur">
                  <span className="font-mono text-xs text-muted">{CAFE.address}</span>
                  <a
                    href="https://maps.google.com/?q=123+Bean+Street"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-lime underline-offset-4 hover:underline"
                  >
                    open in maps ↗
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
