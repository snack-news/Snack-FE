import React from 'react';

import { CompanyList } from 'Templates/index';
import storiesOfWithTemplates from './storiesOfWithTemplates';

storiesOfWithTemplates('CompanyList', module).add('default', () => <CompanyList />);
