# eslint-config-mmontes11-node

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[![NPM](https://nodei.co/npm/eslint-config-mmontes11-node.png)](https://nodei.co/npm/eslint-config-mmontes11-node)

Esling config for ES6 NodeJS by Martín Montes. It extends [airbnb-base](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base) and [prettier](https://github.com/prettier/prettier).

### Install

```bash
npm i --save eslint-config-mmontes11-node
```

### Usage

Create an `.eslintrc`:
```
{
  "extends": ["mmontes11-node"]
}
```

### Prettier

You can redefine prettier default rules by creating a `.prettierrc`:
```
{
  "printWidth": 120,
  "trailingComma": "all"
}
```
