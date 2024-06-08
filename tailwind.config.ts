import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        'btn-primary': '0px 0px 8px 0px var(--clr-primary-300);',
      },
      spacing: {
        '19': '4.75rem',
      },
      height: {
        '119': '29.75rem',
      },
      maxWidth: {
        '3.5xl': '52rem',
      },
      padding: {
        '7.5': '1.875rem',
      },
      colors: {
        primary: {
          100: 'var(--clr-primary-100)',
          300: 'var(--clr-primary-300)',
          400: 'var(--clr-primary-400)',
        },
        secondary: {
          50: 'var(--clr-secondary-50)',
          400: 'var(--clr-secondary-400)',

          
        },
        neutral: {
          50: 'var(--clr-neutral-50)',
          100: 'var(--clr-neutral-100)',
          200: 'var(--clr-neutral-200)',
          300: 'var(--clr-neutral-300)',
          400: 'var(--clr-neutral-400)',
          500: 'var(--clr-neutral-500)',
          600: 'var(--clr-neutral-600)',
          700: 'var(--clr-neutral-700)',
          800: 'var(--clr-neutral-800)',
          900: 'var(--clr-neutral-900)',
        },
      },
      borderRadius: {
        '10px': '10px',
        '30px': '30px',
      },
    },
  },
  plugins: [],
};
export default config;
