/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    colors: {
      darker: '#282C34'
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
