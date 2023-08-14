/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      width: {
        '8xl': '96rem',
      },
      maxWidth: {
        '8xl': '96rem',
      },
    },
  },
  plugins: [],
};
