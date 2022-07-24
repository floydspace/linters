# @floydspace/prettier-config

Shared Prettier configuration for FloydSpace projects. Compatible with FloydSpace eslint configs.

## Usage

1. Install from npm

```bash
npm i --save-dev @floydspace/prettier-config
```

1. Create `.prettierrc.js` at project root

```js
module.exports = require('@floydspace/prettier-config');
```

More information about available at
[prettier documentation](https://prettier.io/docs/en/configuration.html#sharing-configurations)

### Available presets

- **angular**

```json5
{
  // ...
  prettier: '@floydspace/prettier-config/angular',
}
```
