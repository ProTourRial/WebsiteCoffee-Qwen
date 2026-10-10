// ─── Footer: logo, socials with mono labels, quick links, credits ───────────
import { Instagram, Twitter, Music } from 'lucide-react'
import { CAFE, NAV_LINKS, SOCIALS } from '../data'

const SOCIAL_ICONS = { Instagram, 'Twitter / X': Twitter, TikTok: Music }

export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-line bg-surface1/60 pb-24 pt-16 sm:pb-16" aria-label="Site footer">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <a href="#home" className="text-lg font-extrabold tracking-tight">
              {CAFE.name.split(' ')[0]} <span className="text-lime">{CAFE.name.split(' ')[1]}</span>
            </a>
            <p className="mt-2 text-sm leading-relaxed text-muted">{CAFE.tagline}</p>
            <p className="mt-1 font-mono text-xs text-zinc-600">{CAFE.est} · specialty coffee &amp; roastery</p>
            <ul className="mt-6 flex items-center gap-3" role="list" aria-label="Social media">
              {SOCIALS.map(({ label, handle, href }) => {
                const Icon = SOCIAL_ICONS[label]
                return (
                  <li key={label} className="group relative">
                    <a
                      href={href}
                      aria-label={label}
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-line text-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-lime/40 hover:text-lime focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime/60"
                    >
                      <Icon size={17} />
                    </a>
                    {/* monospace label on hover */}
                    <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-line bg-surface2 px-2 py-1 font-mono text-[10px] text-lime opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100">
                      {handle}
                    </span>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer navigation">
            <h3 className="font-mono text-xs uppercase tracking-[0.1em] text-lime">{'// '}LINKS</h3>
            <ul className="mt-4 space-y-2.5" role="list">
              {['Menu', 'About', 'Visit', 'Contact'].map((label) => (
                <li key={label}>
                  <a
                    href={`#${NAV_LINKS.find((l) => l.label === label)?.href.slice(1) ?? ''}`}
                    className="text-sm text-muted transition-colors hover:text-ink"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.1em] text-lime">{'// '}CONTACT</h3>
            <address className="mt-4 space-y-2.5 text-sm not-italic text-muted">
              <p>{CAFE.address}</p>
              <p>
                <a href={`tel:${CAFE.phone.replace(/[^+\d]/g, '')}`} className="transition-colors hover:text-ink">{CAFE.phone}</a>
              </p>
              <p>
                <a href={`mailto:${CAFE.email}`} className="transition-colors hover:text-ink">{CAFE.email}</a>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-line pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-zinc-600">© 2026 {CAFE.name}. All rights reserved.</p>
          <p className="font-mono text-[11px] text-zinc-600">Designed &amp; built with care.</p>
        </div>
      </div>
    </footer>
  )
}
