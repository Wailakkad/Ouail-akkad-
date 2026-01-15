/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: '#0066FF',
          darkBlue: '#004C99',
          neonBlue: '#00B8FF',
        },
        dark: {
          900: '#0A0C10',
          800: '#12151C',
          700: '#1A1D26',
          600: '#23262F',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

