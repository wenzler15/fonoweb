const ts = require('@typescript-eslint/eslint-plugin/dist/index')

const config = {
	root: true,
	env: {
		browser: true,
		node: true,
		es2021: true,
	},
	parser: '@typescript-eslint/parser',
	plugins: ['react-prefer-function-component'],
	extends: [
		'eslint:all',
		'plugin:@typescript-eslint/all',
		'plugin:import/recommended',
		'plugin:import/typescript',
		'plugin:react/all',
		'plugin:jsx-a11y/recommended',
		'airbnb',
		'airbnb-typescript',
		'airbnb/hooks',
		'plugin:react/jsx-runtime',
		'plugin:unicorn/all',
		'plugin:react-prefer-function-component/recommended',
		'prettier',
	],
	rules: {
		quotes: ['error', 'single', { avoidEscape: true }],
		'no-dupe-else-if': 'error',
		'no-promise-executor-return': 'error',
		'no-unreachable-loop': 'error',
		'no-useless-backreference': 'error',
		'require-atomic-updates': 'error',
		'default-case-last': 'error',
		'grouped-accessor-pairs': 'error',
		'no-constructor-return': 'error',
		'no-implicit-coercion': 'error',
		'prefer-regex-literals': 'error',
		'capitalized-comments': 'error',
		'no-restricted-syntax': [
			'error',
			{
				selector: 'ForInStatement',
				message:
					'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
			},
			{
				selector: 'LabeledStatement',
				message:
					'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
			},
			{
				selector: 'WithStatement',
				message:
					'`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
			},
		],
		'no-void': 'off',
		'@typescript-eslint/no-non-null-assertion': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/consistent-type-definitions': 'off',
		'@typescript-eslint/promise-function-async': 'off',
		'@typescript-eslint/padding-line-between-statements': 'off',
		'@typescript-eslint/prefer-enum-initializers': 'off',
		'@typescript-eslint/prefer-readonly-parameter-types': 'off',
		'@typescript-eslint/prefer-regexp-exec': 'off',
		'@typescript-eslint/no-type-alias': 'off',
		'@typescript-eslint/consistent-type-imports': 'off',
		'@typescript-eslint/no-magic-numbers': 'off',
		'@typescript-eslint/no-unsafe-call': 'off',
		'@typescript-eslint/no-unsafe-return': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/init-declarations': 'off',
		'@typescript-eslint/no-confusing-void-expression': [
			'error',
			{ ignoreArrowShorthand: true },
		],
		'@typescript-eslint/non-nullable-type-assertion-style': 'off',
		'@typescript-eslint/strict-boolean-expressions': 'off',
		'@typescript-eslint/no-implicit-any-catch': 'off',
		'@typescript-eslint/member-ordering': 'off',
		'@typescript-eslint/prefer-includes': 'off',
		'@typescript-eslint/no-restricted-imports': 'off',
		'@typescript-eslint/no-unsafe-member-access': 'off',
		'@typescript-eslint/no-unsafe-assignment': 'off',
		'import/no-deprecated': 'error',
		'import/order': 'off',
		'import/no-extraneous-dependencies': [
			'error',
			{
				devDependencies: [
					'vite.config.ts',
					'src/setupTests.ts',
					'src/testUtils.tsx',
					'src/mocks/**',
					'**/__tests__/*.{ts,tsx}',
				],
			},
		],

		'react/no-did-update-set-state': 'off',
		'react/no-find-dom-node': 'off',
		'react/no-is-mounted': 'off',
		'react/no-redundant-should-component-update': 'off',
		'react/no-render-return-value': 'off',
		'react/no-string-refs': 'off',
		'react/no-this-in-sfc': 'off',
		'react/no-will-update-set-state': 'off',
		'react/prefer-es6-class': 'off',
		'react/no-unused-state': 'off',
		'react/prefer-stateless-function': 'off',
		'react/require-render-return': 'off',
		'react/sort-comp': 'off',
		'react/state-in-constructor': 'off',
		'react/static-property-placement': 'off',

		'react/boolean-prop-naming': [
			'error',
			{
				validateNested: true,
			},
		],
		'react/function-component-definition': [
			'error',
			{
				namedComponents: 'function-declaration',
			},
		],
		'react/no-unstable-nested-components': 'error',
		'react/jsx-handler-names': 'off',
		'react/jsx-key': 'error',
		'react/jsx-props-no-spreading': 'off',
		'react/jsx-no-leaked-render': 'off',
		'react/jsx-no-bind': [
			'error',
			{
				ignoreRefs: false,
				allowArrowFunctions: true,
				allowFunctions: true,
				allowBind: false,
				ignoreDOMComponents: false,
			},
		],
		'react/jsx-no-constructed-context-values': 'error',
		'react/jsx-no-script-url': 'error',
		'react/jsx-no-useless-fragment': 'error',
		'import/prefer-default-export': 'off',
		'import/no-default-export': 'error',
		'react/require-default-props': 'off',
		'@typescript-eslint/no-floating-promises': 'off',
		'no-param-reassign': [
			'error',
			{
				props: true,
				ignorePropertyModificationsForRegex: ['^draft', 'draft', 'state'],
			},
		],
		'unicorn/no-keyword-prefix': 'off',
		'unicorn/prevent-abbreviations': 'off',
		'unicorn/no-useless-undefined': 'off',
		'unicorn/filename-case': [
			'error',
			{
				cases: {
					camelCase: true,
					pascalCase: true,
				},
			},
		],
		'unicorn/no-nested-ternary': ['error'],
		'no-console': ['error', { allow: ['warn', 'error'] }],
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	overrides: [
		{
			files: ['src/**/*.ts?(x)', 'src/**/*.js?(x)'],
			parserOptions: {
				project: ['./tsconfig.json'],
			},
		},
		{
			files: ['src/**/*.tsx'],
			rules: {
				'unicorn/no-null': 'off',
			},
		},
		{
			files: ['src/**/*.stories.ts?(x)'],
			rules: {
				'react/function-component-definition': 'off',
				'react/jsx-props-no-spreading': 'off',
				'import/no-default-export': 'off',
			},
		},
		{
			files: ['vite.config.ts'],
			parserOptions: {
				project: ['./tsconfig.node.json'],
			},
		},
		{
			files: ['**/__tests__/**/*.ts?(x)'],
			extends: ['plugin:testing-library/react'],
			rules: {
				'testing-library/no-await-sync-events': [
					'error',
					{
						eventModules: ['fire-event'],
					},
				],
				'testing-library/no-manual-cleanup': 'error',
				'testing-library/prefer-explicit-assert': 'error',
				'testing-library/prefer-user-event': 'error',
				'testing-library/prefer-wait-for': 'error',
			},
		},
	],
}

config.overrides.push({
	files: ['src/**/*.js'],
	rules: {
		...Object.keys(ts.rules).reduce(
			(rules, ruleName) => ({
				...rules,
				[`@typescript-eslint/${ruleName}`]: 'off',
			}),
			{},
		),
	},
})

module.exports = config
