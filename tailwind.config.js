/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        botanical: {
          bg: '#FBFBF8',
          card: '#FFFFFF',
          soft: '#F4F6F0',
          sand: '#EBE5D8',
          text: '#0B1B10',
          forest: '#0E2918',
          accent: '#265431',
          leaf: '#3A7D4C',
          lightLeaf: '#5B9B70',
          cream: '#FAF8F5',
        }
      },
      fontFamily: {
        serif: ['Syne', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(1deg)' },
        }
      }
    },
  },
  plugins: [],
}
