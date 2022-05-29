module.exports = {
  "root": true,
  "extends": [
    "eslint:recommended"
  ],
  "env": {
    "es6": true,
    "node": true
  },
  "parserOptions": {
    "ecmaVersion": 2018
  },
  "overrides": [
    {
      "files": ["*.spec.js"],
      "env": {
        "jest": true
      }
    }
  ]
}
