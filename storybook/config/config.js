import { configure } from '@storybook/react';

import 'normalize.css';

configure(require.context('../stories', true, /\.stories\.tsx?$/), module);
