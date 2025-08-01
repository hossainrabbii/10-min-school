import type { Config } from "tailwindcss";

export default {
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
      },
    },
    container: {
      center: true, // adds mx-auto
      padding: "1rem", // default horizontal padding
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1190px",
      },
    },
  },
  plugins: [],
} satisfies Config;
