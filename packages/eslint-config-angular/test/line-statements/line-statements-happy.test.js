import { ESLint } from 'eslint';
import path from 'path';

describe('imports / happy path', () => {
  const cli = new ESLint({
    cwd: path.join(__dirname, '..'),
    useEslintrc: false,
    baseConfig: {
      extends: ['../line-statements'],
    },
  });

  it('happy', async () => {
    const codeframe = await cli.loadFormatter('codeframe');
    const report = await cli.lintFiles([path.join(__dirname, './__fixtures__/line-statements-happy.fixture.ts')]);

    expect(codeframe.format(report)).toMatchSnapshot();
  });
});
