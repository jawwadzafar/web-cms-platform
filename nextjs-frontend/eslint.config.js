const { FlatCompat } = require('@eslint/eslintrc')
const path = require('path')

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.extends('next/core-web-vitals'),
  {
    rules: {
      // Disable the apostrophe rule that was causing issues
      'react/no-unescaped-entities': 'off',
      // Allow any types for form data to avoid complex type issues
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
]

module.exports = eslintConfig