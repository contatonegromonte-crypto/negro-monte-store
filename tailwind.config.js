/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0b0b0b',
        secondary: '#d4af37',
        gold: '#e5c76d',
        charcoal: '#1a1a1a',
        soft: '#f7f3ea',
      },
      boxShadow: {
        luxury: '0 20px 60px rgba(0,0,0,0.35)',
      },
      backgroundImage: {
        hero: 'radial-gradient(circle at top, rgba(212,175,55,0.18), transparent 35%), linear-gradient(135deg, #0b0b0b 0%, #111111 100%)',
      },
    },
  },
  plugins: [],
};
