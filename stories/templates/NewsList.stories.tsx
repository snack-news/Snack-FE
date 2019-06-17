import React from 'react';

import storiesOfWithTemplates from './storiesOfWithTemplates';

import CompanyListCard from '../../src/templates/NewsList/CompanyListCard';
import ContactCard from '../../src/templates/NewsList/ContactCard';
import PlatformListCard from '../../src/templates/NewsList/PlatformListCard';

storiesOfWithTemplates('CompanyListCard', module)
  .add('CompanyListCard', () => <CompanyListCard />)
  .add('ContactCard', () => <ContactCard />)
  .add('PlatformListCard', () => <PlatformListCard />);
