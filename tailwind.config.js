/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "hidcot-red": "#D02C2F",
        "hidcot-black": "#1c1c1c",
        "hidcot-white": "#FFFFFF",
        "hidcot-claret": "#7F2629",
        "hidcot-burnt-red": "#EE907B",
        "hidcot-dark-gray": "#76777A",
        "hidcot-silver": "#BBBBBB",
      },
      fontFamily: {
        body: ["Figtree", "Roboto", "Arial", "sans-serif"],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }], // 12px
        sm: ["0.875rem", { lineHeight: "1.25rem" }], // 14px
        base: ["1rem", { lineHeight: "1.5rem" }], // 16px
        lg: ["1.125rem", { lineHeight: "1.75rem" }], // 18px
        xl: ["1.25rem", { lineHeight: "1.75rem" }], // 20px
        "2xl": ["1.5rem", { lineHeight: "2rem" }], // 24px
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }], // 30px
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }], // 36px
        "5xl": ["3rem", { lineHeight: "1" }], // 48px
        "6xl": ["3.75rem", { lineHeight: "1" }], // 60px
        "7xl": ["4.5rem", { lineHeight: "1" }], // 72px
        "8xl": ["6rem", { lineHeight: "1" }], // 96px
        "9xl": ["8rem", { lineHeight: "1" }], // 128px
      },
      screens: {
        xxs: "360px", // extra extra small devices
        xs: "480px", // extra small devices
        sm: "640px", // small devices, phones
        md: "768px", // medium devices, tablets
        lg: "1024px", // large devices, desktops
        xl: "1280px", // extra large devices, large desktops
        "2xl": "1536px", // very large devices
        "3xl": "1920px", // extra extra large devices
      },
    },
  },
  plugins: [],
};
