/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "var(--primary-color)",
      },
      fontFamily: {
        "logo-font": "Shadows Into Light, cursive",
      },
    },
  },
  plugins: [],
};
