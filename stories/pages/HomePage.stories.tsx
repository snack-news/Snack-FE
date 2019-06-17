import React from 'react';
import { HomePage } from 'Pages/index';
import storiesOfWithPages from './storiesOfWithPages';

storiesOfWithPages('HomePage', module).add('default', () => <HomePage />);
