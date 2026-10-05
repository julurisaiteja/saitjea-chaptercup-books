import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#eef1f4",
          fg: "#141c24",
          muted: "#5a6672",
          primary: "#1a4d3e",
          accent: "#c9a227",
          surface: "#f8faf9",
          border: "#cfd8dc",
          hero: "#0f1f1a",
          cafe: "#2c1810",
          shelf: "#3d2e24",
        },
      },
      fontFamily: {
        display: ["Literata", "Georgia", "serif"],
        body: ["Source Sans 3", "Helvetica", "sans-serif"],
      },
      keyframes: {
        rise: { "0%": { opacity: "0", transform: "translateY(18px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        fade: { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        marquee: { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
        floaty: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-6px)" } },
        steam: { "0%": { opacity: "0", transform: "translateY(0) scale(1)" }, "50%": { opacity: "0.35" }, "100%": { opacity: "0", transform: "translateY(-24px) scale(1.2)" } },
        pagecurl: { "0%": { transform: "rotateY(0deg)" }, "100%": { transform: "rotateY(-12deg)" } },
      },
      animation: {
        rise: "rise 0.7s ease-out both",
        "rise-delay": "rise 0.8s ease-out 0.12s both",
        "rise-late": "rise 0.9s ease-out 0.24s both",
        fade: "fade 0.6s ease-out both",
        marquee: "marquee 28s linear infinite",
        floaty: "floaty 4s ease-in-out infinite",
        steam: "steam 3s ease-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
