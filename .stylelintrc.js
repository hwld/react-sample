module.exports = {
  plugins: ['stylelint-order'],
  extends: [
		'stylelint-config-standard',
		'./node_modules/prettier-stylelint/config.js'
	],
  ignoreFiles: [
    '**/node_modules/**',
  ],
  rules: {
    'indentation': [2, {
      "ignore": ["value"]
    }],
    'string-quotes': 'single',
    'order/properties-alphabetical-order': true,
    'declaration-empty-line-before': 'never',
  },
};
