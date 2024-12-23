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
        deskxl: "1700px",
        deskxxl: "1920px",
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
        alegreya: ["var(--font-alegreya)"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "16px",
          md: "32px",
          xl: "100px",
        },
      },
      fontSize: {
        "12reg": ["12px", { lineHeight: "17px", fontWeight: "400" }],
        "14reg": ["14px", { lineHeight: "20px", fontWeight: "400" }],
        "16reg": ["16px", { lineHeight: "22.4px", fontWeight: "400" }],
        "16med": ["16px", { lineHeight: "22.4px", fontWeight: "500" }],
        "18reg": ["18px", { lineHeight: "25px", fontWeight: "400" }],
        "18med": ["18px", { lineHeight: "25px", fontWeight: "500" }],
        "24med": ["24px", { lineHeight: "32px", fontWeight: "500" }],
        "32med": ["32px", { lineHeight: "40px", fontWeight: "500" }],
        "40med": ["40px", { lineHeight: "56px", fontWeight: "500" }],
        "64med": ["64px", { lineHeight: "80px", fontWeight: "500" }],
      },
      colors: {
        black: "#080A07",
        white: "#FFFFFC",
        darkGrey: "#7D7D7D",
        grey: "#C4CFC4",
        beige: "#F1F0EC",
        greenDark: "#418D12",
        greenKhaki: "#ADC584",
        green: "#B0E48F",
        greenLight: "#CCF0B5",
        yellowDark: "#F8DB04",
        yellowLight: "#FAF1D5",
        darkRed: "#FF7272",
        red: "#FFAFAF",
        backdrop: "#698587",
      },
      objectPosition: {
        "22%-center": "22% center",
      },
      backgroundImage: {
        heroHomeGradient:
          "radial-gradient(71.85% 71.85% at 48.79% 28.15%, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%)",
        greenGradient:
          "radial-gradient(50% 50% at 50% 50%, #B0E48F 0%, rgba(176, 228, 143, 0) 100%)",
      },
      boxShadow: {
        buttonWhite: "0 0 0 2px #FFFFFC",
        buttonGreen: "0 0 0 2px #B0E48F",
        buttonGreenDark: "0 0 0 2px #418D12",
        buttonGrey: "0 0 0 2px #C4CFC4",
      },
      keyframes: {
        rotate: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
      },
      animation: {
        rotation: "rotate 1600ms linear infinite",
        slowRotation: "rotate 2800ms linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
