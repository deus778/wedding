/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    keyframes: {
      fadeIn: {
        '0%': { opacity: '0' },  
        '100%': { opacity: '1' } 
      },
    },
    animation: {
      fadeIn: 'fadeIn 1.5s ease-in-out forwards',
    },
    extend: {},
  },
  plugins: [],
}

