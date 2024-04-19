/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx,vue}',
    'node_modules/flowbite/**/*.{js,jsx,ts,tsx}'
  ],
  plugins: [
      require('flowbite/plugin')
  ],
  theme: {
    extend: {
      keyframes: {
        menu: {
          '0%': {left: '-15%'},
          '100%': {left: '0%'}
        },
        menuback: {
          '0%': {left: '0%'},
          '100%': {left: '-15%'}
        }
      }
    },
  }
}

