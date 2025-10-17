/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './layouts/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF0000',
        dark: '#0B0B0F',
        light: '#F9F9FB'
      },
      fontFamily: {
        poppins: ['"Poppins"', 'sans-serif']
      },
      boxShadow: {
        glow: '0 20px 45px rgba(255, 0, 0, 0.15)'
      }
    }
  },
  plugins: []
};
