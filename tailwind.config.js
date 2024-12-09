/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "cinzel": "'Cinzel Decorative', serif"
      },
      backgroundImage: {
        "bank": "url(https://vignette.wikia.nocookie.net/gameofthrones/images/e/e2/Iron_Bank_History_%26_Lore_01.png)"
      }
    },
  },
  plugins: [],
}

