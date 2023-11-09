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
        'header-bg-image': 'url(/images/header-bg-image.svg)',
        'header-bg-image-mobile': 'url(/images/header-bg-image-mobile.svg)',
        'dots': 'url(/images/dots.svg)',
        'circle': 'url(/images/circle-bg.svg)',
        'features-two-circles': 'url(/images/features/1-bg.svg)',
        'features': 'url(/images/features/bg-features.svg)',
      },
      backgroundSize: {
        "50":"50px",
        "60":"60px",
        "250":"250px"
      },
      borderWidth:{
        1:"1px"
      },
      minWidth: {
        navigate:"320px"
      },
      boxShadow:{
        sm : "0px 3px 100px 30px rgba(55, 65, 81, 0.08)"
      },
      fontFamily: {
        IRANSans: ['IRANSans'],
        sonnat: ['var(--font-sonnat)'],
      }
    },
    // screens:{
    //   'xs': { 'max': '640px'},
    //   'sm': {'min': '640px', 'max': '767px'},
    //   'md': {'min': '768px', 'max': '1023px'},
    //   'lg': {'min': '1024px', 'max': '1279px'},
    //   'xl': {'min': '1280px', 'max': '1535px'},
    //   '2xl': {'min': '1536px'},
    // },
    colors: {
      'primary': '#0385F4',
      'secondary': '#222338',
      'thirdinary': '#5780A4',
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
      'white': '#FFFFFF',
    },
  },
  plugins: [],
}
export default config
