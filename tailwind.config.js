/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        topaz: {
          primary: "#606bff",
          secondary: "#dfe2ff1a",
          accent: "#151529", // Another dark blue-gray
          neutral: "#686868", // Medium gray
          "base-100": "#060617", // Background color, dark blue
          info: "#3A3A3A",
          success: "#155724",
          warning: "#FACC15",
          error: "#721c24",
          ".card": {
            background: "#DFE2FF0A",
          },
          body: {
            "font-family": "Matter",
            color: "white !important",
            "font-size": "14px",
          },
          ".btn-primary": {
            color: "white !important",
            "font-weight": "normal",
          },
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
