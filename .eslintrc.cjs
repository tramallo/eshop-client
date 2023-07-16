module.exports = {
	env: {
		'browser': true,
		'es2021': true
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended'
	],
	overrides: [
		{
			'env': {'node': true},
			'files': ['.eslintrc.{js,cjs}'],
			'parserOptions': {'sourceType': 'script'}
		}
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		'ecmaVersion': 'latest',
		'sourceType': 'module'
	},
	plugins: [
		'@typescript-eslint',
		'react'
	],
	rules: {
		'indent': ['warn', 'tab'],
		'quotes': ['warn','single'],
		'semi': ['warn','always'],
		'no-multiple-empty-lines': ['warn', { 'max': 1}],
		'react/react-in-jsx-scope': 'off',
	}
};
