/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        blob: 'blob 7s infinite',
      },
      keyframes: {
        blob: {
          '0%, 100%': { borderRadius: '40% 60% 80% 40% / 40% 40% 60% 60%' },
          '25%': { borderRadius: '60% 40% 40% 60% / 60% 60% 40% 40%' },
          '50%': { borderRadius: '50% 50% 50% 50% / 50% 50% 50% 50%' },
          '75%': { borderRadius: '30% 70% 70% 30% / 70% 70% 30% 30%' },
        },
      },
    },
  },
  plugins: [],
}

