import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        olive: {
          50: '#f4f6f2',
          100: '#e5ebd9',
          200: '#cbdab5',
          300: '#abc48e',
          400: '#8ba868',
          500: '#6d8e48',
          600: '#536f35',
          700: '#40562b',
          800: '#344525',
          900: '#2c3920',
        },
      },
    },
  },
  plugins: [],
};
export default config;
