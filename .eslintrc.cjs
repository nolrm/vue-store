module.exports = {
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', 'prettier'],
  parserOptions: {
    // parser: 'babel-eslint', // For JavaScript projects
    parser: '@typescript-eslint/parser', // For TypeScript projects
  },
  plugins: ['@typescript-eslint', 'vue', 'prettier'],
  rules: {
    // Allow single word component names
    "vue/multi-word-component-names": 'off',
  }
};