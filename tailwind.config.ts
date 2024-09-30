import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
  theme: {
    colors: {
      red: "#aa0000",
      green: "#33aa00",
      blue: "#0033aa",
      yellow: "#aaaa00",
      purple: "#5500aa",
      orange: "#cc5500",
      black: "#111111",
    },
    fontFamily: {
      sans: [
        "Noto Sans",
        "sans-serif",
      ],
      serif: [
        "Noto Serif",
        "serif",
      ],
    },
  },
} satisfies Config;
