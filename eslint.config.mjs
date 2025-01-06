import { FlatCompat } from '@eslint/eslintrc';
import importPlugin from 'eslint-plugin-import';
import perfectionistPlugin from 'eslint-plugin-perfectionist';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

import scssImportNamePlugin from './config/eslint/scss-import-name.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintCommonRules = {
  // https://eslint.org/docs/latest/rules/arrow-body-style
  'arrow-body-style': ['error', 'as-needed'],
  // https://eslint.org/docs/latest/rules/comma-dangle
  'comma-dangle': ['error', 'always-multiline'],
  // https://eslint.org/docs/latest/rules/curly
  'curly': ['error', 'all'],
  // https://eslint.org/docs/latest/rules/max-len
  'max-len': [
    'error',
    {
      code: 100,
      ignoreComments: true, // Применять правило к комментариям
      ignoreStrings: false, // Применять правило к строкам
      ignoreTemplateLiterals: false, // Применять правило к шаблонным строкам
      ignoreUrls: true, // Игнорировать длинные ссылки
      tabWidth: 2,
    },
  ],
  // https://eslint.org/docs/latest/rules/no-console
  'no-console': ['error', { allow: ['warn', 'info', 'error'] }],
  // Запретить использование пустых функций
  'no-empty-function': 'error',
  // Форматирование объектов
  'object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
  // https://eslint.org/docs/latest/rules/padding-line-between-statements
  'padding-line-between-statements': [
    'error',
    { blankLine: 'always', next: '*', prev: ['const', 'let', 'var'] },
    {
      blankLine: 'any',
      next: ['const', 'let', 'var'],
      prev: ['const', 'let', 'var'],
    },
    { blankLine: 'always', next: 'return', prev: '*' },
  ],
};

const eslintReactRules = {
  // Указывает пропсам значения true и false
  'react/jsx-boolean-value': ['error', 'always'],
  // Запрет на пропсы-спред, если нужно
  'react/jsx-props-no-spreading': 'error',
  // Соответствие стандартным DOM-свойствам
  'react/no-unknown-property': 'error',
  // Компоненты должны быть закрыты
  'react/self-closing-comp': 'error',
};

const eslintTypescriptRules = {
  '@typescript-eslint/no-unused-vars': 'error',
};

const eslintPerfectionistRules = {
  'perfectionist/sort-exports': [
    'error',
    {
      order: 'asc',
      type: 'natural',
    },
  ],
  'perfectionist/sort-interfaces': [
    'error',
    {
      order: 'asc',
      type: 'natural',
    },
  ],
  'perfectionist/sort-jsx-props': [
    'error',
    {
      order: 'asc',
      type: 'natural',
    },
  ],
  'perfectionist/sort-objects': [
    'error',
    {
      order: 'asc',
      type: 'natural',
    },
  ],
};

const eslintStylisticRules = {
  // Применяет разрывы строк после открытия и перед закрытием скобок массива.
  '@stylistic/array-bracket-newline': ['error', { multiline: true }],
  // Применяет скобки вокруг стрелочных функций.
  '@stylistic/arrow-parens': ['error', 'always'],
  // Требует или запрещает конечные запятые.
  '@stylistic/comma-dangle': ['error', 'only-multiline'],
  // Обеспечивает единообразие отступов.
  '@stylistic/indent': ['error', 2],
  // Обеспечивает переводы строк между операндами троичных выражений.
  '@stylistic/multiline-ternary': 'off',
  // Запрещает смешанные пробелы и табуляции для отступов.
  '@stylistic/no-mixed-spaces-and-tabs': 'error',
  // Обеспечивает последовательное использование обратных, двойных или одинарных кавычек.
  '@stylistic/quotes': ['error', 'single'],
  // Требует или запрещает точки с запятой.
  '@stylistic/semi': ['error', 'always'],
  // Обеспечивает одинаковый интервал после `//` или `/*` в комментарии.
  '@stylistic/spaced-comment': ['error', 'always'],
};

const eslintImportRules = {
  // Все импортированные данные отображаются перед другими операторами.
  'import/first': 'error',
  // Перевод строки после инструкций import.
  'import/newline-after-import': 'error',
  // Запретить повторный импорт одного и того же модуля в несколько мест.
  'import/no-duplicates': 'error',
  // Запретить модули без экспорта или экспорт без соответствующего импорта в другой модуль.
  'import/no-unused-modules': 'error',
  // Примените соглашение в порядке импорта модуля.
  'import/order': [
    'error',
    {
      'alphabetize': {
        caseInsensitive: true,
        order: 'asc',
      },
      'groups': [
        ['builtin', 'external'], // Встроенные модули и внешние библиотеки
        'internal', // Внутренние модули
        ['parent', 'sibling', 'index'], // Относительные импорты
        'type', // Импорты типов
        'object', // Динамические импорты (например, require)
        'unknown', // Неизвестные импорты
      ],
      'newlines-between': 'always',
      'pathGroups': [
        {
          group: 'sibling',
          pattern: '.*/**/*.scss',
          position: 'after',
        },
        {
          group: 'internal',
          pattern: '@/widgets/**',
          position: 'before',
        },
        {
          group: 'internal',
          pattern: '@/shared/**',
          position: 'before',
        },
        {
          group: 'internal',
          pattern: '@/features/**',
          position: 'before',
        },
        {
          group: 'internal',
          pattern: '@/entities/**',
          position: 'before',
        },
        {
          group: 'internal',
          pattern: '@/app/**',
          position: 'before',
        },
      ],
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
    plugins: {
      'custom-rules': scssImportNamePlugin,
      'import': importPlugin,
      'perfectionist': perfectionistPlugin,
    },
    rules: {
      ...eslintCommonRules,
      ...eslintStylisticRules,
      ...eslintReactRules,
      ...eslintImportRules,
      ...eslintTypescriptRules,
      ...eslintPerfectionistRules,
      'custom-rules/scss-import-name': 'error',
    },
  },
  {
    files: ['**/src/shared/icons/*.tsx'],
    rules: { 'max-len': 'off' },
  },
  {
    files: ['**/config/**/*.js'],
    rules: { '@typescript-eslint/no-require-imports': 'off' },
  },
];

export default eslintConfig;
