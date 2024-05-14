import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'header-background': "url('/assets/image/header-background.webp')"
      },
      logoIcon: {
        'kw-logo': "url('/assets/image/kw-logo.webp')"
      },
      fontFamily: {
        oswaldBold: ["'Oswald-Bold'", 'sans-serif'],
        oswaldExtraLight: ["'Oswald-Extra-Light'", 'sans-serif'],
        oswaldLight: ["'Oswald-Light'", 'sans-serif'],
        oswaldMedium: ["'Oswald-Medium'", 'sans-serif'],
        oswaldRegular: ["'Oswald-Regular'", 'sans-serif'],
        oswaldSemiBold: ["'Oswald-SemiBold'", 'sans-serif'],
      },
      colors: {
        'custom-blue': '#5A8BB6',
        'custom-gray': '#F5F5F5',
      }
    },
  },
  plugins: [],
};
export default config;
