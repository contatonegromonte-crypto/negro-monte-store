import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0b0b0b',
        foreground: '#f5f5f5',
      },
      spacing: {
        '128': '32rem',
      },
      borderRadius: {
        '3xl': '1.875rem',
        '4xl': '2.25rem',
      },
    },
  },
  plugins: [],
}
export default config
