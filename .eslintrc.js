module.exports = {
  root: true,
  extends: 'airbnb-base',
  env: {
    browser: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    allowImportExportEverywhere: true,
    sourceType: 'module',
    requireConfigFile: false,
  },
  rules: {
    'import/extensions': ['error', { js: 'always' }], // require js file extensions in imports
    'linebreak-style': [
      'error',
      process.platform === 'win32' ? 'windows' : 'unix',
    ], // allow windows if platform is windows when developing locally and unix for  GH actions
    'no-param-reassign': [2, { props: false }], // allow modifying properties of param
  },
};
