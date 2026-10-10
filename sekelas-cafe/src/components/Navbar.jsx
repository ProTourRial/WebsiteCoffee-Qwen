// ─── Navbar (sticky, blur-on-scroll) + mobile overlay + bottom nav ─────────
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Home, UtensilsCrossed, ShoppingBag, MapPin } from 'lucide-react'
import { CAFE, NAV_LINKS } from '../data'
import { Button } from './ui'

const overlayStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
}
const overlayItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] } },
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  const [isDesktop, setIsDesktop] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(min-width: 1024px)').matches
  )
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    setIsDesktop(mq.matches)
    const h = (e) => setIsDesktop(e.matches)
    mq.addEventListener('change', h)
    return () => mq.removeEventListener('change', h)
  }, [])

  // Only allow the full-screen overlay on small screens (matches lg breakpoint)
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 1023px)')
    const close = () => setOpen(false)
    mq.addEventListener('change', close)
    return () => mq.removeEventListener('change', close)
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll & close on Escape
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'border-b border-line bg-bg/80 backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6" aria-label="Main navigation">
          {/* Logo */}
          <a href="#home" className="group flex flex-col leading-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime/60 rounded-md">
            <span className="text-base font-extrabold tracking-tight text-ink">
              {CAFE.name.split(' ')[0]}{' '}
              <span className="text-lime">{CAFE.name.split(' ')[1]}</span>
            </span>
            <span className="mt-0.5 font-mono text-[10px] text-muted">{CAFE.est}</span>
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-lg px-3 py-2 text-sm text-muted transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime/60"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <Button as="a" href="#menu" className="hidden !px-4 !py-2 sm:inline-flex">
              Order Ahead
            </Button>
            {/* Hamburger */}
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className="rounded-lg border border-line p-2 text-ink transition-colors hover:border-lime/40 hover:text-lime focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime/60 lg:hidden"
            >
              <Menu size={20} />
            </button>
          </div>
        </nav>
      </header>

      {/* Full-screen mobile overlay */}
      <AnimatePresence>
        {open && !isDesktop && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[70] flex flex-col bg-bg/95 backdrop-blur-xl lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
          >
            <div className="flex h-16 items-center justify-between px-4 sm:px-6">
              <span className="font-mono text-xs uppercase tracking-[0.1em] text-lime">{'// NAV'}</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="rounded-lg border border-line p-2 text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime/60"
              >
                <X size={20} />
              </button>
            </div>
            <motion.ul
              variants={overlayStagger}
              initial="hidden"
              animate="visible"
              className="flex flex-1 flex-col justify-center gap-2 px-6 pb-24"
            >
              {NAV_LINKS.map((link, i) => (
                <motion.li key={link.href} variants={overlayItem}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="group flex items-baseline gap-4 py-2 text-3xl font-bold tracking-tight text-ink transition-colors hover:text-lime"
                  >
                    <span className="font-mono text-xs text-muted">0{i + 1}</span>
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <motion.li variants={overlayItem} className="mt-6">
                <Button as="a" href="#menu" onClick={() => setOpen(false)} className="w-full">
                  Order Ahead
                </Button>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom nav — app-like, mobile only */}
      <nav
        aria-label="Quick navigation"
        className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-bg/85 backdrop-blur-xl max-sm:block hidden"
      >
        <ul className="mx-auto grid max-w-sm grid-cols-4">
          {[
            { label: 'Home', href: '#home', Icon: Home },
            { label: 'Menu', href: '#menu', Icon: UtensilsCrossed },
            { label: 'Order', href: '#brewlist', Icon: ShoppingBag },
            { label: 'Visit', href: '#visit', Icon: MapPin },
          ].map(({ label, href, Icon }) => (
            <li key={href}>
              <a
                href={href}
                className="flex flex-col items-center gap-1 py-3 text-[10px] font-medium text-muted transition-colors hover:text-lime focus-visible:outline-none focus-visible:text-lime"
              >
                <Icon size={18} strokeWidth={1.75} />
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}
