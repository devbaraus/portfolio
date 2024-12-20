module.exports = {
  extends: [
    'next/core-web-vitals',
    // "plugin:prettier/recommended",
    'plugin:tailwindcss/recommended',
    'plugin:jsx-a11y/recommended'
  ],
  plugins: ['prettier', 'tailwindcss', 'perfectionist'],
  rules: {
    'no-unused-vars': [
      'warn',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: false,
        argsIgnorePattern: 'props|...props'
      }
    ],
    'no-console': 'warn',
    'import/no-anonymous-default-export': 'off',
    '@next/next/no-html-link-for-pages': 'off',
    'prettier/prettier': 'warn',
    'tailwindcss/no-custom-classname': 'off',
    'jsx-a11y/media-has-caption': 'off',
    'react/prefer-stateless-function': 'error',
    'react/button-has-type': 'error',
    'react/no-unused-prop-types': 'error',
    'react/jsx-pascal-case': 'error',
    'react/jsx-no-script-url': 'error',
    'react/no-children-prop': 'error',
    'react/no-danger': 'error',
    'react/no-danger-with-children': 'error',
    'react/no-unstable-nested-components': [
      'error',
      {
        allowAsProps: true
      }
    ],
    'react/jsx-fragments': 'error',
    'react/destructuring-assignment': [
      'error',
      'always',
      {
        destructureInSignature: 'always'
      }
    ],
    'react/jsx-no-leaked-render': [
      'error',
      {
        validStrategies: ['ternary']
      }
    ],
    'react/jsx-max-depth': [
      'error',
      {
        max: 6
      }
    ],
    'react/function-component-definition': [
      'off',
      {
        namedComponents: 'arrow-function'
      }
    ],
    'react/jsx-key': [
      'error',
      {
        checkFragmentShorthand: true,
        checkKeyMustBeforeSpread: true,
        warnOnDuplicates: true
      }
    ],
    'react/jsx-no-useless-fragment': 'warn',
    'react/jsx-curly-brace-presence': 'warn',
    'react/no-typos': 'warn',
    'react/display-name': 'warn',
    'react/self-closing-comp': 'warn',
    'react/jsx-sort-props': 'warn',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/prop-types': 'off',
    'perfectionist/sort-imports': [
      'error',
      {
        type: 'line-length',
        order: 'desc',
        ignoreCase: true,
        specialCharacters: 'keep',
        matcher: 'minimatch',
        internalPattern: ['@/**'],
        newlinesBetween: 'always',
        maxLineLength: undefined,
        groups: [
          'type',
          ['builtin', 'external'],
          'internal-type',
          'internal',
          ['parent-type', 'sibling-type', 'index-type'],
          ['parent', 'sibling', 'index'],
          'object',
          'unknown'
        ],
        customGroups: { type: {}, value: {} },
        environment: 'node'
      }
    ]
  },
  settings: {
    tailwindcss: {
      callees: ['cn'],
      config: 'tailwind.config.js'
    },
    next: {
      rootDir: ['./']
    }
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser'
    }
  ]
};
