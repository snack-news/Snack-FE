import { toMatchImageSnapshot } from 'jest-image-snapshot';
import registerRequireContextHook from 'babel-plugin-require-context-hook/register';

expect.extend({ toMatchImageSnapshot });
registerRequireContextHook();
