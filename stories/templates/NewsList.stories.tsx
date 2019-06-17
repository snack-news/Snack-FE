import React from 'react';

import { NewsList } from 'Templates/index';
import CompanyListCard from 'Templates/NewsList/CompanyListCard';
import ContactCard from 'Templates/NewsList/ContactCard';
import PlatformListCard from 'Templates/NewsList/PlatformListCard';
import storiesOfWithTemplates from './storiesOfWithTemplates';

storiesOfWithTemplates('NewsList', module)
  .add('NewsList', () => <NewsList />)
  .add('CompanyListCard', () => <CompanyListCard />)
  .add('ContactCard', () => <ContactCard />)
  .add('PlatformListCard', () => <PlatformListCard />);
