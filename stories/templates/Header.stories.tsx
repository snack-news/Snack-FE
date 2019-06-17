import React from 'react';

import storiesOfWithTemplates from './storiesOfWithTemplates';

import Header from '../../src/templates/Header';

storiesOfWithTemplates('Header', module).add('default', () => <Header />);
