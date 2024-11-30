import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        tab: "768px",
        laptop: "1280px",
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
        alegreya: ["var(--font-alegreya)"],
      },
      colors: {
        black: "#080A07",
        white: "#FFFFFC",
        darkGrey: "#7D7D7D",
        grey: "#AAB7AA",
        beige: "#F1F0EC",
        greenDark: "#418D12",
        greenKhaki: "#ADC584",
        green: "#B0E48F",
        greenLight: "#CCF0B5",
        yellowDark: "#F8DB04",
        yellowLight: "#FAF1D5",
        darkRed: "#FF7272",
        red: "#FFAFAF",
      },
    },
  },
  plugins: [],
} satisfies Config;
