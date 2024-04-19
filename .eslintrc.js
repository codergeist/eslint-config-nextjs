module.exports = {
  extends: [
    'plugin:@next/next/recommended',
    'plugin:react/recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:prettier/recommended',
  ],
  settings: {
    'import/resolver': {
      alias: {
        extensions: ['.js', '.jsx'],
        map: [['@', './src']],
      },
    },
  },
  rules: {
    // Not enforced
    'import/prefer-default-export': 0,
    'react/prop-types': 0,
    'react/jsx-filename-extension': 0,
  },
}
