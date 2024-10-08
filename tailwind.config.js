const flowbite = require('flowbite-react/tailwind');

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', flowbite.content()],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: '#ffffff',
        dark: {
          100: '#999',
          200: '#888',
          300: '#777',
          400: '#666',
          500: '#555',
          600: '#444',
          700: '#333',
          800: '#222227',
          900: '#111',
          DEFAULT: '#333',
        },
      },
    },
  },
  plugins: [flowbite.plugin()],
};
