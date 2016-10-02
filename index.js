module.exports = {
  "extends": "airbnb",
  "env": {
    "node": true
  },
  "parser": "babel-eslint",
  "rules": {
    "semi": 0,
    "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
    "comma-dangle": 0,
    "max-len": [2, 120],
    "prefer-template": 0,
    "guard-for-in": 0
  }
}
