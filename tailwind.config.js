/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        "accent-purple": "var(--accent-purple)",
        "dark-bg": "var(--dark-bg)",
        gold: "var(--gold)",
        "warning-red": "var(--warning-red)",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}; 