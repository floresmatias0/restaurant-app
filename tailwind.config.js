/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'protest': ['Protest Revolution']
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
        slideIn: 'slideIn 1s ease-in-out',
        slideDown: 'slideDown .7s ease-in-out'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-75%)' },
          '100%': { transform: 'translateY(0)' },
        }
      },
      backgroundImage: {
        'header-banner': "url('/src/assets/OTPRNLBYHRD2NAHHIJAF3OKWOQ.jpg')",
      }
    },
  },
  plugins: [],
}

