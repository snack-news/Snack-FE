import React from 'react';
import storiesOfWithPage from './storiesOfWithPage';
import CompanySelectPage from '../../src/pages/CompanySelectPage';

storiesOfWithPage('CompanySelectPage', module).add('기본', () => <CompanySelectPage />);
