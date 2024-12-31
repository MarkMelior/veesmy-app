import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: ['selector', '[data-mode="dark"]'],
  theme: {
    colors: {
      base: {
        50: '#f8fafc',
        100: '#f1f5f9',
        200: '#e2e8f0',
        300: '#cbd5e1',
        400: '#BDBFC2',
        500: '#95999D',
        600: '#62666A',
        700: '#3D4043',
        800: '#232426',
        900: '#161618',
        950: '#0F0F10',
      },
    },
  },
} satisfies Config;
