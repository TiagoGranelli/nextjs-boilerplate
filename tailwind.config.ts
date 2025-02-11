import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '2rem',
        lg: '4rem',
      },
    },
    fontFamily: {
      sans: ['var(--font-inter)', 'sans-serif'],
    },
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1200px',
    },
  },
  plugins: [],
};
export default config;
