module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'no-console': 0,
    'react/jsx-curly-newline': 0,
    'implicit-arrow-linebreak': 'off',
    'no-unused-vars': 'off',
    'import/newline-after-import': 0,
    'react/jsx-no-target-blank': 0,
    'react/self-closing-comp': 0,
    'react/react-in-jsx-scope': 0,
    'no-use-before-define': 0,
    'prefer-template': 'off',
    'no-underscore-dangle': ['error', { allow: ['_place'] }],
    'react/jsx-closing-bracket-location': 0,
    'comma-dangle': 0,
    'jsx-quotes': 'off',
    'no-plusplus': 'off',
    'no-shadow': 'off',
    'prefer-const': 'off',
    'trailing-comma': 0,
    'arrow-body-style': 0,
    'react/function-component-definition': 0,
    'import/extensions': 0,
    'react/prop-types': 0,
    'linebreak-style': 0,
    'react/state-in-constructor': 0,
    'import/prefer-default-export': 0,
    'max-len': [2, 550],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxEOF: 1,
      },
    ],
    'no-underscore-dangle': [
      'error',
      {
        allow: ['_d', '_dh', '_h', '_id', '_m', '_n', '_t', '_text'],
      },
    ],
    'object-curly-newline': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-one-expression-per-line': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/alt-text': 0,
    'jsx-a11y/no-autofocus': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'react/no-array-index-key': 0,
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to', 'hrefLeft', 'hrefRight'],
        aspects: ['noHref', 'invalidHref', 'preferButton'],
      },
    ],
  },
};
