/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-100% - 1.25rem))' },
        },
      },
      animation: {
        scroll: 'scroll 20s linear infinite',
      },
      colors: {
        'brand-text-gray': '#4F6071',
      },
    },
  },
  plugins: [],
}
