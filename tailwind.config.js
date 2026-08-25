/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      colors: {
        background: "#0a0a0a",
        foreground: "#ededed",
        card: "#111111",
        "card-border": "#262626",
        "card-hover": "#1a1a1a",
        accent: "#8b5cf6",
        muted: "#a3a3a3",
      },

    },
  },
  plugins: [],
};
