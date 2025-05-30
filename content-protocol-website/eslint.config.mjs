import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    rules: {
      'quotes': [
        'error',
        'single', {
          'allowTemplateLiterals': true,
        },
      ],
      'semi': [
        'error',
        'never',
      ],
      'space-before-function-paren': [
        'warn',
        'always',
      ],
      'keyword-spacing': [
        'error',
      ],
      'space-before-blocks': [
        'error',
      ],
      'object-curly-spacing': [
        'warn',
        'always',
      ],
      'eol-last': [
        'error',
        'always',
      ],
      'comma-dangle': [
        'error',
        {
          'arrays': 'always-multiline',
          'objects': 'always-multiline',
          'imports': 'always-multiline',
          'exports': 'always-multiline',
          'functions': 'never',
        },
      ],
    },
  },
]

export default eslintConfig
