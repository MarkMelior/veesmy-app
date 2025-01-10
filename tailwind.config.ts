import { withOpacity } from './config/tailwind/colors';

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
      '2xl': '32px',
      '3xl': '64px',
    },
    colors: {
      base: {
        50: withOpacity('base-50'),
        100: withOpacity('base-100'),
        200: withOpacity('base-200'),
        300: withOpacity('base-300'),
        400: withOpacity('base-400'),
        500: withOpacity('base-500'),
        600: withOpacity('base-600'),
        700: withOpacity('base-700'),
        800: withOpacity('base-800'),
        900: withOpacity('base-900'),
        950: withOpacity('base-950'),
      },
      black: '#000000',
      green: {
        500: '#00FF80',
      },
      primary: {
        400: '#5AADF2',
        500: '#1A80E5',
        600: '#3F73A6',
      },
      red: {
        400: '#FF4D4F',
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
    height: {
      modalBaseContent: '365px',
    },
    zIndex: {
      hud: '10',
      light: '35',
      overlay: '20',
      overlayChild: '30',
    },
  },
} satisfies Config;
