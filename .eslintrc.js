module.exports = {
  extends: [
    '@remix-run/eslint-config',
    '@remix-run/eslint-config/jest',
    'prettier',
  ],
  settings: {
    jest: {
      version: 27,
    },
  },
}
