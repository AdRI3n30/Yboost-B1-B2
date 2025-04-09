/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: { fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      instrument: ["Instrument", "serif"],
    },
    
    boxShadow: {
      'custom-inset': 'inset 10px 14px 20px -20px rgba(0, 0, 0, 0.15)',
      'custom-inset-2': 'inset 2px 1px 1px 0px rgba(0, 0, 0, 0.15)',
    },
  },
  },
  plugins: [],
}

