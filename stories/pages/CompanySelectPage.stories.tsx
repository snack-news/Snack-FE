import React from 'react';
import { CompanySelectPage } from 'Pages/index';
import storiesOfWithPages from './storiesOfWithPages';

storiesOfWithPages('CompanySelectPage', module).add('default', () => <CompanySelectPage />);
