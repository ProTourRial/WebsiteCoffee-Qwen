// ─── Reusable UI primitives: Button, Card, SectionLabel, Input ──────────────
import { forwardRef } from 'react'
import { motion } from 'framer-motion'

/* ── SectionLabel — monospace "// SECTION" marker ─────────────────────────── */
export function SectionLabel({ children, className = '' }) {
  return (
    <p
      className={`font-mono text-xs uppercase tracking-[0.1em] text-lime ${className}`}
      aria-hidden="true"
    >
      {'// '}
      {children}
    </p>
  )
}

/* ── Button — primary (lime) / ghost (outline) ────────────────────────────── */
const buttonStyles = {
  primary:
    'bg-lime text-bg font-semibold hover:brightness-110 hover:shadow-glow-sm',
  ghost:
    'bg-transparent border border-line text-ink hover:border-lime hover:text-lime',
}

export const Button = forwardRef(function Button(
  { as = 'button', variant = 'primary', className = '', children, ...props },
  ref
) {
  const Comp = as === 'a' ? motion.a : motion.button
  return (
    <Comp
      ref={ref}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      className={`inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime/60 focus-visible:ring-offset-2 focus-visible:ring-offset-bg ${buttonStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </Comp>
  )
})

/* ── Card — glassmorphism surface with optional hover lift ────────────────── */
export function Card({ as = 'div', hover = true, className = '', children, ...props }) {
  const Comp = motion[as] || motion.div
  return (
    <Comp
      whileHover={hover ? { y: -4 } : undefined}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className={`glass-card p-6 ${hover ? 'glass-card-hover' : ''} ${className}`}
      {...props}
    >
      {children}
    </Comp>
  )
}

/* ── Input — dark field with lime focus ring ──────────────────────────────── */
export const Input = forwardRef(function Input({ className = '', label, id, ...props }, ref) {
  return (
    <input
      ref={ref}
      id={id}
      aria-label={label}
      className={`w-full rounded-xl border border-line bg-surface1 px-4 py-3 text-sm text-ink placeholder-zinc-500 transition-colors duration-200 focus:border-lime focus:outline-none focus:ring-1 focus:ring-lime/30 ${className}`}
      {...props}
    />
  )
})
