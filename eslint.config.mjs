import withNuxt from './.nuxt/eslint.config.mjs'
import stylistic from '@stylistic/eslint-plugin'

export default withNuxt(
  {
    files: ['**/*.vue', '**/*.ts'],
    rules: {
      'no-console': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
    },
  },
  {
    files: ['**/*.vue'],
    rules: {
      'vue/no-multiple-template-root': 'off',
      'vue/require-v-for-key': 'error',
      'vue/no-use-v-if-with-v-for': 'error',
      'vue/no-v-html': 'off',
      'no-irregular-whitespace': 0,
    },
  },
  stylistic.configs.customize({
    indent: 'tab',
    quotes: 'single',
    semi: false,
    'no-mixed-spaces-and-tabs': true,
  })
)
