module.exports = {
  "root": true,
  "extends": "airbnb",
  "env": {
    "node": true
  },
  "parser": "babel-eslint",
  "rules": {
    "semi": 0,
    "import/no-extraneous-dependencies": [2, {"devDependencies": true}],
    "comma-dangle": 0,
    "max-len": [2, 120],
    "prefer-template": 0,
    "guard-for-in": 0,
    "no-unused-vars": [2, { "args": "none" }]
  }
}
