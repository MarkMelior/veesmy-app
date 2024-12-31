/** @type {import('stylelint').Config} */
const config = {
  extends: [
    'stylelint-config-tailwindcss',
    'stylelint-config-standard',
  ],
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
    'function-no-unknown': [
      true,
      {
        ignoreFunctions: ['theme'],
      },
    ],
    'media-query-no-invalid': null,
    'selector-class-pattern': null,
  },
};

export default config;
