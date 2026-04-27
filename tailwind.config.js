/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        yonsei: {
          DEFAULT: '#003876',
          light: '#1f6dbf',
          dark: '#001f44',
        },
      },
    },
  },
  plugins: [],
}
