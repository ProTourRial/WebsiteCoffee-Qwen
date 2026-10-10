// ─── Framer Motion variants & reduced-motion hook ───────────────────────────
import { useEffect, useState } from 'react'

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] },
  },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
}

export const staggerContainer = (stagger = 0.1, delay = 0) => ({
  hidden: {},
  visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
})

export const cardHover = {
  rest: { y: 0, scale: 1, transition: { duration: 0.2, ease: 'easeOut' } },
  hover: { y: -4, scale: 1.01, transition: { duration: 0.2, ease: 'easeOut' } },
}

export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mq.matches)
    const handler = (e) => setReduced(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])
  return reduced
}

// Live open/closed status based on CAFE.hours schedule
export function useOpenStatus(hours) {
  const [now, setNow] = useState(() => new Date())
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 60_000)
    return () => clearInterval(id)
  }, [])

  const day = now.getDay()
  const hour = now.getHours() + now.getMinutes() / 60
  const today = hours.find((h) => h.daysNum.includes(day))
  const isOpen = today ? hour >= today.open && hour < today.close : false

  let next = ''
  if (today) {
    if (hour < today.open) next = `opens ${String(today.open).padStart(2, '0')}:00`
    else if (hour >= today.close) next = 'back tomorrow'
    else {
      const t = hours.find((h) => h.daysNum.includes((day + 1) % 7))
      if (t) next = `closes ${String(t === today ? today.close : today.close).padStart(2, '0')}:00`
    }
  }
  return { isOpen, now, today, next }
}
