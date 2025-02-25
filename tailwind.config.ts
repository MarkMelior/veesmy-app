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
        50: '#E8FAF0',
        100: '#D1F4E0',
        200: '#A2E9C1',
        300: '#74DFA2',
        400: '#45D483',
        500: '#45D483',
        600: '#12A150',
        700: '#0E793C',
        800: '#095028',
        900: '#052814',
      },
      primary: {
        50: '#E6F1FE',
        100: '#CCE3FD',
        200: '#99C7FB',
        300: '#74DFA2',
        400: '#5AADF2',
        500: '#1A80E5',
        600: '#3F73A6',
        700: '#004493',
        800: '#002E62',
        900: '#001731',
      },
      red: {
        50: '#FEE7EF',
        100: '#FDD0DF',
        200: '#FAA0BF',
        300: '#F871A0',
        400: '#FF4D4F',
        500: '#FA4838',
        600: '#C20E4D',
        700: '#920B3A',
        800: '#610726',
        900: '#310413',
      },
      transparent: 'transparent',
      yellow: {
        50: '#FEFCE8',
        100: '#FDEDD3',
        200: '#FBDBA7',
        300: '#F9C97C',
        400: '#F7B750',
        500: '#F5A524',
        600: '#C4841D',
        700: '#936316',
        800: '#62420E',
        900: '#312107',
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
      message: '40',
      overlay: '20',
      overlayChild: '30',
    },
  },
} satisfies Config;
