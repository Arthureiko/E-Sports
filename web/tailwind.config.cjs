/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },

      backgroundImage: {
        galaxy: "url('/background-galaxy.png')",
        "nlw-gradient":
          "linear-gradient(89.86deg, #9572fc 10.98% , #43e7ad 89.45%)",
        "game-gradient":
          "linear-gradient(188deg, rgba(0,0,0,0) 0% , rgba(0,0,0,0.9) 67.08%)",
      },
    },
  },
  plugins: [],
};
