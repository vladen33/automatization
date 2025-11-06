module.exports = {
  // Базовые конфигурации (рекомендуемые)
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-scss',
  ],

  // Правила форматирования
  rules: {
    'indentation': 2,
    'number-leading-zero': 'always',
    'string-quotes': 'double',
    'no-duplicate-selectors': true,
    'no-empty-source': true,

    // Свойства и значения
    'property-case': 'lower',
    'value-case': 'lower',
    'unit-case': 'lower',
    'declaration-block-trailing-semicolon': 'always',
    'declaration-colon-space-after': 'always',
    'declaration-colon-space-before': 'never',

    // Селекторы
    'selector-class-pattern': '^[a-z][a-z0-9\\-]*$',
    'selector-id-pattern': '^[a-z][a-z0-9\\-]*$',
    'selector-pseudo-class-case': 'lower',
    'selector-pseudo-element-case': 'lower',

    // Блочные конструкции
    'block-opening-brace-space-before': 'always',
    'block-closing-brace-newline-after': 'always-multi-line',
    'block-no-empty': true,

    // Отступы и переносы
    'max-empty-lines': 1,
    'no-extra-semicolons': true,
    'no-invalid-double-slash-comments': true,

    // Цвета
    'color-hex-case': 'lower',
    'color-named': 'never',

    // Шрифты
    'font-family-name-quotes': 'always-unless-keyword',
    'font-weight-notation': 'numeric',

    // Медиа-запросы
    'media-feature-name-case': 'lower',
    'media-feature-parentheses-space-inside': 'never',

    // Псевдоклассы/псевдоэлементы
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],

    // SCSS-специфичные правила
    'scss/dollar-variable-colon-space-after': 'always',
    'scss/dollar-variable-colon-space-before': 'never',
    'scss/at-import-partial-extension': 'never',
    'scss/at-mixin-pattern': '^[a-z][a-z0-9\\-]*$',
    'scss/at-function-pattern': '^[a-z][a-z0-9\\-]*$',
    'scss/selector-no-redundant-nesting-selector': true,
  },

  // Файлы/папки для игнорирования
  ignoreFiles: [
    '**/*.min.css',
    'node_modules/**',
    'dist/**',
    '.git/**',
    'coverage/**',
  ],

  // Дополнительные настройки
  defaultSeverity: 'error', // Уровень серьёзности по умолчанию
};