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
        golden: "#BE9F56",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1900px", // 1920
        "4xl": "2500px", // 2560
      },
      fontSize: {
        base_text_3xl: "clamp(10px, 1.11vh, 12px)",
        base_text_lg: "clamp(8px, 1.4vh, 9.23px)",
        base_text_smallest: "clamp(5px, 1.79dvh, 6.67px)",
      },
    },
  },
  plugins: [],
};
export default config;
