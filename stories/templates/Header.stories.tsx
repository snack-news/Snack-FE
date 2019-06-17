import React from 'react';

import { Header } from 'Templates/index';
import storiesOfWithTemplates from './storiesOfWithTemplates';

storiesOfWithTemplates('Header', module).add('default', () => <Header />);
