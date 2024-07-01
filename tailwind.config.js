/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)'],
        roboto: ['var(--font-roboto)'],
        lato: ['var(--font-lato)'],
      },
      colors: {
        primary: {
          "DEFAULT": "var(--color-bg-primary)",
          "100": "var(--color-bg-primary)",
          "200": "var(--color-bg-secondary)",
          "300": "var(--color-bg-third)"
        },
        secondary: {
          "DEFAULT": "var(--color-text-primary)",
          "100": "var(--color-text-primary)",
          "200": "var(--color-text-secondary)"
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require('daisyui')],
};
