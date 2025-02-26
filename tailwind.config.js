/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '375px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#c7173b',
          light: '#ff4d6d',
          dark: '#b31535',
        },
        secondary: {
          DEFAULT: '#1a1a1a',
          light: '#2d2d2d',
        }
      },
      fontSize: {
        'dynamic-base': 'clamp(1rem, 2vw, 1.125rem)',
        'dynamic-lg': 'clamp(1.125rem, 3vw, 1.25rem)',
        'dynamic-xl': 'clamp(1.25rem, 4vw, 1.5rem)',
        'dynamic-2xl': 'clamp(1.5rem, 5vw, 2rem)',
      }
    },
  },
  plugins: [],
};