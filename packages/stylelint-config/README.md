# @floydspace/stylelint-config

Common Stylelint configuration for FloydSpace projects

## Usage

1. Install from npm

```bash
npm i --save-dev @floydspace/stylelint-config
```

1. Create `stylelint.config.js` at project root

```json
{
  "extends": ["@floydspace/stylelint-config"]
}
```

More information about available at
[stylelint documentation](https://github.com/stylelint/stylelint/blob/main/docs/user-guide/configure.md)

### Available presets

- **prettier**

```js
{
    "extends": ["@floydspace/stylelint-config/prettier"]
}
```

- **less**

```json
{
  "extends": ["@floydspace/stylelint-config/less"]
}
```

- **angular**

```json
{
  "extends": ["@floydspace/stylelint-config/angular"]
}
```
