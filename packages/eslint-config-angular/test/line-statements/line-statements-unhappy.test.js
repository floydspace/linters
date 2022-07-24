import { ESLint } from 'eslint';
import path from 'path';

describe('line statements / unhappy path', () => {
  const cli = new ESLint({
    cwd: path.join(__dirname, '..'),
    useEslintrc: false,
    baseConfig: {
      extends: ['../line-statements'],
    },
  });

  it('unhappy', async () => {
    const codeframe = await cli.loadFormatter('codeframe');
    const report = await cli.lintFiles([path.join(__dirname, './__fixtures__/line-statements-unhappy.fixture.ts')]);

    expect(codeframe.format(report)).toMatchSnapshot();
  });
});
