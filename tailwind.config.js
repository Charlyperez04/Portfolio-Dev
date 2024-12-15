/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{tsx,ts,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        primaryLight: "var(--primaryLight)",
        grey: "var(--grey)",
        dark: "var(--dark)",
        darkLight: "var(--darkLight)",
        white: "var(--white)",
      },
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
        ibm: ["IBMPlexMono", "monospace"],
      },
    },
  },
  plugins: [],
}
