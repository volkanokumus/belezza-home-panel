// // @ts-check

// import { fixupConfigRules } from '@eslint/compat'
// import reactRefresh from 'eslint-plugin-react-refresh'
// import path from 'node:path'
// import { fileURLToPath } from 'node:url'
// import js from '@eslint/js'
// import { FlatCompat } from '@eslint/eslintrc'
// import tseslint from 'typescript-eslint'

// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)
// const compat = new FlatCompat({
//     baseDirectory: __dirname,
//     recommendedConfig: js.configs.recommended,
//     allConfig: js.configs.all,
// })

// export default tseslint.config(
//     [
//         {
//             ignores: [
//                 '**/build/',
//                 '**/node_modules/',
//                 '**/dist/',
//                 '**/.prettierrc.js',
//                 '**/.eslintrc.js',
//                 '**/env.d.ts',
//                 '**/eslint.config.mjs',
//                 '**/postcss.config.cjs',
//                 '**/tailwind.config.cjs',
//             ],
//         },
//         ...fixupConfigRules(
//             compat.extends(
//                 'eslint:recommended',
//                 'plugin:import/recommended',
//                 'plugin:react/recommended',
//                 'plugin:react-hooks/recommended',
//                 'prettier',
//                 'eslint-config-prettier',
//             ),
//         ),
//         {
//             plugins: {
//                 'react-refresh': reactRefresh,
//             },

//             settings: {
//                 react: {
//                     version: 'detect',
//                 },

//                 'import/parsers': {
//                     '@typescript-eslint/parser': ['.ts', '.tsx'],
//                 },

//                 'import/resolver': {
//                     typescript: {
//                         project: './tsconfig.eslint.json',
//                         alwaysTryTypes: true,
//                     },
//                 },
//             },
//             rules: {
//                 'react-refresh/only-export-components': [
//                     'warn',
//                     {
//                         allowConstantExport: true,
//                     },
//                 ],
//                 'react-hooks/rules-of-hooks': 'off',
//                 'react/react-in-jsx-scope': 'off',
//                 'import/first': 'warn',
//                 'import/default': 'off',
//                 'import/newline-after-import': 'warn',
//                 'import/no-named-as-default-member': 'off',
//                 'import/no-duplicates': 'error',
//                 'import/no-named-as-default': 0,
//                 'react/prop-types': 'off',
//                 'react/jsx-sort-props': [
//                     'warn',
//                     {
//                         callbacksLast: true,
//                         shorthandFirst: true,
//                         ignoreCase: true,
//                         reservedFirst: true,
//                         noSortAlphabetically: true,
//                     },
//                 ],
//             },
//         },
//     ],
//     tseslint.configs.recommended,
//     {
//         languageOptions: {
//             parserOptions: {
//                 projectService: true,
//                 tsconfigRootDir: import.meta.dirname,
//             },
//         },
//     },
//     {
//         files: ['**/*.tsx', '**/*.ts'],
//         rules: {
//             '@typescript-eslint/no-unused-expressions': 'off',
//         },
//     },
// )
// @ts-check

import js from '@eslint/js'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

//  @type {import('typescript-eslint').ConfigWithExtends}
export default tseslint.config(
    // Temel ESLint + TypeScript önerilen ayarları
    js.configs.recommended,
    tseslint.configs.recommended,

    // Ortak yapılandırma
    {
        ignores: [
            '**/build/',
            '**/dist/',
            '**/node_modules/',
            '**/.prettierrc.js',
            '**/.eslintrc.js',
            '**/env.d.ts',
            '**/eslint.config.mjs',
            '**/postcss.config.cjs',
            '**/tailwind.config.cjs',
        ],

        settings: {
            react: { version: 'detect' },
            'import/resolver': {
                typescript: {
                    project: './tsconfig.eslint.json',
                    alwaysTryTypes: true,
                },
            },
        },

        plugins: {
            ...(process.env.NODE_ENV === 'development'
                ? { 'react-refresh': reactRefresh }
                : {}),
        },

        rules: {
            // --- React Kuralları ---
            'react/react-in-jsx-scope': 'off', // Next.js / Vite'te gereksiz
            'react/prop-types': 'off', // TS ile gerek yok
            'react/jsx-sort-props': [
                'warn',
                {
                    callbacksLast: true,
                    shorthandFirst: true,
                    ignoreCase: true,
                    reservedFirst: true,
                },
            ],
            'react/self-closing-comp': 'warn',
            'react/jsx-no-useless-fragment': 'warn',

            'react-refresh/only-export-components': [
                'warn',
                { allowConstantExport: true },
            ],
            '@typescript-eslint/no-unused-vars': [
                'warn',
                { argsIgnorePattern: '^_' },
            ],
            '@typescript-eslint/explicit-module-boundary-types': 'off',
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/no-non-null-asserted-optional-chain': 'warn',
            '@typescript-eslint/ban-ts-comment': 'warn',
            'prefer-const': 'warn',
            'no-console': 'warn',
            'no-debugger': 'warn',
            'no-var': 'warn',
            'no-empty': 'warn',
            'no-unsafe-optional-chaining': 'warn',
            'react-hooks/rules-of-hooks': 'off',
            // --- React Refresh (Sadece Dev Ortamında) ---
            ...(process.env.NODE_ENV === 'development'
                ? {
                      'react-refresh/only-export-components': [
                          'warn',
                          { allowConstantExport: true },
                      ],
                  }
                : {}),

            // --- Import Kuralları ---
            'import/no-duplicates': 'error',
            'import/newline-after-import': 'warn',
            'import/first': 'warn',

            // --- TypeScript Kuralları ---
            '@typescript-eslint/consistent-type-imports': [
                'warn',
                { prefer: 'type-imports', fixStyle: 'inline-type-imports' },
            ],
            '@typescript-eslint/no-unused-expressions': 'off',

            // --- Genel Kurallar ---
        },
    },
)
