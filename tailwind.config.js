/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#db2777',
        gray: '#1f2937',
        scale: '#64748b',
      },
      screens: {
        '2xl' : '1320px',
      },
    },
  },
  plugins: [],
}

