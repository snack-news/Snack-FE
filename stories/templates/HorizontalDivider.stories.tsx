import React from 'react';

import storiesOfWithTemplates from './storiesOfWithTemplates';
import Outline from '../Outline';
import HorizontalDivider from '../../src/templates/HorizontalDivider';

storiesOfWithTemplates('HorizontalDivider', module).add('default', () => (
  <Outline>
    <HorizontalDivider />
  </Outline>
));
