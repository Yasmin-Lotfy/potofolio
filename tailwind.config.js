/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        darkPrimaryColor:"rgb(69, 71, 75)",
        lightPrimaryColor:"rgb(73, 94, 87)",
        darkSecColor:"rgb(196, 240, 0)",
        lightSecColor:"rgb(245, 247, 248)",
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
]
}

