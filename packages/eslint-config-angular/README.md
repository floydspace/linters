# @floydspace/eslint-config-angular

ESlint plugin includes shared opinionated rules for Angular applications. Designed to use with `@floydspace/eslint-config`.

## Usage

Install from npm

```bash
npm i --save-dev @floydspace/eslint-config @floydspace/eslint-config-angular
```

Then, need to include `recommendation` configurations sets to `.eslintrc`. We need to choose base configuration, and any
necessary additional configs:

```json5
{
  extends: ['@floydspace/eslint-config/app', '@floydspace/eslint-config-angular'],
}
```

You can also include `optional` configurations, however, you are responsible for implementing these rules in your project:

```json5
{
  extends: [
    // recommended
    '@floydspace/eslint-config/app',
    '@floydspace/eslint-config-angular',

    // optional
    '@floydspace/eslint-config-angular/html',
    '@floydspace/eslint-config-angular/rxjs',
    '@floydspace/eslint-config-angular/promise',
    '@floydspace/eslint-config-angular/imports',
    '@floydspace/eslint-config-angular/line-statements',
    '@floydspace/eslint-config-angular/member-ordering',
  ],
}
```

#### Warning

- There are some problems with `@floydspace/eslint-config-angular/html` configuration, because under the hood uses
  `eslint-plugin-html` plugin. When `eslint-plugin-html` is extended, rules from other plugins don't work. [See opened
  issue](https://github.com/BenoitZugmeyer/eslint-plugin-html/issues/176).
