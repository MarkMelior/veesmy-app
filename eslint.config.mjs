import { FlatCompat } from '@eslint/eslintrc';
import importPlugin from 'eslint-plugin-import';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintCommonRules = {
  // https://eslint.org/docs/latest/rules/curly
  'curly': ['error', 'all'],
  // https://eslint.org/docs/latest/rules/padding-line-between-statements
  'padding-line-between-statements': [
    'error',
    { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
    { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
    { blankLine: 'always', prev: '*', next: 'return' },
  ],
  // https://eslint.org/docs/latest/rules/arrow-body-style
  'arrow-body-style': ['error', 'as-needed'],
  // https://eslint.org/docs/latest/rules/no-console
  'no-console': ['error', { allow: ['warn', 'info', 'error'] }],
  // https://eslint.org/docs/latest/rules/comma-dangle
  'comma-dangle': ['error', 'always-multiline'],
};

const eslintReactRules = {
  // Сортировка пропсов в компонентах
  'react/jsx-sort-props': [
    'error',
    {
      callbacksLast: true,
      shorthandFirst: true,
      multiline: 'ignore',
      ignoreCase: true,
      noSortAlphabetically: false,
      reservedFirst: true,
    },
  ],
  // Указывает пропсам значения true и false
  'react/jsx-boolean-value': ['error', 'always'],
};

const eslintTypescriptRules = {
  '@typescript-eslint/no-unused-vars': 'error',
};

const eslintStylisticRules = {
  // Обеспечивает единообразие отступов.
  '@stylistic/indent': ['error', 2],
  // Применяет разрывы строк после открытия и перед закрытием скобок массива.
  '@stylistic/array-bracket-newline': ['error', { multiline: true }],
  // Запрещает смешанные пробелы и табуляции для отступов.
  '@stylistic/no-mixed-spaces-and-tabs': 'error',
  // Обеспечивает одинаковый интервал после `//` или `/*` в комментарии.
  '@stylistic/spaced-comment': ['error', 'always'],
  // Требует или запрещает конечные запятые.
  '@stylistic/comma-dangle': ['error', 'only-multiline'],
  // Требует или запрещает точки с запятой.
  '@stylistic/semi': ['error', 'always'],
};

const eslintImportRules = {
  // Все импортированные данные отображаются перед другими операторами.
  'import/first': 'error',
  // Запретить модули без экспорта или экспорт без соответствующего импорта в другой модуль.
  'import/no-unused-modules': 'error',
  // Запретить повторный импорт одного и того же модуля в несколько мест.
  'import/no-duplicates': 'error',
  // Перевод строки после инструкций import.
  'import/newline-after-import': 'error',
  // Примените соглашение в порядке импорта модуля.
  'import/order': [
    'error',
    {
      'groups': [
        ['builtin', 'external'], // Встроенные модули и внешние библиотеки
        'internal', // Внутренние модули
        ['parent', 'sibling', 'index'], // Относительные импорты
        'type', // Импорты типов
        'object', // Динамические импорты (например, require)
        'unknown', // Неизвестные импорты
      ],
      'newlines-between': 'always',
      'alphabetize': {
        order: 'asc',
        caseInsensitive: true,
      },
    },
  ],
};

const eslintConfig = [
  ...compat.extends(
    'next/core-web-vitals',
    'next/typescript',
    'plugin:@stylistic/recommended-extends',
  ),
  {
    rules: {
      ...eslintCommonRules,
      ...eslintStylisticRules,
      ...eslintReactRules,
      ...eslintImportRules,
      ...eslintTypescriptRules,
    },
    plugins: { import: importPlugin },
  },
];

export default eslintConfig;
