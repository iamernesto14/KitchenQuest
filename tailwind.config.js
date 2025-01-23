/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'hero-bg': "url('/src/assets/hero-bg.jpg')",
        'hero-bg1': "url('/src/assets/darkmode.jpg')",
        'hero-bg2': "url('/src/assets/darkmode1.jpg')",
        'hero-bg3': "url('/src/assets/darkmode2.jpg')",
        'hero-bg4': "url('/src/assets/darkmode3.jpg')",
      },
      colors: {
        main: {
          900: '#121212',  //Dark mode Background
          // 700: 'hsl(318, 82%, 44%)',
          200: 'hsl(0, 0%, 98%)',  // Light mode backgroud
          100: 'hsl(0, 0%, 100%)',  // Dark Mode Text & Light Mode Elements
          400: 'hsl(0, 0%, 52%)',  // Light mode input
          600: '#000000', // light mode text
          700: '#88600A', // filter menu color
          300: '#011609' // filter menu dark mode color
        }
      },
    },
  },
  plugins: [],
}