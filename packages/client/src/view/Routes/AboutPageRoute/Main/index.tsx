import React, { FC } from 'react';

import { About } from './About';
import { ContactList } from './ContactList';

interface IProps {}

export const AboutPageMain: FC<IProps> = () => (
  <>
    <About />
    <ContactList />
  </>
);
