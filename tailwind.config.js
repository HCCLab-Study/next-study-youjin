/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#5A8BB6',
        'custom-gray': '#F5F5F5',
      },
      fontFamily: {
        oswaldBold: ["'Oswald-Bold'", 'sans-serif'],
        oswaldExtraLight: ["'Oswald-Extra-Light'", 'sans-serif'],
        oswaldLight: ["'Oswald-Light'", 'sans-serif'],
        oswaldMedium: ["'Oswald-Medium'", 'sans-serif'],
        oswaldRegular: ["'Oswald-Regular'", 'sans-serif'],
        oswaldSemiBold: ["'Oswald-SemiBold'", 'sans-serif'],
      },
      backgroundImage: {
        'header-background': "url('/assets/image/header-background.webp')"
      },
      logoIcon: {
        'kw-logo': "url('/assets/image/kw-logo.webp')"
      },
    },
  },
  plugins: [],
}