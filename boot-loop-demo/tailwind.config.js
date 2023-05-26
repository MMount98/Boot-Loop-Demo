/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Oswald: ["Oswald", "sans-serif"],
      },
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(255, 255, 255)",
      },
      visibility: ["group-hover"],
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "light",
      "black",
      "retro",
      "cyberpunk",
      "valentine",
      "garden",
      {
        mytheme: {
          primary: "#007f5f",

          secondary: "#A9A9A9",

          accent: "#3d405b",

          neutral: "#2b2d42",

          success: "#52b788",

          warning: "#f77f00",

          error: "#d62828",
          "base-100": "#f8f9fa",
        },
      },
    ],
  },
};
