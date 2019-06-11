import React from 'react';
import storiesOfWithPage from './storiesOfWithPage';
import HomePage from '../../src/pages/HomePage';

storiesOfWithPage('HomePage', module).add('기본', () => <HomePage />);
