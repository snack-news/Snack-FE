import React from 'react';

import { HorizontalDivider } from 'Templates/index';
import storiesOfWithTemplates from './storiesOfWithTemplates';
import Outline from '../Outline';

storiesOfWithTemplates('HorizontalDivider', module).add('default', () => (
  <Outline>
    <HorizontalDivider />
  </Outline>
));
