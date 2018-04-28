module.exports = {
  parser: "babel-eslint",
  env: {
    es6: true,
    node: true
  },
  extends: ["airbnb-base", "prettier"],
  plugins: ["import", "prettier"],
  rules: {
    "import/extensions": [
      "error",
      "always",
      {
        js: "never",
        node: "never"
      }
    ],
    "import/no-dynamic-require": 0,
    "import/prefer-default-export": 0,
    "no-underscore-dangle": 0,
    "no-console": 1,
    "prettier/prettier": "error",
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [
          ".js",
          ".node"
        ]
      }
    }
  }
};
