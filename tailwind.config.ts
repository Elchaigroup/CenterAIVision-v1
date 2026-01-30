import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'midnight-slate': '#1B232D',
        'core-blue': '#003296',
        'electric-azure': '#2C93FF',
        'cloud-mist': '#F5F7FA',
        'card-bg': '#242E3A',
        'card-border': '#2D3845',
        'positive': '#22C55E',
        'negative': '#EF4444',
      },
      fontFamily: {
        urbanist: ['Urbanist', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #1B232D 0%, #0D1117 50%, #1B232D 100%)',
        'card-gradient': 'linear-gradient(180deg, #242E3A 0%, #1B232D 100%)',
      },
    },
  },
  plugins: [],
}

export default config
