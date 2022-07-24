# @floydspace/eslint-config

ESlint plugin includes shared opinionated rules for JS and TS codebase. Better to use with framework-oriented packages `@floydspace/eslint-config-react` or `@floydspace/eslint-config-angular`

## Usage

Install from npm

```bash
npm i --save-dev @floydspace/eslint-config
```

Then, need to include necessary configurations sets to `.eslintrc`. Wee need to choose base configuration, and any
necessary additional configs. Package include `eslint@7` and `prettier@2` dependencies, so you should remove `eslint`,
`prettier`, and `@floydspace/eslint-config` internal dependencies from your project `package.json`.

### Base configurations

#### For application

```bash
{
  "extends": ["@floydspace/eslint-config/app"]
}
```

#### For library

```bash
{
  "extends": ["@floydspace/eslint-config/lib"]
}
```

#### For Lambda functions

```bash
{
  "extends": ["@floydspace/eslint-config/lambda"]
}
```

### Additional configurations

#### If we use Jest

```bash
{
  "extends": ["@floydspace/eslint-config/lambda", "@floydspace/eslint-config/jest"]
}
```

## Configurations overview

Main configurations sets contains common rules

- `@floydspace/eslint-config/app` - common rules and specific rules for applications
- `@floydspace/eslint-config/lib` - common rules and specific rules for libraries
- `@floydspace/eslint-config/lambda` - common rules and specific rules for lambda functions

Additional configurations sets. This configs **not** contain common eslint rules, and must be included with main
configurations

- `@floydspace/eslint-config/jest` - rules for lint Jest test suits

## Internal used plugins

`@floydspace/eslint-config/app` and `@floydspace/eslint-config/lib` include:

- `eslint-config-airbnb` - common and popular configuration
- `eslint-plugin-eslint-comments` - validate `eslint` comments
- `eslint-plugin-import` - validate proper imports
- `eslint-plugin-promise` - enforce best practices for promises
- `eslint-plugin-jest` - validate jest tests
- `@typescript-eslint/eslint-plugin` - lint TypeScript files, adopt many eslint rules to TS code, and provide specific
  TS rules
- `eslint-plugin-prettier` - disable code formatting using eslint tools and transfers all the logic to a prettier, and
  report differences as eslint issues

## Troubleshooting

### Wrong or duplicated eslint or some eslint plugins versions

Try to remove `eslint`, `prettier`, and `@floydspace/eslint-config` internal dependencies from your project `package.json`,
then reinstall dependencies.
