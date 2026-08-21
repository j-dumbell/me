import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import tailwindcss from 'eslint-plugin-tailwindcss'
import prettierRecommended from 'eslint-plugin-prettier/recommended'
import globals from 'globals'
import path from 'node:path'

const UI_FILES = ['packages/ui/**/*.{ts,tsx}']
const INFRA_FILES = ['packages/infra/**/*.ts']

export default tseslint.config(
  {
    ignores: [
      '**/dist',
      '**/cdk.out',
      '**/*.d.ts',
      '**/node_modules',
      // Compiled build artifacts checked into the infra source dirs
      // (gitignored, not source - see packages/infra/.gitignore)
      'packages/infra/bin/*.js',
      'packages/infra/lib/*.js'
    ]
  },
  // Shared base rules for both packages
  js.configs.recommended,
  tseslint.configs.recommended,
  prettierRecommended,
  {
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module'
    },
    rules: {
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off'
    }
  },

  // ui: React + Tailwind, browser/vitest globals
  { ...react.configs.flat.recommended, files: UI_FILES },
  // eslint-plugin-react-hooks' flat recommended config is itself an array
  ...reactHooks.configs.recommended.map((config) => ({
    ...config,
    files: UI_FILES
  })),
  { ...tailwindcss.configs.recommended, files: UI_FILES },
  {
    files: UI_FILES,
    languageOptions: {
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
        cssConfigPath: path.join(
          import.meta.dirname,
          'packages/ui/app/globals.css'
        )
      }
    },
    rules: {
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      // False positives from eslint-plugin-tailwindcss's Tailwind v4 support
      // (currently beta): a third-party CSS hook class, inert shadcn/ui
      // boilerplate, and a `clsx` argument variable name it misreads as a
      // class string - none are actual Tailwind utility violations.
      'tailwindcss/no-custom-classname': [
        'warn',
        { whitelist: ['asciinema-player', 'origin-top-center', 'inputs'] }
      ]
    }
  },

  // infra: Node + Jest globals
  {
    files: INFRA_FILES,
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest
      }
    }
  },

  // Config files (tailwind.config.mjs, etc.) run in Node regardless of extension
  {
    files: ['**/*.config.{js,mjs,cjs}'],
    languageOptions: {
      globals: {
        ...globals.node
      }
    }
  }
)
