import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-config-prettier';

export default tseslint.config(
  {
    ignores: ['node_modules/', 'dist/', 'build/', 'coverage/', '.turbo/'],
  },

  eslint.configs.recommended,

  tseslint.configs.recommended,

  {
    files: ['**/*.ts', '**/*.tsx'],

    rules: {
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],

      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },
  prettier,
);
