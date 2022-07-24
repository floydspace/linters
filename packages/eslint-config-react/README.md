# @floydspace/eslint-config-react

ESlint plugin includes shared opinionated rules for React applications. Designed to use with `@floydspace/eslint-config`.

## Usage

Install from npm

```bash
npm i --save-dev @floydspace/eslint-config @floydspace/eslint-config-react
```

Then, need to include necessary configurations sets to `.eslintrc`. Wee need to choose base configuration, and any
necessary additional configs.

```bash
{
  "extends": ["@floydspace/eslint-config/app", "@floydspace/eslint-config-react"]
}
```

## Internal used plugins

- `eslint-plugin-react` - common react lint rules
- `eslint-plugin-react-hooks` - lint rules for react hooks
