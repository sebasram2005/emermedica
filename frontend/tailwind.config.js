/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy:    { DEFAULT: '#1B3A6B', light: '#2a4f8f', dark: '#122848' },
        brand:   { DEFAULT: '#1565C0', light: '#1976D2', dark: '#0D47A1' },
        cyan:    { DEFAULT: '#00C4CC', light: '#33D1D8', dark: '#009EA5' },
        emerald: { DEFAULT: '#00A651', light: '#00C060', dark: '#007A3B' },
        orange:  { DEFAULT: '#FF6B2B', light: '#FF8A57', dark: '#E05520' },
        slate:   { 50: '#f8fafc', 100: '#f1f5f9', 200: '#e2e8f0', 300: '#cbd5e1', 400: '#94a3b8', 500: '#64748b', 600: '#475569', 700: '#334155', 800: '#1e293b', 900: '#0f172a' },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
