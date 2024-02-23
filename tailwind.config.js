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
        messageDisappear: {
          '0%': { transform: 'scale(1,1)', transformOrigin: 'bottom' },
          '50%': { transform: 'scale(1.03, 1.03)', transformOrigin: 'bottom' },
          '75%': { transform: 'scale(0,0)', transformOrigin: 'bottom' },
          '100%': { transform: 'scale(0, 0)', transformOrigin: 'bottom' },
        },
      },

      animation: {
        cartDisappear: 'cartDisappear 0.3s ease-out ',
        messageDisappear: 'messageDisappear 1s ease-in-out ',
      },
      boxShadow: {
        'email': 'inset 0 -0.0625rem 0 0 #222',
        'bottomBar': '0 0 5.625rem rgba(0,0,0,.15)',
        'deliveryCard': '0 0.0625rem 0 0 #5a7468',
      },
      transitionTimingFunction: {
        'slow-to-fast': 'cubic-bezier(0.4, 0, 0.2, 1)',
      }
    },
  },
  plugins: [],
}