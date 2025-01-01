/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    container: false,
    extend: {
      dropShadow: {
        md: "0 0 3px #666"
      },
      colors: {
        primaryBlue: "#0056d6",
        primaryPink: "#E32F70",
        primaryDarkGrey: "#1F2022",
        primaryLightGrey: "#F7F9FE",
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '1400px',
          padding: "0 24px 100px",
          margin: "0 auto"
        }
      })
    }
  ]
}

