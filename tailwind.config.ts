import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    colors: {
      'base': {
        950: '#0F0F10',
        900: '#161618',
        800: '#232426',
        700: '#3D4043',
        600: '#62666A',
        400: '#95999D',
        300: '#BDBFC2',
        200: '#e2e8f0',
        100: '#f1f5f9',
        50: '#f8fafc',
      },
    }
  },
  darkMode: ['selector', '[data-mode="dark"]'],
} satisfies Config;
