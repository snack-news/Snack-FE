import { toMatchImageSnapshot } from 'jest-image-snapshot';
import registerRequireContextHook from 'babel-plugin-require-context-hook/register';

// eslint-disable-next-line no-undef
expect.extend({ toMatchImageSnapshot });
registerRequireContextHook();
