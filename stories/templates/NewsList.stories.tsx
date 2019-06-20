import React from 'react';
import { Story } from '@storybook/react';

import { NewsList } from 'Templates/index';
import CompanyListCard from 'Templates/NewsList/CompanyListCard';
import ContactCard from 'Templates/NewsList/ContactCard';
import PlatformListCard from 'Templates/NewsList/PlatformListCard';

export default (story: Story) => {
  story
    .add('default', () => <NewsList />)
    .add('CompanyListCard', () => <CompanyListCard />)
    .add('ContactCard', () => <ContactCard />)
    .add('PlatformListCard', () => <PlatformListCard />);
};
