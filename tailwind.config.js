/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
    "./node_modules/flowbite/**/*.js",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        primary: '#152644',
        secondary: '#FBF9F2',
        tertiary: '#BCB5FA',
        pistachio: '#D9FFB3',
        pistachioDark: '#C3E5A1',
        eggshell: '#EBE9E2',
        eggshellDark: '#CECCC6',
        gray: '#8295BA',
        logicolaPrimary: '#17a34a'
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
}
