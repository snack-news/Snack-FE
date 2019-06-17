import React from 'react';

import storiesOfWithTemplates from './storiesOfWithTemplates';

import CompanyList from '../../src/templates/CompanyList';

storiesOfWithTemplates('CompanyList', module).add('default', () => <CompanyList />);
