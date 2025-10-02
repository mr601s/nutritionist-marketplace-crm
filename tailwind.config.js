/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#2F6D5B",
          sage: "#96B4A6",
          accent: "#E97F72",
          blush: "#F4A8A1",
          cream: "#F2EDE6",
          ink: "#2B3A37"
        }
      },
      boxShadow: {
        soft: "0 6px 24px rgba(0,0,0,0.08)"
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem"
      }
    }
  },
  plugins: []
};
