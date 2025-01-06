import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: ['selector', '[data-mode="dark"]'],
  theme: {
    backdropBlur: {
      '2xl': '32px',
      '3xl': '64px',
      'xl': '16px',
    },
    blur: {
      '3xl': '64px',
    },
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
      black: '#000000',
      green: {
        500: '#00FF80',
      },
      primary: {
        400: '#3F73A6',
        500: '#1A80E5',
        600: '#5AADF2',
      },
      red: {
        500: '#FA4838',
        600: '#dc2626',
      },
      transparent: 'transparent',
      yellow: {
        500: '#FAC938',
      },
    },
    fontFamily: {
      code: ['JetBrains Mono', 'monospace'],
    },
    zIndex: {
      hud: '10',
      light: '35',
      overlay: '20',
      overlayChild: '30',
    },
  },
} satisfies Config;
