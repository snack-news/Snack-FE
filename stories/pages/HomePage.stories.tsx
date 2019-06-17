import React from 'react';
import storiesOfWithPages from './storiesOfWithPages';
import HomePage from '../../src/pages/HomePage';

storiesOfWithPages('HomePage', module).add('default', () => <HomePage />);
