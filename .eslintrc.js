module.exports = {
  extends: '@zcool/eslint-config/browser-ts',
  parserOptions: {
    project: './tsconfig.json',
    createDefaultProgram: true,
  },
  rules: {
    '@typescript-eslint/no-var-requires': 'off',
    'react/display-name': 'off',
  },
}
