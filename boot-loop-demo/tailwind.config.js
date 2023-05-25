/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'Oswald': ['Oswald', 'sans-serif']
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
          primary: "#228B22",

          secondary: "#C0C0C0",

          accent: "#00BFFF",

          neutral: "#D3D3D3",

          success: "#00FF00",

          warning: "#FFBF00",

          error: "#FF0000",
          "base-100": "#228b22",
        },
      },
    ],
  },
};
