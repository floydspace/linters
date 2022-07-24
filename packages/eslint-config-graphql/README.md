# @floydspace/eslint-config-graphql

ESlint plugin includes shared opinionated rules for GraphQL applications. Designed to use with `@floydspace/eslint-config`.

## Usage

Install from npm

```bash
npm i --save-dev @floydspace/eslint-config @floydspace/eslint-config-graphql
```

Then, need to include necessary configurations sets to `.eslintrc`. Wee need to choose base configuration, and any
necessary additional configs.

```bash
{
  "extends": ["@floydspace/eslint-config/app", "@floydspace/eslint-config-graphql"]
}
```
