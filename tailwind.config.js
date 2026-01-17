/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#0a0a0f',
        white: '#FFFFFF',
        gray: {
          light: '#94A3B8',
          dark: '#1e293b',
        },
        purple: {
          primary: '#0EA5E9',
          light: '#38BDF8',
          dark: '#0284C7',
          glow: '#7DD3FC',
          neon: '#BAE6FD',
        },
        terminal: {
          green: '#0EA5E9',
          dim: '#0284C7',
        },
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'IBM Plex Mono', 'Geist Mono', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}
