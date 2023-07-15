/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      lat: { min: "641px", max: "1200px" },
      tab: { min: "321px", max: "640px" },
      tel: { max: "320px" },
    },
  },
  plugins: [],
};
