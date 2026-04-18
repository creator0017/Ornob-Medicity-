import forms from '@tailwindcss/forms';
import containerQueries from '@tailwindcss/container-queries';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
        "on-background": "#1a1c19",
        "error": "#ba1a1a",
        "inverse-on-surface": "#f1f1ec",
        "surface-container-low": "#f4f4ef",
        "surface-container-lowest": "#ffffff",
        "on-secondary": "#ffffff",
        "on-tertiary-fixed-variant": "#3f4c00",
        "surface": "#fafaf5",
        "on-secondary-fixed": "#06201a",
        "primary-fixed-dim": "#8fd4c1",
        "on-primary": "#ffffff",
        "on-tertiary": "#ffffff",
        "surface-container-highest": "#e2e3de",
        "on-error": "#ffffff",
        "outline": "#6f7975",
        "on-error-container": "#93000a",
        "tertiary-fixed-dim": "#b6d330",
        "inverse-surface": "#2f312e",
        "tertiary": "#343f00",
        "surface-container": "#eeeee9",
        "surface-variant": "#e2e3de",
        "surface-container-high": "#e8e8e4",
        "secondary": "#4b635c",
        "on-tertiary-container": "#b4d12d",
        "outline-variant": "#bfc9c4",
        "primary-fixed": "#abf0dc",
        "on-primary-container": "#8ed2bf",
        "tertiary-container": "#495700",
        "on-surface-variant": "#3f4945",
        "error-container": "#ffdad6",
        "surface-dim": "#dadad5",
        "surface-tint": "#22695a",
        "inverse-primary": "#8fd4c1",
        "surface-bright": "#fafaf5",
        "background": "#fafaf5",
        "on-primary-fixed": "#002019",
        "secondary-container": "#cde9df",
        "primary-container": "#0f5c4d",
        "primary": "#004337",
        "on-tertiary-fixed": "#181e00",
        "on-primary-fixed-variant": "#005143",
        "tertiary-fixed": "#d1f04c",
        "on-secondary-container": "#506962",
        "secondary-fixed-dim": "#b1ccc3",
        "secondary-fixed": "#cde9df",
        "on-secondary-fixed-variant": "#334c44",
        "on-surface": "#1a1c19"
      },
      "borderRadius": {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      "fontFamily": {
        "headline": ["Epilogue", "sans-serif"],
        "body": ["Manrope", "sans-serif"],
        "label": ["Manrope", "sans-serif"]
      }
    },
  },
  plugins: [
    forms,
    containerQueries,
  ],
}
