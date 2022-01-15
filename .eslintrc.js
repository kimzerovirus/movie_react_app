module.exports = {
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint', 'prettier'],
	extends: [
		'react-app',
		'plugin:prettier/recommended',
		'plugin:@typescript-eslint/recommended',
	],
	rules: {
		'@typescript-eslint/no-inferrable-types': 'off', // Closed type inference 자동으로 추론 할 수 있는 것도 명시적으로 표하게할 수 있게함
		'prettier/prettier': [
			'error',
			{
				singleQuote: true, // 작은 따옴표
				semi: true, // 세미콜론
				useTabs: true,
				tabWidth: 2,
				trailingComma: 'all',
				printWidth: 80, // 80자 마다 개행
				bracketSpacing: true,
				arrowParens: 'avoid',
				endOfLine: 'auto',
			},
		],
	},
};
