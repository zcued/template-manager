module.exports = {
  extends: '@zcool/stylelint-config',
  ignoreFiles: ['**/*.js', '**/*.jsx'],
  rules: {
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
  },
}
