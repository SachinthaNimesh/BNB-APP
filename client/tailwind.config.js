//@type {import('tailwindcss').Config} 
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'primary': '#F5385D',
        'airbnb-red': '#FF5A60',
        'airbnb-dark': '#222222',
        'airbnb-gray': '#717171',
        'airbnb-light': '#EAEAEA',
        'airbnb-light-gray': '#F7F7F7',
        'airbnb-dark-gray': '#4B4B4B',
        'airbnb-green': '#00A699',
        'airbnb-blue': '#008489',
        'airbnb-yellow': '#FFB400',
        'airbnb-orange': '#FF7700',
        'airbnb-purple': '#A219A7',
        'airbnb-pink': '#FF0080',
      },
    },
  },
  plugins: [],
}

