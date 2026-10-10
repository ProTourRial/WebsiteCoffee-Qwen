/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0A0A0A',
        surface1: '#111111',
        surface2: '#151515',
        line: '#262626',
        ink: '#EDEDED',
        muted: '#A1A1AA',
        lime: '#A3E635',
        cyan: '#22D3EE',
        error: '#F87171',
        success: '#4ADE80',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 24px rgba(163, 230, 53, 0.15)',
        'glow-sm': '0 0 12px rgba(163, 230, 53, 0.12)',
        'glow-cyan': '0 0 24px rgba(34, 211, 238, 0.12)',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'bounce-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(6px)' },
        },
        'pulse-dot': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.4 },
        },
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        marquee: 'marquee 30s linear infinite',
        'bounce-slow': 'bounce-slow 1.8s ease-in-out infinite',
        'pulse-dot': 'pulse-dot 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
