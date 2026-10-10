// ─── Hero: typing terminal, gradient glow, live open/closed card ────────────
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown, Clock } from 'lucide-react'
import { CAFE, TYPING_WORDS } from '../data'
import { Button } from './ui'
import { fadeUp, staggerContainer, usePrefersReducedMotion, useOpenStatus } from '../motion'

/* Terminal-style typewriter cycling through drinks */
function Typewriter({ words }) {
  const reduced = usePrefersReducedMotion()
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (reduced) {
      setText(words[0])
      return
    }
    const word = words[index % words.length]
    let delay = deleting ? 40 : 80 // 80ms per character
    if (!deleting && text === word) delay = 1600 // hold full word
    if (deleting && text === '') delay = 300 // pause before next word

    const id = setTimeout(() => {
      if (!deleting && text === word) setDeleting(true)
      else if (deleting && text === '') {
        setDeleting(false)
        setIndex((i) => i + 1)
      } else {
        setText(word.slice(0, deleting ? text.length - 1 : text.length + 1))
      }
    }, delay)
    return () => clearTimeout(id)
  }, [text, deleting, index, words, reduced])

  return (
    <span className="font-mono text-lime" aria-live="off">
      {text}
      <span className="ml-0.5 inline-block w-[0.55em] animate-blink bg-lime align-middle" style={{ height: '1.1em' }} aria-hidden="true" />
    </span>
  )
}

/* Floating glass card — today's hours + live status badge */
function HoursCard() {
  const { isOpen, today, next } = useOpenStatus(CAFE.hours)
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      whileHover={{ y: -4 }}
      className="glass-card w-full max-w-xs p-5 shadow-glow-sm"
      aria-label="Today's opening hours"
    >
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.1em] text-muted">
          <Clock size={14} className="text-cyan" /> today
        </span>
        <span
          className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider ${
            isOpen
              ? 'border-success/40 bg-success/10 text-success'
              : 'border-error/40 bg-error/10 text-error'
          }`}
          role="status"
        >
          <span className={`h-1.5 w-1.5 rounded-full ${isOpen ? 'animate-pulse-dot bg-success' : 'bg-error'}`} />
          {isOpen ? 'OPEN NOW' : 'CLOSED'}
        </span>
      </div>
      <p className="mt-3 text-lg font-bold tracking-tight text-ink">
        {today ? `${today.days} · ${today.time}` : 'Closed today'}
      </p>
      <p className="mt-1 font-mono text-xs text-muted">
        {isOpen ? `// ${next || 'serving now'}` : '// see you soon'}
      </p>
      <div className="mt-4 h-px bg-line" />
      <p className="mt-3 font-mono text-[11px] leading-relaxed text-muted">
        wi-fi 200mbps · outlets every seat · pets ok
      </p>
    </motion.div>
  )
}

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-20 sm:pt-36 lg:pt-44 lg:pb-28" aria-label="Intro">
      {/* Background: grid + neon gradient glow */}
      <div className="grid-overlay absolute inset-0" aria-hidden="true" />
      <div
        className="absolute left-1/2 top-[-10%] -z-0 h-[420px] w-[min(90vw,720px)] -translate-x-1/2 rounded-full opacity-40 blur-[120px]"
        style={{ background: 'radial-gradient(closest-side, rgba(163,230,53,0.35), rgba(34,211,238,0.18), transparent)' }}
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <motion.div variants={staggerContainer(0.1)} initial="hidden" animate="visible">
          <motion.p variants={fadeUp} className="font-mono text-xs uppercase tracking-[0.1em] text-lime">
            {'// '}SPECIALTY COFFEE
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="mt-4 text-[clamp(2.5rem,6vw,5rem)] font-extrabold leading-[1.05] tracking-[-0.03em]"
          >
            Brewed for focus,
            <br />
            served with{' '}
            <span className="bg-gradient-to-r from-lime to-cyan bg-clip-text text-transparent">craft</span>.
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Single-origin beans, slow bar, and a calm space to work or unwind.
          </motion.p>

          {/* Terminal line */}
          <motion.div
            variants={fadeUp}
            className="mt-6 inline-flex items-center gap-2 rounded-xl border border-line bg-surface1/80 px-4 py-2.5 font-mono text-sm backdrop-blur"
          >
            <span className="select-none text-cyan">sekelas@brew ~$</span>
            <span className="select-none text-muted">make</span>{' '}
            <Typewriter words={TYPING_WORDS} />
          </motion.div>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-3">
            <Button as="a" href="#menu">
              View Menu <ArrowRight size={16} />
            </Button>
            <Button as="a" href="#visit" variant="ghost">
              Visit Us
            </Button>
          </motion.div>
        </motion.div>

        {/* Floating hours card */}
        <div className="lg:justify-self-end">
          <HoursCard />
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="mx-auto mt-16 hidden w-fit flex-col items-center gap-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted transition-colors hover:text-lime sm:flex"
        aria-label="Scroll to about section"
      >
        scroll
        <ChevronDown size={14} className="animate-bounce-slow" />
      </motion.a>
    </section>
  )
}
