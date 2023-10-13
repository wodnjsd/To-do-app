/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      background: '#F3EBE2'
    },
    extend: {
      fontFamily: {
        monoton: ['Monoton', 'sans-serif'],
        hepta: ['Hepta Slab', 'serif'],
        geostar: ['Geostar', 'serif'],
        geoFill: ['Geostar Fill', 'serif'],
        monofett: ['Monofett', 'monospace'],
        bungee: ['Bungee Shade', 'sans-serif']

      }
    },
  },
  plugins: [],
}

