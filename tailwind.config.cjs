/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {},
  prefix: '',
  plugins: [require('@tailwindcss/forms')],
};
