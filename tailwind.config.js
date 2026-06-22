/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Design tokens pulled straight from the reference design (Section 4 of the brief)
        primary: {
          DEFAULT: "#3A57E8", // sidebar active state, primary buttons, links, active nav icon
          50: "#EEF1FD",
          100: "#D7DDFB",
          600: "#3A57E8",
          700: "#2C44C7",
        },
        info: {
          DEFAULT: "#08B1BA", // secondary accents, badges, highlights
          50: "#E6F9FA",
        },
        bodybg: "#F5F6FA", // page background (light grey)
        bordercolor: "#E4E6EF", // sidebar/card hairline borders
        bodycolor: "#5A6A85", // muted body/meta text
        headingcolor: "#1A1D1F", // heading text
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      fontSize: {
        "page-title": ["22px", { lineHeight: "1.3", fontWeight: "700" }],
        "section-title": ["18px", { lineHeight: "1.3", fontWeight: "700" }],
        meta: ["13px", { lineHeight: "1.4" }],
      },
      borderRadius: {
        card: "10px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.04)",
      },
    },
  },
  plugins: [],
}
