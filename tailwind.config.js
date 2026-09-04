/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#F4F0E8',
        'ivory-deep': '#EBE5D6',
        ink: '#111111',
        'soft-gray': '#D8D3C8',
        vermilion: '#F04A32',
        cobalt: '#3157FF',
        'acid-yellow': '#D9FF3F',
        cream: '#F9F6F0',
      },
      fontFamily: {
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'tightest': '-0.06em',
        'meta': '0.08em',
        'wide-meta': '0.15em',
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee-reverse 30s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};
