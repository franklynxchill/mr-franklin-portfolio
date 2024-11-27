/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#2E2E2E',
        accent: '#FF6B6B',
        background: '#FAFAFA',
      },
      fontFamily: {
        headings: 'Montserrat',
        bodyText: 'OpenSans',
      },
      container: {
        center: true,
        padding: '1rem',
      },
      screens: {
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
      },
    },
  },
  plugins: [],
}


