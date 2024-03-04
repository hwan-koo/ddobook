import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      aspectRatio: {
        "200/56": "200 / 56",
        "100/55": "100 / 55",
        "100/7": "100 / 7",
        "100/69": "100 / 69",
        "100/40": "100 / 40",
        "100/73": "100 / 73",
        "100/87": "100 / 87",
        "100/42": "100 / 42",
        "100/48": "100 / 48",
        "100/10": "100 / 10",
        "3/1": "3/1",
      },
    },
  },
  plugins: [],
};
export default config;
