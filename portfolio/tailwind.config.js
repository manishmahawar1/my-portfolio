export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        foreground: "var(--color-foreground)",
        background: "var(--color-background)",
        card: "var(--color-card)",
        border: "var(--color-border)",
        muted: "var(--color-muted)",
      },
    },
  },
  plugins: [],
}