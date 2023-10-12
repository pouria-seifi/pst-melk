import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      'primary1': '#0385F4',
      'primary2': '#222338',
      'primary3': '#5780A4',
      'gray0': '#F9FAFB',
      'gray1': '#F3F4F6',
      'gray2': '#E5E7EB',
      'gray3': '#9CA3AF',
      'gray4': '#6B7280',
      'gray5': '#4B5563',
      'gray6': '#374151',
      'gray7': '#1F2937',
      'gray8': '#101827',
      'gray9': '#030712',
    },
  },
  plugins: [],
}
export default config
