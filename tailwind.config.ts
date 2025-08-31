import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'az-teal': '#0898A0',
        'az-teal-100': 'rgba(8, 152, 160, 0.1)',
        'az-light-red': 'rgba(180, 13, 0, 0.05)',
        'az-faint-red': 'rgba(180, 13, 0, 0.03)',
        'az-black-900': '#222',
        'az-black-200': 'rgba(34, 34, 34, 0.7)',
        'az-black-300': '#320300',
        'az-brown': '#470500',
        'az-gray-120': 'rgba(34, 34, 34, 0.15)',
        'az-gray-200': '#EEEEEE',
      },
      fontFamily: {
        Onest: ['Onest', 'sans-serif'],
      },
      keyframes: {
        expand: {
          '0%': { width: '2.5rem' },
          '100%': { width: '170px' },
        },
        fadeIn: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
      },
      animation: {
        expand: 'expand 0.3s ease-in-out forwards',
        fadeIn: 'fadeIn 0.3s ease-in-out forwards',
      },
    },
  },
  plugins: [],
} satisfies Config;
