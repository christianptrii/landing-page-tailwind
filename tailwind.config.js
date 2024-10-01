/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#2BA798",
        secondary: "#ADE1E5",
        dark: '#0f172a',
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
