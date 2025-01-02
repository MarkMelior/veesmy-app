/** @type {import('stylelint').Config} */
const config = {
  extends: [
    'stylelint-config-tailwindcss',
    'stylelint-config-standard',
  ],
  plugins: ['stylelint-order', './config/stylelint/restrict-apply.js'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen',
        ],
      },
    ],
    'custom-rules/restrict-apply': [
      true, {
        allowedPatterns: [
          '^text-(sm|base|lg|xl|\\d+)$',
          '^border',
        ],
      },
    ],
    'declaration-empty-line-before': null,
    'function-no-unknown': [
      true,
      {
        ignoreFunctions: ['theme'],
      },
    ],
    'media-query-no-invalid': null,
    'order/order': [
      [
        'custom-properties',
        'declarations',
      ],
    ],
    'order/properties-order': [
      [
        {
          emptyLineBefore: 'always',
          properties: [
            'display',
            'flex-direction',
            'justify-content',
            'align-items',
            'gap',
            'position',
            'top',
            'right',
            'bottom',
            'left',
            'z-index',
            'width',
            'min-width',
            'max-width',
            'height',
            'min-height',
            'max-height',
            'margin',
            'margin-top',
            'margin-right',
            'margin-bottom',
            'margin-left',
            'padding',
            'padding-top',
            'padding-right',
            'padding-bottom',
            'padding-left',
          ],
        },
        {
          emptyLineBefore: 'always',
          groupName: 'Typography',
          properties: [
            'font',
            'font-size',
            'font-weight',
            'font-family',
            'line-height',
            'text-align',
          ],
        },
        {
          emptyLineBefore: 'always',
          properties: [
            'color',
            'background',
            'opacity',
            'border-radius',
            'border',
            'overflow',
          ],
        },
        {
          emptyLineBefore: 'always',
          properties: [
            'transform',
            'transition',
            'animation',
          ],
        },
      ],
      {
        unspecified: 'bottomAlphabetical',
      },
    ],
    'selector-class-pattern': null,
  },
};

export default config;
