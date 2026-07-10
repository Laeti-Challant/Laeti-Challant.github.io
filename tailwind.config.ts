import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#764ba2',
        'primary-dark': '#320f57',
        accent: '#fe9a66',
        'text-dark': '#1f2937',
        'text-light': '#6b7280',
        cream: '#faf8f5',
        sand: '#f2f0ea',
        'bg-light': '#f2f0ea',
        border: '#e6e2da',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #fe9a66 0%, #f7d59b 35%, #764ba2 100%)',
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
      },
      animation: {
        floatSlow: 'floatSlow 6s ease-in-out infinite',
      },
    },
  },
} satisfies Config
