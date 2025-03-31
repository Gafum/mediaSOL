/** @type {import('tailwindcss').Config} */
export default {
  future: {
    hoverOnlyWhenSupported: true
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    screens: {
      'sm300': '300px',
      'sm500': '520px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    container: {
      screens: {
        "lg": '1000px',
        "xl": '1240px',
        "2xl": '1496px',
        "3xl": '1560px',
      },
    },
    extend: {
      dropShadow: {
        md: "0 0 3px #666"
      },
      colors: {
        primaryBlue: "#0056d6",
        primaryPink: "#E32F70",
        primaryDarkGrey: "#1F2022",
        primaryLightGrey: "#F5F6FA",
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          padding: "0 10px 40px",
          margin: "0 auto",
          '@media (min-width: 640px)': {
            padding: "0 24px 50px",
          },
          '@media (min-width: 1024px)': {
            padding: "0 32px 60px",
          }
        }
      })
    }
  ]
}

