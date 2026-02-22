/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'electric-blue': '#3b82f6',
        'clutch-violet': '#7c3aed',
        'deep-slate': '#1e293b',
        'light-slate': '#f8fafc',
        'mid-slate': '#e2e8f0',
        'near-black': '#0f172a',
        'slate-gray': '#475569',
        'light-gray': '#94a3b8',
      },
      fontFamily: {
        'space': ['"Space Grotesk"', 'sans-serif'],
        'geist': ['Geist', 'Inter', 'sans-serif'],
      },
      animation: {
        'shimmer': 'shimmer 3s linear infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'slide-up': 'slideUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
        'orbit': 'orbit 18s linear infinite',
        'orbit-reverse': 'orbit 12s linear infinite reverse',
        'live-pulse': 'livePulse 1.8s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        livePulse: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.4', transform: 'scale(0.85)' },
        },
      },
      boxShadow: {
        'electric': '0 4px 24px rgba(59, 130, 246, 0.18)',
        'violet': '0 4px 24px rgba(124, 58, 237, 0.18)',
        'glow-blue': '0 0 40px rgba(59, 130, 246, 0.25), 0 0 80px rgba(59, 130, 246, 0.1)',
      },
    },
  },
  plugins: [],
}
