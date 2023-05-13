/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        hospital: {
          primary: "#27ae60",
          secondary: '#192a56',
          success: "#1BA175",
          error: "#E01F28",
          "base-100": "#FFFFFF",
        },
      }

    ]
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
