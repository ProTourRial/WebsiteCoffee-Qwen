// ─── Brew List: newsletter with inline success morph ────────────────────────
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Check, Mail } from 'lucide-react'
import { Button, Input, SectionLabel } from './ui'
import { fadeUp, staggerContainer } from '../motion'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | error | success

  function handleSubmit(e) {
    e.preventDefault()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error')
      return
    }
    setStatus('success')
  }

  return (
    <section id="brewlist" className="relative py-20 sm:py-28" aria-labelledby="brewlist-heading">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <motion.div variants={staggerContainer(0.1)} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
          <motion.div variants={fadeUp} className="flex justify-center">
            <SectionLabel>BREW LIST</SectionLabel>
          </motion.div>
          <motion.h2
            id="brewlist-heading"
            variants={fadeUp}
            className="mt-3 text-[clamp(1.75rem,4vw,3rem)] font-bold leading-[1.1] tracking-[-0.03em]"
          >
            Join the <span className="text-cyan">Brew List</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mx-auto mt-4 max-w-md text-base leading-relaxed text-muted">
            Get first access to new origins, pop-ups, and member-only tastings.
          </motion.p>

          <motion.div variants={fadeUp} className="mx-auto mt-8 max-w-md">
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  role="status"
                  className="glass-card flex items-center justify-center gap-3 border-success/40 !p-4"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-success/15">
                    <Check size={18} className="text-success" strokeWidth={3} />
                  </span>
                  <span className="font-mono text-sm text-success">// You&apos;re in. See you at the bar.</span>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  exit={{ opacity: 0, y: -8 }}
                  onSubmit={handleSubmit}
                  noValidate
                  className="flex flex-col gap-3 sm:flex-row"
                >
                  <div className="relative flex-1">
                    <Mail size={16} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600" aria-hidden="true" />
                    <Input
                      type="email"
                      required
                      inputMode="email"
                      autoComplete="email"
                      label="Email address"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value)
                        if (status === 'error') setStatus('idle')
                      }}
                      aria-invalid={status === 'error'}
                      aria-describedby={status === 'error' ? 'email-error' : undefined}
                      className={`!pl-10 ${status === 'error' ? '!border-error focus:!border-error focus:!ring-error/30' : ''}`}
                    />
                  </div>
                  <Button type="submit" className="sm:!px-8">
                    Join
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>

            {status === 'error' && (
              <p id="email-error" role="alert" className="mt-3 font-mono text-xs text-error">
                // that email doesn&apos;t look right — try again
              </p>
            )}
            {status !== 'success' && (
              <p className="mt-4 font-mono text-xs text-zinc-600">No spam. Unsubscribe anytime.</p>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
