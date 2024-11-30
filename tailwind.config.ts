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
      fontSize: {
        "12reg": ["12px", { lineHeight: "17px", fontWeight: "400" }],
        "14reg": ["14px", { lineHeight: "20px", fontWeight: "400" }],
        "16reg": ["16px", { lineHeight: "22px", fontWeight: "400" }],
        "18reg": ["18px", { lineHeight: "25px", fontWeight: "400" }],
        "18med": ["18px", { lineHeight: "25px", fontWeight: "500" }],
        "24med": ["24px", { lineHeight: "32px", fontWeight: "500" }],
        "32med": ["32px", { lineHeight: "45px", fontWeight: "500" }],
        "40med": ["40px", { lineHeight: "56px", fontWeight: "500" }],
        "64med": ["64px", { lineHeight: "80px", fontWeight: "500" }],
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
