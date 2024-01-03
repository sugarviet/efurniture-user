/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        HelveticaRoman: ['HelveticaRoman', 'arial', 'sans-serif'],
        HelveticaBold: ['HelveticaBold', 'arial', 'sans-serif'],
        Baskerville: ['Baskerville', 'serif'],
      },
      colors: {
        blackPrimary: '#222',
        blackSecondary: '#191915',

        whiteSmoke: '#f9f9f9',

        red: '#bf3535',
        red1: '#ff7272',
        red2: '#fccfc4',

        grey0: '#3e3d3e',
        grey1: '#666',
        grey2: '#73726e',
        grey3: '#aaa',
        grey4: '#cfcfcf',
        grey5: '#ebebe6',
        grey6: '#f8f8f8',

        border: '#c3c2bc'
      },
      keyframes: {
        cartDisappear: {
          '0%': { opacity: '0' },
          '50%': { opacity: '0.5' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        cartDisappear: 'cartDisappear 0.3s ease-out ',
      },
    },
  },
  plugins: [],
}