/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'very-dark-gray': 'hsl(0, 0%, 17%)',
        'dark-gray': 'hsl(0, 0%, 59%)',
      },
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
      },
      backgroundImage: {
        dekstop:
          "url('https://raw.githubusercontent.com/Batikann/ip-address-tracker/master/src/images/pattern-bg-desktop.png')",
        mobile:
          "url('https://raw.githubusercontent.com/Batikann/ip-address-tracker/master/src/images/pattern-bg-mobile.png')",
      },
    },
  },
  plugins: [],
}
