module.exports = {
  parser: "babel-eslint",
  env: {
    es6: true,
    node: true
  },
  extends: ["airbnb-base", "prettier"],
  plugins: ["prettier"],
  rules: {
    "import/no-dynamic-require": 0,
    "no-underscore-dangle": 0,
    "no-console": 1,
    "prettier/prettier": "error",
  },
};
