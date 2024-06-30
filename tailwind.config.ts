import type { Config } from "tailwindcss";
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      aspectRatio: {
           '4/3': '4/3',
          '31/22': '31/22',
        '145/89': '145/89',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        'btn-primary': '0px 0px 8px 0px var(--clr-primary-300);',
        'search-input': '0px 0px 15px 0px rgba(0, 0, 0, 0.06);',
        'search-section': '0px 0px 30px 0px rgba(0, 0, 0, 0.10);',
        'nearby-service': '0px 0px 8px 0px rgba(194, 198, 204, 0.50);',
      },
      dropShadow: {
        'booking-box': '0px 0px 20px rgba(0, 0, 0, 0.08)',
      },
      spacing: {
        '19': '4.75rem',
        'full-plus-12': 'calc(100% + 12px)',
      },
      width: {
        '342px': '342px',
      },
      height: {
        '119': '29.75rem',
        '242px': '242px',
      },
      maxWidth: {
        '3.5xl': '52rem',
        '395px': '395px',
        '724px':'724px',
        '978px':'978px'

      },
      maxHeight: {
        '242px': '242px',
      },
      minWidth: {
        '290px': '290px',
        '490px': '490px',

      },
      minHeight: {
        '178px': '178px',
      },
      padding: {
        '7.5': '1.875rem',
      },
      colors: {
        'hero':'var(--clr-bg-hero)',
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
          150: 'var(--clr-neutral-150)',
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
  plugins: [

    plugin(function({ addUtilities }) {
      addUtilities({
        '.placeholder-medium': {
          '&::placeholder': {
            fontWeight: '500',
          },
        },
        '.placeholder-text-sm': {
          '&::placeholder': {
            fontSize: '14px',
          },
        },
        '.placeholder-text-center': {
          '&::placeholder': {
            textAlign: 'center',
          },
        },
        '.placeholder-text-netural-300': {
          '&::placeholder': {
            color: 'var(--clr-neutral-300)',
          },
        },
      }, 
    );
    }),
    plugin(function({ addUtilities }) {
      addUtilities({
        '.no-scrollbar::-webkit-scrollbar': {
          display:'none',
        },
        '.no-scrollbar':{
          '-ms-overflow-style':'none',
          'scrollbar-width':'none'
        }
      }, 
    );
    }),
  ],
};
export default config;
