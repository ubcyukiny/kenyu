/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      black: '#151515',
      green: '#4ee1a0',
      darkGray: '#242424',
      gray: '#d9d9d9',
      white: '#ffffff',
      red: '#ff6f5b',
    },
    extend: {
      fontFamily: {
        spaceGrotesk: ['"Space grotesk"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
