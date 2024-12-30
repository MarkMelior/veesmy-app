import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// TODO: Настроить Eslint - https://melior-app.atlassian.net/browse/VEES-3
const commonRules = {
  // https://eslint.org/docs/latest/rules/curly
  'curly': ['error', 'all'],
  // https://eslint.org/docs/latest/rules/padding-line-between-statements
  'padding-line-between-statements': [
    'error',
    { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
    { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
    { blankLine: 'always', prev: '*', next: 'return' }
  ],
  // https://eslint.org/docs/latest/rules/no-multiple-empty-lines
  'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }],
  // https://eslint.org/docs/latest/rules/arrow-body-style
  'arrow-body-style': ['error', 'as-needed'],
  // https://eslint.org/docs/latest/rules/no-console
  'no-console': ['error', { allow: ['warn', 'info', 'error'] }],
};

const stylisticRules = {
  '@stylistic/indent': ['error', 2], // Обеспечивает единообразие отступов.
  '@stylistic/array-bracket-newline': ['error', { multiline: true }], // Применяет разрывы строк после открытия и перед закрытием скобок массива.
  '@stylistic/no-mixed-spaces-and-tabs': 'error', // Запрещает смешанные пробелы и табуляции для отступов.
  '@stylistic/spaced-comment': ['error', 'always'], // Обеспечивает одинаковый интервал после `//` или `/*` в комментарии.
  '@stylistic/comma-dangle': ['error', 'only-multiline'], // Требует или запрещает конечные запятые.
  '@stylistic/no-extra-semi': 'error', // Запрещает ненужные точки с запятой.
  '@stylistic/semi': ['error', 'always'], // Требует или запрещает точки с запятой вместо ASI.
  '@stylistic/spaced-comment': ['error', 'always'], // Обеспечивает одинаковый интервал после `//` или `/*` в комментарии.
};

const eslintConfig = [
  ...compat.extends(
    'next/core-web-vitals',
    'next/typescript',
    'plugin:@stylistic/recommended-extends'
  ),
  {
    rules: {
      ...commonRules,
      ...stylisticRules,
    },
  },
];

export default eslintConfig;
