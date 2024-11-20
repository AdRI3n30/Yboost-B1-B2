/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        // Si vous voulez personnaliser des couleurs spécifiques
        purpleCustom: '#6A0DAD', // Exemple de violet personnalisé
        pinkCustom: '#FF1493',  // Exemple de rose personnalisé
      },
    },
  },
  plugins: [],
};
