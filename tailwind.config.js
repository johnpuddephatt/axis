module.exports = {
  content: [
    "./index.php",
    "./app/**/*.php",
    "./resources/**/*.{php,vue,js}",
    "./safelist.txt",
  ],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      sans: ["Karbon", "ui-sans-serif", "system-ui"],
      mono: ["Inconsolata", "ui-monospace", "SFMono-Regular"],
    },
    extend: {
      colors: {
        "axis-green": {
          DEFAULT: "#449878",
          50: "#B5DECF",
          100: "#A7D8C5",
          200: "#8BCBB3",
          300: "#6FBFA0",
          400: "#53B28E",
          500: "#449878",
          600: "#337159",
          700: "#214A3B",
          800: "#10241C",
          900: "#000000",
        },
        "axis-blue": {
          DEFAULT: "#668DED",
          50: "#F6F8FE",
          100: "#E6ECFC",
          200: "#C6D4F8",
          300: "#A6BDF5",
          400: "#86A5F1",
          500: "#668DED",
          600: "#2F64E7",
          700: "#1748C2",
          800: "#10348B",
          900: "#0A1F54",
        },
        "axis-purple": "#a09cf8",
        "axis-cream": "#f9eadd",
        "axis-yellow": "#e9f754",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
