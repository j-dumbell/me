import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import tailwindcss from 'eslint-plugin-tailwindcss'
import prettierRecommended from 'eslint-plugin-prettier/recommended'
import globals from 'globals'

export default tseslint.config(
  {
    ignores: ['dist']
  },
  js.configs.recommended,
  tseslint.configs.recommended,
  react.configs.flat.recommended,
  reactHooks.configs.recommended,
  tailwindcss.configs.recommended,
  prettierRecommended,
  {
    languageOptions: {
      ...react.configs.flat.recommended.languageOptions,
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.vitest
      }
    },
    settings: {
      react: {
        version: 'detect'
      },
      tailwindcss: {
        cssConfigPath: 'app/globals.css'
      }
    },
    rules: {
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      // False positives from eslint-plugin-tailwindcss's Tailwind v4 support
      // (currently beta): a third-party CSS hook class, inert shadcn/ui
      // boilerplate, and a `clsx` argument variable name it misreads as a
      // class string - none are actual Tailwind utility violations.
      'tailwindcss/no-custom-classname': [
        'warn',
        { whitelist: ['asciinema-player', 'origin-top-center', 'inputs'] }
      ]
    }
  }
)
